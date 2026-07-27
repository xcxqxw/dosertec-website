if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

const translations = {
    cn: {
        nav: {
            home: '首页',
            products: '产品中心',
            solutions: '解决方案',
            about: '关于我们',
            news: '新闻中心',
            contact: '联系我们'
        },
        hero: {
            title1: '专注涂胶',
            title2: '聚焦流体',
            subtitle: '德烁科技提供专业的精密涂胶、计量、混合产品和系统，为新能源、汽车、电子等行业提供整体解决方案及定制化服务。',
            stats: {
                years: '年行业经验',
                projects: '定制化实验',
                capacity: '年产能（套）'
            },
            explore: '探索产品',
            contact: '联系我们'
        },
        advantages: {
            title: '为什么选择德烁',
            subtitle: '掌握流体精密计量核心技术，为客户提供稳定可靠的产品与服务',
            items: [
                { title: '精度 ±1%', desc: '定量精度与重复精度高达 ±1%，满足严苛工艺要求' },
                { title: '高耐磨材质', desc: '核心部件采用碳化钨、陶瓷等材质，寿命长、稳定性高' },
                { title: '定制化方案', desc: '提供从供料、计量到混合分配的全套定制化解决方案' },
                { title: '7×24 服务', desc: '专业技术团队，全天候响应，保障产线稳定运行' }
            ]
        },
        products: {
            title: '明星产品',
            subtitle: '覆盖核心泵阀、小型系统到自动化整体解决方案',
            items: [
                { tag: '核心泵阀', title: '微量螺杆计量泵', desc: '超微量、高精度、高粘度流体精密输送，回吸功能防止滴漏拉丝', link: '了解更多' },
                { tag: '核心泵阀', title: '精密齿轮计量泵', desc: '中高粘度流体精密计量，耐压高，适用于苛刻工况', link: '了解更多' },
                { tag: '自动化系统', title: '双组份涂胶系统', desc: '双组份精密配比，均匀混合输送，适用于高要求场景', link: '了解更多' },
                { tag: '阀类产品', title: '气动调压阀', desc: '精确压力控制，稳定输出，响应速度快', link: '了解更多' },
                { tag: '阀类产品', title: '单组份开关阀', desc: '高速开关响应，精准流体控制，防止拉丝滴漏', link: '了解更多' },
                { tag: '系统产品', title: '5加仑压盘泵', desc: '大容量供胶解决方案，稳定连续供胶，低粘度流体适用', link: '了解更多' },
                { tag: '阀类产品', title: '定量缸', desc: '高精度定量输送，重复性好，适用于精密涂胶工艺', link: '了解更多' },
                { tag: '配件产品', title: '手动胶枪', desc: '轻便耐用，精准控制出胶量，适用于手工操作场景', link: '了解更多' }
            ]
        },
        solutions: {
            title: '行业解决方案',
            subtitle: '为新能源、汽车、电子等行业提供专业的流体计量与涂胶解决方案',
            items: [
                { title: '新能源', desc: '锂电池、光伏涂胶与灌封' },
                { title: '汽车行业', desc: 'PACK涂胶、零部件密封' },
                { title: '电子行业', desc: '精密点胶、灌封保护' },
                { title: '其他工业', desc: '家电、医疗、航空等' }
            ]
        },
        clients: {
            title: '信任我们的伙伴',
            subtitle: '服务国内外众多知名企业，品质值得信赖'
        },
        about: {
            title: '关于德烁',
            text1: '北京德烁科技有限公司（DOSERTEC）总部位于北京经济技术开发区，是一家集研发、生产、销售和服务于一体的流体控制领域高新技术企业。',
            text2: '公司专注于提供流体计量输送核心泵体、供料系统、调压系统、涂胶系统及各类流体精密计量涂覆解决方案产品。',
            link: '了解更多'
        },
        contact: {
            title: '联系我们',
            subtitle: '随时与我们取得联系，获取专业流体计量解决方案',
            address: { title: '📍 公司地址', content: '北京大兴经济技术开发区西环南路26号院<br>嘉捷科技园23号楼' },
            phone: { title: '📞 联系电话', content: '010-81500950' },
            email: { title: '✉️ 电子邮箱', content: 'info@de-shuo.com' },
            hours: { title: '🕒 工作时间', content: '周一至周五 9:00 - 18:00' }
        },
        footer: {
            brand: 'DOSERTEC',
            company: '北京德烁科技有限公司',
            contact: '电话：010-81500950 &nbsp;|&nbsp; 邮箱：info@de-shuo.com'
        }
    },
    en: {
        nav: {
            home: 'Home',
            products: 'Products',
            solutions: 'Solutions',
            about: 'About',
            news: 'News',
            contact: 'Contact'
        },
        hero: {
            title1: 'Dosing & Dispensing',
            title2: 'Technology',
            subtitle: 'DOSERTEC provides professional precision dispensing, metering, and mixing systems — offering complete solutions and customized services for new energy, automotive, electronics and more.',
            stats: {
                years: 'Years Experience',
                projects: 'Custom Projects',
                capacity: 'Annual Capacity'
            },
            explore: 'Explore Products',
            contact: 'Contact Us'
        },
        advantages: {
            title: 'Why DOSERTEC',
            subtitle: 'Core technology in precision fluid metering — reliable products & services',
            items: [
                { title: '±1% Accuracy', desc: 'Metering and repeat accuracy up to ±1%, meeting the most demanding processes' },
                { title: 'High Wear Resistance', desc: 'Core components in tungsten carbide & ceramic for long life and stability' },
                { title: 'Customized Solutions', desc: 'Complete systems from feeding, metering to mixing & dispensing' },
                { title: '24/7 Support', desc: 'Professional technical team ready to respond — keeping your lines running' }
            ]
        },
        products: {
            title: 'Featured Products',
            subtitle: 'From core pumps & valves to complete automated systems',
            items: [
                { tag: 'Core Pump & Valve', title: 'Micro Screw Metering Pump', desc: 'Ultra-precise, high-viscosity fluid conveying with anti-drip back-suction function', link: 'Learn More' },
                { tag: 'Core Pump & Valve', title: 'Precision Gear Metering Pump', desc: 'High-pressure precision metering for medium to high viscosity fluids', link: 'Learn More' },
                { tag: 'Automated System', title: '2K Dispensing System', desc: 'Precision two-component mixing for demanding applications', link: 'Learn More' },
                { tag: 'Valve Products', title: 'Pneumatic Pressure Regulator', desc: 'Precise pressure control, stable output, fast response', link: 'Learn More' },
                { tag: 'Valve Products', title: 'Single Component Valve', desc: 'High-speed on/off response, precise fluid control, anti-stringing', link: 'Learn More' },
                { tag: 'System Products', title: '5-Gallon Pressure Plate Pump', desc: 'Large-volume feeding solution for low-viscosity fluids', link: 'Learn More' },
                { tag: 'Valve Products', title: 'Dispensing Cylinder', desc: 'High-precision quantitative dispensing with excellent repeatability', link: 'Learn More' },
                { tag: 'Accessory Products', title: 'Manual Dispensing Gun', desc: 'Lightweight and durable, precise control for manual operations', link: 'Learn More' }
            ]
        },
        solutions: {
            title: 'Industry Solutions',
            subtitle: 'Professional fluid metering & dispensing solutions for key industries',
            items: [
                { title: 'New Energy', desc: 'Battery & PV dispensing & potting' },
                { title: 'Automotive', desc: 'PACK coating & component sealing' },
                { title: 'Electronics', desc: 'Precision dispensing & encapsulation' },
                { title: 'Other Industries', desc: 'Appliances, medical, aviation & more' }
            ]
        },
        clients: {
            title: 'Trusted by Industry Leaders',
            subtitle: 'Serving renowned companies worldwide — quality you can rely on'
        },
        about: {
            title: 'About DOSERTEC',
            text1: 'Beijing Dosertec Technology Co., Ltd. (DOSERTEC) is headquartered in the Beijing Economic-Technological Development Area — a high-tech enterprise integrating R&D, production, sales and service.',
            text2: 'We specialize in precision metering pumps, feeding systems, pressure regulators, dispensing systems and complete fluid metering & coating solutions.',
            link: 'Learn More'
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Get in touch with us for professional fluid metering solutions',
            address: { title: '📍 Address', content: 'Building 23, Jiajie Technology Park<br>No. 26 West Ring South Road<br>Beijing Economic-Technological Development Area, China' },
            phone: { title: '📞 Phone', content: '+86-10-81500950' },
            email: { title: '✉️ Email', content: 'info@de-shuo.com' },
            hours: { title: '🕒 Working Hours', content: 'Monday – Friday, 9:00 – 18:00 (Beijing Time)' }
        },
        footer: {
            brand: 'DOSERTEC',
            company: 'Beijing Dosertec Technology Co., Ltd.',
            contact: 'Tel: +86-10-81500950 &nbsp;|&nbsp; Email: info@de-shuo.com'
        }
    }
};

