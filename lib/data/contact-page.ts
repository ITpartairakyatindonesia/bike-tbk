import type { ContactPage } from '@/lib/types/sanity'

export const CONTACT_PAGE: ContactPage = {
  _id: 'contactPage',
  _type: 'contactPage',
  seo: {
    title: { en: 'Contact - PT Bike Tbk', id: 'Kontak - PT Bike Tbk' },
    description: {
      en: 'Get in touch with PT Bike Tbk. Visit our headquarters, call us, or send a message to start a conversation.',
      id: 'Hubungi PT Bike Tbk. Kunjungi kantor pusat kami, hubungi kami, atau kirim pesan untuk memulai percakapan.',
    },
  },
  hero: {
    eyebrow: { en: 'Contact', id: 'Kontak' },
    title: { en: "Let's Start a Conversation", id: 'Mari Mulai Percakapan' },
    description: {
      en: "Whether you're a business partner, investor, media representative, dealer, or customer, our team is ready to assist you.",
      id: 'Baik Anda sebagai mitra bisnis, investor, perwakilan media, dealer, atau pelanggan, tim kami siap membantu Anda.',
    },
  },
  contactInformation: {
    title: { en: 'Contact Information', id: 'Informasi Kontak' },
    address: {
      en: 'PT Bike Tbk, Jl. Boulevard Alam Sutera No. 12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia',
      id: 'PT Bike Tbk, Jl. Boulevard Alam Sutera No. 12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia',
    },
    phone: '(021) 3005 2633',
    email: 'corsec@bike-tbk.co.id',
    contactPerson: 'Marina Pratiwi Sanjaya',
    icon: 'map',
  },
  map: {
    title: { en: 'Find Our Office', id: 'Temukan Kantor Kami' },
    embedUrl: '',
    button: {
      label: { en: 'View on Google Maps', id: 'Lihat di Google Maps' },
      href: 'https://maps.google.com',
      variant: 'primary',
      external: true,
    },
  },
  cta: {
    title: { en: 'Looking for More Information?', id: 'Mencari Informasi Lebih Lanjut?' },
    description: {
      en: 'Learn more about PT Bike Tbk, our businesses, investor relations, and corporate governance.',
      id: 'Pelajari lebih lanjut tentang PT Bike Tbk, bisnis kami, hubungan investor, dan tata kelola perusahaan.',
    },
    button: {
      label: { en: 'About Us', id: 'Tentang Kami' },
      href: '/about',
      variant: 'primary',
      external: false,
    },
  },
}
