const productData = {
    '100CC': {
        model: '100CC',
        name: '柱塞泵体系列',
        category: '下泵体',
        description: '高压柱塞输送，稳定可靠工作',
        image: '产品图片/10 下泵体/100CC.png',
        features: ['高压柱塞输送', '100CC标准容量', '精密加工工艺', '稳定输出压力'],
        specs: [
            { name: '容量', value: '100CC' },
            { name: '工作压力', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '流体输送', desc: '高压流体精密输送应用' }
        ]
    },
    '200CC': {
        model: '200CC',
        name: '柱塞泵体系列',
        category: '下泵体',
        description: '高压柱塞输送，稳定可靠工作',
        image: '产品图片/10 下泵体/200CC.png',
        features: ['大容量设计', '200CC输送能力', '长时间连续工作', '高压稳定性好'],
        specs: [
            { name: '容量', value: '200CC' },
            { name: '工作压力', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '流体输送', desc: '高压流体精密输送应用' }
        ]
    },
    '500CC': {
        model: '500CC',
        name: '柱塞泵体系列',
        category: '下泵体',
        description: '高压柱塞输送，稳定可靠工作',
        image: '产品图片/10 下泵体/500CC.png',
        features: ['超大容量设计', '500CC输送能力', '批量生产适用', '高效率输出'],
        specs: [
            { name: '容量', value: '500CC' },
            { name: '工作压力', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '流体输送', desc: '高压流体精密输送应用' }
        ]
    },
    '60CC': {
        model: '60CC',
        name: '柱塞泵体系列',
        category: '下泵体',
        description: '高压柱塞输送，稳定可靠工作',
        image: '产品图片/10 下泵体/60CC.png',
        features: ['小容量精密设计', '60CC精准计量', '空间占用小', '适用于小批量生产'],
        specs: [
            { name: '容量', value: '60CC' },
            { name: '工作压力', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '流体输送', desc: '高压流体精密输送应用' }
        ]
    },
    'BES-2600': {
        model: 'BES-2600',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-2600-HP.png',
        features: ['真空抽料技术', '高效供料系统', '紧凑型设计', '适合桌面应用'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-300D-PCP18': {
        model: 'BES-300D-PCP18',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-300D-PCP18.png',
        features: ['300D型号升级', 'PCP18配套设计', '稳定供料性能', '操作简单便捷'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-600': {
        model: 'BES-600',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-600-GP6CC.png',
        features: ['600系列基础型', '稳定抽料性能', '适配多种容器', '维护成本低'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-600-GP': {
        model: 'BES-600-GP',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-600-GP6CC.png',
        features: ['GP齿轮泵配置', '精密流量控制', '高粘度适用', '持续稳定供料'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-600-PCP12': {
        model: 'BES-600-PCP12',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-600-PCP12.png',
        features: ['PCP12柱塞泵配置', '高压输送能力', '精准计量输出', '适用于精密涂胶'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-900': {
        model: 'BES-900',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-900-HP.png',
        features: ['900大容量系列', '高功率驱动', '大流量输送', '适合大批量生产'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-900-PCP18': {
        model: 'BES-900-PCP18',
        name: '抽料系统系列',
        category: '抽料系统系列',
        description: '真空抽料系统，高效供料解决方案',
        image: '产品图片/2 压盘泵供胶系列/小型桌面泵/BES-900-PCP18.png',
        features: ['900+PCP18组合', '高性能柱塞泵', '高压大流量', '工业级稳定性'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '真空度', value: '数据整理中，请稍后查看' },
            { name: '适用容器', value: '数据整理中，请稍后查看' },
            { name: '功率', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供料系统', desc: '自动化生产线供料应用' }
        ]
    },
    'BES-GP5-30CC': {
        model: 'BES-GP5-30CC',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/齿轮压盘泵/BES-GP5-30CC.png',
        features: ['齿轮泵驱动', '30CC精密排量', '高粘度适用', '计量精准可靠'],
        specs: [
            { name: '排量', value: '30CC/转' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'BES-HP5': {
        model: 'BES-HP5',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/柱塞压盘泵/BES-HP5-D.png',
        features: ['柱塞泵驱动', '高压输出能力', '稳定压力供应', '适合高粘度物料'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'BES-HP5-D': {
        model: 'BES-HP5-D',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/柱塞压盘泵/BES-HP5-D.png',
        features: ['D型标准配置', '高压柱塞设计', '双程工作模式', '压力稳定输出'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'BES-HP5-H': {
        model: 'BES-HP5-H',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '',
        features: ['H型高压配置', '增强压力输出', '适用于高压工况', '可靠性提升'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'BES-HP55': {
        model: 'BES-HP55',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/柱塞压盘泵/BES-HP55-100.png',
        features: ['55系列升级', '100CC大排量', '高效输送能力', '适合大批量生产'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'BES-HP55-200-GH': {
        model: 'BES-HP55-200-GH',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/热熔胶泵/BES-HP55-200-GH.png',
        features: ['热熔胶专用设计', '200CC大容量', '温度控制功能', 'GH加热配置'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '温度范围', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '热熔胶应用', desc: '热熔胶精密涂覆应用' }
        ]
    },
    'BES-HP55-H': {
        model: 'BES-HP55-H',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '',
        features: ['55H高压型号', '增强型柱塞设计', '高温环境适用', '压力稳定性高'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '热熔胶应用', desc: '热熔胶精密涂覆应用' }
        ]
    },
    'BES-P5S-A': {
        model: 'BES-P5S-A',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/螺杆压盘泵/BES-P5S-A(双立柱).png',
        features: ['螺杆泵驱动', '双立柱结构', '高粘度物料适用', '输送稳定性高'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '立柱数量', value: '2' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'BES-P5S-D': {
        model: 'BES-P5S-D',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/螺杆压盘泵/BES-P5S-D(双组份).png',
        features: ['双组份配比设计', '螺杆精密计量', '比例可调节', '混合均匀输出'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '双组份供胶', desc: '双组份流体精密供胶应用' }
        ]
    },
    'BES-P5TS-A': {
        model: 'BES-P5TS-A',
        name: '压盘泵供胶系统系列',
        category: '压盘泵供胶系统系列',
        description: '高粘度物料供胶，稳定连续输送',
        image: '产品图片/2 压盘泵供胶系列/螺杆压盘泵/BES-P5TS-A(三立柱).png',
        features: ['三立柱增强结构', '承载能力更强', '适用于大型容器', '运行稳定性高'],
        specs: [
            { name: '排量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '立柱数量', value: '3' },
            { name: '适用粘度', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '供胶系统', desc: '高粘度流体供胶应用' }
        ]
    },
    'DS-HD20A': {
        model: 'DS-HD20A',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD20A.png',
        features: ['高速开关响应', 'A型标准配置', '20口径设计', '精准流体控制'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD20B': {
        model: 'DS-HD20B',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD20B.png',
        features: ['B型增强配置', '响应速度更快', '耐磨材质', '使用寿命长'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD20D': {
        model: 'DS-HD20D',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD20D.png',
        features: ['D型双通道设计', '可同时出胶', '效率倍增', '适合多点位胶'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD20E': {
        model: 'DS-HD20E',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD20E.png',
        features: ['E型经济配置', '性价比高', '适合批量应用', '稳定可靠'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD20F': {
        model: 'DS-HD20F',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD20F.png',
        features: ['F型精细配置', '出胶量精确', '适用于精密工艺', '滴漏控制好'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD20G': {
        model: 'DS-HD20G',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD20G.png',
        features: ['G型通用配置', '适应性强', '多种粘度适用', '维护简便'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD30A': {
        model: 'DS-HD30A',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD30A.png',
        features: ['30口径中型设计', '流量适中', '适合一般点胶', '性价比优'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD30B': {
        model: 'DS-HD30B',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD30BH.png',
        features: ['B型增强版', '高压适用', '耐磨损设计', '寿命更长'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD30C': {
        model: 'DS-HD30C',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD30C-无针嘴.png',
        features: ['无针嘴设计', '大流量输出', '适合粗点胶', '不易堵塞'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD50A': {
        model: 'DS-HD50A',
        name: '单液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/单液出胶阀/DS-HD50A.png',
        features: ['50口径大流量', '大流量设计', '适合涂覆应用', '高效率输出'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '点胶应用', desc: '大流量精密点胶、涂覆控制应用' }
        ]
    },
    'DS-HD60A': {
        model: 'DS-HD60A',
        name: '手动胶枪系列',
        category: '手动胶枪',
        description: '轻便手持设计，精准点胶作业',
        image: '产品图片/4 阀系列/开关出胶阀/手动胶枪/DS-HD60A(气控）.png',
        features: ['气控操作方式', '轻便手持设计', '响应迅速', '操作简单'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '操作方式', value: '气控' },
            { name: '重量', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '手动点胶', desc: '手持精准点胶操作应用' }
        ]
    },
    'DS-HD60B': {
        model: 'DS-HD60B',
        name: '手动胶枪系列',
        category: '手动胶枪',
        description: '轻便手持设计，精准点胶作业',
        image: '产品图片/4 阀系列/开关出胶阀/手动胶枪/DS-HD60B(电控）.png',
        features: ['电控操作方式', '精准控制出胶', '便于自动化集成', '数字化调节'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '操作方式', value: '电控' },
            { name: '重量', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '手动点胶', desc: '手持精准点胶操作应用' }
        ]
    },
    'DS-HD60C': {
        model: 'DS-HD60C',
        name: '手动胶枪系列',
        category: '手动胶枪',
        description: '轻便手持设计，精准点胶作业',
        image: '产品图片/4 阀系列/开关出胶阀/手动胶枪/DS-HD60CH(气控）.png',
        features: ['气控加长型', '延长作业距离', '适合狭窄空间', '灵活便捷'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '操作方式', value: '气控' },
            { name: '重量', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '手动点胶', desc: '手持精准点胶操作应用' }
        ]
    },
    'DS-HD60D': {
        model: 'DS-HD60D',
        name: '手动胶枪系列',
        category: '手动胶枪',
        description: '轻便手持设计，精准点胶作业',
        image: '产品图片/4 阀系列/开关出胶阀/手动胶枪/DS-HD60D(电控）.png',
        features: ['电控加长型', '远距离精确控制', '自动化友好', '适合流水线'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '操作方式', value: '电控' },
            { name: '重量', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '手动点胶', desc: '手持精准点胶操作应用' }
        ]
    },
    'DS-HD60E': {
        model: 'DS-HD60E',
        name: '手动胶枪系列',
        category: '手动胶枪',
        description: '轻便手持设计，精准点胶作业',
        image: '产品图片/4 阀系列/开关出胶阀/手动胶枪/DS-HD60E（气控）.png',
        features: ['E型经济气控', '性价比高', '适合大批量配置', '稳定可靠'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '操作方式', value: '气控' },
            { name: '重量', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '手动点胶', desc: '手持精准点胶操作应用' }
        ]
    },
    'DS-HT10A': {
        model: 'DS-HT10A',
        name: '双液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/双液出胶阀/DS-HT10A（黑色）.png',
        features: ['双液配比控制', '10口径小型设计', '黑色标识', '精准混合'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '双液点胶', desc: '双组份精密点胶应用' }
        ]
    },
    'DS-HT10B': {
        model: 'DS-HT10B',
        name: '双液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/双液出胶阀/DS-HT10B(灰色).png',
        features: ['双液配比控制', '灰色标识', 'B型配置', '稳定性好'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '双液点胶', desc: '双组份精密点胶应用' }
        ]
    },
    'DS-HT20A': {
        model: 'DS-HT20A',
        name: '双液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/双液出胶阀/DS-HT20A-带管.png',
        features: ['带管设计', '管路连接便捷', '20口径中等流量', '安装灵活'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '双液点胶', desc: '双组份精密点胶应用' }
        ]
    },
    'DS-HT30A': {
        model: 'DS-HT30A',
        name: '双液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/双液出胶阀/DS-HT30A.png',
        features: ['30口径大流量', '双液大流量输出', '适合大批量生产', '效率高'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '双液点胶', desc: '双组份精密点胶应用' }
        ]
    },
    'DS-HT40A': {
        model: 'DS-HT40A',
        name: '双液开关阀系列',
        category: '开关阀系列',
        description: '高速开关响应，精准流体控制',
        image: '产品图片/4 阀系列/开关出胶阀/双液出胶阀/DS-HT40A.png',
        features: ['40口径超大流量', '工业级大流量', '双液同步输出', '适合大型涂覆'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '响应时间', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '双液点胶', desc: '双组份精密点胶应用' }
        ]
    },
    'DS-PM100': {
        model: 'DS-PM100',
        name: '柱塞式双程定量缸',
        category: '定量缸系列',
        description: '高精度定量计量，稳定出胶控制',
        image: '产品图片/7 定量机系列/DS-PM100-D.png',
        features: ['100CC大容量', '高精度定量计量', '双程工作模式', '适合大批量'],
        specs: [
            { name: '容量', value: '100CC' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '驱动方式', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '定量计量', desc: '流体精密定量输送应用' }
        ]
    },
    'DS-PM100C': {
        model: 'DS-PM100C',
        name: '柱塞式双程定量机',
        category: '定量缸系列',
        description: '高精度定量计量，稳定出胶控制',
        image: '',
        features: ['100C自动化型', '支持自动化控制', 'PLC接口', '智能化程度高'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '定量计量', desc: '流体精密定量输送应用' }
        ]
    },
    'DS-PM160C': {
        model: 'DS-PM160C',
        name: '柱塞式双程定量缸',
        category: '定量缸系列',
        description: '高精度定量计量，稳定出胶控制',
        image: '',
        features: ['160CC超大容量', '大批量生产适用', '稳定性强', '高效输出'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '定量计量', desc: '流体精密定量输送应用' }
        ]
    },
    'DS-PM40C': {
        model: 'DS-PM40C',
        name: '柱塞式双程定量缸',
        category: '定量缸系列',
        description: '高精度定量计量，稳定出胶控制',
        image: '',
        features: ['40CC小型设计', '空间占用小', '适合小批量精密点胶', '灵活性好'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '定量计量', desc: '流体精密定量输送应用' }
        ]
    },
    'DS-PM80C': {
        model: 'DS-PM80C',
        name: '柱塞式双程定量缸',
        category: '定量缸系列',
        description: '高精度定量计量，稳定出胶控制',
        image: '',
        features: ['80CC中等容量', '平衡设计', '适应性强', '性价比高'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '定量计量', desc: '流体精密定量输送应用' }
        ]
    },
    'DS-PR10': {
        model: 'DS-PR10',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR10.png',
        features: ['10口径小型设计', '精密调压控制', '响应速度快', '适合精密设备'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PR20': {
        model: 'DS-PR20',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR20.png',
        features: ['20口径标准型', '调压范围宽', '稳定性好', '应用广泛'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PR50': {
        model: 'DS-PR50',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR50.png',
        features: ['50口径中型设计', '流量适中', '调压平稳', '适合一般工况'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PR60': {
        model: 'DS-PR60',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR60.png',
        features: ['60口径设计', '高压调压能力', '耐压性强', '适合高压系统'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PR70': {
        model: 'DS-PR70',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR70.png',
        features: ['70口径大流量型', '大流量调压', '适合工业应用', '稳定性高'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PR80': {
        model: 'DS-PR80',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR80.png',
        features: ['80口径大型设计', '超强调压能力', '适合大型系统', '工业级稳定'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PR90': {
        model: 'DS-PR90',
        name: '调压阀系列',
        category: '调压阀系列',
        description: '精密调压控制，稳定输出压力',
        image: '产品图片/4 阀系列/调压阀/DS-PR90.png',
        features: ['90口径超大流量', '最大流量调压', '适合大型生产线', '高效稳定'],
        specs: [
            { name: '口径', value: '数据整理中，请稍后查看' },
            { name: '调压范围', value: '数据整理中，请稍后查看' },
            { name: '精度', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '压力控制', desc: '流体压力精准调节应用' }
        ]
    },
    'DS-PT10L': {
        model: 'DS-PT10L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT10L-C 平底.png',
        features: ['10L标准容量', '不锈钢材质', '平底设计', '稳定压力供料'],
        specs: [
            { name: '容量', value: '10L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT1L': {
        model: 'DS-PT1L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT1L-A-平底.png',
        features: ['1L小型设计', '精密小容量', '适合精密点胶', '空间占用小'],
        specs: [
            { name: '容量', value: '1L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT20L': {
        model: 'DS-PT20L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT20L-C 平底.png',
        features: ['20L中型容量', '适合一般生产', '平底稳固', '供料稳定'],
        specs: [
            { name: '容量', value: '20L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT2L': {
        model: 'DS-PT2L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT2L-A 平底.png',
        features: ['2L小型容量', '适合小批量生产', '灵活便携', '维护简单'],
        specs: [
            { name: '容量', value: '2L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT30L': {
        model: 'DS-PT30L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT30L-C 平底.png',
        features: ['30L中大型容量', '适合批量生产', '供料持久', '稳定可靠'],
        specs: [
            { name: '容量', value: '30L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT3L': {
        model: 'DS-PT3L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT3L-A  平底.png',
        features: ['3L小型容量', '平衡设计', '适合一般应用', '性价比高'],
        specs: [
            { name: '容量', value: '3L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT40L': {
        model: 'DS-PT40L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT40L-C 平底.png',
        features: ['40L大型容量', '大批量生产适用', '长时间供料', '高效稳定'],
        specs: [
            { name: '容量', value: '40L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT50L': {
        model: 'DS-PT50L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT50L-C 平底.png',
        features: ['50L超大容量', '大型生产线适用', '持久稳定供料', '工业级设计'],
        specs: [
            { name: '容量', value: '50L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'DS-PT5L': {
        model: 'DS-PT5L',
        name: '不锈钢压力罐',
        category: '压力罐系列',
        description: '不锈钢储料容器，稳定压力供料',
        image: '产品图片/8 压力罐系列/DS-PT5L-C 平底.png',
        features: ['5L标准小型', '适合小批量精密生产', '灵活配置', '易于维护'],
        specs: [
            { name: '容量', value: '5L' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '材质', value: '不锈钢' },
            { name: '结构形式', value: '平底' }
        ],
        applications: [
            { title: '储料供料', desc: '流体储存与压力供料应用' }
        ]
    },
    'Mic-2KD40': {
        model: 'Mic-2KD40',
        name: '双组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-2KD40-P-B.png',
        features: ['双组份精密计量', '40型号设计', '回吸功能', '高耐磨材质'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' },
            { title: '医疗行业', desc: '医疗器械组装、药剂定量灌装' }
        ]
    },
    'Mic-2KD50': {
        model: 'Mic-2KD50',
        name: '双组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-2KD50-P-B.png',
        features: ['双组份精密计量', '50型号升级', '流量更大', '精度保持'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' },
            { title: '医疗行业', desc: '医疗器械组装、药剂定量灌装' }
        ]
    },
    'Mic-2KD60': {
        model: 'Mic-2KD60',
        name: '双组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-2KD60-P-B.png',
        features: ['双组份精密计量', '60型号中型设计', '流量适中', '稳定性好'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' },
            { title: '医疗行业', desc: '医疗器械组装、药剂定量灌装' }
        ]
    },
    'Mic-2KD70': {
        model: 'Mic-2KD70',
        name: '双组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-2KD70-P-B.png',
        features: ['双组份精密计量', '70型号大型设计', '大流量输出', '适合批量生产'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' },
            { title: '医疗行业', desc: '医疗器械组装、药剂定量灌装' }
        ]
    },
    'Mic-D40': {
        model: 'Mic-D40',
        name: '单组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-D40-A.png',
        features: ['单组份精密计量', '40型号小型设计', '微量输出', '回吸功能'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' },
            { title: '医疗行业', desc: '医疗器械组装、药剂定量灌装' }
        ]
    },
    'Mic-D50': {
        model: 'Mic-D50',
        name: '单组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '超微量、高精度、高粘度流体精密输送，回吸功能防止滴漏拉丝。采用碳化钨、陶瓷等耐磨材质，寿命长、稳定性高。定量精度与重复精度高达 ±1%，满足严苛工艺要求。',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-D50-A.png',
        features: [
            '定量精度与重复精度高达 ±1%',
            '超微量计量，最小可达 0.01ml',
            '回吸功能防止滴漏拉丝',
            '高耐磨材质，使用寿命长',
            '适配高粘度流体'
        ],
        specs: [
            { name: '最大流量', value: '0.01 - 50 ml/min' },
            { name: '压力范围', value: '0 - 5 MPa' },
            { name: '定量精度', value: '±1%' },
            { name: '重复精度', value: '±1%' },
            { name: '转速范围', value: '0 - 300 rpm' },
            { name: '材质', value: '碳化钨/陶瓷/不锈钢' },
            { name: '粘度范围', value: '10 - 1,000,000 mPa·s' },
            { name: '驱动方式', value: '步进电机/伺服电机' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充、芯片封装灌封' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封保护' },
            { title: '医疗行业', desc: '医疗器械组装、药剂定量灌装' },
            { title: '精密制造', desc: '摄像头模组点胶、连接器粘接' }
        ]
    },
    'Mic-D50D60-P': {
        model: 'Mic-D50D60-P',
        name: '双组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-D50D60-P.png',
        features: ['双组份组合设计', '50+60混合配比', '精密比例控制', '混合均匀输出'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' }
        ]
    },
    'Mic-D60': {
        model: 'Mic-D60',
        name: '单组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-D60-A.png',
        features: ['单组份精密计量', '60型号中型设计', '流量适中', '适用范围广'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' }
        ]
    },
    'Mic-D70': {
        model: 'Mic-D70',
        name: '单组份微量螺杆泵系列',
        category: '微量螺杆泵系列',
        description: '微量精密计量，高精度流体输送',
        image: '产品图片/1 螺杆泵系列/1 微量螺杆泵系列/Mic-D70-A.png',
        features: ['单组份精密计量', '70型号大型设计', '大流量输出', '适合批量生产'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '电子行业', desc: 'PCB板精密点胶、元器件底部填充' },
            { title: '新能源', desc: '锂电池极片涂覆、电池模组灌封' }
        ]
    },
    'PCP-2KD12-H': {
        model: 'PCP-2KD12-H',
        name: '大流量双组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '双组份精密配比，均匀混合输送',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-2KD12-H-J.png',
        features: ['双组份精密配比', '12型号设计', 'H型高压配置', '大流量输送'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '新能源', desc: '锂电池PACK涂胶密封、动力电池灌封' },
            { title: '汽车行业', desc: '汽车零部件粘接、车身结构胶' }
        ]
    },
    'PCP-2KD12-Y': {
        model: 'PCP-2KD12-Y',
        name: '大流量双组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '双组份精密配比，均匀混合输送',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-2KD12-Y-J.png',
        features: ['双组份精密配比', 'Y型优化设计', '均匀混合', '输送稳定'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '新能源', desc: '锂电池PACK涂胶密封、动力电池灌封' },
            { title: '汽车行业', desc: '汽车零部件粘接、车身结构胶' }
        ]
    },
    'PCP-2KD18-H': {
        model: 'PCP-2KD18-H',
        name: '大流量双组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '双组份精密配比，均匀混合输送',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-2KD18-H.png',
        features: ['双组份精密配比', '18型号大流量', '高压设计', '适合大批量'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '新能源', desc: '锂电池PACK涂胶密封、动力电池灌封' },
            { title: '汽车行业', desc: '汽车零部件粘接、车身结构胶' }
        ]
    },
    'PCP-2KD22-H': {
        model: 'PCP-2KD22-H',
        name: '大流量双组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '双组份精密配比，均匀混合输送',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-2KD22-H.png',
        features: ['双组份精密配比', '22型号超大流量', '工业级设计', '高效稳定'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '新能源', desc: '锂电池PACK涂胶密封、动力电池灌封' },
            { title: '汽车行业', desc: '汽车零部件粘接、车身结构胶' }
        ]
    },
    'PCP-2KD8-H': {
        model: 'PCP-2KD8-H',
        name: '大流量双组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '双组份精密配比，均匀混合输送',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-2KD8-H-J.png',
        features: ['双组份精密配比', '8型号小型设计', '高压配置', '适合精密应用'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '新能源', desc: '锂电池PACK涂胶密封、动力电池灌封' },
            { title: '汽车行业', desc: '汽车零部件粘接、车身结构胶' }
        ]
    },
    'PCP-2KD8-Y': {
        model: 'PCP-2KD8-Y',
        name: '大流量双组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '双组份精密配比，均匀混合输送',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-2KD8-Y-J.png',
        features: ['双组份精密配比', 'Y型优化设计', '混合均匀', '精准控制'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '配比范围', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '新能源', desc: '锂电池PACK涂胶密封、动力电池灌封' },
            { title: '汽车行业', desc: '汽车零部件粘接、车身结构胶' }
        ]
    },
    'PCP-D10': {
        model: 'PCP-D10',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-D10-A.png',
        features: ['大流量稳定输送', '10型号设计', '高粘度流体适用', '输送平稳'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'PCP-D12': {
        model: 'PCP-D12',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-D12-A.png',
        features: ['大流量稳定输送', '12型号中型设计', '流量更大', '适合一般生产'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'PCP-D15': {
        model: 'PCP-D15',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-D15-A.png',
        features: ['大流量稳定输送', '15型号设计', '流量适中', '应用广泛'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'PCP-D18': {
        model: 'PCP-D18',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-D18-A.png',
        features: ['大流量稳定输送', '18型号大流量', '适合大批量生产', '效率高'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'PCP-D22': {
        model: 'PCP-D22',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-D22-A.png',
        features: ['大流量稳定输送', '22型号超大流量', '工业级设计', '最高效率'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'PCP-D8': {
        model: 'PCP-D8',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '产品图片/1 螺杆泵系列/2 大流量螺杆泵系列/PCP-D8-A.png',
        features: ['大流量稳定输送', '8型号小型设计', '适合精密应用', '精准控制'],
        specs: [
            { name: '最大流量', value: '数据整理中，请稍后查看' },
            { name: '压力范围', value: '数据整理中，请稍后查看' },
            { name: '定量精度', value: '数据整理中，请稍后查看' },
            { name: '粘度范围', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'PCP-D12-3D': {
        model: 'PCP-D12-3D',
        name: '大流量单组份精密螺杆泵',
        category: '大流量螺杆泵系列',
        description: '大流量稳定输送，高粘度流体适用',
        image: '',
        features: ['3D增强设计', '三维优化', '效率提升', '稳定性更强'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '工业制造', desc: '大流量流体输送应用' }
        ]
    },
    'default': {
        model: '未知型号',
        name: '产品详情',
        category: '产品系列',
        description: '产品不存在或数据正在整理中，请稍后查看。',
        image: '',
        features: ['数据整理中', '数据整理中', '数据整理中'],
        specs: [
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' },
            { name: '参数名称', value: '数据整理中，请稍后查看' }
        ],
        applications: [
            { title: '应用场景', desc: '数据整理中，请稍后查看' }
        ]
    }
};