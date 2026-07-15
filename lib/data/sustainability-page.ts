import type { SustainabilityPage } from "@/lib/types/sanity";

export const SUSTAINABILITY_PAGE: SustainabilityPage = {
  _id: 'sustainability-page-fallback',
  _type: 'sustainabilityPage',
  seo: {
    title: { en: 'Sustainability - Bike', id: 'Keberlanjutan - Bike', zh: '可持续发展 - Bike' },
    description: { en: 'Our commitment to environmental stewardship, social responsibility, and sustainable governance practices.', id: 'Komitmen kami terhadap pengelolaan lingkungan, tanggung jawab sosial, dan praktik tata kelola yang berkelanjutan.', zh: '我们致力于环境管理、社会责任和可持续治理实践。' },
  },
  hero: {
    eyebrow: { en: 'Sustainability', id: 'Keberlanjutan', zh: '可持续发展' },
    headline: { en: 'Building a Sustainable Future.', id: 'Membangun Masa Depan Berkelanjutan.', zh: '共建可持续未来。' },
    description: { en: 'Our commitment to environmental stewardship, social responsibility, and governance practices that create long-term value for all stakeholders.', id: 'Komitmen kami terhadap pengelolaan lingkungan, tanggung jawab sosial, dan praktik tata kelola yang menciptakan nilai jangka panjang bagi semua pemangku kepentingan.', zh: '我们致力于环境管理、社会责任和治理实践，为所有利益相关者创造长期价值。' },
    backgroundImage: undefined,
  },
  overview: {
    sectionHeader: {
      eyebrow: { en: 'Overview', id: 'Ikhtisar', zh: '概述' },
      heading: { en: 'Our Sustainability Approach', id: 'Pendekatan Keberlanjutan Kami', zh: '我们的可持续发展方针' },
      description: { en: 'Sustainability is embedded in our business strategy, guiding how we operate and create value.', id: 'Keberlanjutan tertanam dalam strategi bisnis kami, memandu cara kami beroperasi dan menciptakan nilai.', zh: '可持续发展已融入我们的商业战略，指导我们的运营和价值创造方式。' },
    },
    paragraphs: [
      { en: 'At Bike Tbk, sustainability is not just a commitment — it is a core business strategy. We integrate Environmental, Social, and Governance (ESG) principles into every aspect of our operations, from supply chain management to community engagement.', id: 'Di Bike Tbk, keberlanjutan bukan sekadar komitmen — ini adalah strategi bisnis inti. Kami mengintegrasikan prinsip Lingkungan, Sosial, dan Tata Kelola (ESG) ke dalam setiap aspek operasi kami, dari manajemen rantai pasokan hingga keterlibatan masyarakat.', zh: '在 Bike Tbk，可持续发展不仅仅是一种承诺——它是核心商业战略。我们将环境、社会和治理（ESG）原则融入运营的各个方面，从供应链管理到社区参与。' },
      { en: 'Our sustainability framework aligns with global standards including the UN Sustainable Development Goals (SDGs), ensuring our contributions are measurable, transparent, and impactful across all 15 countries where we operate.', id: 'Kerangka keberlanjutan kami selaras dengan standar global termasuk Tujuan Pembangunan Berkelanjutan PBB (SDGs), memastikan kontribusi kami terukur, transparan, dan berdampak di seluruh 15 negara tempat kami beroperasi.', zh: '我们的可持续发展框架与包括联合国可持续发展目标（SDGs）在内的全球标准保持一致，确保我们的贡献在我们运营的所有15个国家都是可衡量、透明和有影响力的。' },
    ],
    image: undefined,
  },
  esgCommitment: {
    sectionHeader: {
      eyebrow: { en: 'ESG', id: 'ESG', zh: 'ESG' },
      heading: { en: 'Our ESG Commitment', id: 'Komitmen ESG Kami', zh: '我们的ESG承诺' },
      description: { en: 'Three pillars guiding our sustainability strategy across all operations.', id: 'Tiga pilar yang memandu strategi keberlanjutan kami di seluruh operasi.', zh: '指导我们所有运营可持续发展战略的三大支柱。' },
    },
    cards: [
      {
        _key: 'esg-e',
        icon: 'Leaf',
        title: { en: 'Environmental', id: 'Lingkungan', zh: '环境' },
        description: { en: 'Minimizing environmental impact through responsible resource management, emissions reduction, and sustainable practices.', id: 'Meminimalkan dampak lingkungan melalui manajemen sumber daya yang bertanggung jawab, pengurangan emisi, dan praktik berkelanjutan.', zh: '通过负责任的资源管理、减排和可持续实践来最小化环境影响。' },
      },
      {
        _key: 'esg-s',
        icon: 'Users',
        title: { en: 'Social', id: 'Sosial', zh: '社会' },
        description: { en: 'Investing in people, communities, and inclusive growth that benefits all stakeholders across our value chain.', id: 'Berinvestasi dalam manusia, masyarakat, dan pertumbuhan inklusif yang menguntungkan semua pemangku kepentingan di seluruh rantai nilai kami.', zh: '投资于人才、社区和包容性增长，使价值链上的所有利益相关者受益。' },
      },
      {
        _key: 'esg-g',
        icon: 'ShieldCheck',
        title: { en: 'Governance', id: 'Tata Kelola', zh: '治理' },
        description: { en: 'Maintaining the highest standards of corporate governance, transparency, and ethical business conduct.', id: 'Menjaga standar tertinggi tata kelola perusahaan, transparansi, dan perilaku bisnis yang etis.', zh: '维持最高标准的公司治理、透明度和道德商业行为。' },
      },
    ],
  },
  environmentalInitiatives: {
    sectionHeader: {
      eyebrow: { en: 'Environmental', id: 'Lingkungan', zh: '环境' },
      heading: { en: 'Environmental Initiatives', id: 'Inisiatif Lingkungan', zh: '环境倡议' },
      description: { en: 'Concrete actions to reduce our environmental footprint and promote ecological sustainability.', id: 'Tindakan nyarat untuk mengurangi jejak lingkungan kami dan mempromosikan keberlanjutan ekologis.', zh: '减少环境足迹和促进生态可持续性的具体行动。' },
    },
    cards: [
      {
        _key: 'env-1',
        icon: 'Leaf',
        title: { en: 'Carbon Reduction', id: 'Pengurangan Karbon', zh: '碳减排' },
        description: { en: 'Systematic reduction of greenhouse gas emissions across all operations with targets aligned to the Paris Agreement.', id: 'Pengurangan sistematis emisi gas rumah kaca di seluruh operasi dengan target yang selaras dengan Persetujuan Paris.', zh: '在所有运营中系统性减少温室气体排放，目标与《巴黎协定》保持一致。' },
      },
      {
        _key: 'env-2',
        icon: 'Recycle',
        title: { en: 'Waste Management', id: 'Manajemen Limbah', zh: '废物管理' },
        description: { en: 'Comprehensive waste reduction, recycling, and circular economy programs across all facilities and supply chains.', id: 'Program pengurangan limbah, daur ulang, dan ekonomi sirkular yang komprehensif di seluruh fasilitas dan rantai pasokan.', zh: '在所有设施和供应链中实施全面的废物减量、回收和循环经济计划。' },
      },
      {
        _key: 'env-3',
        icon: 'Droplets',
        title: { en: 'Water Stewardship', id: 'Pengelolaan Air', zh: '水资源管理' },
        description: { en: 'Responsible water usage and conservation practices, ensuring efficient consumption and protection of water resources.', id: 'Praktik penggunaan dan konservasi air yang bertanggung jawab, memastikan konsumsi yang efisien dan perlindungan sumber daya air.', zh: '负责任的水资源使用和保护实践，确保高效消耗和水资源保护。' },
      },
      {
        _key: 'env-4',
        icon: 'Sun',
        title: { en: 'Renewable Energy', id: 'Energi Terbarukan', zh: '可再生能源' },
        description: { en: 'Transitioning to renewable energy sources, with investments in solar, wind, and other clean energy technologies.', id: 'Transisi menuju sumber energi terbarukan, dengan investasi dalam tenaga surya, angin, dan teknologi energi bersih lainnya.', zh: '向可再生能源转型，投资太阳能、风能和其他清洁能源技术。' },
      },
    ],
  },
  socialResponsibility: {
    sectionHeader: {
      eyebrow: { en: 'Social', id: 'Sosial', zh: '社会' },
      heading: { en: 'Social Responsibility', id: 'Tanggung Jawab Sosial', zh: '社会责任' },
      description: { en: 'Investing in people and communities to create shared value and inclusive growth.', id: 'Berinvestasi dalam manusia dan masyarakat untuk menciptakan nilai bersama dan pertumbuhan inklusif.', zh: '投资于人才和社区，创造共享价值和包容性增长。' },
    },
    cards: [
      {
        _key: 'soc-1',
        icon: 'GraduationCap',
        title: { en: 'Education Programs', id: 'Program Pendidikan', zh: '教育项目' },
        description: { en: 'Scholarships, vocational training, and educational partnerships that empower the next generation of leaders.', id: 'Beasiswa, pelatihan vokasional, dan kemitraan pendidikan yang memberdayakan generasi pemimpin berikutnya.', zh: '奖学金、职业培训和教育合作，赋能下一代领导者。' },
      },
      {
        _key: 'soc-2',
        icon: 'HeartPulse',
        title: { en: 'Community Health', id: 'Kesehatan Masyarakat', zh: '社区健康' },
        description: { en: 'Healthcare access initiatives, wellness programs, and partnerships that improve community well-being.', id: 'Inisiatif akses kesehatan, program kesehatan, dan kemitraan yang meningkatkan kesejahteraan masyarakat.', zh: '医疗保健准入倡议、健康计划和合作伙伴关系，改善社区福祉。' },
      },
      {
        _key: 'soc-3',
        icon: 'Users',
        title: { en: 'Diversity & Inclusion', id: 'Keberagaman & Inklusi', zh: '多元与包容' },
        description: { en: 'Fostering an inclusive workplace that celebrates diversity and ensures equal opportunity for all employees.', id: 'Membangun tempat kerja inklusif yang merayakan keberagaman dan memastikan kesempatan yang setara bagi semua karyawan.', zh: '营造包容的工作场所，庆祝多元化并确保所有员工享有平等机会。' },
      },
    ],
  },
  governanceIntegration: {
    sectionHeader: {
      eyebrow: { en: 'Governance', id: 'Tata Kelola', zh: '治理' },
      heading: { en: 'Governance Integration', id: 'Integrasi Tata Kelola', zh: '治理融合' },
      description: { en: 'Embedding sustainability into our governance framework and decision-making processes.', id: 'Menanamkan keberlanjutan ke dalam kerangka tata kelola dan proses pengambilan keputusan kami.', zh: '将可持续发展融入我们的治理框架和决策过程。' },
    },
    cards: [
      {
        _key: 'gov-1',
        icon: 'ClipboardCheck',
        title: { en: 'ESG Reporting', id: 'Pelaporan ESG', zh: 'ESG报告' },
        description: { en: 'Transparent, standardized reporting on ESG performance aligned with international frameworks and best practices.', id: 'Pelaporan yang transparan dan terstandar tentang kinerja ESG yang selaras dengan kerangka internasional dan praktik terbaik.', zh: '按照国际框架和最佳实践，对ESG绩效进行透明、标准化的报告。' },
      },
      {
        _key: 'gov-2',
        icon: 'Scale',
        title: { en: 'Ethical Standards', id: 'Standar Etika', zh: '道德标准' },
        description: { en: 'Code of conduct and ethics policies that guide all business decisions and stakeholder interactions.', id: 'Kode etik dan kebijakan etika yang memandu semua keputusan bisnis dan interaksi pemangku kepentingan.', zh: '指导所有商业决策和利益相关者互动的行为准则和道德政策。' },
      },
      {
        _key: 'gov-3',
        icon: 'ShieldCheck',
        title: { en: 'Risk Oversight', id: 'Pengawasan Risiko', zh: '风险监督' },
        description: { en: 'Integrated risk management that considers environmental and social risks alongside financial and operational risks.', id: 'Manajemen risiko terintegrasi yang mempertimbangkan risiko lingkungan dan sosial bersama risiko keuangan dan operasional.', zh: '综合考虑环境和社会风险以及财务和运营风险的综合风险管理。' },
      },
    ],
  },
  cta: {
    title: { en: 'Join Us in Building a Sustainable Future.', id: 'Bergabunglah dengan Kami dalam Membangun Masa Depan Berkelanjutan.', zh: '加入我们，共建可持续未来。' },
    description: { en: 'Discover how our sustainability initiatives are creating positive change across communities and industries.', id: 'Temukan bagaimana inisiatif keberlanjutan kami menciptakan perubahan positif di seluruh masyarakat dan industri.', zh: '了解我们的可持续发展倡议如何在社区和行业中创造积极变化。' },
    primaryButton: { label: { en: 'Contact Us', id: 'Hubungi Kami', zh: '联系我们' }, href: '/contact', external: false },
    secondaryButton: { label: { en: 'Our Governance', id: 'Tata Kelola Kami', zh: '我们的治理' }, href: '/governance', external: false },
  },
};
