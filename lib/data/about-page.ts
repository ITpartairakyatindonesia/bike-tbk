import {
  Users,
  HeartHandshake,
  Lightbulb,
  TreePine,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AboutPage } from "@/lib/types/sanity";

export interface AboutHighlight {
  label: string;
  value: string;
  subtext?: string;
}

export interface AboutInfoItem {
  label: string;
  value: string;
}

export interface CultureCard {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MissionItem {
  title: string;
  description: string;
}

export const ABOUT_HERO = {
  eyebrow: "About Us",
  headline: "Transformasi Menuju Perusahaan Holding Super.",
  description:
    "Bike berevolusi dari distributor sepeda menjadi grup holding super terdiversifikasi, seiring masuknya PT Penajam Makmur Jaya sebagai pengendali baru pada 2026.",
  backgroundImage: "/hero-tower.jpg",
};

export const ABOUT_OVERVIEW = {
  title: "Siapa Kami",
  paragraphs: [
    "PT Sepeda Bersama Indonesia (SBI) didirikan di Tangerang pada 2017 sebagai distributor sepeda, memegang merek Genio Bike serta menjadi distributor terbesar sepeda merek United Bike dan Avand di Indonesia — mendistribusikan lebih dari 100 jenis dan 300 varian sepeda setiap tahun melalui 319 toko yang tersebar di Jawa, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, dan Papua.",
    "Perjalanan SBI memasuki babak baru ketika PT Penajam Makmur Jaya masuk sebagai pemegang saham pengendali baru, kini menguasai 74,90% saham Perseroan. Melalui Rapat Umum Pemegang Saham Luar Biasa pada 2 Juli 2026, para pemegang saham menyetujui transformasi menyeluruh: perubahan susunan Direksi dan Dewan Komisaris, serta perubahan nama dan identitas Perseroan dari PT Sepeda Bersama Indonesia Tbk menjadi PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE).",
    "Di bawah identitas baru ini, BIKE membawa arah strategis yang lebih luas — investasi ketahanan di bidang teknologi, kelautan, pangan, infrastruktur, dan data — sambil tetap berpijak pada fondasi bisnis distribusi yang telah dibangun sejak 2017. Transformasi ini turut didukung persetujuan penambahan bidang usaha baru serta fasilitas pendanaan untuk mempercepat pengembangan Perseroan.",
  ],
};

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  { label: "Established", value: "2017" },
  { label: "Stores", value: "319" },
  { label: "Business Sectors", value: "9" },
  { label: "Group Structure", value: "Super Holding" },
  { label: "Listed on", value: "IDX" },
  { label: "Stock Code", value: "BIKE" },
];

export const ABOUT_INFO: AboutInfoItem[] = [
  { label: "Company Name", value: "PT Bhineka Inovasi Ketahanan Energi Tbk" },
  { label: "Founded", value: "2017" },
  { label: "Head Office", value: "Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia" },
  { label: "Group Structure", value: "Super Holding Company" },
  { label: "Business Sectors", value: "9 Strategic Sectors" },
  { label: "Operations", value: "Jawa, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, Papua" },
  { label: "Website", value: "bike-tbk.co.id" },
  { label: "Listed on", value: "Indonesia Stock Exchange (IDX)" },
  { label: "Stock Code", value: "BIKE" },
];

export const ABOUT_VISION = {
  eyebrow: "Our Direction",
  label: "Vision",
  statement:
    "Menjadi perusahaan terkemuka yang membangun dunia dengan menjaga keseimbangan antara kehidupan manusia dan alam semesta.",
};

export const ABOUT_MISSION: MissionItem[] = [
  {
    title: "Transformasi",
    description:
      "Menjadi perusahaan yang adaptif, inovatif, dan berkelanjutan melalui transformasi bisnis ke sektor-sektor strategis dengan prospek pertumbuhan jangka panjang.",
  },
  {
    title: "Transisi",
    description:
      "Mendukung program transisi energi nasional, ketahanan energi, keamanan data, dan digitalisasi pengembangan teknologi serta infrastruktur.",
  },
  {
    title: "Pertumbuhan",
    description:
      "Menciptakan pertumbuhan berkelanjutan dan nilai tambah bagi investor, pemegang saham, serta seluruh pemangku kepentingan.",
  },
];

