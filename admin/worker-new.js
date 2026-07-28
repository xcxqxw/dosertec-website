function escapeRegExp(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function outputHTML(provider, token, error, errorCode) {
  const state = error ? 'error' : 'success';
  const content = error ? { provider, error, errorCode } : { provider, token };
  return new Response(
    `<!doctype html><html><body><script>
      (() => {
        window.addEventListener('message', ({ data, origin }) => {
          if (data === 'authorizing:${provider}') {
            window.opener?.postMessage(
              'authorization:${provider}:${state}:${JSON.stringify(content)}',
              origin
            );
          }
        });
        window.opener?.postMessage('authorizing:${provider}', '*');
      })();
    </script></body></html>`,
    {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'Set-Cookie': 'csrf-token=deleted; HttpOnly; Max-Age=0; Path=/; SameSite=Lax; Secure',
      },
    }
  );
}

async function handleAuth(request, env) {
  const url = new URL(request.url);
  const { origin, searchParams } = url;
  const params = Object.fromEntries(searchParams);
  const provider = params.provider;
  const domain = params.site_id;

  if (provider !== 'github') {
    return outputHTML(provider || 'unknown', null, 'Unsupported backend.', 'UNSUPPORTED_BACKEND');
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return outputHTML('github', null, 'OAuth client is not configured.', 'MISCONFIGURED_CLIENT');
  }

  if (env.ALLOWED_DOMAINS && domain) {
    const allowed = env.ALLOWED_DOMAINS.split(',').map(s => s.trim());
    const ok = allowed.some(pattern => {
      const re = new RegExp('^' + escapeRegExp(pattern).replace('\\*', '.+') + '$');
      return re.test(domain);
    });
    if (!ok) {
      return outputHTML('github', null, 'Domain not allowed.', 'UNSUPPORTED_DOMAIN');
    }
  }

  const csrfToken = crypto.randomUUID().replace(/-/g, '');
  const redirectUri = `${origin}/callback`;

  const authURL = 'https://github.com/login/oauth/authorize?' + new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID,
    redirect_uri: redirectUri,
    scope: 'repo,user',
    state: csrfToken,
  });

  return new Response('', {
    status: 302,
    headers: {
      Location: authURL,
      'Set-Cookie': `csrf-token=github_${csrfToken}; HttpOnly; Path=/; Max-Age=600; SameSite=Lax; Secure`,
    },
  });
}

async function handleCallback(request, env) {
  const url = new URL(request.url);
  const params = Object.fromEntries(url.searchParams);
  const { code, state } = params;

  const cookieHeader = request.headers.get('Cookie') || '';
  const match = cookieHeader.match(/\bcsrf-token=github_([0-9a-f]{32})\b/);
  const csrfToken = match ? match[1] : null;

  if (!code || !state) {
    return outputHTML('github', null, 'Missing authorization code.', 'AUTH_CODE_REQUEST_FAILED');
  }

  if (!csrfToken || state !== csrfToken) {
    return outputHTML('github', null, 'CSRF token mismatch.', 'CSRF_DETECTED');
  }

  if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
    return outputHTML('github', null, 'OAuth client is not configured.', 'MISCONFIGURED_CLIENT');
  }

  const tokenURL = 'https://github.com/login/oauth/access_token';
  const response = await fetch(tokenURL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code,
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
    }),
  });

  if (!response.ok) {
    return outputHTML('github', null, 'Token request failed.', 'TOKEN_REQUEST_FAILED');
  }

  const data = await response.json();
  const token = data.access_token;
  const error = data.error;

  return outputHTML('github', token, error, null);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = url.pathname;
    const method = request.method;

    if (method === 'GET' && (pathname === '/auth' || pathname === '/oauth/authorize')) {
      return handleAuth(request, env);
    }

    if (method === 'GET' && (pathname === '/callback' || pathname === '/oauth/redirect')) {
      return handleCallback(request, env);
    }

    if (method === 'GET' && (pathname === '/' || pathname === '/health')) {
      return new Response('OK', { status: 200 });
    }

    return new Response('Not Found', { status: 404 });
  },
};