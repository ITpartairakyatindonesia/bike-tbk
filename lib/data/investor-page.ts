import type { InvestorPage } from '@/lib/types/sanity'

export const INVESTOR_PAGE: InvestorPage = {
  _id: 'investorPage',
  _type: 'investorPage',
  seo: {
    title: { en: 'Investor Relations - Bike', id: 'Hubungan Investor - Bike' },
    description: {
      en: 'Access Bike\'s investor relations information including annual reports, financial statements, corporate governance documents, and public expose materials.',
      id: 'Akses informasi hubungan investor Bike termasuk laporan tahunan, laporan keuangan, dokumen tata kelola perusahaan, dan materi paparan publik.',
    },
  },
  hero: {
    label: { en: 'Investor Relations', id: 'Hubungan Investor' },
    title: { en: 'Building long-term value for our shareholders.', id: 'Membangun nilai jangka panjang bagi pemegang saham kami.' },
    description: {
      en: 'SBI is committed to delivering sustainable growth and transparency to our investors. Access financial reports, governance information, and shareholder resources.',
      id: 'SBI berkomitmen untuk memberikan pertumbuhan berkelanjutan dan transparansi kepada investor kami. Akses laporan keuangan, informasi tata kelola, dan sumber daya pemegang saham.',
    },
  },
  cards: [
    {
      title: { en: 'Annual Reports', id: 'Laporan Tahunan' },
      description: {
        en: 'Comprehensive yearly reports on company performance, strategy, and financial highlights.',
        id: 'Laporan tahunan komprehensif tentang kinerja perusahaan, strategi, dan sorotan keuangan.',
      },
      iconKey: 'FileText',
      documents: [
        { title: 'Annual Report 2023' },
        { title: 'Annual Report 2022' },
      ],
    },
    {
      title: { en: 'Financial Statements', id: 'Laporan Keuangan' },
      description: {
        en: 'Quarterly and audited financial statements for shareholders and investors.',
        id: 'Laporan keuangan triwulan dan teraudit untuk pemegang saham dan investor.',
      },
      iconKey: 'BarChart3',
      documents: [
        { title: 'Q3 2023 Financial Statement' },
        { title: 'Q2 2023 Financial Statement' },
      ],
    },
    {
      title: { en: 'Corporate Governance', id: 'Tata Kelola Perusahaan' },
      description: {
        en: 'Board charters, policies, and governance documents ensuring transparent operations.',
        id: 'Piagam dewan, kebijakan, dan dokumen tata kelola yang memastikan operasi transparan.',
      },
      iconKey: 'ShieldCheck',
      documents: [
        { title: 'Code of Conduct' },
        { title: 'Board Manual' },
      ],
    },
    {
      title: { en: 'Public Expose', id: 'Paparan Publik' },
      description: {
        en: 'Recordings and materials from our annual public expose events.',
        id: 'Rekaman dan materi dari acara paparan publik tahunan kami.',
      },
      iconKey: 'Presentation',
      documents: [
        { title: 'Public Expose 2023' },
        { title: 'Public Expose 2022' },
      ],
    },
  ],
}
