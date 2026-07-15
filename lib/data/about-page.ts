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
  headline: "Transforming into a Super Holding Company.",
  description:
    "Bike has evolved from a bicycle distribution company into a diversified super holding group, creating enduring value across energy, logistics, finance, healthcare, and infrastructure — operating in 15 countries.",
  backgroundImage: "/hero-tower.jpg",
};

export const ABOUT_OVERVIEW = {
  title: "Who We Are",
  paragraphs: [
    "Bike has transformed from a bicycle distribution company into a diversified super holding group. Our portfolio spans energy, logistics, finance, healthcare, and infrastructure, with operations across 15 countries. We are committed to creating enduring value through responsible business practices and sustainable growth.",
    "Our transformation reflects a strategic vision to diversify and strengthen our business foundation. By expanding into multiple high-growth sectors, we aim to build long-term value for shareholders, partners, and communities while maintaining the highest standards of corporate governance.",
  ],
};

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  { label: "Established", value: "2017" },
  { label: "Countries", value: "15" },
  { label: "Business Sectors", value: "5" },
  { label: "Group Structure", value: "Super Holding" },
  { label: "Listed on", value: "IDX" },
  { label: "Stock Code", value: "BIKE" },
];

export const ABOUT_INFO: AboutInfoItem[] = [
  { label: "Company Name", value: "PT Bike Tbk" },
  { label: "Founded", value: "2017" },
  { label: "Head Office", value: "Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia" },
  { label: "Group Structure", value: "Super Holding Company" },
  { label: "Business Sectors", value: "Energy, Logistics, Finance, Healthcare, Infrastructure" },
  { label: "Operations", value: "15 Countries" },
  { label: "Website", value: "www.bike-tbk.co.id" },
  { label: "Listed on", value: "Indonesia Stock Exchange (IDX)" },
  { label: "Stock Code", value: "BIKE" },
];

export const ABOUT_VISION = {
  eyebrow: "Our Direction",
  label: "Vision",
  statement:
    "To be a leading super holding company creating enduring value across industries through responsible business practices, innovation, and sustainable growth.",
};

export const ABOUT_MISSION: MissionItem[] = [
  {
    title: "Create Enduring Value",
    description:
      "Build and manage a diversified portfolio of businesses that generate long-term value across multiple industries.",
  },
  {
    title: "Drive Innovation",
    description:
      "Foster innovation across all business sectors to stay competitive and adapt to evolving market needs.",
  },
  {
    title: "Responsible Governance",
    description:
      "Maintain the highest standards of corporate governance, transparency, and accountability across all operations.",
  },
  {
    title: "Sustainable Growth",
    description:
      "Pursue growth strategies that balance economic performance with environmental stewardship and social responsibility.",
  },
  {
    title: "Empower Communities",
    description:
      "Create positive impact in the communities where we operate through responsible business practices and strategic investments.",
  },
];