let currentLang = 'cn';

function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (target - start) * easeOutQuart);
        
        element.textContent = current + '+';
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

function setLanguage(lang) {
    currentLang = lang;
    const data = translations[lang];
    
    document.documentElement.lang = lang === 'cn' ? 'zh-CN' : 'en';
    document.body.className = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('lang-active', btn.dataset.lang === lang);
    });
    
    const navLinks = document.querySelectorAll('.navbar-menu a[data-key]');
    navLinks.forEach(link => {
        const key = link.dataset.key;
        if (data.nav[key]) {
            link.textContent = data.nav[key];
        }
    });
    
    const heroTitle1 = document.getElementById('hero-title1');
    const heroTitle2 = document.getElementById('hero-title2');
    const heroSubtitle = document.getElementById('hero-subtitle');
    
    if (heroTitle1) heroTitle1.textContent = data.hero.title1;
    if (heroTitle2) heroTitle2.textContent = data.hero.title2;
    if (heroSubtitle) heroSubtitle.textContent = data.hero.subtitle;
    
    const statLabelYears = document.getElementById('stat-label-years');
    const statLabelProjects = document.getElementById('stat-label-projects');
    const statLabelCapacity = document.getElementById('stat-label-capacity');
    
    if (statLabelYears) statLabelYears.textContent = data.hero.stats.years;
    if (statLabelProjects) statLabelProjects.textContent = data.hero.stats.projects;
    if (statLabelCapacity) statLabelCapacity.textContent = data.hero.stats.capacity;
    
    const btnExplore = document.getElementById('btn-explore');
    const btnContactHero = document.getElementById('btn-contact-hero');
    
    if (btnExplore) btnExplore.textContent = data.hero.explore;
    if (btnContactHero) btnContactHero.textContent = data.hero.contact;
    
    const advantagesTitle = document.getElementById('advantages-title');
    const advantagesSubtitle = document.getElementById('advantages-subtitle');
    
    if (advantagesTitle) advantagesTitle.textContent = data.advantages.title;
    if (advantagesSubtitle) advantagesSubtitle.textContent = data.advantages.subtitle;
    
    const advantageCards = document.querySelectorAll('.advantage-card');
    advantageCards.forEach((card, index) => {
        const item = data.advantages.items[index];
        if (item) {
            card.querySelector('h3').textContent = item.title;
            card.querySelector('p').textContent = item.desc;
        }
    });
    
    const productsTitle = document.getElementById('products-title');
    const productsSubtitle = document.getElementById('products-subtitle');
    
    if (productsTitle) productsTitle.textContent = data.products.title;
    if (productsSubtitle) productsSubtitle.textContent = data.products.subtitle;
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        const item = data.products.items[index];
        if (item) {
            const tag = card.querySelector('.product-tag');
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            const link = card.querySelector('.product-link');
            if (tag) tag.textContent = item.tag;
            if (title) title.textContent = item.title;
            if (desc) desc.textContent = item.desc;
            if (link) link.textContent = item.link;
        }
    });
    
    const solutionsTitle = document.getElementById('solutions-title');
    const solutionsSubtitle = document.getElementById('solutions-subtitle');
    
    if (solutionsTitle) solutionsTitle.textContent = data.solutions.title;
    if (solutionsSubtitle) solutionsSubtitle.textContent = data.solutions.subtitle;
    
    const solutionCards = document.querySelectorAll('.solution-card');
    solutionCards.forEach((card, index) => {
        const item = data.solutions.items[index];
        if (item) {
            const title = card.querySelector('h3');
            const desc = card.querySelector('p');
            if (title) title.textContent = item.title;
            if (desc) desc.textContent = item.desc;
        }
    });
    
    const clientsTitle = document.getElementById('clients-title');
    const clientsSubtitle = document.getElementById('clients-subtitle');
    
    if (clientsTitle) clientsTitle.textContent = data.clients.title;
    if (clientsSubtitle) clientsSubtitle.textContent = data.clients.subtitle;
    
    const aboutTitle = document.getElementById('about-title');
    const aboutText1 = document.getElementById('about-text1');
    const aboutText2 = document.getElementById('about-text2');
    const btnAbout = document.getElementById('btn-about');
    
    if (aboutTitle) aboutTitle.textContent = data.about.title;
    if (aboutText1) aboutText1.textContent = data.about.text1;
    if (aboutText2) aboutText2.textContent = data.about.text2;
    if (btnAbout) btnAbout.textContent = data.about.link;
    
    const contactTitle = document.getElementById('contact-title');
    const contactSubtitle = document.getElementById('contact-subtitle');
    
    if (contactTitle) contactTitle.textContent = data.contact.title;
    if (contactSubtitle) contactSubtitle.textContent = data.contact.subtitle;
    
    const contactAddressTitle = document.getElementById('contact-address-title');
    const contactAddressContent = document.getElementById('contact-address-content');
    const contactPhoneTitle = document.getElementById('contact-phone-title');
    const contactPhoneContent = document.getElementById('contact-phone-content');
    const contactEmailTitle = document.getElementById('contact-email-title');
    const contactEmailContent = document.getElementById('contact-email-content');
    const contactHoursTitle = document.getElementById('contact-hours-title');
    const contactHoursContent = document.getElementById('contact-hours-content');
    
    if (contactAddressTitle) contactAddressTitle.textContent = data.contact.address.title;
    if (contactAddressContent) contactAddressContent.innerHTML = data.contact.address.content;
    if (contactPhoneTitle) contactPhoneTitle.textContent = data.contact.phone.title;
    if (contactPhoneContent) contactPhoneContent.textContent = data.contact.phone.content;
    if (contactEmailTitle) contactEmailTitle.textContent = data.contact.email.title;
    if (contactEmailContent) contactEmailContent.textContent = data.contact.email.content;
    if (contactHoursTitle) contactHoursTitle.textContent = data.contact.hours.title;
    if (contactHoursContent) contactHoursContent.textContent = data.contact.hours.content;
    
    const footerBrand = document.getElementById('footer-brand');
    const footerCompany = document.getElementById('footer-company');
    const footerContact = document.getElementById('footer-contact');
    
    if (footerBrand) footerBrand.textContent = data.footer.brand;
    if (footerCompany) footerCompany.textContent = data.footer.company;
    if (footerContact) footerContact.innerHTML = data.footer.contact;
    
    window.scrollTo(0, 0);
}

function getUrlParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

function filterProductsByCategory() {
    const category = getUrlParam('category');
    if (!category) return;
    
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === category) {
            btn.classList.add('active');
        }
    });
    
    categorySections.forEach(section => {
        if (section.dataset.category === category) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
}

function loadProductDetail() {
    const productId = getUrlParam('id');
    const data = productData[productId] || productData['default'];
    
    const productTitle = document.getElementById('product-title');
    const productName = document.getElementById('product-name');
    const productModel = document.getElementById('product-model');
    const productCategory = document.getElementById('product-category');
    const productDescription = document.getElementById('product-description');
    const productImg = document.getElementById('product-img');
    const breadcrumbProduct = document.getElementById('breadcrumb-product');
    const productMainImage = document.getElementById('product-main-image');
    
    if (productTitle) productTitle.textContent = data.name;
    if (productName) productName.textContent = data.name;
    if (productModel) productModel.textContent = '型号：' + data.model;
    if (productCategory) productCategory.textContent = data.category;
    if (productDescription) productDescription.innerHTML = '<p>' + data.description + '</p>';
    if (breadcrumbProduct) breadcrumbProduct.textContent = data.name;
    
    if (productImg && data.image) {
        productImg.src = data.image;
        productImg.style.display = 'block';
    } else if (productImg) {
        productImg.style.display = 'none';
        if (productMainImage) {
            productMainImage.innerHTML = '<div class="no-image">暂无产品图片</div>';
        }
    }
    
    const advantagesList = document.getElementById('product-advantages-list');
    if (advantagesList) {
        advantagesList.innerHTML = data.features.map((feature, index) => {
            const titles = ['高精度', '高效率', '高可靠性', '操作便捷', '节能环保'];
            const title = titles[index] || '核心优势';
            return '<div class="advantage-item">' +
                '<div class="advantage-icon">' + (index + 1) + '</div>' +
                '<div class="advantage-content">' +
                '<h4>' + title + '</h4>' +
                '<p>' + feature + '</p>' +
                '</div></div>';
        }).join('');
    }
    
    const thumbnailsContainer = document.getElementById('product-thumbnails');
    if (thumbnailsContainer && data.image) {
        const images = [data.image];
        if (data.images && Array.isArray(data.images)) {
            images.push(...data.images);
        }
        
        thumbnailsContainer.innerHTML = images.map((img, index) => 
            '<button class="thumbnail-btn' + (index === 0 ? ' active' : '') + '" data-img="' + img + '">' +
            '<img src="' + img + '" alt="" />' +
            '</button>'
        ).join('');
        
        setupThumbnailClick();
    }
    
    setupContactForm();
}

function setupThumbnailClick() {
    const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');
    const productImg = document.getElementById('product-img');
    
    thumbnailBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            thumbnailBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            const imgSrc = this.dataset.img;
            if (productImg) {
                productImg.src = imgSrc;
            }
        });
    });
}

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        console.log('Form submitted:', data);
        
        const btn = this.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = '提交中...';
        btn.disabled = true;
        
        setTimeout(() => {
            btn.textContent = '提交成功';
            btn.style.background = '#28a745';
            btn.style.borderColor = '#28a745';
            
            this.reset();
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.style.borderColor = '';
                btn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

function setupTabNavigation() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tab = this.dataset.tab;
            
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            tabPanes.forEach(pane => pane.classList.remove('active'));
            document.getElementById('tab-' + tab).classList.add('active');
        });
    });
}

function setupCategoryFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const categorySections = document.querySelectorAll('.category-section');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            categorySections.forEach(section => {
                if (category === 'all' || section.getAttribute('data-category') === category) {
                    section.style.display = 'block';
                } else {
                    section.style.display = 'none';
                }
            });
        });
    });
}

function setupContactForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('感谢您的留言！我们会尽快与您联系。');
            form.reset();
        });
    }
}

(function() {
    var slides = document.querySelectorAll('.hero-carousel .carousel-slide');
    var dots = document.querySelectorAll('.hero-carousel .dot');
    if (!slides || slides.length === 0) {
        console.warn('轮播元素未找到');
        return;
    }
    var currentIndex = 0;
    var intervalId = null;
    var delay = 4000;

    function goTo(index) {
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;
        slides.forEach(function(s, i) {
            s.classList.toggle('active', i === index);
        });
        dots.forEach(function(d, i) {
            d.classList.toggle('active', i === index);
        });
        currentIndex = index;
    }

    function nextSlide() {
        goTo(currentIndex + 1);
    }

    function startAutoPlay() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(nextSlide, delay);
    }

    function stopAutoPlay() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    }

    dots.forEach(function(dot, index) {
        dot.addEventListener('click', function() {
            stopAutoPlay();
            goTo(index);
            startAutoPlay();
        });
    });

    var carousel = document.querySelector('.hero-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoPlay);
        carousel.addEventListener('mouseleave', startAutoPlay);
    }

    goTo(0);
    startAutoPlay();
    console.log('轮播已启动');
})();

