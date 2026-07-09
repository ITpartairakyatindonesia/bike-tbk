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
  headline: "Building Healthier Communities Through Better Mobility.",
  description:
    "PT Bike Tbk (SBI) was established in Tangerang in 2017 and has grown into one of Indonesia's leading bicycle distribution companies. Through trusted brands, an extensive dealer network, and a commitment to sustainable business practices, SBI continues to support healthier and more active lifestyles across the country.",
  backgroundImage: "/business-logistics.jpg",
};

export const ABOUT_OVERVIEW = {
  title: "Who We Are",
  paragraphs: [
    "Established in Tangerang in 2017, PT Bike Tbk operates in the wholesale distribution of bicycles. As the brand owner of Genio Bike and the largest distributor of United Bike and Avand, SBI brings more than 100 bicycle models and over 300 variants to the Indonesian market every year.",
    "Our nationwide distribution network reaches across Java, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, and Papua. We are committed to developing Indonesia's bicycle industry from upstream to downstream through a professional distribution network, integrated customer service, and a wide product portfolio that serves every market segment.",
  ],
};

export const ABOUT_HIGHLIGHTS: AboutHighlight[] = [
  { label: "Established", value: "2017" },
  { label: "Brands", value: "Genio • United • Avand" },
  { label: "Product Portfolio", value: "100+ Models", subtext: "300+ Variants" },
  { label: "Dealer Network", value: "578 Stores" },
  { label: "Employees", value: "16" },
  { label: "Business", value: "Bicycle Distribution" },
];

export const ABOUT_INFO: AboutInfoItem[] = [
  { label: "Company Name", value: "PT Bike Tbk" },
  { label: "Founded", value: "2017" },
  { label: "Head Office", value: "Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia" },
  { label: "Core Business", value: "Wholesale Bicycle Distribution" },
  { label: "Website", value: "www.bike-tbk.co.id" },
  { label: "Board of Commissioners", value: "Komisaris Utama & Anggota" },
  { label: "Board of Directors", value: "Direktur Utama & Anggota" },
  { label: "Dealer Network", value: "578 Stores" },
  { label: "Employees", value: "16" },
];

export const ABOUT_VISION = {
  eyebrow: "Our Direction",
  label: "Vision",
  statement:
    "Expanding market share throughout Indonesia by realizing customers' aspirations and offering affordable mobility and lifestyle solutions while delivering excellent after-sales service.",
};

