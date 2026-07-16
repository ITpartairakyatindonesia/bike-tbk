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
      { en: 'Our company is committed to acting ethically and contributing to economic development while improving the quality of life of our employees, local communities, and society at large. Corporate Social Responsibility (CSR) balances the pursuit of profit with social and environmental responsibility.', id: 'Perusahaan kami berkomitmen untuk bertindak etis dan berkontribusi pada pembangunan ekonomi, sekaligus meningkatkan kualitas hidup karyawan, komunitas lokal, dan masyarakat luas. Tanggung Jawab Sosial Perusahaan (CSR) menyeimbangkan pencarian profit dengan tanggung jawab sosial dan lingkungan.', zh: '我们公司致力于合乎道德地行事，为经济发展做出贡献，同时提高员工、当地社区和广大社会的生活质量。企业社会责任（CSR）在追求利润与社会和环境责任之间取得平衡。' },
    ],
    image: undefined,
  },
  esgCommitment: {
    sectionHeader: {
      eyebrow: { en: 'Triple Bottom Line', id: 'Triple Bottom Line', zh: '三重底线' },
      heading: { en: 'Our Sustainability Pillars', id: 'Pilar Keberlanjutan Kami', zh: '我们的可持续发展支柱' },
      description: { en: 'Three pillars guiding our sustainability strategy: Profit, People, and Planet.', id: 'Tiga pilar yang memandu strategi keberlanjutan kami: Profit, People, dan Planet.', zh: '指导我们可持续发展战略的三大支柱：利润、人和地球。' },
    },
    cards: [
      {
        _key: 'esg-profit',
        icon: 'TrendingUp',
        title: { en: 'Profit', id: 'Profit', zh: '利润' },
        description: { en: 'The company must remain profit-oriented to sustain business continuity and economic value.', id: 'Perusahaan harus tetap berorientasi profit untuk menjaga keberlangsungan bisnis dan nilai ekonomi.', zh: '公司必须保持以利润为导向，以维持业务连续性和经济价值。' },
      },
      {
        _key: 'esg-people',
        icon: 'Users',
        title: { en: 'People', id: 'People', zh: '人' },
        description: { en: 'Caring for the welfare of employees, local communities, and society at large — including education and health programs.', id: 'Kepedulian terhadap kesejahteraan karyawan, komunitas lokal, dan masyarakat luas — termasuk program pendidikan dan kesehatan.', zh: '关爱员工、当地社区和广大社会的福祉——包括教育和健康项目。' },
      },
      {
        _key: 'esg-planet',
        icon: 'Leaf',
        title: { en: 'Planet', id: 'Planet', zh: '地球' },
        description: { en: 'Responsibility for environmental sustainability, carbon footprint reduction, and waste management.', id: 'Tanggung jawab terhadap keberlanjutan lingkungan, pengurangan jejak karbon, dan pengelolaan limbah.', zh: '对环境可持续性、减少碳足迹和废物管理的责任。' },
      },
    ],
  },
  environmentalInitiatives: {
    sectionHeader: {
      eyebrow: { en: 'Environmental', id: 'Lingkungan', zh: '环境' },
      heading: { en: 'Environmental Initiatives', id: 'Inisiatif Lingkungan', zh: '环境倡议' },
      description: { en: 'Environmental protection and worker health are core pillars of our Enterprise Risk Management (EHS/K3).', id: 'Perlindungan lingkungan dan kesehatan pekerja adalah pilar utama Manajemen Risiko Perusahaan (aspek EHS/K3).', zh: '环境保护和工人健康是我们企业风险管理（EHS/K3方面）的核心支柱。' },
    },
    cards: [
      {
        _key: 'env-1',
        icon: 'Recycle',
        title: { en: 'Waste Reduction', id: 'Pengurangan Limbah', zh: '废物减量' },
        description: { en: 'Service improvement and waste reduction are effective risk mitigation strategies to minimize operational issues.', id: 'Peningkatan layanan dan pengurangan limbah adalah strategi mitigasi risiko yang efektif untuk meminimalkan masalah operasional.', zh: '改善服务和减少废物是最大限度减少运营问题的有效风险缓解策略。' },
      },
      {
        _key: 'env-2',
        icon: 'ShieldCheck',
        title: { en: 'EHS / K3', id: 'EHS / K3', zh: 'EHS / K3' },
        description: { en: 'Environmental protection and worker health (EHS/K3) are core pillars of Enterprise Risk Management.', id: 'Perlindungan lingkungan dan kesehatan pekerja (EHS/K3) adalah pilar utama Manajemen Risiko Perusahaan.', zh: '环境保护和工人健康（EHS/K3）是企业风险管理的核心支柱。' },
      },
      {
        _key: 'env-3',
        icon: 'Leaf',
        title: { en: 'Environmental Protection', id: 'Perlindungan Lingkungan', zh: '环境保护' },
        description: { en: 'Commitment to environmental sustainability, carbon footprint reduction, and responsible resource management.', id: 'Komitmen terhadap keberlanjutan lingkungan, pengurangan jejak karbon, dan manajemen sumber daya yang bertanggung jawab.', zh: '致力于环境可持续性、减少碳足迹和负责任的资源管理。' },
      },
    ],
  },
  socialResponsibility: {
    sectionHeader: {
      eyebrow: { en: 'People', id: 'People', zh: '人' },
      heading: { en: 'Social Responsibility', id: 'Tanggung Jawab Sosial', zh: '社会责任' },
      description: { en: 'Caring for the welfare of employees, local communities, and society — the People pillar of our Triple Bottom Line.', id: 'Kepedulian terhadap kesejahteraan karyawan, komunitas lokal, dan masyarakat — pilar People dari Triple Bottom Line kami.', zh: '关爱员工、当地社区和社会的福祉——我们三重底线的"人"支柱。' },
    },
    cards: [
      {
        _key: 'soc-1',
        icon: 'GraduationCap',
        title: { en: 'Education Programs', id: 'Program Pendidikan', zh: '教育项目' },
        description: { en: 'Education initiatives that empower employees, local communities, and the broader society.', id: 'Inisiatif pendidikan yang memberdayakan karyawan, komunitas lokal, dan masyarakat luas.', zh: '赋能员工、当地社区和广大社会的教育倡议。' },
      },
      {
        _key: 'soc-2',
        icon: 'HeartPulse',
        title: { en: 'Health Programs', id: 'Program Kesehatan', zh: '健康项目' },
        description: { en: 'Health and wellness programs that improve the quality of life for employees and communities.', id: 'Program kesehatan dan kesejahteraan yang meningkatkan kualitas hidup karyawan dan masyarakat.', zh: '改善员工和社区生活质量的健康和福利项目。' },
      },
      {
        _key: 'soc-3',
        icon: 'Users',
        title: { en: 'Community Welfare', id: 'Kesejahteraan Masyarakat', zh: '社区福祉' },
        description: { en: 'Initiatives that support local communities and foster inclusive growth across our areas of operation.', id: 'Inisiatif yang mendukung komunitas lokal dan mendorong pertumbuhan inklusif di wilayah operasi kami.', zh: '支持当地社区并促进我们运营区域包容性增长的倡议。' },
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
