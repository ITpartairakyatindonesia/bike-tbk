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
      { en: 'Bike Tbk is a diversified super holding company listed on the Indonesia Stock Exchange. Our portfolio spans energy, logistics, finance, healthcare, and infrastructure — delivering enduring value across multiple sectors.', id: 'Bike Tbk adalah perusahaan super holding terdiversifikasi yang tercatat di Bursa Efek Indonesia. Portofolio kami mencakup energi, logistik, keuangan, kesehatan, dan infrastruktur — memberikan nilai berkelanjutan di berbagai sektor.', zh: 'Bike Tbk 是一家在印度尼西亚证券交易所上市的多元化超级控股公司。我们的投资组合涵盖能源、物流、金融、医疗和基础设施——在多个领域创造持久价值。' },
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
        value: { en: '5+', id: '5+', zh: '5+' },
        label: { en: 'Business Sectors', id: 'Sektor Bisnis', zh: '业务领域' },
        description: { en: 'Diversified portfolio across energy, logistics, finance, healthcare, and infrastructure.', id: 'Portofolio terdiversifikasi di energi, logistik, keuangan, kesehatan, dan infrastruktur.', zh: '涵盖能源、物流、金融、医疗和基础设施的多元化投资组合。' },
      },
      {
        _key: 'ih-2',
        value: { en: '15+', id: '15+', zh: '15+' },
        label: { en: 'Countries', id: 'Negara', zh: '国家' },
        description: { en: 'Operations spanning Southeast Asia and beyond with growing regional presence.', id: 'Operasi mencakup Asia Tenggara dan sekitarnya dengan kehadiran regional yang berkembang.', zh: '业务遍布东南亚及其他地区，区域影响力不断扩大。' },
      },
      {
        _key: 'ih-3',
        value: { en: '50+', id: '50+', zh: '50+' },
        label: { en: 'Years of Experience', id: 'Tahun Pengalaman', zh: '年经验' },
        description: { en: 'Decades of proven expertise in building and scaling businesses across sectors.', id: 'Puluhan tahun keahlian terbukti dalam membangun dan mengembangkan bisnis lintas sektor.', zh: '数十年跨行业建设和扩展业务的成熟经验。' },
      },
      {
        _key: 'ih-4',
        value: { en: 'AAA', id: 'AAA', zh: 'AAA' },
        label: { en: 'Credit Rating', id: 'Peringkat Kredit', zh: '信用评级' },
        description: { en: 'Strong investment-grade credit rating reflecting financial stability and prudent management.', id: 'Peringkat kredit grade investasi yang kuat mencerminkan stabilitas keuangan dan manajemen yang bijaksana.', zh: '强劲的投资级信用评级，反映财务稳健和审慎管理。' },
      },
    ],
  },
  financialHighlights: {
    sectionHeader: {
      eyebrow: { en: 'Financial Highlights', id: 'Sorotan Keuangan', zh: '财务亮点' },
      heading: { en: 'Financial Performance', id: 'Kinerja Keuangan', zh: '财务表现' },
      description: { en: 'Key financial metrics demonstrating our sustained growth and profitability.', id: 'Metrik keuangan utama yang menunjukkan pertumbuhan dan profitabilitas berkelanjutan kami.', zh: '展示我们持续增长和盈利能力的关键财务指标。' },
    },
    cards: [
      {
        _key: 'fh-1',
        value: { en: 'Rp 12.5T', id: 'Rp 12,5T', zh: '125万亿印尼盾' },
        label: { en: 'Total Revenue', id: 'Total Pendapatan', zh: '总收入' },
        description: { en: 'Consistent revenue growth driven by diversified business portfolio.', id: 'Pertumbuhan pendapatan konsisten didorong oleh portofolio bisnis yang terdiversifikasi.', zh: '多元化业务组合推动收入持续增长。' },
      },
      {
        _key: 'fh-2',
        value: { en: 'Rp 2.8T', id: 'Rp 2,8T', zh: '28万亿印尼盾' },
        label: { en: 'Net Profit', id: 'Laba Bersih', zh: '净利润' },
        description: { en: 'Strong profitability with disciplined cost management and operational efficiency.', id: 'Profitabilitas yang kuat dengan manajemen biaya yang disiplin dan efisiensi operasional.', zh: '通过严格的成本管理和运营效率实现强劲盈利。' },
      },
      {
        _key: 'fh-3',
        value: { en: '18.5%', id: '18,5%', zh: '18.5%' },
        label: { en: 'ROE', id: 'ROE', zh: '净资产收益率' },
        description: { en: 'Above-average return on equity reflecting efficient capital allocation.', id: 'Pengembalian ekuitas di atas rata-rata mencerminkan alokasi modal yang efisien.', zh: '高于平均水平的净资产收益率，反映高效的资本配置。' },
      },
      {
        _key: 'fh-4',
        value: { en: '0.35', id: '0,35', zh: '0.35' },
        label: { en: 'Debt-to-Equity', id: 'Rasio Utang-Ekuitas', zh: '负债权益比' },
        description: { en: 'Prudent leverage with healthy balance sheet and strong debt coverage.', id: 'Leverage yang bijaksana dengan neraca sehat dan cakupan utang yang kuat.', zh: '审慎的杠杆水平，健康的资产负债表和强劲的偿债能力。' },
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
        _key: 'ar-2024',
        title: { en: 'Annual Report 2024', id: 'Laporan Tahunan 2024', zh: '2024年年度报告' },
        year: '2024',
        category: { en: 'Annual Report', id: 'Laporan Tahunan', zh: '年度报告' },
        description: { en: 'Full year financial and operational review for fiscal year 2024.', id: 'Tinjauan keuangan dan operasional tahun penuh untuk tahun fiskal 2024.', zh: '2024财年全年财务和运营回顾。' },
      },
      {
        _key: 'ar-2023',
        title: { en: 'Annual Report 2023', id: 'Laporan Tahunan 2023', zh: '2023年年度报告' },
        year: '2023',
        category: { en: 'Annual Report', id: 'Laporan Tahunan', zh: '年度报告' },
        description: { en: 'Full year financial and operational review for fiscal year 2023.', id: 'Tinjauan keuangan dan operasional tahun penuh untuk tahun fiskal 2023.', zh: '2023财年全年财务和运营回顾。' },
      },
      {
        _key: 'ar-2022',
        title: { en: 'Annual Report 2022', id: 'Laporan Tahunan 2022', zh: '2022年年度报告' },
        year: '2022',
        category: { en: 'Annual Report', id: 'Laporan Tahunan', zh: '年度报告' },
        description: { en: 'Full year financial and operational review for fiscal year 2022.', id: 'Tinjauan keuangan dan operasional tahun penuh untuk tahun fiskal 2022.', zh: '2022财年全年财务和运营回顾。' },
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
        _key: 'fs-q4-2024',
        title: { en: 'Q4 2024 Financial Statement', id: 'Laporan Keuangan Q4 2024', zh: '2024年第四季度财务报表' },
        year: '2024',
        category: { en: 'Quarterly', id: 'Triwulan', zh: '季度' },
        description: { en: 'Audited financial statement for the fourth quarter of 2024.', id: 'Laporan keuangan teraudit untuk triwulan keempat 2024.', zh: '2024年第四季度经审计财务报表。' },
      },
      {
        _key: 'fs-q3-2024',
        title: { en: 'Q3 2024 Financial Statement', id: 'Laporan Keuangan Q3 2024', zh: '2024年第三季度财务报表' },
        year: '2024',
        category: { en: 'Quarterly', id: 'Triwulan', zh: '季度' },
        description: { en: 'Unaudited financial statement for the third quarter of 2024.', id: 'Laporan keuangan tidak teraudit untuk triwulan ketiga 2024.', zh: '2024年第三季度未经审计财务报表。' },
      },
      {
        _key: 'fs-q2-2024',
        title: { en: 'Q2 2024 Financial Statement', id: 'Laporan Keuangan Q2 2024', zh: '2024年第二季度财务报表' },
        year: '2024',
        category: { en: 'Quarterly', id: 'Triwulan', zh: '季度' },
        description: { en: 'Unaudited financial statement for the second quarter of 2024.', id: 'Laporan keuangan tidak teraudit untuk triwulan kedua 2024.', zh: '2024年第二季度未经审计财务报表。' },
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
        _key: 'pro-ipo',
        title: { en: 'IPO Prospectus', id: 'Prospektus IPO', zh: 'IPO招股说明书' },
        year: '2022',
        category: { en: 'IPO', id: 'IPO', zh: 'IPO' },
        description: { en: 'Initial Public Offering prospectus with full offering details.', id: 'Prospektus Penawaran Umum Perdana dengan detail penawaran lengkap.', zh: '首次公开发行招股说明书，包含完整的发行详情。' },
      },
      {
        _key: 'pro-bond-2023',
        title: { en: 'Bond Issuance Prospectus 2023', id: 'Prospektus Penerbitan Obligasi 2023', zh: '2023年债券发行招股说明书' },
        year: '2023',
        category: { en: 'Bond', id: 'Obligasi', zh: '债券' },
        description: { en: 'Prospectus for the 2023 corporate bond issuance program.', id: 'Prospektus untuk program penerbitan obligasi korporasi 2023.', zh: '2023年公司债券发行计划招股说明书。' },
      },
    ],
  },
  publicExpose: {
    sectionHeader: {
      eyebrow: { en: 'Public Expose', id: 'Paparan Publik', zh: '公开说明会' },
      heading: { en: 'Public Expose', id: 'Paparan Publik', zh: '公开说明会' },
      description: { en: 'Materials and presentations from our annual public expose events.', id: 'Materi dan presentasi dari acara paparan publik tahunan kami.', zh: '年度公开说明会的材料和演示文稿。' },
    },
    documents: [
      {
        _key: 'pe-2024',
        title: { en: 'Public Expose 2024', id: 'Paparan Publik 2024', zh: '2024年公开说明会' },
        year: '2024',
        category: { en: 'Presentation', id: 'Presentasi', zh: '演示文稿' },
        description: { en: 'Presentation materials from the 2024 public expose session.', id: 'Materi presentasi dari sesi paparan publik 2024.', zh: '2024年公开说明会的演示材料。' },
      },
      {
        _key: 'pe-2023',
        title: { en: 'Public Expose 2023', id: 'Paparan Publik 2023', zh: '2023年公开说明会' },
        year: '2023',
        category: { en: 'Presentation', id: 'Presentasi', zh: '演示文稿' },
        description: { en: 'Presentation materials from the 2023 public expose session.', id: 'Materi presentasi dari sesi paparan publik 2023.', zh: '2023年公开说明会的演示材料。' },
      },
    ],
  },
  stockInfo: {
    sectionHeader: {
      eyebrow: { en: 'Stock Information', id: 'Informasi Saham', zh: '股票信息' },
      heading: { en: 'Stock Information', id: 'Informasi Saham', zh: '股票信息' },
      description: { en: 'Listing details and share information for Bike Tbk.', id: 'Detail pencatatan dan informasi saham Bike Tbk.', zh: 'Bike Tbk 的上市详情和股票信息。' },
    },
    stockCode: 'BIKE',
    exchange: { en: 'Indonesia Stock Exchange (IDX)', id: 'Bursa Efek Indonesia (BEI)', zh: '印度尼西亚证券交易所 (IDX)' },
    listingDate: '2022-07-15',
    market: { en: 'Main Board', id: 'Papan Utama', zh: '主板' },
    fields: [
      {
        _key: 'si-1',
        label: { en: 'Sector', id: 'Sektor', zh: '行业' },
        value: { en: 'Diversified Holdings', id: 'Holding Terdiversifikasi', zh: '多元化控股' },
      },
      {
        _key: 'si-2',
        label: { en: 'ISIN Code', id: 'Kode ISIN', zh: 'ISIN代码' },
        value: { en: 'ID100000BIKE8', id: 'ID100000BIKE8', zh: 'ID100000BIKE8' },
      },
      {
        _key: 'si-3',
        label: { en: 'Registered Shares', id: 'Saham Terdaftar', zh: '注册股份' },
        value: { en: '10,000,000,000', id: '10.000.000.000', zh: '10,000,000,000' },
      },
      {
        _key: 'si-4',
        label: { en: 'Par Value', id: 'Nilai Nominal', zh: '面值' },
        value: { en: 'Rp 100', id: 'Rp 100', zh: '100印尼盾' },
      },
    ],
  },
  corporateAction: {
    sectionHeader: {
      eyebrow: { en: 'Corporate Action', id: 'Aksi Korporasi', zh: '公司行动' },
      heading: { en: 'Corporate Action History', id: 'Riwayat Aksi Korporasi', zh: '公司行动历史' },
      description: { en: 'Historical record of dividends, stock splits, and other corporate actions.', id: 'Catatan historis dividen, pemecahan saham, dan aksi korporasi lainnya.', zh: '股息、拆股和其他公司行动的历史记录。' },
    },
    actions: [
      {
        _key: 'ca-1',
        date: '2024-06-15',
        title: { en: 'Cash Dividend 2024', id: 'Dividen Tunai 2024', zh: '2024年现金股息' },
        description: { en: 'Final cash dividend of Rp 50 per share for fiscal year 2023.', id: 'Dividen tunai final Rp 50 per saham untuk tahun fiskal 2023.', zh: '2023财年每股50印尼盾的最终现金股息。' },
        type: { en: 'Dividend', id: 'Dividen', zh: '股息' },
      },
      {
        _key: 'ca-2',
        date: '2023-06-20',
        title: { en: 'Cash Dividend 2023', id: 'Dividen Tunai 2023', zh: '2023年现金股息' },
        description: { en: 'Final cash dividend of Rp 40 per share for fiscal year 2022.', id: 'Dividen tunai final Rp 40 per saham untuk tahun fiskal 2022.', zh: '2022财年每股40印尼盾的最终现金股息。' },
        type: { en: 'Dividend', id: 'Dividen', zh: '股息' },
      },
      {
        _key: 'ca-3',
        date: '2022-12-10',
        title: { en: 'Stock Split', id: 'Pemecahan Saham', zh: '拆股' },
        description: { en: '1:2 stock split to increase share liquidity and market accessibility.', id: 'Pemecahan saham 1:2 untuk meningkatkan likuiditas saham dan aksesibilitas pasar.', zh: '1:2拆股以提高股票流动性和市场可及性。' },
        type: { en: 'Stock Split', id: 'Pemecahan Saham', zh: '拆股' },
      },
      {
        _key: 'ca-4',
        date: '2022-07-15',
        title: { en: 'Initial Public Offering', id: 'Penawaran Umum Perdana', zh: '首次公开发行' },
        description: { en: 'Bike Tbk listed on the Indonesia Stock Exchange with 2 billion shares offered.', id: 'Bike Tbk tercatat di Bursa Efek Indonesia dengan 2 miliar saham ditawarkan.', zh: 'Bike Tbk 在印度尼西亚证券交易所上市，发行20亿股。' },
        type: { en: 'IPO', id: 'IPO', zh: 'IPO' },
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
