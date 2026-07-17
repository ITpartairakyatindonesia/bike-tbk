import type { InvestorPage } from '@/lib/types/sanity'

export const INVESTOR_PAGE: InvestorPage = {
  _id: 'investorPage',
  _type: 'investorPage',
  seo: {
    title: { en: 'Investor Relations - Bike', id: 'Hubungan Investor - Bike', zh: '投资者关系 - Bike' },
    description: {
      en: "Access Bike's investor relations information including financial highlights, investment highlights, and shareholder resources.",
      id: 'Akses informasi hubungan investor Bike termasuk sorotan keuangan, sorotan investasi, dan sumber daya pemegang saham.',
      zh: '获取 Bike 的投资者关系信息，包括财务亮点、投资亮点和股东资源。',
    },
  },
  hero: {
    label: { en: 'Investor Relations', id: 'Hubungan Investor', zh: '投资者关系' },
    title: { en: 'Building long-term value for our shareholders.', id: 'Membangun nilai jangka panjang bagi pemegang saham kami.', zh: '为股东创造长期价值。' },
    description: {
      en: 'Bike is committed to delivering sustainable growth and transparency to our investors. Access financial reports, governance information, and shareholder resources.',
      id: 'Bike berkomitmen untuk memberikan pertumbuhan berkelanjutan dan transparansi kepada investor kami. Akses laporan keuangan, informasi tata kelola, dan sumber daya pemegang saham.',
      zh: 'Bike 致力于为投资者提供可持续增长和透明度。获取财务报告、治理信息和股东资源。',
    },
  },
  overview: {
    sectionHeader: {
      eyebrow: { en: 'Overview', id: 'Ikhtisar', zh: '概述' },
      heading: { en: 'Investor Overview', id: 'Ikhtisar Investor', zh: '投资者概述' },
      description: { en: 'A comprehensive view of our financial performance and strategic direction.', id: 'Pandangan komprehensif tentang kinerja keuangan dan arah strategis kami.', zh: '全面了解我们的财务表现和战略方向。' },
    },
    paragraphs: [
      { en: 'Bike Tbk is a diversified super holding company undergoing a strategic transformation backed by PT Penajam Makmur Jaya (PMJ). Our portfolio spans 9 business sectors — delivering enduring value across multiple industries.', id: 'Bike Tbk adalah perusahaan super holding terdiversifikasi yang sedang menjalani transformasi strategis dengan dukungan dari PT Penajam Makmur Jaya (PMJ). Portofolio kami mencakup 9 sektor bisnis — memberikan nilai berkelanjutan di berbagai industri.', zh: 'Bike Tbk 是一家正在经历战略转型的多元化超级控股公司，由 PT Penajam Makmur Jaya (PMJ) 提供支持。我们的投资组合涵盖9个业务领域——在多个行业创造持久价值。' },
      { en: 'With total funding of Rp 2 trillion from PMJ deployed in two phases (2026 and 2028), Bike Tbk is positioned for sustained growth. The soft loan carries an 8% interest rate over a 5-year tenor, providing the financial foundation for our expansion across 319+ distribution points nationwide. This funding was formally approved through the Extraordinary General Meeting of Shareholders on 2 July 2026, which also approved new business lines and additional funding facilities to accelerate the Company\'s development.', id: 'Dengan total pendanaan Rp 2 triliun dari PMJ yang disalurkan dalam dua tahap (2026 dan 2028), Bike Tbk diposisikan untuk pertumbuhan berkelanjutan. Pinjaman lunak ini membawa suku bunga 8% dengan tenor 5 tahun, memberikan fondasi keuangan untuk ekspansi kami di lebih dari 319 titik distribusi di seluruh Indonesia. Pendanaan ini secara resmi disetujui melalui Rapat Umum Pemegang Saham Luar Biasa pada 2 Juli 2026, yang juga menyetujui penambahan bidang usaha baru dan fasilitas pendanaan tambahan untuk mempercepat pengembangan Perseroan.', zh: '凭借 PMJ 分两期（2026年和2028年）部署的2万亿印尼盾总资金，Bike Tbk 正处于持续增长的有利位置。该软贷款利率为8%，期限5年，为我们在全国319+个分销点的扩张提供了财务基础。该融资于2026年7月2日的临时股东大会上正式获批，同时批准了新增业务领域和额外融资安排以加速公司发展。' },
      { en: 'We are committed to maintaining the highest standards of corporate governance, financial transparency, and shareholder engagement. Our investor relations program ensures that all stakeholders have access to timely, accurate, and comprehensive information.', id: 'Kami berkomitmen untuk menjaga standar tertinggi tata kelola perusahaan, transparansi keuangan, dan keterlibatan pemegang saham. Program hubungan investor kami memastikan bahwa semua pemangku kepentingan memiliki akses ke informasi yang tepat waktu, akurat, dan komprehensif.', zh: '我们致力于维持最高标准的公司治理、财务透明度和股东参与。我们的投资者关系计划确保所有利益相关者都能获得及时、准确和全面的信息。' },
    ],
    image: undefined,
  },
  investmentHighlights: {
    sectionHeader: {
      eyebrow: { en: 'Investment Highlights', id: 'Sorotan Investasi', zh: '投资亮点' },
      heading: { en: 'Why Invest in Bike', id: 'Mengapa Berinvestasi di Bike', zh: '为何投资 Bike' },
      description: { en: 'Key strengths that make Bike a compelling investment opportunity.', id: 'Kekuatan utama yang membuat Bike menjadi peluang investasi yang menarik.', zh: '使 Bike 成为引人注目的投资机会的关键优势。' },
    },
    cards: [
      {
        _key: 'ih-1',
        value: { en: '9', id: '9', zh: '9' },
        label: { en: 'Business Sectors', id: 'Sektor Bisnis', zh: '业务领域' },
        description: { en: 'Diversified portfolio across 9 business sectors including energy, logistics, finance, healthcare, infrastructure, and more.', id: 'Portofolio terdiversifikasi di 9 sektor bisnis termasuk energi, logistik, keuangan, kesehatan, infrastruktur, dan lainnya.', zh: '涵盖能源、物流、金融、医疗、基础设施等9个业务领域的多元化投资组合。' },
      },
      {
        _key: 'ih-2',
        value: { en: 'Rp 2T', id: 'Rp 2T', zh: '2万亿盾' },
        label: { en: 'Total Funding from PMJ', id: 'Total Pendanaan dari PMJ', zh: 'PMJ总资金' },
        description: { en: 'Rp 2 trillion in total funding from PT Penajam Makmur Jaya, deployed in two phases: 2026 and 2028.', id: 'Total pendanaan Rp 2 triliun dari PT Penajam Makmur Jaya, disalurkan dalam dua tahap: 2026 dan 2028.', zh: '来自 PT Penajam Makmur Jaya 的2万亿印尼盾总资金，分两期部署：2026年和2028年。' },
      },
      {
        _key: 'ih-3',
        value: { en: '8%', id: '8%', zh: '8%' },
        label: { en: 'Soft Loan Interest', id: 'Bunga Pinjaman Lunak', zh: '软贷款利率' },
        description: { en: 'Soft loan from PMJ at 8% interest rate with a 5-year tenor, providing favorable financing terms.', id: 'Pinjaman lunak dari PMJ dengan suku bunga 8% dan tenor 5 tahun, memberikan ketentuan pembiayaan yang menguntungkan.', zh: '来自 PMJ 的软贷款，利率8%，期限5年，提供优惠的融资条件。' },
      },
      {
        _key: 'ih-4',
        value: { en: '319+', id: '319+', zh: '319+' },
        label: { en: 'Distribution Points', id: 'Titik Distribusi', zh: '分销点' },
        description: { en: 'Extensive distribution network with 319+ points across Indonesia, ensuring nationwide market reach.', id: 'Jaringan distribusi yang luas dengan 319+ titik di seluruh Indonesia, memastikan jangkauan pasar nasional.', zh: '遍布印度尼西亚的319+个分销点的广泛分销网络，确保全国市场覆盖。' },
      },
    ],
  },
  financialHighlights: {
    sectionHeader: {
      eyebrow: { en: 'Financial Highlights', id: 'Sorotan Keuangan', zh: '财务亮点' },
      heading: { en: 'Financial Targets & Funding Structure', id: 'Target Keuangan & Struktur Pendanaan', zh: '财务目标与资金结构' },
      description: { en: 'Target revenue and funding structure based on the official business plan. Historical financial data will be available upon listing.', id: 'Target pendapatan dan struktur pendanaan berdasarkan rencana bisnis resmi. Data keuangan historis akan tersedia setelah pencatatan.', zh: '基于官方商业计划的目标收入和资金结构。历史财务数据将在上市后提供。' },
    },
    cards: [
      {
        _key: 'fh-1',
        value: { en: 'Rp 2T/yr', id: 'Rp 2T/thn', zh: '2万亿盾/年' },
        label: { en: 'Target Revenue (Target 2026)', id: 'Target Pendapatan (Target 2026)', zh: '目标收入（2026年目标）' },
        description: { en: 'Target annual revenue of Rp 2 trillion per year starting from 2026, based on the business plan.', id: 'Target pendapatan tahunan Rp 2 triliun per tahun mulai dari 2026, berdasarkan rencana bisnis.', zh: '根据商业计划，从2026年起目标年收入为2万亿印尼盾。' },
      },
      {
        _key: 'fh-2',
        value: { en: 'Rp 1T', id: 'Rp 1T', zh: '1万亿盾' },
        label: { en: 'Funding Phase 1 (2026)', id: 'Pendanaan Tahap 1 (2026)', zh: '第一期资金（2026）' },
        description: { en: 'First tranche of Rp 1 trillion from PMJ soft loan, deployed in 2026.', id: 'Penarikan pertama Rp 1 triliun dari pinjaman lunak PMJ, disalurkan pada 2026.', zh: 'PMJ软贷款的第一期1万亿印尼盾，于2026年部署。' },
      },
      {
        _key: 'fh-3',
        value: { en: 'Rp 1T', id: 'Rp 1T', zh: '1万亿盾' },
        label: { en: 'Funding Phase 2 (2028)', id: 'Pendanaan Tahap 2 (2028)', zh: '第二期资金（2028）' },
        description: { en: 'Second tranche of Rp 1 trillion from PMJ soft loan, deployed in 2028.', id: 'Penarikan kedua Rp 1 triliun dari pinjaman lunak PMJ, disalurkan pada 2028.', zh: 'PMJ软贷款的第二期1万亿印尼盾，于2028年部署。' },
      },
      {
        _key: 'fh-4',
        value: { en: '8% / 5yr', id: '8% / 5thn', zh: '8% / 5年' },
        label: { en: 'Loan Terms', id: 'Ketentuan Pinjaman', zh: '贷款条件' },
        description: { en: 'Soft loan at 8% interest rate with a 5-year tenor from PT Penajam Makmur Jaya.', id: 'Pinjaman lunak dengan suku bunga 8% dan tenor 5 tahun dari PT Penajam Makmur Jaya.', zh: '来自 PT Penajam Makmur Jaya 的软贷款，利率8%，期限5年。' },
      },
    ],
  },
  quickAccess: {
    sectionHeader: {
      eyebrow: { en: 'Investor Resource Center', id: 'Pusat Sumber Daya Investor', zh: '投资者资源中心' },
      heading: { en: 'Investor Resources', id: 'Sumber Daya Investor', zh: '投资者资源' },
      description: { en: 'Quick links to key investor information and resources.', id: 'Tautan cepat ke informasi dan sumber daya investor utama.', zh: '关键投资者信息和资源的快速链接。' },
    },
    cards: [
      {
        _key: 'qa-1',
        icon: 'FileText',
        title: { en: 'Annual Reports', id: 'Laporan Tahunan', zh: '年度报告' },
        description: { en: 'Comprehensive yearly reports on company performance and strategy.', id: 'Laporan tahunan komprehensif tentang kinerja dan strategi perusahaan.', zh: '关于公司业绩和战略的全面年度报告。' },
        button: { label: { en: 'View Reports', id: 'Lihat Laporan', zh: '查看报告' }, href: '/investor/annual-reports', external: false },
      },
      {
        _key: 'qa-2',
        icon: 'BarChart3',
        title: { en: 'Financial Statements', id: 'Laporan Keuangan', zh: '财务报表' },
        description: { en: 'Quarterly and audited financial statements.', id: 'Laporan keuangan triwulan dan teraudit.', zh: '季度和经审计的财务报表。' },
        button: { label: { en: 'View Statements', id: 'Lihat Laporan', zh: '查看报表' }, href: '/investor/financial-statements', external: false },
      },
      {
        _key: 'qa-3',
        icon: 'Presentation',
        title: { en: 'Public Expose', id: 'Paparan Publik', zh: '公开说明会' },
        description: { en: 'Materials and recordings from public expose events.', id: 'Materi dan rekaman dari acara paparan publik.', zh: '公开说明会的材料和录像。' },
        button: { label: { en: 'View Materials', id: 'Lihat Materi', zh: '查看材料' }, href: '/investor/public-expose', external: false },
      },
      {
        _key: 'qa-4',
        icon: 'ShieldCheck',
        title: { en: 'Prospectus', id: 'Prospektus', zh: '招股说明书' },
        description: { en: 'Official prospectus and offering documents for investors.', id: 'Prospektus resmi dan dokumen penawaran untuk investor.', zh: '正式招股说明书和发行文件。' },
        button: { label: { en: 'View Documents', id: 'Lihat Dokumen', zh: '查看文件' }, href: '/investor/prospectus', external: false },
      },
    ],
  },
  annualReports: {
    sectionHeader: {
      eyebrow: { en: 'Annual Reports', id: 'Laporan Tahunan', zh: '年度报告' },
      heading: { en: 'Annual Reports', id: 'Laporan Tahunan', zh: '年度报告' },
      description: { en: 'Comprehensive yearly reports on company performance, strategy, and financial highlights.', id: 'Laporan tahunan komprehensif tentang kinerja perusahaan, strategi, dan sorotan keuangan.', zh: '关于公司业绩、战略和财务亮点的全面年度报告。' },
    },
    documents: [
      {
        _key: 'ar-coming-soon',
        title: { en: 'Coming Soon', id: 'Segera', zh: '即将推出' },
        year: '',
        category: { en: 'Annual Report', id: 'Laporan Tahunan', zh: '年度报告' },
        description: { en: 'Annual reports will be published upon availability.', id: 'Laporan tahunan akan dipublikasikan setelah tersedia.', zh: '年度报告将在可用后发布。' },
      },
    ],
  },
  financialStatements: {
    sectionHeader: {
      eyebrow: { en: 'Financial Statements', id: 'Laporan Keuangan', zh: '财务报表' },
      heading: { en: 'Financial Statements', id: 'Laporan Keuangan', zh: '财务报表' },
      description: { en: 'Quarterly and audited financial statements for shareholders and investors.', id: 'Laporan keuangan triwulan dan teraudit untuk pemegang saham dan investor.', zh: '供股东和投资者查阅的季度和经审计的财务报表。' },
    },
    documents: [
      {
        _key: 'fs-coming-soon',
        title: { en: 'Coming Soon', id: 'Segera', zh: '即将推出' },
        year: '',
        category: { en: 'Quarterly', id: 'Triwulan', zh: '季度' },
        description: { en: 'Financial statements will be published upon availability.', id: 'Laporan keuangan akan dipublikasikan setelah tersedia.', zh: '财务报表将在可用后发布。' },
      },
    ],
  },
  prospectus: {
    sectionHeader: {
      eyebrow: { en: 'Prospectus', id: 'Prospektus', zh: '招股说明书' },
      heading: { en: 'Prospectus', id: 'Prospektus', zh: '招股说明书' },
      description: { en: 'Official prospectus documents for public offerings and bond issuances.', id: 'Dokumen prospektus resmi untuk penawaran umum dan penerbitan obligasi.', zh: '公开发行和债券发行的正式招股说明书文件。' },
    },
    documents: [
      {
        _key: 'pro-coming-soon',
        title: { en: 'Coming Soon', id: 'Segera', zh: '即将推出' },
        year: '',
        category: { en: 'Prospectus', id: 'Prospektus', zh: '招股说明书' },
        description: { en: 'Prospectus documents will be published upon availability.', id: 'Dokumen prospektus akan dipublikasikan setelah tersedia.', zh: '招股说明书文件将在可用后发布。' },
      },
    ],
  },
  publicExpose: {
    sectionHeader: {
      eyebrow: { en: 'Public Expose', id: 'Paparan Publik', zh: '公开说明会' },
      heading: { en: 'Public Expose', id: 'Paparan Publik', zh: '公开说明会' },
      description: { en: 'Materials and presentations from our public expose events.', id: 'Materi dan presentasi dari acara paparan publik kami.', zh: '公开说明会的材料和演示文稿。' },
    },
    documents: [
      {
        _key: 'pe-rupslb-2026',
        title: { en: 'RUPSLB 2 July 2026 — Meeting Materials', id: 'Materi RUPSLB 2 Juli 2026', zh: '2026年7月2日临时股东大会——会议材料' },
        year: '2026',
        category: { en: 'RUPSLB', id: 'RUPSLB', zh: '临时股东大会' },
        description: { en: 'Official meeting materials from the Extraordinary General Meeting of Shareholders held on 2 July 2026, covering the approval of name change, logo change, new Board of Directors and Commissioners, and funding facilities.', id: 'Materi rapat resmi dari Rapat Umum Pemegang Saham Luar Biasa yang diselenggarakan pada 2 Juli 2026, mencakup persetujuan perubahan nama, perubahan logo, susunan baru Direksi dan Dewan Komisaris, serta fasilitas pendanaan.', zh: '2026年7月2日召开的临时股东大会正式会议材料，涵盖更名、换标、新董事会和监事会组成以及融资安排的批准。' },
      },
    ],
  },
  stockInfo: {
    sectionHeader: {
      eyebrow: { en: 'Stock Information', id: 'Informasi Saham', zh: '股票信息' },
      heading: { en: 'Stock Information', id: 'Informasi Saham', zh: '股票信息' },
      description: { en: 'Stock listing details will be available upon official listing on the Indonesia Stock Exchange.', id: 'Detail pencatatan saham akan tersedia setelah pencatatan resmi di Bursa Efek Indonesia.', zh: '股票上市详情将在印度尼西亚证券交易所正式上市后提供。' },
    },
    stockCode: '',
    exchange: { en: 'Coming Soon', id: 'Segera', zh: '即将推出' },
    listingDate: '',
    market: { en: 'Coming Soon', id: 'Segera', zh: '即将推出' },
    fields: [],
  },
  corporateAction: {
    sectionHeader: {
      eyebrow: { en: 'Corporate Action', id: 'Aksi Korporasi', zh: '公司行动' },
      heading: { en: 'Corporate Action History', id: 'Riwayat Aksi Korporasi', zh: '公司行动历史' },
      description: { en: 'A record of key corporate actions approved by shareholders.', id: 'Catatan aksi korporasi penting yang disetujui oleh pemegang saham.', zh: '经股东批准的关键公司行动记录。' },
    },
    actions: [
      {
        _key: 'ca-1',
        date: '2026-07-02',
        title: { en: 'RUPSLB: Name Change, Logo, Board Composition & Funding Approval', id: 'RUPSLB: Perubahan Nama, Logo, Susunan Direksi/Komisaris & Persetujuan Pendanaan', zh: '临时股东大会：更名、换标、董事会/监事会改组及融资批准' },
        description: { en: 'Extraordinary General Meeting of Shareholders approved the change of company name to PT Bhineka Inovasi Ketahanan Energi Tbk, change of corporate logo, new composition of Board of Directors and Board of Commissioners, and approval of funding facilities to accelerate the Company\'s development.', id: 'Rapat Umum Pemegang Saham Luar Biasa menyetujui perubahan nama Perseroan menjadi PT Bhineka Inovasi Ketahanan Energi Tbk, perubahan logo perusahaan, susunan baru Direksi dan Dewan Komisaris, serta persetujuan fasilitas pendanaan untuk mempercepat pengembangan Perseroan.', zh: '临时股东大会批准将公司名称更改为 PT Bhineka Inovasi Ketahanan Energi Tbk、更换企业标志、新的董事会和监事会组成，以及批准融资安排以加速公司发展。' },
        type: { en: 'Corporate Action', id: 'Aksi Korporasi', zh: '公司行动' },
      },
    ],
  },
  shareholderStructure: {
    sectionHeader: {
      eyebrow: { en: 'Ownership', id: 'Kepemilikan', zh: '股权结构' },
      heading: { en: 'Shareholder Structure', id: 'Struktur Kepemilikan Saham', zh: '股东结构' },
      description: { en: 'Major shareholders of PT Bhineka Inovasi Ketahanan Energi Tbk.', id: 'Pemegang saham utama PT Bhineka Inovasi Ketahanan Energi Tbk.', zh: 'PT Bhineka Inovasi Ketahanan Energi Tbk 的主要股东。' },
    },
    items: [
      {
        _key: 'sh-1',
        name: { en: 'PT Penajam Makmur Jaya', id: 'PT Penajam Makmur Jaya', zh: 'PT Penajam Makmur Jaya' },
        percentage: '74.90%',
        role: { en: 'Controlling Shareholder', id: 'Pemegang Saham Pengendali', zh: '控股股东' },
      },
      {
        _key: 'sh-2',
        name: { en: 'Public Shareholders', id: 'Pemegang Saham Publik', zh: '公众股东' },
        percentage: '25.10%',
        role: { en: 'Public', id: 'Publik', zh: '公众' },
      },
    ],
    totalShares: '100%',
    note: { en: 'Shareholder structure as of 2 July 2026. Minor individual shareholder details are not disclosed to protect privacy.', id: 'Struktur kepemilikan saham per 2 Juli 2026. Detail pemegang saham minor individu tidak diungkapkan untuk melindungi privasi.', zh: '截至2026年7月2日的股东结构。个别小股东详情不予披露以保护隐私。' },
  },
  capitalMarketInstitutions: {
    sectionHeader: {
      eyebrow: { en: 'Supporting Institutions', id: 'Institusi Penunjang', zh: '支持机构' },
      heading: { en: 'Capital Market Supporting Institutions', id: 'Institusi Penunjang Pasar Modal', zh: '资本市场支持机构' },
      description: { en: 'Official institutions supporting the Company\'s capital market activities.', id: 'Institusi resmi yang mendukung kegiatan pasar modal Perseroan.', zh: '支持公司资本市场活动的官方机构。' },
    },
    items: [
      {
        _key: 'cmi-1',
        label: { en: 'Notary', id: 'Notaris', zh: '公证处' },
        value: { en: 'Sugih Haryati Notaris & PPAT', id: 'Sugih Haryati Notaris & PPAT', zh: 'Sugih Haryati Notaris & PPAT' },
      },
      {
        _key: 'cmi-2',
        label: { en: 'Securities Administration Bureau', id: 'Biro Administrasi Efek', zh: '证券行政局' },
        value: { en: 'PT Adimitra Jasa Korpora', id: 'PT Adimitra Jasa Korpora', zh: 'PT Adimitra Jasa Korpora' },
      },
    ],
  },
  attraction: {
    sectionHeader: {
      eyebrow: { en: 'Attraction for Investors', id: 'Daya Tarik bagi Investor', zh: '投资者吸引力' },
      heading: { en: 'Why Bike Tbk Attracts Investors', id: 'Mengapa Bike Tbk Menarik bagi Investor', zh: 'Bike Tbk 为何吸引投资者' },
      description: { en: 'Strong fundamentals, strategic backing, and clear growth pathways make Bike Tbk a compelling investment opportunity.', id: 'Fundamental yang kuat, dukungan strategis, dan jalur pertumbuhan yang jelas membuat Bike Tbk menjadi peluang investasi yang menarik.', zh: '强劲的基本面、战略支持和清晰的成长路径使 Bike Tbk 成为引人注目的投资机会。' },
    },
    cards: [
      {
        _key: 'attr-1',
        icon: 'TrendingUp',
        title: { en: 'Valuation Potential', id: 'Potensi Valuasi', zh: '估值潜力' },
        description: { en: 'With Rp 2 trillion in committed funding from PMJ and a target revenue of Rp 2 trillion per year, Bike Tbk offers significant valuation upside as the business plan executes across 9 sectors.', id: 'Dengan pendanaan Rp 2 triliun dari PMJ dan target pendapatan Rp 2 triliun per tahun, Bike Tbk menawarkan potensi kenaikan valuasi yang signifikan seiring rencana bisnis dieksekusi di 9 sektor.', zh: '凭借 PMJ 承诺的2万亿印尼盾资金和每年2万亿印尼盾的目标收入，随着商业计划在9个领域的执行，Bike Tbk 提供了巨大的估值上升空间。' },
      },
      {
        _key: 'attr-2',
        icon: 'Rocket',
        title: { en: 'Growth Potential', id: 'Potensi Pertumbuhan', zh: '增长潜力' },
        description: { en: 'Strategic transformation backed by PMJ, expansion across 319+ distribution points, and a phased funding approach (2026 & 2028) position Bike Tbk for sustained multi-year growth.', id: 'Transformasi strategis dengan dukungan PMJ, ekspansi di 319+ titik distribusi, dan pendekatan pendanaan bertahap (2026 & 2028) memposisikan Bike Tbk untuk pertumbuhan berkelanjutan multi-tahun.', zh: '在 PMJ 支持下的战略转型、319+个分销点的扩张以及分阶段融资方式（2026年和2028年），使 Bike Tbk 处于持续多年增长的有利位置。' },
      },
      {
        _key: 'attr-3',
        icon: 'ShieldCheck',
        title: { en: 'Investor Confidence', id: 'Kepercayaan Investor', zh: '投资者信心' },
        description: { en: 'PMJ\'s commitment through a soft loan at 8% interest over 5 years demonstrates strong shareholder confidence in Bike Tbk\'s vision, governance, and execution capability.', id: 'Komitmen PMJ melalui pinjaman lunak dengan bunga 8% selama 5 tahun menunjukkan kepercayaan pemegang saham yang kuat terhadap visi, tata kelola, dan kemampuan eksekusi Bike Tbk.', zh: 'PMJ 通过8%利率、5年期的软贷款承诺，展现了对 Bike Tbk 愿景、治理和执行能力的强烈股东信心。' },
      },
    ],
  },
  cta: {
    title: { en: 'Stay Connected with Investor Relations.', id: 'Tetap Terhubung dengan Hubungan Investor.', zh: '与投资者关系保持联系。' },
    description: { en: 'Subscribe to receive the latest financial updates, reports, and investor announcements directly to your inbox.', id: 'Berlangganan untuk menerima pembaruan keuangan terbaru, laporan, dan pengumuman investor langsung ke kotak masuk Anda.', zh: '订阅以直接在收件箱中接收最新财务更新、报告和投资者公告。' },
    primaryButton: { label: { en: 'Contact Us', id: 'Hubungi Kami', zh: '联系我们' }, href: '/contact', external: false },
    secondaryButton: { label: { en: 'Our Governance', id: 'Tata Kelola Kami', zh: '我们的治理' }, href: '/governance', external: false },
  },
  cards: [],
}