export const ABOUT_MISSION: MissionItem[] = [
  {
    title: "Build Long-Term Relationships",
    description:
      "Build and maintain strong relationships with dealers and customers to protect existing market share while expanding into new markets.",
  },
  {
    title: "Maintain Customer Loyalty",
    description:
      "Maintain customer loyalty by continuously improving product quality and customer satisfaction.",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensure every product passes consistent quality control before reaching customers.",
  },
  {
    title: "Customer Feedback",
    description:
      "Collect customer feedback through dealers and direct surveys to continuously improve products and services.",
  },
  {
    title: "Excellent After-Sales Service",
    description:
      "Deliver reliable after-sales service that supports long-term customer satisfaction.",
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
  headline: "Moving Indonesia Forward Together.",
  description:
    "With a commitment to innovation, responsible business practices, and trusted partnerships, PT Bike Tbk continues to strengthen Indonesia's bicycle industry while creating long-term value for customers, shareholders, employees, dealers, and communities.",
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
    eyebrow: { en: 'About Us', id: 'Tentang Kami' },
    title: { en: 'Building Healthier Communities Through Better Mobility.', id: 'Membangun Komunitas yang Lebih Sehat Melalui Mobilitas yang Lebih Baik.' },
    subtitle: { en: 'PT Bike Tbk (SBI) was established in Tangerang in 2017 and has grown into one of Indonesia\'s leading bicycle distribution companies. Through trusted brands, an extensive dealer network, and a commitment to sustainable business practices, SBI continues to support healthier and more active lifestyles across the country.', id: 'PT Bike Tbk (SBI) didirikan di Tangerang pada tahun 2017 dan telah berkembang menjadi salah satu perusahaan distribusi sepeda terkemuka di Indonesia. Melalui merek-merek terpercaya, jaringan dealer yang luas, dan komitmen terhadap praktik bisnis yang berkelanjutan, SBI terus mendukung gaya hidup yang lebih sehat dan aktif di seluruh negeri.' },
    backgroundImage: undefined,
  },
  overview: {
    sectionHeader: {
      heading: { en: 'Who We Are', id: 'Siapa Kami' },
    },
    paragraphs: [
      { en: 'Established in Tangerang in 2017, PT Bike Tbk operates in the wholesale distribution of bicycles. As the brand owner of Genio Bike and the largest distributor of United Bike and Avand, SBI brings more than 100 bicycle models and over 300 variants to the Indonesian market every year.', id: 'Didirikan di Tangerang pada tahun 2017, PT Bike Tbk beroperasi dalam distribusi grosir sepeda. Sebagai pemilik merek Genio Bike dan distributor terbesar United Bike dan Avand, SBI membawa lebih dari 100 model sepeda dan lebih dari 300 varian ke pasar Indonesia setiap tahun.' },
      { en: 'Our nationwide distribution network reaches across Java, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, and Papua. We are committed to developing Indonesia\'s bicycle industry from upstream to downstream through a professional distribution network, integrated customer service, and a wide product portfolio that serves every market segment.', id: 'Jaringan distribusi nasional kami mencakup Jawa, Bali, Sumatra, Kalimantan, Sulawesi, Nusa Tenggara, Maluku, dan Papua. Kami berkomitmen untuk mengembangkan industri sepeda Indonesia dari hulu ke hilir melalui jaringan distribusi profesional, layanan pelanggan terintegrasi, dan portofolio produk yang luas yang melayani setiap segmen pasar.' },
    ],
  },
  info: {
    sectionHeader: {
      heading: { en: 'Company Information', id: 'Informasi Perusahaan' },
    },
    items: [
      { label: { en: 'Company Name', id: 'Nama Perusahaan' }, value: { en: 'PT Bike Tbk', id: 'PT Bike Tbk' } },
      { label: { en: 'Founded', id: 'Didirikan' }, value: { en: '2017', id: '2017' } },
      { label: { en: 'Head Office', id: 'Kantor Pusat' }, value: { en: 'Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia', id: 'Jl. Boulevard Alam Sutera No.12A, Serpong Utara, Tangerang Selatan, Banten 15325, Indonesia' } },
      { label: { en: 'Core Business', id: 'Bisnis Utama' }, value: { en: 'Wholesale Bicycle Distribution', id: 'Distribusi Grosir Sepeda' } },
      { label: { en: 'Website', id: 'Situs Web' }, value: { en: 'www.bike-tbk.co.id', id: 'www.bike-tbk.co.id' } },
      { label: { en: 'Board of Commissioners', id: 'Dewan Komisaris' }, value: { en: 'Komisaris Utama & Anggota', id: 'Komisaris Utama & Anggota' } },
      { label: { en: 'Board of Directors', id: 'Dewan Direksi' }, value: { en: 'Direktur Utama & Anggota', id: 'Direktur Utama & Anggota' } },
      { label: { en: 'Dealer Network', id: 'Jaringan Dealer' }, value: { en: '578 Stores', id: '578 Toko' } },
      { label: { en: 'Employees', id: 'Karyawan' }, value: { en: '16', id: '16' } },
    ],
  },
  visionMission: {
    sectionHeader: {
      eyebrow: { en: 'Our Direction', id: 'Arah Kami' },
      heading: { en: 'Vision & Mission', id: 'Visi & Misi' },
    },
    vision: {
      label: { en: 'Vision', id: 'Visi' },
      statement: { en: 'Expanding market share throughout Indonesia by realizing customers\' aspirations and offering affordable mobility and lifestyle solutions while delivering excellent after-sales service.', id: 'Memperluas pangsa pasar di seluruh Indonesia dengan mewujudkan aspirasi pelanggan dan menawarkan solusi mobilitas dan gaya hidup yang terjangkau sambil memberikan layanan purna jual yang excellent.' },
    },
    mission: {
      title: { en: 'Mission', id: 'Misi' },
      items: [
        { title: { en: 'Build Long-Term Relationships', id: 'Membangun Hubungan Jangka Panjang' }, description: { en: 'Build and maintain strong relationships with dealers and customers to protect existing market share while expanding into new markets.', id: 'Membangun dan mempertahankan hubungan yang kuat dengan dealer dan pelanggan untuk melindungi pangsa pasar yang ada sambil memperluas ke pasar baru.' } },
        { title: { en: 'Maintain Customer Loyalty', id: 'Mempertahankan Loyalitas Pelanggan' }, description: { en: 'Maintain customer loyalty by continuously improving product quality and customer satisfaction.', id: 'Mempertahankan loyalitas pelanggan dengan terus meningkatkan kualitas produk dan kepuasan pelanggan.' } },
        { title: { en: 'Quality Assurance', id: 'Jaminan Kualitas' }, description: { en: 'Ensure every product passes consistent quality control before reaching customers.', id: 'Memastikan setiap produk lulus kontrol kualitas yang konsisten sebelum mencapai pelanggan.' } },
        { title: { en: 'Customer Feedback', id: 'Umpan Balik Pelanggan' }, description: { en: 'Collect customer feedback through dealers and direct surveys to continuously improve products and services.', id: 'Mengumpulkan umpan balik pelanggan melalui dealer dan survei langsung untuk terus meningkatkan produk dan layanan.' } },
        { title: { en: 'Excellent After-Sales Service', id: 'Layanan Purna Jual yang Excellent' }, description: { en: 'Deliver reliable after-sales service that supports long-term customer satisfaction.', id: 'Memberikan layanan purna jual yang andal yang mendukung kepuasan pelanggan jangka panjang.' } },
      ],
    },
  },
  culture: {
    sectionHeader: {
      heading: { en: 'Our Culture', id: 'Budaya Kami' },
    },
    introduction: { en: 'At SBI, we believe that people are at the heart of every successful journey. Our culture is built on respect, integrity, and collaboration — empowering every individual to grow while contributing to a healthier and more sustainable Indonesia.', id: 'Di SBI, kami percaya bahwa orang-orang ada di jantung setiap perjalanan yang sukses. Budaya kami dibangun di atas rasa hormat, integritas, dan kolaborasi — memberdayakan setiap individu untuk tumbuh sambil berkontribusi pada Indonesia yang lebih sehat dan berkelanjutan.' },
    cards: [
      { icon: 'TreePine', title: { en: 'Human & Environment', id: 'Manusia & Lingkungan' }, description: { en: 'Promote honesty, responsibility, trust and environmental awareness.', id: 'Mempromosikan kejujuran, tanggung jawab, kepercayaan dan kesadaran lingkungan.' } },
      { icon: 'HeartHandshake', title: { en: 'Human & Customers', id: 'Manusia & Pelanggan' }, description: { en: 'Deliver beyond expectations through empathy and excellent service.', id: 'Memberikan lebih dari yang diharapkan melalui empati dan layanan yang excellent.' } },
      { icon: 'Users', title: { en: 'Human & Partners', id: 'Manusia & Mitra' }, description: { en: 'Build long-term partnerships based on fairness and mutual growth.', id: 'Membangun kemitraan jangka panjang berdasarkan keadilan dan pertumbuhan bersama.' } },
      { icon: 'Lightbulb', title: { en: 'Innovation & People', id: 'Inovasi & Orang' }, description: { en: 'Support continuous development of people, products, services and innovation.', id: 'Mendukung pengembangan berkelanjutan orang, produk, layanan dan inovasi.' } },
    ],
  },
  management: {
    sectionHeader: {
      heading: { en: 'Management Profile', id: 'Profil Manajemen' },
    },
    introduction: { en: 'Meet the experienced leaders guiding PT Bike Tbk through strategic growth, innovation, and responsible corporate governance.', id: 'Temui pemimpin berpengalaman yang memandu PT Bike Tbk melalui pertumbuhan strategis, inovasi, dan tata kelola perusahaan yang bertanggung jawab.' },
    executives: [
      { name: 'Henry Mulyadi', position: { en: 'Komisaris Utama', id: 'Komisaris Utama' }, biography: { en: 'Henry Mulyadi was born in Jakarta in 1963 and is one of the founders of PT Bike Tbk, currently serving as President Commissioner.', id: 'Henry Mulyadi lahir di Jakarta pada tahun 1963, merupakan salah satu pendiri PT Bike Tbk dan saat ini menjabat sebagai Komisaris Utama.' }, slug: { current: 'henry-mulyadi' }, image: { asset: { _ref: 'image-placeholder', _type: 'reference' }, url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop' } },
      { name: 'Mayor Jenderal TNI (Purn.) M. Nur Rahmad', position: { en: 'Independent Commissioner', id: 'Komisaris Independen' }, biography: { en: 'Mayor Jenderal TNI (Purn.) M. Nur Rahmad was born in Ciamis in 1965 and currently serves as Independent Commissioner of PT Bike Tbk.', id: 'Mayor Jenderal TNI (Purn.) M. Nur Rahmad lahir di Ciamis pada tahun 1965 dan saat ini menjabat sebagai Komisaris Independen PT Bike Tbk.' }, slug: { current: 'm-nur-rahmad' }, image: { asset: { _ref: 'image-placeholder', _type: 'reference' }, url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop' } },
      { name: 'Andrew Mulyadi', position: { en: 'President Director', id: 'Direktur Utama' }, biography: { en: 'Andrew Mulyadi was born in Jakarta in 1957 and currently serves as President Director of PT Bike Tbk.', id: 'Andrew Mulyadi lahir di Jakarta pada tahun 1957 dan saat ini menjabat sebagai Direktur Utama PT Bike Tbk.' }, slug: { current: 'andrew-mulyadi' }, image: { asset: { _ref: 'image-placeholder', _type: 'reference' }, url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop' } },
      { name: 'Winston Mulyadi', position: { en: 'Director', id: 'Direktur' }, biography: { en: 'Winston Mulyadi was born in Jakarta in 1994 and currently serves as Director of PT Bike Tbk.', id: 'Winston Mulyadi lahir di Jakarta pada tahun 1994 dan saat ini menjabat sebagai Direktur PT Bike Tbk.' }, slug: { current: 'winston-mulyadi' }, image: { asset: { _ref: 'image-placeholder', _type: 'reference' }, url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop' } },
    ],
  },
};
