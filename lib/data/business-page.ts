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
      id: "Membangun Nilai di Seluruh Industri.",
      zh: "跨行业创造价值。",
    },
    description: {
      en: "From our origins in bicycle distribution to our transformation into a diversified super holding group, we continue to create enduring value across energy, logistics, finance, healthcare, and infrastructure.",
      id: "Dari awal mula sebagai perusahaan distribusi sepeda hingga transformasi menjadi grup holding super terdiversifikasi, kami terus menciptakan nilai abadi di seluruh energi, logistik, keuangan, perawatan kesehatan, dan infrastruktur.",
      zh: "从自行车分销起步，到转型为多元化超级控股集团，我们持续在能源、物流、金融、医疗保健和基础设施领域创造持久价值。",
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
        en: "Bike has evolved from a single-focus bicycle distribution company into a diversified super holding group. Our business portfolio spans multiple high-growth sectors, each managed with a commitment to excellence, innovation, and sustainable value creation.",
        id: "Bike telah berevolusi dari perusahaan distribusi sepeda fokus tunggal menjadi grup holding super terdiversifikasi. Portofolio bisnis kami mencakup berbagai sektor pertumbuhan tinggi, masing-masing dikelola dengan komitmen terhadap keunggulan, inovasi, dan penciptaan nilai berkelanjutan.",
        zh: "Bike 已从单一业务的自行车分销公司发展为多元化超级控股集团。我们的业务组合涵盖多个高增长领域，每个领域都以卓越、创新和可持续价值创造为承诺进行管理。",
      },
      {
        en: "Our transformation reflects a strategic vision to build a resilient business foundation that can adapt to changing market dynamics while delivering consistent value to shareholders, partners, and communities across 15 countries.",
        id: "Transformasi kami mencerminkan visi strategis untuk membangun fondasi bisnis yang tangguh yang dapat beradaptasi dengan dinamika pasar yang berubah sambil memberikan nilai konsisten bagi pemegang saham, mitra, dan masyarakat di 15 negara.",
        zh: "我们的转型体现了建立韧性业务基础的战略愿景，能够适应不断变化的市场动态，同时为15个国家的股东、合作伙伴和社区持续创造价值。",
      },
    ],
    statCards: [
      { _key: "stat-1", value: { en: "5", id: "5", zh: "5" }, label: { en: "Business Sectors", id: "Sektor Bisnis", zh: "业务领域" } },
      { _key: "stat-2", value: { en: "15", id: "15", zh: "15" }, label: { en: "Countries", id: "Negara", zh: "国家" } },
      { _key: "stat-3", value: { en: "2017", id: "2017", zh: "2017" }, label: { en: "Established", id: "Didirikan", zh: "成立时间" } },
      { _key: "stat-4", value: { en: "IDX", id: "BEI", zh: "IDX" }, label: { en: "Listed on", id: "Tercatat di", zh: "上市交易所" } },
    ],
  },

  extension: {
    sectionHeader: {
      eyebrow: { en: "Growth", id: "Pertumbuhan", zh: "增长" },
      heading: { en: "Business Extension", id: "Ekspansi Bisnis", zh: "业务扩展" },
      description: {
        en: "Expanding our reach and capacity to serve markets more effectively.",
        id: "Memperluas jangkauan dan kapasitas kami untuk melayani pasar dengan lebih efektif.",
        zh: "拓展我们的覆盖范围和能力，更有效地服务市场。",
      },
    },
    cards: [
      {
        _key: "ext-1",
        icon: "TrendingUp",
        title: { en: "Market Expansion", id: "Ekspansi Pasar", zh: "市场扩张" },
        description: {
          en: "Extending our presence into new geographic markets and customer segments across multiple regions.",
          id: "Memperluas kehadiran kami ke pasar geografis baru dan segmen pelanggan di berbagai wilayah.",
          zh: "将业务拓展至新的地理市场和客户群体，覆盖多个区域。",
        },
      },
      {
        _key: "ext-2",
        icon: "Globe",
        title: { en: "Capacity Enhancement", id: "Peningkatan Kapasitas", zh: "产能提升" },
        description: {
          en: "Investing in infrastructure, technology, and people to scale operations and meet growing demand.",
          id: "Berinvestasi dalam infrastruktur, teknologi, dan sumber daya manusia untuk meningkatkan skala operasi dan memenuhi permintaan yang terus tumbuh.",
          zh: "投资基础设施、技术和人才，扩大运营规模并满足不断增长的需求。",
        },
      },
      {
        _key: "ext-3",
        icon: "Building2",
        title: { en: "Network Strengthening", id: "Penguatan Jaringan", zh: "网络强化" },
        description: {
          en: "Building strategic partnerships and distribution channels to deepen market penetration and service quality.",
          id: "Membangun kemitraan strategis dan saluran distribusi untuk memperdalam penetrasi pasar dan kualitas layanan.",
          zh: "建立战略合作伙伴关系和分销渠道，深化市场渗透和服务质量。",
        },
      },
    ],
  },

  development: {
    sectionHeader: {
      eyebrow: { en: "Innovation", id: "Inovasi", zh: "创新" },
      heading: { en: "Business Development", id: "Pengembangan Bisnis", zh: "业务发展" },
      description: {
        en: "Driving growth through innovation, research, and continuous improvement.",
        id: "Mendorong pertumbuhan melalui inovasi, riset, dan peningkatan berkelanjutan.",
        zh: "通过创新、研发和持续改进推动增长。",
      },
    },
    cards: [
      {
        _key: "dev-1",
        icon: "Lightbulb",
        title: { en: "Innovation", id: "Inovasi", zh: "创新" },
        description: {
          en: "Fostering a culture of innovation across all business sectors to develop new solutions and stay ahead of market trends.",
          id: "Mendorong budaya inovasi di seluruh sektor bisnis untuk mengembangkan solusi baru dan tetap selangkah di depan tren pasar.",
          zh: "在所有业务领域培育创新文化，开发新解决方案并保持市场趋势领先。",
        },
      },
      {
        _key: "dev-2",
        icon: "FlaskConical",
        title: { en: "Research & Development", id: "Riset & Pengembangan", zh: "研发" },
        description: {
          en: "Investing in research initiatives to explore emerging technologies and identify new business opportunities.",
          id: "Berinvestasi dalam inisiatif riset untuk mengeksplorasi teknologi baru dan mengidentifikasi peluang bisnis baru.",
          zh: "投资研究计划，探索新兴技术并识别新的商业机会。",
        },
      },
      {
        _key: "dev-3",
        icon: "Rocket",
        title: { en: "Strategic Growth", id: "Pertumbuhan Strategis", zh: "战略增长" },
        description: {
          en: "Pursuing strategic acquisitions, joint ventures, and partnerships to accelerate business development.",
          id: "Menjalankan akuisisi strategis, usaha patungan, dan kemitraan untuk mempercepat pengembangan bisnis.",
          zh: "推进战略收购、合资企业和合作伙伴关系，加速业务发展。",
        },
      },
    ],
  },

  diversification: {
    sectionHeader: {
      eyebrow: { en: "Transformation", id: "Transformasi", zh: "转型" },
      heading: { en: "Business Diversification", id: "Diversifikasi Bisnis", zh: "业务多元化" },
      description: {
        en: "Our journey from a single-product company to a diversified super holding group represents a fundamental transformation of our business model.",
        id: "Perjalanan kami dari perusahaan produk tunggal menjadi grup holding super terdiversifikasi mewakili transformasi mendasar dari model bisnis kami.",
        zh: "我们从单一产品公司到多元化超级控股集团的历程，代表了商业模式的根本转型。",
      },
    },
    paragraph: {
      en: "By expanding into energy, logistics, finance, healthcare, and infrastructure, we have built a resilient portfolio that balances stability with growth — positioning Bike for long-term success across multiple industries.",
      id: "Dengan berekspansi ke energi, logistik, keuangan, perawatan kesehatan, dan infrastruktur, kami telah membangun portofolio yang tangguh yang menyeimbangkan stabilitas dengan pertumbuhan — memposisikan Bike untuk kesuksesan jangka panjang di berbagai industri.",
      zh: "通过扩展到能源、物流、金融、医疗保健和基础设施领域，我们建立了一个平衡稳定与增长的韧性组合——为 Bike 在多个行业的长期成功奠定基础。",
    },
    ctaLabel: { en: "Learn About Our Journey", id: "Pelajari Perjalanan Kami", zh: "了解我们的历程" },
    ctaHref: "",
  },

  subHoldingStructure: {
    sectionHeader: {
      eyebrow: { en: "Structure", id: "Struktur", zh: "架构" },
      heading: { en: "Super Holding Model", id: "Model Super Holding", zh: "超级控股模式" },
      description: {
        en: "Our super holding structure enables us to manage diverse businesses through dedicated sub-holdings, each focused on its sector while benefiting from group-level synergies.",
        id: "Struktur super holding kami memungkinkan kami mengelola berbagai bisnis melalui sub-holding khusus, masing-masing berfokus pada sektornya sambil mendapatkan manfaat dari sinergi tingkat grup.",
        zh: "我们的超级控股架构使我们能够通过专门的子控股公司管理多元化业务，每个子控股专注于其领域，同时受益于集团层面的协同效应。",
      },
    },
    cards: [
      {
        _key: "sub-1",
        icon: "Building",
        title: { en: "Parent Holding", id: "Holding Induk", zh: "母控股公司" },
        description: {
          en: "The central holding company provides strategic direction, capital allocation, and governance across all business sectors.",
          id: "Perusahaan holding pusat memberikan arahan strategis, alokasi modal, dan tata kelola di seluruh sektor bisnis.",
          zh: "中央控股公司提供战略方向、资本配置和跨所有业务领域的治理。",
        },
      },
      {
        _key: "sub-2",
        icon: "Layers",
        title: { en: "Sub-Holdings", id: "Sub-Holding", zh: "子控股公司" },
        description: {
          en: "Each sub-holding manages a specific business sector with operational autonomy and dedicated leadership.",
          id: "Setiap sub-holding mengelola sektor bisnis tertentu dengan otonomi operasional dan kepemimpinan khusus.",
          zh: "每个子控股公司管理特定业务领域，拥有运营自主权和专属领导团队。",
        },
      },
      {
        _key: "sub-3",
        icon: "Network",
        title: { en: "Operating Companies", id: "Perusahaan Operasional", zh: "运营公司" },
        description: {
          en: "Operating companies execute day-to-day business activities within each sub-holding's portfolio.",
          id: "Perusahaan operasional menjalankan kegiatan bisnis harian dalam portofolio setiap sub-holding.",
          zh: "运营公司在每个子控股公司的投资组合内执行日常业务活动。",
        },
      },
    ],
  },

  coreBusiness: {
    sectionHeader: {
      eyebrow: { en: "Core Business", id: "Bisnis Inti", zh: "核心业务" },
      heading: { en: "Our Business Sectors", id: "Sektor Bisnis Kami", zh: "我们的业务领域" },
      description: {
        en: "We operate across five key sectors, each contributing to our vision of creating enduring value through diversified growth.",
        id: "Kami beroperasi di lima sektor utama, masing-masing berkontribusi pada visi kami menciptakan nilai abadi melalui pertumbuhan yang terdiversifikasi.",
        zh: "我们在五个关键领域开展业务，每个领域都为通过多元化增长创造持久价值的愿景做出贡献。",
      },
    },
    cards: [
      {
        _key: "core-1",
        title: { en: "Energy", id: "Energi", zh: "能源" },
        description: {
          en: "Powering communities through reliable and sustainable energy solutions across generation, distribution, and renewable resources.",
          id: "Memberdayakan masyarakat melalui solusi energi yang andal dan berkelanjutan di seluruh generasi, distribusi, dan sumber daya terbarukan.",
          zh: "通过发电、配电和可再生能源领域可靠且可持续的能源解决方案为社区提供动力。",
        },
      },
      {
        _key: "core-2",
        title: { en: "Logistics", id: "Logistik", zh: "物流" },
        description: {
          en: "Connecting markets with efficient and integrated supply chain solutions, warehousing, and distribution networks.",
          id: "Menghubungkan pasar dengan solusi rantai pasok yang efisien dan terintegrasi, pergudangan, dan jaringan distribusi.",
          zh: "以高效、一体化的供应链解决方案、仓储和分销网络连接市场。",
        },
      },
      {
        _key: "core-3",
        title: { en: "Finance", id: "Keuangan", zh: "金融" },
        description: {
          en: "Delivering financial services that drive growth, including investment management, lending, and financial technology solutions.",
          id: "Menyediakan layanan keuangan yang mendorong pertumbuhan, termasuk manajemen investasi, pinjaman, dan solusi teknologi keuangan.",
          zh: "提供推动增长的金融服务，包括投资管理、贷款和金融科技解决方案。",
        },
      },
      {
        _key: "core-4",
        title: { en: "Healthcare", id: "Kesehatan", zh: "医疗保健" },
        description: {
          en: "Building essential healthcare infrastructure and services that improve community wellbeing and access to quality care.",
          id: "Membangun infrastruktur dan layanan kesehatan penting yang meningkatkan kesejahteraan masyarakat dan akses ke layanan berkualitas.",
          zh: "建设重要的医疗保健基础设施和服务，改善社区福祉和优质医疗服务的可及性。",
        },
      },
      {
        _key: "core-5",
        title: { en: "Infrastructure", id: "Infrastruktur", zh: "基础设施" },
        description: {
          en: "Developing critical infrastructure projects that support economic growth and community development across regions.",
          id: "Mengembangkan proyek infrastruktur penting yang mendukung pertumbuhan ekonomi dan pengembangan masyarakat di berbagai wilayah.",
          zh: "开发支持经济增长和社区发展的关键基础设施项目，覆盖各个地区。",
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
        title: { en: "Luxury Hotel", id: "Hotel Mewah", zh: "豪华酒店" },
        location: { en: "Jakarta, Indonesia", id: "Jakarta, Indonesia", zh: "雅加达，印度尼西亚" },
        category: { en: "Hospitality", id: "Perhotelan", zh: "酒店业" },
        description: {
          en: "Development of a premium luxury hotel featuring world-class amenities, fine dining, and exceptional guest experiences in a prime urban location.",
          id: "Pengembangan hotel mewah premium dengan fasilitas kelas dunia, restoran mewah, dan pengalaman tamu yang luar biasa di lokasi perkotaan utama.",
          zh: "在黄金城市地段开发高端豪华酒店，配备世界级设施、精致餐饮和卓越的宾客体验。",
        },
      },
      {
        _key: "proj-2",
        title: { en: "Supermarket & Hospital", id: "Supermarket & Rumah Sakit", zh: "超市与医院" },
        location: { en: "Surabaya, Indonesia", id: "Surabaya, Indonesia", zh: "泗水，印度尼西亚" },
        category: { en: "Retail & Healthcare", id: "Ritel & Kesehatan", zh: "零售与医疗" },
        description: {
          en: "Integrated development combining a modern supermarket with a full-service hospital, providing essential community services in a single accessible complex.",
          id: "Pengembangan terpadu yang menggabungkan supermarket modern dengan rumah sakit lengkap, menyediakan layanan masyarakat penting dalam satu kompleks yang mudah diakses.",
          zh: "将现代超市与全方位服务医院相结合的综合开发项目，在一个便捷的综合体内为社区提供 essential 服务。",
        },
      },
      {
        _key: "proj-3",
        title: { en: "Data Center", id: "Pusat Data", zh: "数据中心" },
        location: { en: "Bekasi, Indonesia", id: "Bekasi, Indonesia", zh: "勿加泗，印度尼西亚" },
        category: { en: "Technology", id: "Teknologi", zh: "科技" },
        description: {
          en: "State-of-the-art data center facility designed for reliability, scalability, and energy efficiency, serving enterprise and cloud computing needs.",
          id: "Fasilitas pusat data mutakhir yang dirancang untuk keandalan, skalabilitas, dan efisiensi energi, melayani kebutuhan komputasi enterprise dan cloud.",
          zh: "最先进的数据中心设施，专为可靠性、可扩展性和能效而设计，服务于企业和云计算需求。",
        },
      },
      {
        _key: "proj-4",
        title: { en: "SJUT", id: "SJUT", zh: "SJUT" },
        location: { en: "East Java, Indonesia", id: "Jawa Timur, Indonesia", zh: "东爪哇，印度尼西亚" },
        category: { en: "Transportation", id: "Transportasi", zh: "交通" },
        description: {
          en: "Strategic transportation infrastructure project enhancing regional connectivity and supporting economic growth through improved logistics networks.",
          id: "Proyek infrastruktur transportasi strategis yang meningkatkan konektivitas regional dan mendukung pertumbuhan ekonomi melalui jaringan logistik yang lebih baik.",
          zh: "战略性交通基础设施项目，通过改善物流网络增强区域互联互通并支持经济增长。",
        },
      },
      {
        _key: "proj-5",
        title: { en: "Waste-to-Energy", id: "Energi dari Limbah", zh: "垃圾发电" },
        location: { en: "West Java, Indonesia", id: "Jawa Barat, Indonesia", zh: "西爪哇，印度尼西亚" },
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
        name: { en: "United Bike", id: "United Bike", zh: "United Bike" },
        description: {
          en: "Indonesia's leading bicycle brand recognized for quality, innovation, and performance.",
          id: "Merek sepeda terkemuka di Indonesia yang dikenal karena kualitas, inovasi, dan performa.",
          zh: "印尼领先的自行车品牌，以品质、创新和性能著称。",
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
        _key: "legacy-2",
        name: { en: "Genio Bike", id: "Genio Bike", zh: "Genio Bike" },
        description: {
          en: "Excellent value-for-money products with reliable quality for every family member.",
          id: "Produk dengan nilai uang yang sangat baik dan kualitas andal untuk setiap anggota keluarga.",
          zh: "物超所值的产品，为每位家庭成员提供可靠品质。",
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
        _key: "legacy-3",
        name: { en: "Avand Bike", id: "Avand Bike", zh: "Avand Bike" },
        description: {
          en: "Designed for younger riders who value style, trends, and individuality.",
          id: "Dirancang untuk pengendara muda yang menghargai gaya, tren, dan individualitas.",
          zh: "专为注重风格、潮流和个性的年轻骑行者设计。",
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