function loadCertificates() {
    const container = document.getElementById('certificates-grid');
    if (!container) return;
    
    const certificateCount = 12;
    const certificatePath = 'images/about/certificates/cert-';
    const certificateExtension = '.jpg.jpg';
    
    let html = '';
    for (let i = 1; i <= certificateCount; i++) {
        const num = i.toString().padStart(2, '0');
        const imgSrc = certificatePath + num + certificateExtension;
        html += `
            <div class="certificate-card reveal" data-delay="${(i - 1) % 4}">
                <div class="certificate-image">
                    <img src="${imgSrc}" alt="资质认证证书" />
                </div>
                <div class="certificate-name">资质认证证书</div>
            </div>
        `;
    }
    container.innerHTML = html;
    
    const cards = container.querySelectorAll('.certificate-card');
    cards.forEach((card, index) => {
        card.style.transitionDelay = `${(index % 4) * 0.1}s`;
        card.addEventListener('click', () => {
            const img = card.querySelector('img');
            openImageModal(img.src);
        });
    });
}

function setupImageModal() {
    let modal = document.getElementById('image-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'image-modal';
        modal.className = 'image-modal';
        modal.innerHTML = `
            <div class="image-modal-content">
                <img src="" alt="" />
                <button class="image-modal-close" id="image-modal-close">&times;</button>
            </div>
        `;
        document.body.appendChild(modal);
    }
    
    const closeBtn = document.getElementById('image-modal-close');
    closeBtn.addEventListener('click', closeImageModal);
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeImageModal();
        }
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeImageModal();
        }
    });
}