export const ABOUT_CULTURE = {
  title: "Our Culture",
  subtitle: "Growing Together Through Human-Centered Values.",
  introduction:
    "At SBI, we believe that people are at the heart of every successful journey. Our culture is built on respect, integrity, and collaboration — empowering every individual to grow while contributing to a healthier and more sustainable Indonesia.",
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
    title: { en: 'Transforming into a Super Holding Company.', id: 'Bertransformasi menjadi Perusahaan Holding Super.', zh: '转型为超级控股集团。' },
    subtitle: { en: 'Bike has evolved from a bicycle distribution company into a diversified super holding group, creating enduring value across energy, logistics, finance, healthcare, and infrastructure — operating in 15 countries.', id: 'Bike telah berevolusi dari perusahaan distribusi sepeda menjadi grup holding super terdiversifikasi, menciptakan nilai abadi di seluruh energi, logistik, keuangan, perawatan kesehatan, dan infrastruktur — beroperasi di 15 negara.', zh: 'Bike 已从自行车分销公司发展为多元化超级控股集团，在能源、物流、金融、医疗保健和基础设施领域创造持久价值，业务遍及15个国家。' },
    backgroundImage: undefined,
  },
  overview: {
    sectionHeader: {
      eyebrow: { en: 'Company Overview', id: 'Ikhtisar Perusahaan', zh: '公司概览' },
      heading: { en: 'Who We Are', id: 'Siapa Kami', zh: '我们是谁' },
    },
    paragraphs: [
      { en: 'Bike has transformed from a bicycle distribution company into a diversified super holding group. Our portfolio spans energy, logistics, finance, healthcare, and infrastructure, with operations across 15 countries. We are committed to creating enduring value through responsible business practices and sustainable growth.', id: 'Bike telah bertransformasi dari perusahaan distribusi sepeda menjadi grup holding super terdiversifikasi. Portofolio kami mencakup energi, logistik, keuangan, perawatan kesehatan, dan infrastruktur, dengan operasi di 15 negara. Kami berkomitmen untuk menciptakan nilai abadi melalui praktik bisnis yang bertanggung jawab dan pertumbuhan berkelanjutan.', zh: 'Bike 已从自行车分销公司转型为多元化超级控股集团。我们的业务组合涵盖能源、物流、金融、医疗保健和基础设施，业务遍及15个国家。我们致力于通过负责任的商业实践和可持续增长创造持久价值。' },
      { en: 'Our transformation reflects a strategic vision to diversify and strengthen our business foundation. By expanding into multiple high-growth sectors, we aim to build long-term value for shareholders, partners, and communities while maintaining the highest standards of corporate governance.', id: 'Transformasi kami mencerminkan visi strategis untuk diversifikasi dan memperkuat fondasi bisnis kami. Dengan berekspansi ke berbagai sektor pertumbuhan tinggi, kami bertujuan membangun nilai jangka panjang bagi pemegang saham, mitra, dan masyarakat sambil mempertahankan standar tata kelola perusahaan tertinggi.', zh: '我们的转型体现了多元化和加强业务基础的战略愿景。通过扩展到多个高增长领域，我们旨在为股东、合作伙伴和社区创造长期价值，同时保持最高标准的公司治理。' },
    ],
  },
  info: {
    sectionHeader: {
      eyebrow: { en: 'Corporate Information', id: 'Informasi Korporat', zh: '企业信息' },
      heading: { en: 'Company Information', id: 'Informasi Perusahaan', zh: '公司信息' },
    },
    items: [
      { label: { en: 'Company Name', id: 'Nama Perusahaan', zh: '公司名称' }, value: { en: 'PT Bike Tbk', id: 'PT Bike Tbk', zh: 'PT Bike Tbk' } },
      { label: { en: 'Founded', id: 'Didirikan', zh: '成立时间' }, value: { en: '2017', id: '2017', zh: '2017' } },
      { label: { en: 'Head Office', id: 'Kantor Pusat', zh: '总部' }, value: { en: 'Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia', id: 'Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia', zh: 'Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia' } },
      { label: { en: 'Group Structure', id: 'Struktur Grup', zh: '集团架构' }, value: { en: 'Super Holding Company', id: 'Perusahaan Holding Super', zh: '超级控股公司' } },
      { label: { en: 'Business Sectors', id: 'Sektor Bisnis', zh: '业务领域' }, value: { en: 'Energy, Logistics, Finance, Healthcare, Infrastructure', id: 'Energi, Logistik, Keuangan, Kesehatan, Infrastruktur', zh: '能源、物流、金融、医疗保健、基础设施' } },
      { label: { en: 'Operations', id: 'Operasi', zh: '运营' }, value: { en: '15 Countries', id: '15 Negara', zh: '15个国家' } },
      { label: { en: 'Website', id: 'Situs Web', zh: '网站' }, value: { en: 'www.bike-tbk.co.id', id: 'www.bike-tbk.co.id', zh: 'www.bike-tbk.co.id' } },
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
      statement: { en: 'To be a leading super holding company creating enduring value across industries through responsible business practices, innovation, and sustainable growth.', id: 'Menjadi perusahaan holding super terkemuka yang menciptakan nilai abadi di seluruh industri melalui praktik bisnis yang bertanggung jawab, inovasi, dan pertumbuhan berkelanjutan.', zh: '成为领先的超级控股集团，通过负责任的商业实践、创新和可持续增长，跨行业创造持久价值。' },
    },
    mission: {
      title: { en: 'Mission', id: 'Misi', zh: '使命' },
      items: [
        { title: { en: 'Create Enduring Value', id: 'Menciptakan Nilai Abadi', zh: '创造持久价值' }, description: { en: 'Build and manage a diversified portfolio of businesses that generate long-term value across multiple industries.', id: 'Membangun dan mengelola portofolio bisnis terdiversifikasi yang menghasilkan nilai jangka panjang di berbagai industri.', zh: '建立和管理多元化业务组合，在多个行业创造长期价值。' } },
        { title: { en: 'Drive Innovation', id: 'Mendorong Inovasi', zh: '推动创新' }, description: { en: 'Foster innovation across all business sectors to stay competitive and adapt to evolving market needs.', id: 'Mendorong inovasi di seluruh sektor bisnis untuk tetap kompetitif dan beradaptasi dengan kebutuhan pasar yang terus berkembang.', zh: '在所有业务领域推动创新，保持竞争力并适应不断变化的市场需求。' } },
        { title: { en: 'Responsible Governance', id: 'Tata Kelola yang Bertanggung Jawab', zh: '负责任的治理' }, description: { en: 'Maintain the highest standards of corporate governance, transparency, and accountability across all operations.', id: 'Mempertahankan standar tertinggi tata kelola perusahaan, transparansi, dan akuntabilitas di seluruh operasi.', zh: '在所有运营中保持最高标准的公司治理、透明度和问责制。' } },
        { title: { en: 'Sustainable Growth', id: 'Pertumbuhan Berkelanjutan', zh: '可持续增长' }, description: { en: 'Pursue growth strategies that balance economic performance with environmental stewardship and social responsibility.', id: 'Menjalankan strategi pertumbuhan yang menyeimbangkan kinerja ekonomi dengan pengelolaan lingkungan dan tanggung jawab sosial.', zh: '追求平衡经济绩效与环境管理和社会责任的成长战略。' } },
        { title: { en: 'Empower Communities', id: 'Memberdayakan Masyarakat', zh: '赋能社区' }, description: { en: 'Create positive impact in the communities where we operate through responsible business practices and strategic investments.', id: 'Menciptakan dampak positif di masyarakat tempat kami beroperasi melalui praktik bisnis yang bertanggung jawab dan investasi strategis.', zh: '通过负责任的商业实践和战略投资，在我们运营的社区创造积极影响。' } },
      ],
    },
  },
  culture: {
    sectionHeader: {
      heading: { en: 'Our Culture', id: 'Budaya Kami', zh: '企业文化' },
    },
    introduction: { en: 'At Bike, we believe that people are at the heart of every successful journey. Our culture is built on respect, integrity, and collaboration — empowering every individual to grow while contributing to a sustainable future.', id: 'Di Bike, kami percaya bahwa orang-orang ada di jantung setiap perjalanan yang sukses. Budaya kami dibangun di atas rasa hormat, integritas, dan kolaborasi — memberdayakan setiap individu untuk tumbuh sambil berkontribusi pada masa depan yang berkelanjutan.', zh: '在 Bike，我们相信人是每次成功旅程的核心。我们的文化建立在尊重、诚信和协作的基础上——赋能每个人成长，同时为可持续未来做出贡献。' },
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
    executives: [],
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
        year: '2024',
        title: { en: 'Business Diversification', id: 'Diversifikasi Bisnis', zh: '业务多元化' },
        description: { en: 'Expanded into multiple business sectors including energy, logistics, finance, healthcare, and infrastructure.', id: 'Berekspansi ke berbagai sektor bisnis termasuk energi, logistik, keuangan, kesehatan, dan infrastruktur.', zh: '扩展至多个业务领域，包括能源、物流、金融、医疗保健和基础设施。' },
      },
      {
        year: '2025',
        title: { en: 'Transformation into Super Holding', id: 'Transformasi menjadi Super Holding', zh: '转型为超级控股' },
        description: { en: 'Transformed into a diversified super holding company with operations spanning 15 countries across multiple industries.', id: 'Bertransformasi menjadi perusahaan holding super terdiversifikasi dengan operasi yang mencakup 15 negara di berbagai industri.', zh: '转型为多元化超级控股集团，业务遍及15个国家，涵盖多个行业。' },
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
