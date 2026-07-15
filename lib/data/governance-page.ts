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
        description: { en: 'We ensure timely and accurate disclosure of all material information to stakeholders, maintaining open communication and full accountability.', id: 'Kami memastikan pengungkapan yang tepat waktu dan akurat dari semua informasi material kepada pemangku kepentingan, menjaga komunikasi terbuka dan akuntabilitas penuh.', zh: '我们确保向利益相关者及时准确地披露所有重要信息，保持开放沟通和充分问责。' },
      },
      {
        _key: 'principle-2',
        icon: 'Scale',
        title: { en: 'Accountability', id: 'Akuntabilitas', zh: '问责制' },
        description: { en: 'Our management is accountable to the Board and shareholders, with clear performance metrics and regular reporting on all operations.', id: 'Manajemen kami bertanggung jawab kepada Dewan dan pemegang saham, dengan metrik kinerja yang jelas dan pelaporan rutin tentang semua operasi.', zh: '我们的管理层对董事会和股东负责，具有明确的绩效指标和所有运营的定期报告。' },
      },
      {
        _key: 'principle-3',
        icon: 'ShieldCheck',
        title: { en: 'Responsibility', id: 'Tanggung Jawab', zh: '责任' },
        description: { en: 'We operate with full compliance to laws and regulations, embracing ethical conduct and social responsibility in every business decision.', id: 'Kami beroperasi dengan kepatuhan penuh terhadap hukum dan peraturan, merangkul perilaku etis dan tanggung jawab sosial dalam setiap keputusan bisnis.', zh: '我们完全遵守法律法规，在每项商业决策中秉持道德行为和社会责任。' },
      },
      {
        _key: 'principle-4',
        icon: 'Users',
        title: { en: 'Fairness', id: 'Keadilan', zh: '公平' },
        description: { en: 'We treat all shareholders and stakeholders equitably, ensuring equal access to information and protecting minority shareholders\' rights.', id: 'Kami memperlakukan semua pemegang saham dan pemangku kepentingan secara adil, memastikan akses yang setara terhadap informasi dan melindungi hak pemegang saham minoritas.', zh: '我们公平对待所有股东和利益相关者，确保平等获取信息并保护少数股东的权利。' },
      },
      {
        _key: 'principle-5',
        icon: 'Lightbulb',
        title: { en: 'Independence', id: 'Independensi', zh: '独立性' },
        description: { en: 'Our Board of Commissioners exercises independent judgment, free from undue influence, ensuring decisions serve the best interests of the company.', id: 'Dewan Komisaris kami menjalankan penilaian independen, bebas dari pengaruh yang tidak semestinya, memastikan keputusan melayani kepentingan terbaik perusahaan.', zh: '我们的监事会行使独立判断，不受不当影响，确保决策符合公司最佳利益。' },
      },
      {
        _key: 'principle-6',
        icon: 'RefreshCw',
        title: { en: 'Continuous Improvement', id: 'Perbaikan Berkelanjutan', zh: '持续改进' },
        description: { en: 'We regularly review and enhance our governance practices to align with evolving best practices and regulatory requirements.', id: 'Kami secara rutin meninjau dan meningkatkan praktik tata kelola kami untuk selaras dengan praktik terbaik yang terus berkembang dan persyaratan peraturan.', zh: '我们定期审查和改进治理实践，以符合不断发展的最佳实践和监管要求。' },
      },
    ],
  },
  riskManagement: {
    sectionHeader: {
      eyebrow: { en: 'Risk Management', id: 'Manajemen Risiko', zh: '风险管理' },
      heading: { en: 'Risk Management Framework', id: 'Kerangka Manajemen Risiko', zh: '风险管理框架' },
      description: { en: 'A structured approach to identifying, assessing, and mitigating risks across all business operations.', id: 'Pendekatan terstruktur untuk mengidentifikasi, menilai, dan mengurangi risiko di seluruh operasi bisnis.', zh: '在所有业务运营中识别、评估和缓解风险的结构化方法。' },
    },
    cards: [
      {
        _key: 'risk-1',
        icon: 'Search',
        title: { en: 'Risk Identification', id: 'Identifikasi Risiko', zh: '风险识别' },
        description: { en: 'Systematic identification of potential risks across operational, financial, strategic, and compliance domains.', id: 'Identifikasi sistematis potensi risiko di seluruh domain operasional, keuangan, strategis, dan kepatuhan.', zh: '系统识别运营、财务、战略和合规领域的潜在风险。' },
      },
      {
        _key: 'risk-2',
        icon: 'ClipboardCheck',
        title: { en: 'Risk Assessment', id: 'Penilaian Risiko', zh: '风险评估' },
        description: { en: 'Regular evaluation of identified risks using quantitative and qualitative methods to determine impact and likelihood.', id: 'Evaluasi rutin risiko yang diidentifikasi menggunakan metode kuantitatif dan kualitatif untuk menentukan dampak dan kemungkinan.', zh: '使用定量和定性方法定期评估已识别的风险，以确定影响和可能性。' },
      },
      {
        _key: 'risk-3',
        icon: 'Shield',
        title: { en: 'Risk Mitigation', id: 'Mitigasi Risiko', zh: '风险缓解' },
        description: { en: 'Implementation of controls, policies, and procedures to reduce risk exposure to acceptable levels.', id: 'Implementasi kontrol, kebijakan, dan prosedur untuk mengurangi eksposur risiko ke tingkat yang dapat diterima.', zh: '实施控制、政策和程序，将风险敞口降低到可接受的水平。' },
      },
    ],
  },
  corporateStatement: {
    sectionHeader: {
      eyebrow: { en: 'Our Commitment', id: 'Komitmen Kami', zh: '我们的承诺' },
      heading: { en: 'Corporate Statement', id: 'Pernyataan Perusahaan', zh: '公司声明' },
    },
    statement: { en: 'Bike Tbk is committed to upholding the highest standards of corporate governance as a foundation for sustainable growth and long-term value creation. We believe that strong governance is essential to maintaining the trust of our shareholders, partners, and the communities we serve. Through continuous improvement of our governance practices, we strive to be a benchmark for corporate responsibility and transparency in Indonesia.', id: 'Bike Tbk berkomitmen untuk menjunjung standar tertinggi tata kelola perusahaan sebagai fondasi untuk pertumbuhan berkelanjutan dan penciptaan nilai jangka panjang. Kami percaya bahwa tata kelola yang kuat sangat penting untuk menjaga kepercayaan pemegang saham, mitra, dan masyarakat yang kami layani. Melalui peningkatan berkelanjutan praktik tata kelola kami, kami berusaha menjadi tolok ukur untuk tanggung jawab perusahaan dan transparansi di Indonesia.', zh: 'Bike Tbk 致力于坚持最高标准的公司治理，作为可持续增长和长期价值创造的基础。我们相信，强有力的治理对于维护股东、合作伙伴和服务社区的信任至关重要。通过持续改进治理实践，我们努力成为印尼企业责任和透明度的标杆。' },
  },
  cta: {
    title: { en: 'Learn More About Our Governance Practices.', id: 'Pelajari Lebih Lanjut Praktik Tata Kelola Kami.', zh: '了解更多关于我们的治理实践。' },
    description: { en: 'Access our governance documents, policies, and reports to understand how we maintain accountability and transparency.', id: 'Akses dokumen tata kelola, kebijakan, dan laporan kami untuk memahami bagaimana kami menjaga akuntabilitas dan transparansi.', zh: '访问我们的治理文件、政策和报告，了解我们如何保持问责制和透明度。' },
    primaryButton: { label: { en: 'Contact Us', id: 'Hubungi Kami', zh: '联系我们' }, href: '/contact', external: false },
    secondaryButton: { label: { en: 'Investor Relations', id: 'Hubungan Investor', zh: '投资者关系' }, href: '/investor', external: false },
  },
};
