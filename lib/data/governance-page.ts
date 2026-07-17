import type { GovernancePage } from "@/lib/types/sanity";

export const GOVERNANCE_PAGE: GovernancePage = {
  _id: 'governance-page-fallback',
  _type: 'governancePage',
  seo: {
    title: { en: 'Governance - Bike', id: 'Tata Kelola - Bike', zh: '公司治理 - Bike' },
    description: { en: 'Learn about Bike\'s corporate governance structure, policies, and commitment to transparency.', id: 'Pelajari struktur tata kelola perusahaan Bike, kebijakan, dan komitmen terhadap transparansi.', zh: '了解 Bike 的公司治理结构、政策及对透明度的承诺。' },
  },
  hero: {
    eyebrow: { en: 'Governance', id: 'Tata Kelola', zh: '公司治理' },
    headline: { en: 'Corporate Governance.', id: 'Tata Kelola Perusahaan.', zh: '企业治理。' },
    description: { en: 'Our commitment to transparency, accountability, and responsible business practices across all operations.', id: 'Komitmen kami terhadap transparansi, akuntabilitas, dan praktik bisnis yang bertanggung jawab di seluruh operasi.', zh: '我们致力于在所有运营中保持透明度、问责制和负责任的商业实践。' },
    backgroundImage: undefined,
  },
  overview: {
    sectionHeader: {
      eyebrow: { en: 'Overview', id: 'Ikhtisar', zh: '概述' },
      heading: { en: 'Governance Framework', id: 'Kerangka Tata Kelola', zh: '治理框架' },
      description: { en: 'Our governance structure ensures accountability, transparency, and responsible decision-making at every level.', id: 'Struktur tata kelola kami memastikan akuntabilitas, transparansi, dan pengambilan keputusan yang bertanggung jawab di setiap tingkat.', zh: '我们的治理结构确保各个层面的问责制、透明度和负责任的决策。' },
    },
    paragraphs: [
      { en: 'Bike Tbk is committed to maintaining the highest standards of corporate governance. Our framework is built on principles of transparency, accountability, fairness, and responsibility — ensuring that all stakeholders\' interests are protected and that the company operates with integrity.', id: 'Bike Tbk berkomitmen untuk mempertahankan standar tertinggi tata kelola perusahaan. Kerangka kami dibangun di atas prinsip transparansi, akuntabilitas, keadilan, dan tanggung jawab — memastikan bahwa kepentingan semua pemangku kepentingan dilindungi dan perusahaan beroperasi dengan integritas.', zh: 'Bike Tbk 致力于维持最高标准的公司治理。我们的框架建立在透明、问责、公平和责任的原则之上，确保所有利益相关者的利益得到保护，公司诚信运营。' },
      { en: 'Our governance structure includes a Board of Commissioners, Board of Directors, and specialized committees that oversee risk management, audit, and nomination. This multi-layered approach ensures robust oversight and balanced decision-making.', id: 'Struktur tata kelola kami mencakup Dewan Komisaris, Direksi, dan komite khusus yang mengawasi manajemen risiko, audit, dan nominasi. Pendekatan berlapis ini memastikan pengawasan yang kuat dan pengambilan keputusan yang seimbang.', zh: '我们的治理结构包括监事会、董事会和专门委员会，负责监督风险管理、审计和提名。这种多层次的方法确保了强有力的监督和平衡的决策。' },
    ],
    image: undefined,
  },
  principles: {
    sectionHeader: {
      eyebrow: { en: 'Principles', id: 'Prinsip', zh: '原则' },
      heading: { en: 'Governance Principles', id: 'Prinsip Tata Kelola', zh: '治理原则' },
      description: { en: 'The core principles that guide our corporate governance practices.', id: 'Prinsip inti yang memandu praktik tata kelola perusahaan kami.', zh: '指导我们公司治理实践的核心原则。' },
    },
    principles: [
      {
        _key: 'principle-1',
        icon: 'Eye',
        title: { en: 'Transparency', id: 'Transparansi', zh: '透明度' },
        description: { en: 'The company is required to present financial information openly, accurately, on time, and in a way that is easily accessible to stakeholders — including shareholders, investors, creditors, and regulators.', id: 'Perusahaan wajib menyajikan informasi keuangan secara terbuka, akurat, tepat waktu, dan mudah diakses oleh pemangku kepentingan — seperti pemegang saham, investor, kreditur, dan regulator.', zh: '公司必须公开、准确、及时且易于被利益相关者（包括股东、投资者、债权人和监管机构）获取地披露财务信息。' },
      },
      {
        _key: 'principle-2',
        icon: 'Scale',
        title: { en: 'Accountability', id: 'Akuntabilitas', zh: '问责制' },
        description: { en: 'Management must be able to account for the company\'s performance and financial management in measurable terms to shareholders and stakeholders.', id: 'Manajemen harus dapat mempertanggungjawabkan kinerja dan pengelolaan keuangan perusahaan secara terukur kepada pemegang saham dan pemangku kepentingan.', zh: '管理层必须以可衡量的方式向股东和利益相关者说明公司业绩和财务管理情况。' },
      },
      {
        _key: 'principle-3',
        icon: 'ShieldCheck',
        title: { en: 'Responsibility', id: 'Responsibilitas', zh: '责任' },
        description: { en: 'The company is required to comply with applicable laws and regulations, and to carry out social and environmental responsibilities.', id: 'Perusahaan wajib mematuhi peraturan perundang-undangan yang berlaku serta menjalankan tanggung jawab sosial dan lingkungan.', zh: '公司必须遵守适用的法律法规，并履行社会和环境责任。' },
      },
      {
        _key: 'principle-4',
        icon: 'Users',
        title: { en: 'Independence', id: 'Independensi', zh: '独立性' },
        description: { en: 'Financial management must be carried out professionally, free from conflicts of interest or pressure from any party that is not in accordance with regulations and good corporate governance principles.', id: 'Pengelolaan keuangan harus dilakukan secara profesional, tanpa benturan kepentingan atau tekanan dari pihak mana pun yang tidak sesuai dengan peraturan dan prinsip korporasi yang baik.', zh: '财务管理必须专业进行，不存在利益冲突或任何不符合法规和良好公司治理原则的外部压力。' },
      },
      {
        _key: 'principle-5',
        icon: 'Scale',
        title: { en: 'Fairness', id: 'Kewajaran', zh: '公平' },
        description: { en: 'The company must always consider the interests of shareholders and other stakeholders based on principles of equality and fairness.', id: 'Perusahaan harus selalu mempertimbangkan kepentingan pemegang saham dan pemangku kepentingan lain berdasarkan prinsip kesetaraan dan kewajaran.', zh: '公司必须始终基于平等和公平原则，考虑股东和其他利益相关者的利益。' },
      },
    ],
  },
  riskManagement: {
    sectionHeader: {
      eyebrow: { en: 'Risk Management', id: 'Manajemen Risiko', zh: '风险管理' },
      heading: { en: 'Risk Management', id: 'Manajemen Risiko', zh: '风险管理' },
      description: { en: 'Risk management factors include internal and external elements that influence the success of risk mitigation — from management commitment, risk-aware culture, to the root causes of risk itself.', id: 'Faktor manajemen risiko mencakup elemen internal dan eksternal yang memengaruhi keberhasilan mitigasi risiko — mulai dari komitmen manajemen, budaya sadar risiko, hingga akar penyebab risiko itu sendiri.', zh: '风险管理因素包括影响风险缓解成效的内部和外部要素——从管理层承诺、风险意识文化，到风险本身的根本原因。' },
    },
    subtitle: { en: 'Preventing Corporate Bankruptcy Risk', id: 'Mencegah Risiko Kebangkrutan Perusahaan', zh: '防范企业破产风险' },
    cards: [
      {
        _key: 'risk-1',
        icon: 'Users',
        title: { en: 'Focus on People and Sustainability', id: 'Fokus pada Manusia dan Keberlanjutan', zh: '关注人与可持续发展' },
        description: { en: 'Weak human resources are often the root cause of business failure. McKinsey studies show that the majority of corporate transformation failures are caused by human factors — poor execution, inability to adapt, and employee resistance.', id: 'SDM yang lemah kerap menjadi akar penyebab kegagalan bisnis. Studi McKinsey menunjukkan mayoritas kegagalan transformasi korporat disebabkan faktor manusia — eksekusi yang buruk, ketidakmampuan beradaptasi, dan resistensi karyawan.', zh: '人力资源薄弱往往是业务失败的根本原因。麦肯锡研究表明，大多数企业转型失败都是由人为因素造成的——执行不力、无法适应和员工抵触。' },
      },
      {
        _key: 'risk-2',
        icon: 'TrendingUp',
        title: { en: 'Grow the Economy and Create Jobs', id: 'Menumbuhkan Ekonomi dan Menciptakan Lapangan Kerja', zh: '发展经济并创造就业' },
        description: { en: 'Companies will fail if they cannot create and maintain jobs in the long term, because job creation indirectly reflects the business growth cycle.', id: 'Perusahaan akan gagal jika tidak mampu menciptakan dan mempertahankan lapangan kerja dalam jangka panjang, karena penciptaan kerja secara tidak langsung mencerminkan siklus pertumbuhan bisnis.', zh: '如果企业无法长期创造和维持就业机会，就会失败，因为就业创造间接反映了业务增长周期。' },
      },
      {
        _key: 'risk-3',
        icon: 'ClipboardCheck',
        title: { en: 'Improve Services and Reduce Waste', id: 'Meningkatkan Layanan dan Mengurangi Pemborosan', zh: '提升服务并减少浪费' },
        description: { en: 'An effective risk mitigation strategy to minimize the likelihood of operational problems or losses.', id: 'Strategi mitigasi risiko yang efektif untuk meminimalkan kemungkinan masalah operasional atau kerugian.', zh: '有效降低运营问题或损失可能性的风险缓解策略。' },
      },
      {
        _key: 'risk-4',
        icon: 'Leaf',
        title: { en: 'Protect Environment and Health', id: 'Melindungi Lingkungan dan Kesehatan', zh: '保护环境与健康' },
        description: { en: 'A main pillar of Enterprise Risk Management, known as EHS (Environment, Health, Safety) or K3 in Indonesia.', id: 'Pilar utama Enterprise Risk Management, dikenal sebagai aspek EHS (Environment, Health, Safety) atau K3 di Indonesia.', zh: '企业风险管理的主要支柱，在印度尼西亚被称为 EHS（环境、健康、安全）或 K3。' },
      },
    ],
  },
  corporateStatement: {
    sectionHeader: {
      eyebrow: { en: 'Our Commitment', id: 'Komitmen Kami', zh: '我们的承诺' },
      heading: { en: 'Corporate Statement', id: 'Pernyataan Perusahaan', zh: '公司声明' },
    },
    statement: { en: 'Bike Tbk is committed to implementing good, transparent, and responsible corporate governance — in line with our transformation into a super holding company that creates sustainable value for all stakeholders.', id: 'Bike Tbk berkomitmen menjalankan tata kelola perusahaan yang baik, transparan, dan bertanggung jawab — sejalan dengan transformasi kami menjadi perusahaan holding super yang menciptakan nilai berkelanjutan bagi seluruh pemangku kepentingan.', zh: 'Bike Tbk 致力于践行良好、透明和负责任的公司治理——这与我们转型为为所有利益相关者创造可持续价值的超级控股公司相一致。' },
  },
  legalBasis: {
    sectionHeader: {
      eyebrow: { en: 'Compliance', id: 'Kepatuhan', zh: '合规' },
      heading: { en: 'Legal & Regulatory Framework', id: 'Dasar Hukum Kepatuhan', zh: '法律与监管框架' },
      description: { en: 'Our governance practices are grounded in Indonesian corporate law and financial services regulations.', id: 'Praktik tata kelola kami berlandaskan hukum perseroan Indonesia dan regulasi jasa keuangan.', zh: '我们的治理实践以印尼公司法和金融服务法规为基础。' },
    },
    items: [
      {
        _key: 'legal-1',
        regulation: { en: 'Law No. 40/2007 on Limited Liability Companies', id: 'UU No. 40/2007 tentang Perseroan Terbatas', zh: '《有限责任公司法》第40/2007号' },
        description: { en: 'The foundational corporate law governing the establishment, operation, and dissolution of limited liability companies in Indonesia, including provisions on the General Meeting of Shareholders, Board of Directors, and Board of Commissioners.', id: 'Undang-undang dasar hukum perseroan yang mengatur pendirian, operasional, dan pembubaran perseroan terbatas di Indonesia, termasuk ketentuan mengenai Rapat Umum Pemegang Saham, Direksi, dan Dewan Komisaris.', zh: '印尼基础公司法，规范有限责任公司的设立、运营和解散，包括关于股东大会、董事会和监事会的规定。' },
      },
      {
        _key: 'legal-2',
        regulation: { en: 'POJK No. 15/2020 on Prudential Principles for Public Companies', id: 'POJK No. 15/2020 tentang Prinsip Kehati-hatian bagi Perusahaan Tercatat', zh: 'POJK第15/2020号《上市公司审慎原则》' },
        description: { en: 'Regulation of the Indonesian Financial Services Authority (OJK) setting out prudential principles and good corporate governance requirements for publicly listed companies, including disclosure obligations and shareholder protection.', id: 'Peraturan Otoritas Jasa Keuangan (OJK) yang menetapkan prinsip kehati-hatian dan persyaratan tata kelola perusahaan yang baik bagi perusahaan tercatat, termasuk kewajiban pengungkapan dan perlindungan pemegang saham.', zh: '印尼金融服务管理局（OJK）法规，规定上市公司的审慎原则和良好公司治理要求，包括信息披露义务和股东保护。' },
      },
      {
        _key: 'legal-3',
        regulation: { en: 'POJK No. 33/2014 on Board of Directors and Board of Commissioners of Public Companies', id: 'POJK No. 33/2014 tentang Direksi dan Dewan Komisaris Perusahaan Tercatat', zh: 'POJK第33/2014号《上市公司董事会与监事会》' },
        description: { en: 'OJK regulation governing the composition, duties, and responsibilities of the Board of Directors and Board of Commissioners of publicly listed companies, including independence requirements and committee structures.', id: 'Peraturan OJK yang mengatur susunan, tugas, dan tanggung jawab Direksi dan Dewan Komisaris perusahaan tercatat, termasuk persyaratan independensi dan struktur komite.', zh: 'OJK法规，规范上市公司董事会和监事会的组成、职责和责任，包括独立性要求和委员会结构。' },
      },
      {
        _key: 'legal-4',
        regulation: { en: 'POJK No. 16/2021 on Corporate Governance of Public Companies', id: 'POJK No. 16/2021 tentang Tata Kelola Perusahaan Tercatat', zh: 'POJK第16/2021号《上市公司公司治理》' },
        description: { en: 'OJK regulation establishing the general corporate governance framework for publicly listed companies, covering the five pillars: transparency, accountability, responsibility, independence, and fairness.', id: 'Peraturan OJK yang menetapkan kerangka umum tata kelola perusahaan bagi perusahaan tercatat, mencakup lima pilar: transparansi, akuntabilitas, responsibilitas, independensi, dan kewajaran.', zh: 'OJK法规，确立上市公司的一般公司治理框架，涵盖五大支柱：透明度、问责制、责任、独立性和公平。' },
      },
    ],
  },
  cta: {
    title: { en: 'Learn More About Our Governance Practices.', id: 'Pelajari Lebih Lanjut Praktik Tata Kelola Kami.', zh: '了解更多关于我们的治理实践。' },
    description: { en: 'Access our governance documents, policies, and reports to understand how we maintain accountability and transparency.', id: 'Akses dokumen tata kelola, kebijakan, dan laporan kami untuk memahami bagaimana kami menjaga akuntabilitas dan transparansi.', zh: '访问我们的治理文件、政策和报告，了解我们如何保持问责制和透明度。' },
    primaryButton: { label: { en: 'Contact Us', id: 'Hubungi Kami', zh: '联系我们' }, href: '/contact', external: false },
    secondaryButton: { label: { en: 'Investor Relations', id: 'Hubungan Investor', zh: '投资者关系' }, href: '/investor', external: false },
  },
};