function openImageModal(src) {
    const modal = document.getElementById('image-modal');
    const img = modal.querySelector('img');
    img.src = src;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('image-modal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }
    
    const toggle = document.getElementById('navbarToggle');
    const menu = document.getElementById('navbarMenu');
    
    if (toggle && menu) {
        toggle.addEventListener('click', () => {
            menu.classList.toggle('open');
            toggle.classList.toggle('active');
        });
        
        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('open');
                toggle.classList.remove('active');
            });
        });
    }
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    if (entry.target.classList.contains('hero-stats')) {
                        setTimeout(() => {
                            const statYears = document.getElementById('stat-number-years');
                            const statProjects = document.getElementById('stat-number-projects');
                            const statCapacity = document.getElementById('stat-number-capacity');
                            
                            if (statYears && !statYears.dataset.animated) {
                                statYears.dataset.animated = 'true';
                                animateNumber(statYears, 20);
                            }
                            if (statProjects && !statProjects.dataset.animated) {
                                statProjects.dataset.animated = 'true';
                                animateNumber(statProjects, 800);
                            }
                            if (statCapacity && !statCapacity.dataset.animated) {
                                statCapacity.dataset.animated = 'true';
                                animateNumber(statCapacity, 1500);
                            }
                        }, 300);
                    }
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        revealElements.forEach(el => observer.observe(el));
    }
    
    filterProductsByCategory();
    
    setupCategoryFilter();
    
    loadProductDetail();
    
    setupTabNavigation();
    
    setupContactForm();
    
    loadCertificates();
    
    setupImageModal();
    
    setupProductsScroll();
});

function setupProductsScroll() {
    const scrollContainer = document.getElementById('products-scroll');
    const scrollLeftBtn = document.getElementById('scroll-left');
    const scrollRightBtn = document.getElementById('scroll-right');
    
    if (!scrollContainer) return;
    
    const cardWidth = 320;
    const gap = 24;
    
    if (scrollLeftBtn) {
        scrollLeftBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: -(cardWidth + gap),
                behavior: 'smooth'
            });
        });
    }
    
    if (scrollRightBtn) {
        scrollRightBtn.addEventListener('click', () => {
            scrollContainer.scrollBy({
                left: cardWidth + gap,
                behavior: 'smooth'
            });
        });
    }
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    scrollContainer.addEventListener('mousedown', (e) => {
        isDown = true;
        scrollContainer.classList.add('cursor-grabbing');
        startX = e.pageX - scrollContainer.offsetLeft;
        scrollLeft = scrollContainer.scrollLeft;
    });
    
    scrollContainer.addEventListener('mouseleave', () => {
        isDown = false;
        scrollContainer.classList.remove('cursor-grabbing');
    });
    
    scrollContainer.addEventListener('mouseup', () => {
        isDown = false;
        scrollContainer.classList.remove('cursor-grabbing');
    });
    
    scrollContainer.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - scrollContainer.offsetLeft;
        const walk = (x - startX) * 1.5;
        scrollContainer.scrollLeft = scrollLeft - walk;
    });
    
    scrollContainer.addEventListener('wheel', (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            scrollContainer.scrollBy({
                left: e.deltaY,
                behavior: 'smooth'
            });
        }
    }, { passive: false });
}