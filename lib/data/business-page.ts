import type { BusinessPage } from "@/lib/types/sanity";

export const BUSINESS_PAGE: BusinessPage = {
  _id: 'business-page-fallback',
  _type: 'businessPage',
  seo: {
    title: { en: 'Business - Bike', id: 'Bisnis - Bike', zh: '业务 - Bike' },
    description: { en: 'Explore Bike\'s diverse business portfolio across multiple industries and markets.', id: 'Jelajahi portofolio bisnis Bike yang beragam di berbagai industri dan pasar.', zh: '探索 Bike 在多个行业和市场的多元化业务组合。' },
  },
  hero: {
    eyebrow: { en: "Business", id: "Bisnis", zh: "业务" },
    headline: {
      en: "Building Value Across Industries.",
      id: "Membangun Nilai di Berbagai Industri.",
      zh: "跨行业创造价值。",
    },
    description: {
      en: "From our roots as Indonesia's largest bicycle distributor, Bike has transformed into a diversified super holding group across nine strategic sectors.",
      id: "Dari akar kami sebagai distributor sepeda terbesar di Indonesia, Bike bertransformasi menjadi grup holding super terdiversifikasi di sembilan sektor strategis.",
      zh: "从印尼最大自行车分销商的根基出发，Bike 已转型为横跨九大战略领域的多元化超级控股集团。",
    },
  },

  introduction: {
    title: {
      en: "Our Business Identity",
      id: "Identitas Bisnis Kami",
      zh: "我们的业务身份",
    },
    paragraphs: [
      {
        en: "Bike originated as a single-focus bicycle distribution company, holding the Genio Bike brand and serving as the largest distributor of United Bike and Avand in Indonesia.",
        id: "Bike berawal sebagai perusahaan distribusi sepeda dengan fokus tunggal, memegang merek Genio Bike serta menjadi distributor terbesar United Bike dan Avand di Indonesia.",
        zh: "Bike 起初是一家专注于自行车分销的公司，持有 Genio Bike 品牌，同时也是 United Bike 和 Avand 在印尼最大的分销商。",
      },
      {
        en: "Our transformation reflects a strategic vision to venture into energy, technology, and infrastructure sectors — supported by the new controlling shareholder, PT Penajam Makmur Jaya, and a super holding structure with seven sub-holdings.",
        id: "Transformasi kami mencerminkan visi strategis untuk merambah sektor energi, teknologi, dan infrastruktur — didukung oleh pengendali baru, PT Penajam Makmur Jaya, dan struktur super holding dengan tujuh sub-holding.",
        zh: "我们的转型体现了进军能源、科技和基础设施领域的战略愿景——得益于新控股股东 PT Penajam Makmur Jaya 的支持，以及拥有七个子控股公司的超级控股架构。",
      },
    ],
    statCards: [
      { _key: "stat-1", value: { en: "9", id: "9", zh: "9" }, label: { en: "Business Sectors", id: "Sektor Bisnis", zh: "业务领域" } },
      { _key: "stat-2", value: { en: "319+", id: "319+", zh: "319+" }, label: { en: "Distribution Points in Indonesia", id: "Titik Distribusi di Indonesia", zh: "印尼分销网点" } },
      { _key: "stat-3", value: { en: "2017", id: "2017", zh: "2017" }, label: { en: "Established", id: "Tahun Berdiri", zh: "成立年份" } },
      { _key: "stat-4", value: { en: "Rp 2T", id: "Rp 2T", zh: "Rp 2万亿" }, label: { en: "Target Annual Revenue", id: "Target Pendapatan Tahunan", zh: "目标年收入" } },
    ],
  },

  extension: {
    sectionHeader: {
      eyebrow: { en: "Growth", id: "Pertumbuhan", zh: "增长" },
      heading: { en: "Business Extension", id: "Perluasan Bisnis (Business Extension)", zh: "业务扩展" },
      description: {
        en: "Business extension is carried out through expansion, addition, or opening of new production factors — such as expanding marketing areas, opening new branches, or adding after-sales services. This strategy aims to increase production capacity and reach new markets by expanding the scale of assets, branches, and operational areas.",
        id: "Perluasan bisnis dilakukan melalui ekspansi, penambahan, atau pembukaan faktor produksi baru — seperti memperluas area pemasaran, membuka cabang baru, atau menambah layanan purna jual. Strategi ini bertujuan meningkatkan kapasitas produksi dan menjangkau pasar baru dengan memperluas skala aset, cabang, dan area operasional.",
        zh: "业务扩展通过扩张、增建或开设新的生产要素来实现——例如扩大营销区域、开设新分店或增加售后服务。该策略旨在通过扩大资产、分店和运营区域的规模来提升产能并开拓新市场。",
      },
    },
    cards: [
      {
        _key: "ext-1",
        icon: "TrendingUp",
        title: { en: "Marketing Area Expansion", id: "Perluasan Area Pemasaran", zh: "营销区域扩展" },
        description: {
          en: "Expanding distribution reach to new territories.",
          id: "Memperluas jangkauan distribusi ke wilayah baru.",
          zh: "将分销覆盖范围扩展至新区域。",
        },
      },
      {
        _key: "ext-2",
        icon: "Globe",
        title: { en: "Capacity Enhancement", id: "Peningkatan Kapasitas", zh: "产能提升" },
        description: {
          en: "Adding production and operational capacity.",
          id: "Menambah kapasitas produksi dan operasional.",
          zh: "增加生产和运营产能。",
        },
      },
      {
        _key: "ext-3",
        icon: "Building2",
        title: { en: "Branch Network Strengthening", id: "Penguatan Jaringan Cabang", zh: "分店网络强化" },
        description: {
          en: "Opening new branches and after-sales services.",
          id: "Membuka cabang baru dan layanan purna jual.",
          zh: "开设新分店和售后服务网点。",
        },
      },
    ],
  },

  development: {
    sectionHeader: {
      eyebrow: { en: "Innovation", id: "Inovasi", zh: "创新" },
      heading: { en: "Business Development", id: "Pengembangan Bisnis (Business Development)", zh: "业务发展" },
      description: {
        en: "A long-term process to create sustainable value for customers, markets, and relationships — encompassing product quality improvement (innovation), strategic partnerships, management enhancement, and market research. Business development also means ensuring internal readiness: strong corporate character, customer-oriented culture, and distinctive corporate identity.",
        id: "Proses jangka panjang untuk menciptakan nilai berkelanjutan bagi pelanggan, pasar, dan relasi — mencakup peningkatan kualitas produk (inovasi), kemitraan strategis, perbaikan manajemen, dan riset pasar. Pengembangan bisnis juga berarti memastikan kesiapan internal: karakter perusahaan yang kuat, budaya berorientasi pelanggan, dan identitas korporat yang khas.",
        zh: "一个为客户、市场和合作关系创造可持续价值的长期过程——涵盖产品质量提升（创新）、战略合作伙伴关系、管理改善和市场研究。业务发展还意味着确保内部准备就绪：强大的企业品格、以客户为导向的文化以及独特的企业身份。",
      },
    },
    cards: [
      {
        _key: "dev-1",
        icon: "Lightbulb",
        title: { en: "Product Innovation", id: "Inovasi Produk", zh: "产品创新" },
        description: {
          en: "Improving product and service quality and relevance.",
          id: "Peningkatan kualitas dan relevansi produk/layanan.",
          zh: "提升产品和服务的质量与相关性。",
        },
      },
      {
        _key: "dev-2",
        icon: "FlaskConical",
        title: { en: "Strategic Partnerships", id: "Kemitraan Strategis", zh: "战略合作伙伴" },
        description: {
          en: "Building long-term collaborations for mutual growth.",
          id: "Membangun kolaborasi jangka panjang.",
          zh: "建立长期合作关系以实现共同增长。",
        },
      },
      {
        _key: "dev-3",
        icon: "Rocket",
        title: { en: "Market Research & Management", id: "Riset Pasar & Manajemen", zh: "市场研究与管理" },
        description: {
          en: "Strengthening data-driven decision making.",
          id: "Memperkuat pengambilan keputusan berbasis data.",
          zh: "加强基于数据的决策能力。",
        },
      },
    ],
  },

  diversification: {
    sectionHeader: {
      eyebrow: { en: "Transformation", id: "Transformasi", zh: "转型" },
      heading: { en: "Business Diversification", id: "Diversifikasi Bisnis (Business Diversification)", zh: "业务多元化" },
      description: {
        en: "SBI is committed to developing the bicycle industry from upstream to downstream, supported by a professional distribution network and integrated customer service. The diversification strategy aims to expand market reach through new product variations — electric bicycles, hybrid bicycles, rental, financing, workshops, and shuttle services — as well as entering new industries beyond core operations: energy, data centers, construction, and property.",
        id: "SBI berkomitmen mengembangkan industri sepeda dari hulu ke hilir, didukung jaringan distribusi profesional dan layanan pelanggan terintegrasi. Strategi diversifikasi bertujuan memperluas jangkauan pasar melalui variasi produk baru — sepeda listrik, sepeda hybrid, rental, pembiayaan, bengkel, dan layanan shuttle — serta memasuki industri baru di luar operasi inti: energi, pusat data, konstruksi, dan properti.",
        zh: "SBI 致力于从上游到下游发展自行车产业，依托专业的分销网络和综合客户服务。多元化战略旨在通过新产品变型——电动自行车、混合动力自行车、租赁、融资、维修和班车服务——扩大市场覆盖范围，同时进入核心业务以外的新行业：能源、数据中心、建筑和房地产。",
      },
    },
    paragraph: {
      en: "Selling complementary products or entering new business segments aims to minimize the risk of losses — if one business line slows down, others can cover it — while opening up new profit opportunities.",
      id: "Menjual produk komplementer atau memasuki segmen bisnis baru bertujuan meminimalkan risiko kerugian — jika satu lini bisnis melambat, lini lain dapat menutupinya — sekaligus membuka peluang keuntungan baru.",
      zh: "销售互补产品或进入新业务领域旨在将损失风险降至最低——如果一条业务线放缓，其他业务线可以弥补——同时开拓新的盈利机会。",
    },
    ctaLabel: { en: "Learn About Our Journey", id: "Pelajari Perjalanan Kami", zh: "了解我们的历程" },
    ctaHref: "/about",
  },

  subHoldingStructure: {
    sectionHeader: {
      eyebrow: { en: "Structure", id: "Struktur", zh: "架构" },
      heading: { en: "Super Holding Model", id: "Model Holding Super", zh: "超级控股模式" },
      description: {
        en: "Our super holding structure enables efficient and focused management of diversified businesses.",
        id: "Struktur holding super kami memungkinkan pengelolaan bisnis yang terdiversifikasi secara efisien dan terarah.",
        zh: "我们的超级控股架构能够高效、有针对性地管理多元化业务。",
      },
    },
    cards: [
      {
        _key: "sub-1",
        icon: "Cpu",
        title: { en: "Technology-Based Utilities", id: "Utilitas Berbasis Teknologi", zh: "科技型公用事业" },
        description: {
          en: "Leveraging technology to deliver integrated utility services across the group.",
          id: "Memanfaatkan teknologi untuk menyediakan layanan utilitas terpadu di seluruh grup.",
          zh: "利用科技为集团提供综合公用事业服务。",
        },
      },
      {
        _key: "sub-2",
        icon: "Zap",
        title: { en: "Modern Energy Distribution", id: "Distribusi Energi Modern", zh: "现代能源分销" },
        description: {
          en: "Distributing energy efficiently through modern infrastructure and sustainable resources.",
          id: "Mendistribusikan energi secara efisien melalui infrastruktur modern dan sumber daya berkelanjutan.",
          zh: "通过现代基础设施和可持续资源高效分销能源。",
        },
      },
      {
        _key: "sub-3",
        icon: "Leaf",
        title: { en: "Sustainable Resources", id: "Sumber Daya Berkelanjutan", zh: "可持续资源" },
        description: {
          en: "Managing renewable and sustainable resources for long-term value creation.",
          id: "Mengelola sumber daya terbarukan dan berkelanjutan untuk penciptaan nilai jangka panjang.",
          zh: "管理可再生和可持续资源以创造长期价值。",
        },
      },
      {
        _key: "sub-4",
        icon: "ShieldCheck",
        title: { en: "Improved Management", id: "Peningkatan Tata Kelola", zh: "提升管理" },
        description: {
          en: "Strengthening governance and management practices across all sub-holdings.",
          id: "Memperkuat tata kelola dan praktik manajemen di seluruh sub-holding.",
          zh: "加强所有子控股公司的治理和管理实践。",
        },
      },
    ],
    tagline: { en: "BIKE Tbk Beyond The Energy", id: "BIKE Tbk Beyond The Energy", zh: "BIKE Tbk 超越能源" },
  },

  coreBusiness: {
    sectionHeader: {
      eyebrow: { en: "Core Business", id: "Bisnis Inti", zh: "核心业务" },
      heading: { en: "Our Business Sectors", id: "Sektor Bisnis Kami", zh: "我们的业务领域" },
      description: {
        en: "We operate across nine strategic sectors that complement each other.",
        id: "Kami beroperasi di sembilan sektor strategis yang saling melengkapi.",
        zh: "我们在九个相互补充的战略领域开展业务。",
      },
    },
    cards: [
      {
        _key: "core-1",
        title: { en: "General Trading & Construction", id: "Perdagangan Umum & Konstruksi", zh: "一般贸易与建筑" },
        description: {
          en: "General trading and construction services across multiple sectors.",
          id: "Perdagangan umum dan layanan konstruksi di berbagai sektor.",
          zh: "跨多个领域的一般贸易和建筑服务。",
        },
      },
      {
        _key: "core-2",
        title: { en: "Hospitality & Public Health", id: "Perhotelan & Kesehatan Masyarakat", zh: "酒店与公共健康" },
        description: {
          en: "Hospitality services and public health facilities.",
          id: "Layanan perhotelan dan fasilitas kesehatan masyarakat.",
          zh: "酒店服务和公共健康设施。",
        },
      },
      {
        _key: "core-3",
        title: { en: "Property & Development", id: "Properti & Pengembangan", zh: "地产与开发" },
        description: {
          en: "Property development and real estate projects.",
          id: "Pengembangan properti dan proyek real estat.",
          zh: "房地产开发和地产项目。",
        },
      },
      {
        _key: "core-4",
        title: { en: "Finance & Investment", id: "Keuangan & Investasi", zh: "金融与投资" },
        description: {
          en: "Financial services and investment management.",
          id: "Layanan keuangan dan manajemen investasi.",
          zh: "金融服务和投资管理。",
        },
      },
      {
        _key: "core-5",
        title: { en: "Travel, Hotel & Restaurant", id: "Perjalanan, Hotel & Restoran", zh: "旅游、酒店与餐饮" },
        description: {
          en: "Travel, hotel, and restaurant operations.",
          id: "Operasi perjalanan, hotel, dan restoran.",
          zh: "旅游、酒店和餐饮运营。",
        },
      },
      {
        _key: "core-6",
        title: { en: "Transportation & Heavy Equipment", id: "Transportasi & Alat Berat", zh: "运输与重型设备" },
        description: {
          en: "Transportation services and heavy equipment operations.",
          id: "Layanan transportasi dan operasi alat berat.",
          zh: "运输服务和重型设备运营。",
        },
      },
      {
        _key: "core-7",
        title: { en: "Power Plant & Sustainable Energy", id: "Pembangkit Listrik & Energi Berkelanjutan", zh: "发电与可持续能源" },
        description: {
          en: "Power generation and sustainable energy solutions.",
          id: "Pembangkit listrik dan solusi energi berkelanjutan.",
          zh: "发电和可持续能源解决方案。",
        },
      },
      {
        _key: "core-8",
        title: { en: "Public Safety & Security", id: "Keamanan & Keselamatan Publik", zh: "公共安全与安保" },
        description: {
          en: "Public safety and security services.",
          id: "Layanan keamanan dan keselamatan publik.",
          zh: "公共安全和安保服务。",
        },
      },
      {
        _key: "core-9",
        title: { en: "Technology, Data Center & Integrated Utility Network", id: "Teknologi, Pusat Data & Jaringan Utilitas Terpadu", zh: "科技、数据中心与综合公用网络" },
        description: {
          en: "Technology, data center, and integrated utility network facilities.",
          id: "Teknologi, pusat data, dan fasilitas jaringan utilitas terpadu.",
          zh: "科技、数据中心和综合公用网络设施。",
        },
      },
    ],
  },

  projectExperience: {
    sectionHeader: {
      eyebrow: { en: "Portfolio", id: "Portofolio", zh: "项目组合" },
      heading: { en: "Project Experience", id: "Pengalaman Proyek", zh: "项目经验" },
      description: {
        en: "Our track record of delivering complex projects across multiple sectors demonstrates our capability to execute and create value at scale.",
        id: "Rekam jejak kami dalam menyelesaikan proyek kompleks di berbagai sektor menunjukkan kemampuan kami untuk mengeksekusi dan menciptakan nilai dalam skala besar.",
        zh: "我们在多个领域交付复杂项目的往绩证明了我们大规模执行和创造价值的能力。",
      },
    },
    projects: [
      {
        _key: "proj-1",
        title: { en: "3-Star Luxury Hotel", id: "Hotel Mewah Bintang 3", zh: "三星级豪华酒店" },
        location: { en: "Balikpapan, Indonesia", id: "Balikpapan, Indonesia", zh: "巴厘巴板，印度尼西亚" },
        category: { en: "Hospitality", id: "Perhotelan", zh: "酒店业" },
        description: {
          en: "Development of a 3-star luxury hotel in Balikpapan featuring world-class amenities and exceptional guest experiences.",
          id: "Pengembangan hotel mewah bintang 3 di Balikpapan dengan fasilitas kelas dunia dan pengalaman tamu yang luar biasa.",
          zh: "在巴厘巴板开发三星级豪华酒店，配备世界级设施和卓越的宾客体验。",
        },
      },
      {
        _key: "proj-2",
        title: { en: "Supermarket & Hospital", id: "Supermarket & Rumah Sakit", zh: "超市与医院" },
        location: { en: "Balikpapan, Indonesia", id: "Balikpapan, Indonesia", zh: "巴厘巴板，印度尼西亚" },
        category: { en: "Retail & Healthcare", id: "Ritel & Kesehatan", zh: "零售与医疗" },
        description: {
          en: "Integrated development combining a modern supermarket with a full-service hospital in Balikpapan.",
          id: "Pengembangan terpadu yang menggabungkan supermarket modern dengan rumah sakit lengkap di Balikpapan.",
          zh: "在巴厘巴板将现代超市与全方位服务医院相结合的综合开发项目。",
        },
      },
      {
        _key: "proj-3",
        title: { en: "Data Center", id: "Pusat Data", zh: "数据中心" },
        location: { en: "Pulomas, Jakarta, Indonesia", id: "Pulomas, Jakarta, Indonesia", zh: "普洛马斯，雅加达，印度尼西亚" },
        category: { en: "Technology", id: "Teknologi", zh: "科技" },
        description: {
          en: "State-of-the-art data center facility in Pulomas, Jakarta, designed for reliability, scalability, and energy efficiency.",
          id: "Fasilitas pusat data mutakhir di Pulomas, Jakarta, yang dirancang untuk keandalan, skalabilitas, dan efisiensi energi.",
          zh: "位于雅加达普洛马斯的最先进数据中心设施，专为可靠性、可扩展性和能效而设计。",
        },
      },
      {
        _key: "proj-4",
        title: { en: "SJUT (Integrated Utility Network System)", id: "SJUT (Sistem Jaringan Utilitas Terpadu)", zh: "SJUT（综合公用网络系统）" },
        location: { en: "DKI Jakarta, Indonesia", id: "DKI Jakarta, Indonesia", zh: "雅加达首都特区，印度尼西亚" },
        category: { en: "Infrastructure", id: "Infrastruktur", zh: "基础设施" },
        description: {
          en: "Integrated utility network system project in DKI Jakarta. Project value Rp 9 trillion, network length 3,000 km.",
          id: "Proyek Sistem Jaringan Utilitas Terpadu di DKI Jakarta. Nilai proyek Rp 9 Triliun, panjang jaringan 3.000 Km.",
          zh: "雅加达首都特区综合公用网络系统项目。项目价值9万亿印尼盾，网络长度3,000公里。",
        },
      },
      {
        _key: "proj-5",
        title: { en: "Waste-to-Energy Power Plant", id: "Pembangkit Listrik Waste-to-Energy", zh: "垃圾发电厂" },
        location: { en: "Indonesia", id: "Indonesia", zh: "印度尼西亚" },
        category: { en: "Energy", id: "Energi", zh: "能源" },
        description: {
          en: "Innovative waste-to-energy facility converting municipal waste into clean electricity, addressing environmental challenges while generating sustainable power.",
          id: "Fasilitas inovatif energi dari limbah yang mengubah sampah kota menjadi listrik bersih, mengatasi tantangan lingkungan sambil menghasilkan daya berkelanjutan.",
          zh: "创新的垃圾发电设施，将城市垃圾转化为清洁电力，在解决环境挑战的同时产生可持续能源。",
        },
      },
    ],
  },

  legacyBusiness: {
    sectionHeader: {
      eyebrow: { en: "Heritage", id: "Warisan", zh: "传承" },
      heading: { en: "Legacy Brands", id: "Merek Warisan", zh: "传承品牌" },
      description: {
        en: "Our heritage in bicycle distribution laid the foundation for our transformation into a diversified super holding group.",
        id: "Warisan kami dalam distribusi sepeda meletakkan fondasi untuk transformasi kami menjadi grup holding super terdiversifikasi.",
        zh: "我们在自行车分销领域的传承为我们转型为多元化超级控股集团奠定了基础。",
      },
    },
    brands: [
      {
        _key: "legacy-1",
        name: { en: "Genio Bike", id: "Genio Bike", zh: "Genio Bike" },
        description: {
          en: "A brand owned by SBI, offering excellent value-for-money products with reliable quality for every family member.",
          id: "Merek milik SBI sendiri, menawarkan produk dengan nilai uang yang sangat baik dan kualitas andal untuk setiap anggota keluarga.",
          zh: "SBI 自有品牌，提供物超所值的产品，为每位家庭成员提供可靠品质。",
        },
        highlights: [
          { en: "Family-oriented", id: "Berorientasi keluarga", zh: "面向家庭" },
          { en: "Kids bike", id: "Sepeda anak", zh: "儿童自行车" },
          { en: "Daily transportation", id: "Transportasi harian", zh: "日常出行" },
        ],
        button: {
          label: { en: "Visit Website", id: "Kunjungi Website", zh: "访问网站" },
          href: "https://genio.bike",
          external: true,
        },
      },
      {
        _key: "legacy-2",
        name: { en: "United Bike", id: "United Bike", zh: "United Bike" },
        description: {
          en: "SBI is the largest distributor of United Bike, Indonesia's leading bicycle brand recognized for quality, innovation, and performance.",
          id: "SBI adalah distributor terbesar United Bike, merek sepeda terkemuka di Indonesia yang dikenal karena kualitas, inovasi, dan performa.",
          zh: "SBI 是 United Bike 的最大分销商，该品牌是印尼领先的自行车品牌，以品质、创新和性能著称。",
        },
        highlights: [
          { en: "Premium quality", id: "Kualitas premium", zh: "优质品质" },
          { en: "Professional & enthusiast market", id: "Pasar profesional & penggemar", zh: "专业及爱好者市场" },
          { en: "Sports & mobility", id: "Olahraga & mobilitas", zh: "运动与出行" },
        ],
        button: {
          label: { en: "Visit Website", id: "Kunjungi Website", zh: "访问网站" },
          href: "https://unitedbike.com",
          external: true,
        },
      },
      {
        _key: "legacy-3",
        name: { en: "Avand", id: "Avand", zh: "Avand" },
        description: {
          en: "SBI is the largest distributor of Avand, a brand designed for younger riders who value style, trends, and individuality.",
          id: "SBI adalah distributor terbesar Avand, merek yang dirancang untuk pengendara muda yang menghargai gaya, tren, dan individualitas.",
          zh: "SBI 是 Avand 的最大分销商，该品牌专为注重风格、潮流和个性的年轻骑行者设计。",
        },
        highlights: [
          { en: "Youth market", id: "Pasar pemuda", zh: "年轻市场" },
          { en: "Trendy design", id: "Desain trendi", zh: "时尚设计" },
          { en: "Environmental awareness", id: "Kesadaran lingkungan", zh: "环保意识" },
        ],
        button: {
          label: { en: "Visit Website", id: "Kunjungi Website", zh: "访问网站" },
          href: "https://avandbike.com",
          external: true,
        },
      },
    ],
  },
};