export const ABOUT_CULTURE = {
  title: "Our Culture",
  subtitle: "Growing Together Through Human-Centered Values.",
  introduction:
    "Membangun karakter perusahaan yang kuat, budaya perusahaan yang berorientasi pelanggan, dan identitas korporat sebagai ciri khas perusahaan.",
  cards: [
    {
      icon: TreePine,
      title: "Human & Environment",
      description:
        "Promote honesty, responsibility, trust and environmental awareness.",
    },
    {
      icon: HeartHandshake,
      title: "Human & Customers",
      description:
        "Deliver beyond expectations through empathy and excellent service.",
    },
    {
      icon: Users,
      title: "Human & Partners",
      description:
        "Build long-term partnerships based on fairness and mutual growth.",
    },
    {
      icon: Lightbulb,
      title: "Innovation & People",
      description:
        "Support continuous development of people, products, services and innovation.",
    },
  ] as CultureCard[],
};

export const ABOUT_DISTRIBUTION = {
  title: "Distribution Network",
  subtitle: "Reaching Every Corner of Indonesia",
  description:
    "SBI's distribution network spans the archipelago, ensuring that quality bicycles and after-sales service are accessible to communities nationwide.",
  regions: [
    "Java",
    "Bali",
    "Sumatra",
    "Kalimantan",
    "Sulawesi",
    "Nusa Tenggara",
    "Maluku",
    "Papua",
  ],
};

export const ABOUT_CLOSING = {
  headline: "Building a Sustainable Future Together.",
  description:
    "With a commitment to responsible business practices, innovation, and strategic partnerships, Bike continues to create enduring value across industries for shareholders, partners, and communities.",
  primaryButton: { label: "Contact Us", href: "/contact" },
  secondaryButton: { label: "Investor Relations", href: "/investor" },
};

export async function getAboutHero() {
  return ABOUT_HERO;
}

export async function getAboutOverview() {
  return ABOUT_OVERVIEW;
}

export async function getAboutHighlights() {
  return ABOUT_HIGHLIGHTS;
}

export async function getAboutInfo() {
  return ABOUT_INFO;
}

export async function getAboutVision() {
  return ABOUT_VISION;
}

export async function getAboutMission() {
  return ABOUT_MISSION;
}

export async function getAboutCulture() {
  return ABOUT_CULTURE;
}

export async function getAboutDistribution() {
  return ABOUT_DISTRIBUTION;
}

export async function getAboutClosing() {
  return ABOUT_CLOSING;
}

