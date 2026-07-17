import type { ContactPage } from '@/lib/types/sanity'

export const CONTACT_PAGE: ContactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  seo: {
    title: { en: 'Contact - PT Bike Tbk', id: 'Kontak - PT Bike Tbk', zh: '联系我们 - PT Bike Tbk' },
    description: {
      en: 'Get in touch with PT Bike Tbk. Visit our headquarters, call us, or send a message to start a conversation.',
      id: 'Hubungi PT Bike Tbk. Kunjungi kantor pusat kami, hubungi kami, atau kirim pesan untuk memulai percakapan.',
      zh: '联系 PT Bike Tbk。欢迎访问我们的总部、致电或发送消息，开启交流。',
    },
  },
  hero: {
    eyebrow: { en: 'Contact', id: 'Kontak', zh: '联系我们' },
    title: { en: "Let's Start a Conversation", id: 'Mari Mulai Percakapan', zh: '让我们开始沟通' },
    description: {
      en: "Whether you're a business partner, investor, media representative, dealer, or customer, our team is ready to assist you.",
      id: 'Baik Anda sebagai mitra bisnis, investor, perwakilan media, dealer, atau pelanggan, tim kami siap membantu Anda.',
      zh: '无论您是业务合作伙伴、投资者、媒体代表、经销商还是客户，我们的团队都随时为您提供协助。',
    },
  },
  contactInformation: {
    title: { en: 'Contact Information', id: 'Informasi Kontak', zh: '联系信息' },
    address: {
      en: 'PT Bike Tbk, Jl. Boulevard Alam Sutera No. 12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia',
      id: 'PT Bike Tbk, Jl. Boulevard Alam Sutera No. 12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia',
      zh: 'PT Bike Tbk, Jl. Boulevard Alam Sutera No. 12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia',
    },
    phone: '(021) 3005 2633',
    email: 'corsec@bike-tbk.co.id',
    contactPerson: 'Marina Pratiwi Sanjaya',
    icon: 'map',
  },
  map: {
    title: { en: 'Find Our Office', id: 'Temukan Kantor Kami', zh: '找到我们的办公室' },
    embedUrl: '',
    button: {
      label: { en: 'View on Google Maps', id: 'Lihat di Google Maps', zh: '在 Google 地图上查看' },
      href: 'https://maps.google.com',
      external: true,
    },
  },
  cta: {
    title: { en: 'Looking for More Information?', id: 'Mencari Informasi Lebih Lanjut?', zh: '需要更多信息？' },
    description: {
      en: 'Learn more about PT Bike Tbk, our businesses, investor relations, and corporate governance.',
      id: 'Pelajari lebih lanjut tentang PT Bike Tbk, bisnis kami, hubungan investor, dan tata kelola perusahaan.',
      zh: '了解更多关于 PT Bike Tbk 的信息，包括我们的业务、投资者关系和公司治理。',
    },
    primaryButton: {
      label: { en: 'About Us', id: 'Tentang Kami', zh: '关于我们' },
      href: '/about',
      external: false,
    },
    secondaryButton: {
      label: { en: 'Investor Relations', id: 'Hubungan Investor', zh: '投资者关系' },
      href: '/investor',
      external: false,
    },
  },
}
