import type { HomePage } from "@/lib/types/sanity";

export const HOME_PAGE: HomePage = {
  _id: "homePageFallback",
  _type: "homePage",
  seo: {
    title: { en: "Bike — Transformation Beyond Energy", id: "Bike — Transformasi Melampaui Energi", zh: "Bike — 超越能源的转型" },
    description: {
      en: "Bike (PT Bhineka Inovasi Ketahanan Energi Tbk) is a super holding company transformed from Indonesia's largest bicycle distributor into a diversified group across 9 strategic sectors — supported by 319 stores serving Indonesia since 2017.",
      id: "Bike (PT Bhineka Inovasi Ketahanan Energi Tbk) adalah perusahaan holding super yang bertransformasi dari distributor sepeda terbesar di Indonesia menjadi grup terdiversifikasi di 9 sektor strategis — didukung 319 toko yang melayani Indonesia sejak 2017.",
      zh: "Bike（PT Bhineka Inovasi Ketahanan Energi Tbk）是一家超级控股公司，已从印尼最大的自行车分销商转型为涵盖9大战略领域的多元化集团——依托319家门店，自2017年起服务印尼市场。",
    },
  },
  hero: {
    eyebrow: {
      en: "Super Holding Company",
      id: "Perusahaan Holding Super",
      zh: "超级控股集团",
    },
    title: {
      en: "Transformation Beyond Energy.",
      id: "Transformasi Melampaui Energi.",
      zh: "超越能源的转型。",
    },
    subtitle: {
      en:
        "Bike (PT Bhineka Inovasi Ketahanan Energi Tbk) is a super holding company transformed from Indonesia's largest bicycle distributor into a diversified group across energy, technology, infrastructure, and beyond — supported by 319 stores serving the Indonesian market since 2017.",
      id:
        "Bike (PT Bhineka Inovasi Ketahanan Energi Tbk) adalah perusahaan holding super yang bertransformasi dari distributor sepeda terbesar di Indonesia menjadi grup terdiversifikasi di sektor energi, teknologi, infrastruktur, dan lainnya — didukung 319 toko yang telah melayani pasar Indonesia sejak 2017.",
      zh:
        "Bike（PT Bhineka Inovasi Ketahanan Energi Tbk）是一家超级控股公司，已从印尼最大的自行车分销商转型为涵盖能源、科技、基础设施等领域的多元化集团——依托319家门店，自2017年起服务印尼市场。",
    },
    primaryButton: {
      label: { en: "About Bike", id: "Tentang Bike", zh: "关于 Bike" },
      href: "/about",
      external: false,
    },
    secondaryButton: {
      label: { en: "Our Business", id: "Bisnis Kami", zh: "我们的业务" },
      href: "/business",
      external: false,
    },
  },
  aboutPreview: {
    sectionHeader: {
      eyebrow: { en: "About Us", id: "Tentang Kami", zh: "关于我们" },
      heading: { en: "A Super Holding Company Building Enduring Value.", id: "Perusahaan Holding Super yang Membangun Nilai Berkelanjutan.", zh: "创造持久价值的超级控股集团。" },
    },
    description: {
      en:
        "Bike has transformed from a bicycle distribution company into a diversified super holding company, following the entry of PT Penajam Makmur Jaya as the new controlling shareholder.",
      id:
        "Bike bertransformasi dari perusahaan distribusi sepeda menjadi perusahaan holding super terdiversifikasi, didukung masuknya PT Penajam Makmur Jaya sebagai pemegang saham pengendali baru.",
      zh:
        "Bike 已从自行车分销公司转型为多元化超级控股集团，随着 PT Penajam Makmur Jaya 成为新的控股股东。",
    },
    secondaryDescription: {
      en:
        "Our group of companies now spans nine strategic sectors — from renewable energy and technology to infrastructure — while maintaining the bicycle business foundation established since 2017.",
      id:
        "Grup perusahaan kami kini merambah sembilan sektor strategis — dari energi terbarukan, teknologi, hingga infrastruktur — sambil tetap mempertahankan fondasi bisnis sepeda yang telah dibangun sejak 2017.",
      zh:
        "我们的企业集团现已涉足九大战略领域——从可再生能源、科技到基础设施——同时保持自2017年建立的自行车业务基础。",
    },
    visionCard: {
      label: {
        en: "Vision",
        id: "Visi",
        zh: "愿景",
      },
      statement: {
        en: "To be a leading company that builds the world by maintaining harmony between human life and the universe.",
        id: "Menjadi perusahaan terkemuka yang membangun dunia dengan menjaga keseimbangan antara kehidupan manusia dan alam semesta.",
        zh: "成为一家在建设世界的同时维护人类与自然和谐共生的卓越企业。",
      },
    },
    button: {
      label: { en: "Learn More", id: "Selengkapnya", zh: "了解更多" },
      href: "/about",
      external: false,
    },
  },
  businessHighlights: {
    sectionHeader: {
      eyebrow: { en: "Our Business", id: "Bisnis Kami", zh: "我们的业务" },
      heading: { en: "Business Portfolio Across 9 Strategic Sectors.", id: "Portofolio Bisnis di 9 Sektor Strategis.", zh: "九大战略领域的业务组合。" },
    },
    cards: [
      {
        _key: "bh-1",
        title: {
          en: "Energy & Sustainable Power",
          id: "Energi & Pembangkit Berkelanjutan",
          zh: "能源与可持续电力",
        },
        description: {
          en: "Power Plant & Sustainable Energy",
          id: "Pembangkit Listrik & Energi Berkelanjutan",
          zh: "发电厂与可持续能源",
        },
      },
      {
        _key: "bh-2",
        title: {
          en: "Technology & Data Centers",
          id: "Teknologi & Pusat Data",
          zh: "科技与数据中心",
        },
        description: {
          en: "Technology, Data Center & Integrated Utility Network Facilities",
          id: "Teknologi, Pusat Data & Fasilitas Jaringan Utilitas Terpadu",
          zh: "科技、数据中心及综合公用网络设施",
        },
      },
      {
        _key: "bh-3",
        title: {
          en: "Property & Development",
          id: "Properti & Pengembangan",
          zh: "地产与开发",
        },
        description: {
          en: "Property & Development",
          id: "Properti & Pengembangan",
          zh: "地产与开发",
        },
      },
      {
        _key: "bh-4",
        title: {
          en: "Finance & Investment",
          id: "Keuangan & Investasi",
          zh: "金融与投资",
        },
        description: {
          en: "Finance & Investment",
          id: "Keuangan & Investasi",
          zh: "金融与投资",
        },
      },
    ],
    viewAllButton: {
      label: { en: "Explore All 9 Business Sectors", id: "Lihat Semua 9 Sektor Bisnis", zh: "查看全部9大业务领域" },
      href: "/business",
      external: false,
    },
  },
  sustainability: {
    sectionHeader: {
      eyebrow: { en: "Sustainability", id: "Keberlanjutan", zh: "可持续发展" },
      heading: { en: "Building a Sustainable Future.", id: "Membangun Masa Depan yang Berkelanjutan.", zh: "建设可持续未来。" },
    },
    description: {
      en:
        "Our commitment rests on three main pillars — Profit, People, Planet — along with environmental protection and occupational health and safety.",
      id:
        "Komitmen kami berpijak pada tiga pilar utama — Profit, People, Planet — serta perlindungan terhadap lingkungan dan kesehatan kerja.",
      zh:
        "我们的承诺建立在三大支柱之上——利润、人文、地球——以及对环境和职业健康安全的保护。",
    },
    cards: [
      {
        _key: "sus-1",
        icon: "TrendingUp",
        title: {
          en: "Profit",
          id: "Profit",
          zh: "利润",
        },
        description: {
          en: "Long-term economic value-oriented business growth.",
          id: "Pertumbuhan bisnis yang berorientasi nilai ekonomi jangka panjang.",
          zh: "以长期经济价值为导向的业务增长。",
        },
      },
      {
        _key: "sus-2",
        icon: "Users",
        title: {
          en: "People",
          id: "People",
          zh: "人文",
        },
        description: {
          en: "Caring for employees, local communities, and society.",
          id: "Kepedulian terhadap karyawan, komunitas lokal, dan masyarakat.",
          zh: "关爱员工、本地社区和社会。",
        },
      },
      {
        _key: "sus-3",
        icon: "Leaf",
        title: {
          en: "Planet",
          id: "Planet",
          zh: "地球",
        },
        description: {
          en: "Environmental responsibility and carbon footprint management.",
          id: "Tanggung jawab lingkungan dan pengelolaan jejak karbon.",
          zh: "环境责任与碳足迹管理。",
        },
      },
      {
        _key: "sus-4",
        icon: "ShieldCheck",
        title: {
          en: "Occupational Health & Safety",
          id: "Kesehatan & Keselamatan Kerja (K3)",
          zh: "职业健康与安全 (K3)",
        },
        description: {
          en: "Environmental protection and worker health protection.",
          id: "Perlindungan lingkungan dan kesehatan pekerja.",
          zh: "环境保护与劳动者健康保护。",
        },
      },
    ],
    viewAllButton: {
      label: { en: "Sustainability", id: "Keberlanjutan", zh: "可持续发展" },
      href: "/sustainability",
      external: false,
    },
  },
  latestNews: {
    sectionHeader: {
      eyebrow: { en: "Latest News", id: "Berita Terkini", zh: "最新新闻" },
      heading: { en: "Updates from Bike.", id: "Pembaruan dari Bike.", zh: "Bike 最新动态。" },
    },
    description: {
      en: "Stay informed with the latest announcements, reports, and updates from Bike.",
      id:
        "Tetap terinformasi dengan pengumuman, laporan, dan pembaruan terbaru dari Bike.",
      zh: "随时了解 Bike 的最新公告、报告和动态。",
    },
    viewAllButton: {
      label: { en: "View All News", id: "Lihat Semua Berita", zh: "查看所有新闻" },
      href: "/news",
      external: false,
    },
    noNewsMessage: {
      en: "No news available yet",
      id: "Belum ada berita",
      zh: "暂无新闻",
    },
    readMoreLabel: {
      en: "Read More",
      id: "Baca Selengkapnya",
      zh: "阅读更多",
    },
  },
  brandsSection: {
    sectionHeader: {
      eyebrow: { en: "Our Brands", id: "Merek Kami" },
      heading: { en: "Trusted Bicycle Brands for Every Lifestyle.", id: "Merek Sepeda Terpercaya untuk Setiap Gaya Hidup." },
    },
    cards: [
      {
        name: {
          en: "Genio",
          id: "Genio",
        },
        description: {
          en: "Lifestyle bicycle brand designed for everyday urban mobility.",
          id: "Merek sepeda gaya hidup yang dirancang untuk mobilitas perkotaan sehari-hari.",
        },
        button: {
          label: {
            en: "Visit Genio",
            id: "Kunjungi Genio",
          },
          href: "https://genio.bike",
          external: true,
        },
      },
      {
        name: {
          en: "United",
          id: "United",
        },
        description: {
          en: "Mountain, road, and urban bicycles for every rider.",
          id: "Sepeda gunung, jalan, dan perkotaan untuk setiap pengendara.",
        },
        button: {
          label: {
            en: "Visit United",
            id: "Kunjungi United",
          },
          href: "https://www.unitedbike.com/",
          external: true,
        },
      },
      {
        name: {
          en: "Avand",
          id: "Avand",
        },
        description: {
          en: "Reliable everyday mobility bicycles for Indonesian families.",
          id: "Sepeda mobilitas harian yang andal untuk keluarga Indonesia.",
        },
        button: {
          label: {
            en: "Visit Avand",
            id: "Kunjungi Avand",
          },
          href: "https://avand.com",
          external: true,
        },
      },
    ],
  },
  milestonesSection: {
    sectionHeader: {
      eyebrow: { en: "Our Journey", id: "Perjalanan Kami", zh: "我们的历程" },
      heading: { en: "Company Milestones.", id: "Tonggak Perusahaan.", zh: "公司里程碑。" },
    },
    cards: [
      {
        year: "2017",
        title: {
          en: "Company Established",
          id: "Perusahaan Didirikan",
          zh: "公司成立",
        },
        description: {
          en: "Company established in October 2017 as PT Sepeda Bersama Indonesia.",
          id: "Perusahaan didirikan pada Oktober 2017 sebagai PT Sepeda Bersama Indonesia.",
          zh: "公司于2017年10月成立，名为 PT Sepeda Bersama Indonesia。",
        },
      },
      {
        year: "2021",
        title: {
          en: "Business Expansion",
          id: "Ekspansi Bisnis",
          zh: "业务扩张",
        },
        description: {
          en: "Expanded distribution network with 319 dealers across Indonesia, becoming the largest distributor for Genio, United, and Avand bicycles.",
          id: "Memperluas jaringan distribusi dengan 319 dealer di seluruh Indonesia, menjadi distributor terbesar untuk sepeda Genio, United, dan Avand.",
          zh: "扩展分销网络，在印尼拥有319家经销商，成为 Genio、United 和 Avand 自行车的最大分销商。",
        },
      },
      {
        year: "2022",
        title: {
          en: "Initial Public Offering",
          id: "Penawaran Umum Perdana",
          zh: "首次公开募股",
        },
        description: {
          en: "Initial Public Offering (IPO) on the Indonesia Stock Exchange with stock code BIKE.",
          id: "Penawaran umum perdana (IPO) di Bursa Efek Indonesia dengan kode saham BIKE.",
          zh: "在印尼证券交易所首次公开募股（IPO），股票代码为 BIKE。",
        },
      },
      {
        year: "2024",
        title: {
          en: "Business Diversification",
          id: "Diversifikasi Bisnis",
          zh: "业务多元化",
        },
        description: {
          en: "Expanded into multiple business sectors including energy, logistics, finance, healthcare, and infrastructure.",
          id: "Berekspansi ke berbagai sektor bisnis termasuk energi, logistik, keuangan, kesehatan, dan infrastruktur.",
          zh: "扩展至多个业务领域，包括能源、物流、金融、医疗保健和基础设施。",
        },
      },
      {
        year: "2025",
        title: {
          en: "Transformation into Super Holding",
          id: "Transformasi menjadi Super Holding",
          zh: "转型为超级控股",
        },
        description: {
          en: "Transformed into a diversified super holding company with operations spanning 15 countries across multiple industries.",
          id: "Bertransformasi menjadi perusahaan holding super terdiversifikasi dengan operasi yang mencakup 15 negara di berbagai industri.",
          zh: "转型为多元化超级控股集团，业务遍及15个国家，涵盖多个行业。",
        },
      },
    ],
  },
  cta: {
    title: {
      en: "Partner with Bike for a Sustainable Future.",
      id: "Berkolaborasi dengan Bike untuk Masa Depan Berkelanjutan.",
      zh: "与 Bike 携手共创可持续未来。",
    },
    description: {
      en:
        "Whether you're a business partner, investor, or community stakeholder, we're ready to connect and explore opportunities together.",
      id:
        "Baik Anda mitra bisnis, investor, atau pemangku kepentingan masyarakat, kami siap terhubung dan menjelajahi peluang bersama.",
      zh:
        "无论您是业务合作伙伴、投资者还是社区利益相关者，我们都随时准备与您联系，共同探索机遇。",
    },
    primaryButton: {
      label: { en: "Contact Us", id: "Hubungi Kami", zh: "联系我们" },
      href: "/contact",
      external: false,
    },
    secondaryButton: {
      label: { en: "Get Directions", id: "Petunjuk Arah", zh: "获取路线" },
      href: "https://maps.google.com",
      external: true,
    },
  },
};