export const ABOUT_PAGE: AboutPage = {
  _id: 'about-page-fallback',
  _type: 'aboutPage',
  hero: {
    eyebrow: { en: 'About Us', id: 'Tentang Kami', zh: '关于我们' },
    title: { en: 'Transformation Towards a Super Holding Company.', id: 'Transformasi Menuju Perusahaan Holding Super.', zh: '向超级控股集团转型。' },
    subtitle: { en: 'Bike has evolved from a bicycle distributor into a diversified super holding group, following the entry of PT Penajam Makmur Jaya as the new controlling shareholder in 2026.', id: 'Bike berevolusi dari distributor sepeda menjadi grup holding super terdiversifikasi, seiring masuknya PT Penajam Makmur Jaya sebagai pengendali baru pada 2026.', zh: 'Bike 已从自行车分销商发展为多元化超级控股集团，随着 PT Penajam Makmur Jaya 于2026年成为新的控股股东。' },
    backgroundImage: undefined,
  },
  overview: {
    sectionHeader: {
      eyebrow: { en: 'Company Overview', id: 'Ikhtisar Perusahaan', zh: '公司概览' },
      heading: { en: 'Who We Are', id: 'Siapa Kami', zh: '我们是谁' },
    },
    paragraphs: [
      { en: 'PT Sepeda Bersama Indonesia (SBI) was established in Tangerang in 2017 as a bicycle distributor, holding the Genio Bike brand and serving as the largest distributor of United Bike and Avand brand bicycles in Indonesia — distributing more than 100 types and 300 variants of bicycles annually through 319 stores across Java, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, and Papua.', id: 'PT Sepeda Bersama Indonesia (SBI) didirikan di Tangerang pada 2017 sebagai distributor sepeda, memegang merek Genio Bike serta menjadi distributor terbesar sepeda merek United Bike dan Avand di Indonesia — mendistribusikan lebih dari 100 jenis dan 300 varian sepeda setiap tahun melalui 319 toko yang tersebar di Jawa, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, dan Papua.', zh: 'PT Sepeda Bersama Indonesia (SBI) 于2017年在坦格朗成立，是一家自行车分销商，持有 Genio Bike 品牌，同时也是印尼 United Bike 和 Avand 品牌自行车最大的分销商——每年通过319家门店分销超过100种和300个变型的自行车，覆盖爪哇、巴厘、苏门答腊、加里曼丹、苏拉威西、努沙登加拉、马鲁古和巴布亚。' },
      { en: "SBI's journey entered a new chapter when PT Penajam Makmur Jaya became the new controlling shareholder, now holding 74.90% of the Company's shares. Through the Extraordinary General Meeting of Shareholders on 2 July 2026, shareholders approved a comprehensive transformation: changes to the Board of Directors and Board of Commissioners, as well as the change of the Company's name and identity from PT Sepeda Bersama Indonesia Tbk to PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE).", id: 'Perjalanan SBI memasuki babak baru ketika PT Penajam Makmur Jaya masuk sebagai pemegang saham pengendali baru, kini menguasai 74,90% saham Perseroan. Melalui Rapat Umum Pemegang Saham Luar Biasa pada 2 Juli 2026, para pemegang saham menyetujui transformasi menyeluruh: perubahan susunan Direksi dan Dewan Komisaris, serta perubahan nama dan identitas Perseroan dari PT Sepeda Bersama Indonesia Tbk menjadi PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE).', zh: '当 PT Penajam Makmur Jaya 成为新控股股东时，SBI 的历程翻开了新篇章，目前持有公司74.90%的股份。通过2026年7月2日的临时股东大会，股东们批准了全面转型：更改董事会和监事会的组成，并将公司名称和身份从 PT Sepeda Bersama Indonesia Tbk 更改为 PT Bhineka Inovasi Ketahanan Energi Tbk (BIKE)。' },
      { en: 'Under this new identity, BIKE carries a broader strategic direction — resilience investments in technology, maritime, food, infrastructure, and data — while remaining grounded in the distribution business foundation built since 2017. This transformation is further supported by the approval of new business lines and funding facilities to accelerate the Company\'s development.', id: 'Di bawah identitas baru ini, BIKE membawa arah strategis yang lebih luas — investasi ketahanan di bidang teknologi, kelautan, pangan, infrastruktur, dan data — sambil tetap berpijak pada fondasi bisnis distribusi yang telah dibangun sejak 2017. Transformasi ini turut didukung persetujuan penambahan bidang usaha baru serta fasilitas pendanaan untuk mempercepat pengembangan Perseroan.', zh: '在这一新身份下，BIKE 承载着更广阔的战略方向——在科技、海洋、粮食、基础设施和数据领域进行韧性投资——同时立足于自2017年以来建立的分销业务基础。这一转型还得到新增业务领域批准和融资支持，以加速公司发展。' },
    ],
  },
  info: {
    sectionHeader: {
      eyebrow: { en: 'Corporate Information', id: 'Informasi Korporat', zh: '企业信息' },
      heading: { en: 'Company Information', id: 'Informasi Perusahaan', zh: '公司信息' },
    },
    items: [
      { label: { en: 'Company Name', id: 'Nama Perusahaan', zh: '公司名称' }, value: { en: 'PT Bhineka Inovasi Ketahanan Energi Tbk (formerly PT Sepeda Bersama Indonesia Tbk)', id: 'PT Bhineka Inovasi Ketahanan Energi Tbk (sebelumnya PT Sepeda Bersama Indonesia Tbk)', zh: 'PT Bhineka Inovasi Ketahanan Energi Tbk（前身为 PT Sepeda Bersama Indonesia Tbk）' } },
      { label: { en: 'Founded', id: 'Didirikan', zh: '成立时间' }, value: { en: '2017', id: '2017', zh: '2017' } },
      { label: { en: 'Head Office', id: 'Kantor Pusat', zh: '总部' }, value: { en: 'Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia', id: 'Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia', zh: 'Jl. Alam Sutera Boulevard Kav. 12A, Pakulonan, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia' } },
      { label: { en: 'Group Structure', id: 'Struktur Grup', zh: '集团架构' }, value: { en: 'Super Holding Company', id: 'Perusahaan Holding Super', zh: '超级控股公司' } },
      { label: { en: 'Business Sectors', id: 'Sektor Bisnis', zh: '业务领域' }, value: { en: '9 Strategic Sectors', id: '9 Sektor Strategis', zh: '9大战略领域' } },
      { label: { en: 'Operations', id: 'Operasi', zh: '运营地区' }, value: { en: 'Java, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, Papua (Indonesia)', id: 'Jawa, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, Papua (Indonesia)', zh: '爪哇、巴厘、苏门答腊、加里曼丹、苏拉威西、努沙登加拉、马鲁古、巴布亚（印尼）' } },
      { label: { en: 'Website', id: 'Situs Web', zh: '网站' }, value: { en: 'bike-tbk.co.id', id: 'bike-tbk.co.id', zh: 'bike-tbk.co.id' } },
      { label: { en: 'Listed on', id: 'Tercatat di', zh: '上市交易所' }, value: { en: 'Indonesia Stock Exchange (IDX)', id: 'Bursa Efek Indonesia (BEI)', zh: '印尼证券交易所 (IDX)' } },
      { label: { en: 'Stock Code', id: 'Kode Saham', zh: '股票代码' }, value: { en: 'BIKE', id: 'BIKE', zh: 'BIKE' } },
    ],
  },
  visionMission: {
    sectionHeader: {
      eyebrow: { en: 'Our Direction', id: 'Arah Kami', zh: '我们的方向' },
      heading: { en: 'Vision & Mission', id: 'Visi & Misi', zh: '愿景与使命' },
    },
    vision: {
      label: { en: 'Vision', id: 'Visi', zh: '愿景' },
      statement: { en: 'To be a leading company that builds the world by maintaining harmony between human life and the universe.', id: 'Menjadi perusahaan terkemuka yang membangun dunia dengan menjaga keseimbangan antara kehidupan manusia dan alam semesta.', zh: '成为一家在建设世界的同时维护人类与自然和谐共生的卓越企业。' },
    },
    mission: {
      title: { en: 'Mission', id: 'Misi', zh: '使命' },
      items: [
        { title: { en: 'Transformation', id: 'Transformasi', zh: '转型' }, description: { en: 'To be an adaptive, innovative, and sustainable company through business transformation into strategic sectors with long-term growth prospects.', id: 'Menjadi perusahaan yang adaptif, inovatif, dan berkelanjutan melalui transformasi bisnis ke sektor-sektor strategis dengan prospek pertumbuhan jangka panjang.', zh: '通过向具有长期增长前景的战略领域进行业务转型，成为一家适应性强、创新且可持续的企业。' } },
        { title: { en: 'Transition', id: 'Transisi', zh: '过渡' }, description: { en: 'Support national energy transition programs, energy security, data security, and technology and infrastructure digitalization.', id: 'Mendukung program transisi energi nasional, ketahanan energi, keamanan data, dan digitalisasi pengembangan teknologi serta infrastruktur.', zh: '支持国家能源转型计划、能源安全、数据安全以及科技与基础设施的数字化发展。' } },
        { title: { en: 'Growth', id: 'Pertumbuhan', zh: '增长' }, description: { en: 'Create sustainable growth and added value for investors, shareholders, and all stakeholders.', id: 'Menciptakan pertumbuhan berkelanjutan dan nilai tambah bagi investor, pemegang saham, serta seluruh pemangku kepentingan.', zh: '为投资者、股东及所有利益相关者创造可持续增长和附加价值。' } },
      ],
    },
  },
  culture: {
    sectionHeader: {
      heading: { en: 'Our Culture', id: 'Budaya Kami', zh: '企业文化' },
    },
    introduction: { en: 'Building a strong corporate character, customer-oriented corporate culture, and corporate identity as the company\'s hallmark.', id: 'Membangun karakter perusahaan yang kuat, budaya perusahaan yang berorientasi pelanggan, dan identitas korporat sebagai ciri khas perusahaan.', zh: '打造强大的企业品格、以客户为导向的企业文化，以及作为企业标志的企业身份。' },
    cards: [
      { icon: 'TreePine', title: { en: 'Human & Environment', id: 'Manusia & Lingkungan', zh: '人与环境' }, description: { en: 'Promote honesty, responsibility, trust and environmental awareness.', id: 'Mempromosikan kejujuran, tanggung jawab, kepercayaan dan kesadaran lingkungan.', zh: '倡导诚实、责任、信任和环保意识。' } },
      { icon: 'HeartHandshake', title: { en: 'Human & Customers', id: 'Manusia & Pelanggan', zh: '人与客户' }, description: { en: 'Deliver beyond expectations through empathy and excellent service.', id: 'Memberikan lebih dari yang diharapkan melalui empati dan layanan yang excellent.', zh: '通过同理心和卓越服务超越期望。' } },
      { icon: 'Users', title: { en: 'Human & Partners', id: 'Manusia & Mitra', zh: '人与合作伙伴' }, description: { en: 'Build long-term partnerships based on fairness and mutual growth.', id: 'Membangun kemitraan jangka panjang berdasarkan keadilan dan pertumbuhan bersama.', zh: '基于公平和共同增长建立长期合作伙伴关系。' } },
      { icon: 'Lightbulb', title: { en: 'Innovation & People', id: 'Inovasi & Orang', zh: '创新与人才' }, description: { en: 'Support continuous development of people, products, services and innovation.', id: 'Mendukung pengembangan berkelanjutan orang, produk, layanan dan inovasi.', zh: '支持人才、产品、服务和创新的持续发展。' } },
    ],
  },
  management: {
    sectionHeader: {
      eyebrow: { en: 'Leadership', id: 'Kepemimpinan', zh: '领导层' },
      heading: { en: 'Management Profile', id: 'Profil Manajemen', zh: '管理层简介' },
    },
    introduction: { en: 'Meet the experienced leaders guiding Bike through strategic growth, innovation, and responsible corporate governance.', id: 'Temui pemimpin berpengalaman yang memandu Bike melalui pertumbuhan strategis, inovasi, dan tata kelola perusahaan yang bertanggung jawab.', zh: '认识引领 Bike 实现战略增长、创新和负责任公司治理的经验丰富的领导者。' },
    placeholder: { en: 'Management profiles will be available soon. Please check back later.', id: 'Profil manajemen akan segera tersedia. Silakan periksa kembali nanti.', zh: '管理层简介即将发布，请稍后回来查看。' },
    viewBiographyLabel: { en: 'View Biography', id: 'Lihat Biografi', zh: '查看简历' },
    executives: [
      {
        name: 'Sendi',
        position: { en: 'President Commissioner', id: 'Komisaris Utama', zh: '总裁专员' },
        slug: { _type: 'slug', current: 'sendi' },
      },
      {
        name: 'Muhammad Reagy Sukmana',
        position: { en: 'Independent Commissioner', id: 'Komisaris Independen', zh: '独立专员' },
        slug: { _type: 'slug', current: 'muhammad-reagy-sukmana' },
      },
      {
        name: 'Eric Kusuma',
        position: { en: 'President Director', id: 'Direktur Utama', zh: '总裁董事' },
        slug: { _type: 'slug', current: 'eric-kusuma' },
      },
      {
        name: 'Muhammad Kuswandi',
        position: { en: 'Director I', id: 'Direktur I', zh: '董事一' },
        slug: { _type: 'slug', current: 'muhammad-kuswandi' },
      },
      {
        name: 'Nadila Syafira',
        position: { en: 'Director II', id: 'Direktur II', zh: '董事二' },
        slug: { _type: 'slug', current: 'nadila-syafira' },
      },
      {
        name: 'Andrew Mulyadi',
        position: { en: 'Director III', id: 'Direktur III', zh: '董事三' },
        slug: { _type: 'slug', current: 'andrew-mulyadi' },
      },
    ],
  },
  milestonesSection: {
    sectionHeader: {
      eyebrow: { en: 'Our Journey', id: 'Perjalanan Kami', zh: '我们的历程' },
      heading: { en: 'Company Milestones.', id: 'Tonggak Perusahaan.', zh: '公司里程碑。' },
    },
    cards: [
      {
        year: '2017',
        title: { en: 'Company Established', id: 'Perusahaan Didirikan', zh: '公司成立' },
        description: { en: 'Company established in October 2017 as PT Sepeda Bersama Indonesia.', id: 'Perusahaan didirikan pada Oktober 2017 sebagai PT Sepeda Bersama Indonesia.', zh: '公司于2017年10月成立，名为 PT Sepeda Bersama Indonesia。' },
      },
      {
        year: '2021',
        title: { en: 'Business Expansion', id: 'Ekspansi Bisnis', zh: '业务扩张' },
        description: { en: 'Expanded distribution network with 319 dealers across Indonesia, becoming the largest distributor for Genio, United, and Avand bicycles.', id: 'Memperluas jaringan distribusi dengan 319 dealer di seluruh Indonesia, menjadi distributor terbesar untuk sepeda Genio, United, dan Avand.', zh: '扩展分销网络，在印尼拥有319家经销商，成为 Genio、United 和 Avand 自行车的最大分销商。' },
      },
      {
        year: '2022',
        title: { en: 'Initial Public Offering', id: 'Penawaran Umum Perdana', zh: '首次公开募股' },
        description: { en: 'Initial Public Offering (IPO) on the Indonesia Stock Exchange with stock code BIKE.', id: 'Penawaran umum perdana (IPO) di Bursa Efek Indonesia dengan kode saham BIKE.', zh: '在印尼证券交易所首次公开募股（IPO），股票代码为 BIKE。' },
      },
      {
        year: '2 Juli 2026',
        title: { en: 'RUPSLB & Corporate Transformation', id: 'RUPSLB & Transformasi Perusahaan', zh: '临时股东大会与公司转型' },
        description: { en: 'Extraordinary General Meeting of Shareholders approved the change of name to PT Bhineka Inovasi Ketahanan Energi Tbk, change of logo, and new Board of Directors and Board of Commissioners.', id: 'Rapat Umum Pemegang Saham Luar Biasa menyetujui perubahan nama menjadi PT Bhineka Inovasi Ketahanan Energi Tbk, perubahan logo, dan susunan Direksi dan Dewan Komisaris baru.', zh: '临时股东大会批准更名为 PT Bhineka Inovasi Ketahanan Energi Tbk、更换标志，以及新的董事会和监事会组成。' },
      },
    ],
  },
  cta: {
    title: { en: 'Partner with Bike for a Sustainable Future.', id: 'Berkolaborasi dengan Bike untuk Masa Depan Berkelanjutan.', zh: '与 Bike 携手共创可持续未来。' },
    description: { en: 'Whether you\'re a business partner, investor, or community stakeholder, we\'re ready to connect and explore opportunities together.', id: 'Baik Anda mitra bisnis, investor, atau pemangku kepentingan masyarakat, kami siap terhubung dan menjelajahi peluang bersama.', zh: '无论您是业务合作伙伴、投资者还是社区利益相关者，我们都随时准备与您联系，共同探索机遇。' },
    primaryButton: { label: { en: 'Contact Us', id: 'Hubungi Kami', zh: '联系我们' }, href: '/contact', external: false },
    secondaryButton: { label: { en: 'Get Directions', id: 'Petunjuk Arah', zh: '获取路线' }, href: 'https://maps.google.com', external: true },
  },
};
