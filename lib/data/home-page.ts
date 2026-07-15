import type { HomePage } from "@/lib/types/sanity";

export const HOME_PAGE: HomePage = {
  _id: "homePageFallback",
  _type: "homePage",
  seo: {
    title: { en: "Bike - Shaping a Sustainable Future", id: "Bike - Membentuk Masa Depan Berkelanjutan", zh: "Bike - 塑造可持续未来" },
    description: {
      en: "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare and infrastructure — operating in 15 countries.",
      id: "Bike adalah perusahaan holding super terdiversifikasi yang menciptakan nilai abadi di seluruh energi, logistik, keuangan, perawatan kesehatan dan infrastruktur — beroperasi di 15 negara.",
      zh: "Bike 是一家多元化控股集团，在能源、物流、金融、医疗保健和基础设施等领域创造长期价值，业务遍及15个国家。",
    },
  },
  hero: {
    eyebrow: {
      en: "Super Holding Company",
      id: "Perusahaan Holding Super",
      zh: "超级控股集团",
    },
    title: {
      en: "Shaping a Sustainable Future Across Industries.",
      id: "Membentuk Masa Depan Berkelanjutan di Seluruh Industri.",
      zh: "跨行业塑造可持续未来。",
    },
    subtitle: {
      en:
        "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare, and infrastructure — operating in 15 countries with a commitment to responsible business practices.",
      id:
        "Bike adalah perusahaan holding super terdiversifikasi yang menciptakan nilai abadi di seluruh energi, logistik, keuangan, perawatan kesehatan, dan infrastruktur — beroperasi di 15 negara dengan komitmen terhadap praktik bisnis yang bertanggung jawab.",
      zh:
        "Bike 是一家多元化控股集团，在能源、物流、金融、医疗保健和基础设施领域创造长期价值，业务遍及15个国家，致力于负责任的商业实践。",
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
      heading: { en: "A Super Holding Company Building Enduring Value.", id: "Perusahaan Holding Super yang Menciptakan Nilai Abadi.", zh: "一家创造持久价值的超级控股集团。" },
    },
    description: {
      en:
        "Bike has transformed into a diversified super holding company, creating enduring value across energy, logistics, finance, healthcare, and infrastructure. With operations spanning 15 countries, we are committed to responsible business practices and sustainable growth.",
      id:
        "Bike telah bertransformasi menjadi perusahaan holding super terdiversifikasi, menciptakan nilai abadi di seluruh energi, logistik, keuangan, perawatan kesehatan, dan infrastruktur. Dengan operasi yang mencakup 15 negara, kami berkomitmen terhadap praktik bisnis yang bertanggung jawab dan pertumbuhan berkelanjutan.",
      zh:
        "Bike 已转型为多元化超级控股集团，在能源、物流、金融、医疗保健和基础设施领域创造持久价值。业务遍及15个国家，我们致力于负责任的商业实践和可持续增长。",
    },
    secondaryDescription: {
      en:
        "Our group of companies serves diverse markets across multiple industries, driving innovation and creating long-term value for shareholders, partners, and communities.",
      id:
        "Grup perusahaan kami melayani pasar yang beragam di berbagai industri, mendorong inovasi dan menciptakan nilai jangka panjang bagi pemegang saham, mitra, dan masyarakat.",
      zh:
        "我们的集团公司在多个行业服务多元化市场，推动创新，为股东、合作伙伴和社区创造长期价值。",
    },
    visionCard: {
      label: {
        en: "Vision",
        id: "Visi",
        zh: "愿景",
      },
      statement: {
        en: "Creating enduring value across industries through responsible business practices and sustainable growth.",
        id: "Menciptakan nilai abadi di seluruh industri melalui praktik bisnis yang bertanggung jawab dan pertumbuhan berkelanjutan.",
        zh: "通过负责任的商业实践和可持续增长，跨行业创造持久价值。",
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
      heading: { en: "Diverse Business Portfolio Across Industries.", id: "Portofolio Bisnis yang Beragam di Seluruh Industri.", zh: "跨行业多元化业务组合。" },
    },
    cards: [
      {
        title: {
          en: "Energy",
          id: "Energi",
          zh: "能源",
        },
        description: {
          en: "Powering communities through reliable and sustainable energy solutions.",
          id: "Memberdayakan masyarakat melalui solusi energi yang andal dan berkelanjutan.",
          zh: "通过可靠和可持续的能源解决方案为社区提供动力。",
        },
      },
      {
        title: {
          en: "Logistics",
          id: "Logistik",
          zh: "物流",
        },
        description: {
          en: "Connecting markets with efficient and integrated supply chain solutions.",
          id: "Menghubungkan pasar dengan solusi rantai pasok yang efisien dan terintegrasi.",
          zh: "以高效、一体化的供应链解决方案连接市场。",
        },
      },
      {
        title: {
          en: "Finance",
          id: "Keuangan",
          zh: "金融",
        },
        description: {
          en: "Delivering financial services that drive growth and create value.",
          id: "Menyediakan layanan keuangan yang mendorong pertumbuhan dan menciptakan nilai.",
          zh: "提供推动增长和创造价值的金融服务。",
        },
      },
      {
        title: {
          en: "Healthcare & Infrastructure",
          id: "Kesehatan & Infrastruktur",
          zh: "医疗保健与基础设施",
        },
        description: {
          en: "Building essential infrastructure and healthcare services for communities.",
          id: "Membangun infrastruktur penting dan layanan kesehatan untuk masyarakat.",
          zh: "为社区建设基础设施和医疗保健服务。",
        },
      },
    ],
  },
  sustainability: {
    sectionHeader: {
      eyebrow: { en: "Sustainability", id: "Keberlanjutan", zh: "可持续发展" },
      heading: { en: "Building a Sustainable Future.", id: "Membangun Masa Depan yang Berkelanjutan.", zh: "建设可持续未来。" },
    },
    description: {
      en:
        "We are committed to responsible business practices, environmental stewardship, and creating positive impact across all our operations.",
      id:
        "Kami berkomitmen terhadap praktik bisnis yang bertanggung jawab, pengelolaan lingkungan, dan menciptakan dampak positif di seluruh operasi kami.",
      zh:
        "我们致力于负责任的商业实践、环境管理，并在所有运营中创造积极影响。",
    },
    cards: [
      {
        icon: "ShieldCheck",
        title: {
          en: "Responsible Business",
          id: "Bisnis Bertanggung Jawab",
          zh: "负责任的商业",
        },
      },
      {
        icon: "Leaf",
        title: {
          en: "Environmental Awareness",
          id: "Kesadaran Lingkungan",
          zh: "环保意识",
        },
      },
      {
        icon: "Users",
        title: {
          en: "Community Development",
          id: "Pengembangan Masyarakat",
          zh: "社区发展",
        },
      },
      {
        icon: "TrendingUp",
        title: {
          en: "Long-Term Sustainability",
          id: "Keberlanjutan Jangka Panjang",
          zh: "长期可持续发展",
        },
      },
    ],
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
