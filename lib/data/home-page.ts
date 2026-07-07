import type { HomePage } from "@/lib/types/sanity";

export const HOME_PAGE: HomePage = {
  _id: "homePageFallback",
  _type: "homePage",
  seo: {
    title: "Bike - Shaping a Sustainable Future",
    description:
      "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare and infrastructure — operating in 15 countries.",
  },
  hero: {
    eyebrow: {
      en: "Established 2017 · Publicly Listed",
      id: "Didirikan 2017 · Terdaftar di Bursa",
    },
    title: {
      en: "Empowering Active Lifestyles Across Indonesia.",
      id: "Memberdayakan Gaya Hidup Aktif di Seluruh Indonesia.",
    },
    subtitle: {
      en:
        "PT Bike Tbk is a leading bicycle distribution company committed to providing high-quality products, expanding nationwide distribution, and creating sustainable value for customers, business partners, shareholders, and communities.",
      id:
        "PT Bike Tbk adalah perusahaan distribusi sepeda terkemuka yang berkomitmen untuk menyediakan produk berkualitas tinggi, memperluas distribusi nasional, dan menciptakan nilai berkelanjutan bagi pelanggan, mitra bisnis, pemegang saham, dan masyarakat.",
    },
    primaryButton: {
      label: "Discover SBI",
      href: "/about",
      variant: "primary",
      external: false,
    },
    secondaryButton: {
      label: "Investor Relations",
      href: "/investors",
      variant: "secondary",
      external: false,
    },
  },
  aboutPreview: {
    sectionHeader: {
      eyebrow: "About Us",
      heading: "Building Healthier Communities Through Better Mobility.",
    },
    description: {
      en:
        "PT Bike Tbk (SBI) was established in Tangerang in 2017 and has grown into one of Indonesia's leading bicycle distribution companies. Through trusted brands, an extensive dealer network, and a commitment to sustainable business practices, SBI continues to support healthier and more active lifestyles across the country.",
      id:
        "PT Bike Tbk (SBI) didirikan di Tangerang pada tahun 2017 dan telah berkembang menjadi salah satu perusahaan distribusi sepeda terkemuka di Indonesia. Melalui merek-merek terpercaya, jaringan dealer yang luas, dan komitmen terhadap praktik bisnis berkelanjutan, SBI terus mendukung gaya hidup yang lebih sehat dan aktif di seluruh negeri.",
    },
    secondaryDescription: {
      en:
        "Established in Tangerang in 2017, PT Bike Tbk operates in the wholesale distribution of bicycles. As the brand owner of Genio Bike and the largest distributor of United Bike and Avand, SBI brings more than 100 bicycle models and over 300 variants to the Indonesian market every year.",
      id:
        "Didirikan di Tangerang pada tahun 2017, PT Bike Tbk beroperasi dalam distribusi grosir sepeda. Sebagai pemilik merek Genio Bike dan distributor terbesar United Bike dan Avand, SBI menghadirkan lebih dari 100 model sepeda dan lebih dari 300 varian ke pasar Indonesia setiap tahun.",
    },
    visionCard: {
      label: {
        en: "Vision",
        id: "Visi",
      },
      statement: {
        en: "Expanding Indonesia's bicycle market through affordable mobility, innovation, and trusted after-sales service.",
        id: "Memperluas pasar sepeda Indonesia melalui mobilitas yang terjangkau, inovasi, dan layanan purna jual yang terpercaya.",
      },
    },
    button: {
      label: "Learn More",
      href: "/about",
      variant: "primary",
      external: false,
    },
  },
  businessHighlights: {
    sectionHeader: {
      eyebrow: "Our Business",
      heading: "SBI Business Activities.",
    },
    cards: [
      {
        title: {
          en: "Wholesale Bicycle Distribution",
          id: "Distribusi Sepeda Grosir",
        },
        description: {
          en: "Supplying bicycles through nationwide dealer and retail networks.",
          id: "Memasok sepeda melalui jaringan dealer dan ritel nasional.",
        },
      },
      {
        title: {
          en: "Brand Distribution",
          id: "Distribusi Merek",
        },
        description: {
          en: "Official distributor of Genio, United and Avand bicycles.",
          id: "Distributor resmi sepeda Genio, United, dan Avand.",
        },
      },
      {
        title: {
          en: "Distribution Network",
          id: "Jaringan Distribusi",
        },
        description: {
          en: "Supporting traditional, modern and digital sales channels throughout Indonesia.",
          id: "Mendukung saluran penjualan tradisional, modern, dan digital di seluruh Indonesia.",
        },
      },
      {
        title: {
          en: "Business Development",
          id: "Pengembangan Bisnis",
        },
        description: {
          en: "Continuously expanding distribution capabilities and creating long-term business growth.",
          id: "Terus memperluas kapabilitas distribusi dan menciptakan pertumbuhan bisnis jangka panjang.",
        },
      },
    ],
  },
  sustainability: {
    sectionHeader: {
      eyebrow: "Sustainability",
      heading: "Growing Responsibly for Indonesia.",
    },
    description: {
      en:
        "PT Bike Tbk actively contributes to improving healthier lifestyles while maintaining fair, honest and sustainable business practices.",
      id:
        "PT Bike Tbk secara aktif berkontribusi untuk meningkatkan gaya hidup yang lebih sehat sambil mempertahankan praktik bisnis yang adil, jujur, dan berkelanjutan.",
    },
    focusAreas: [
      {
        icon: "ShieldCheck",
        title: {
          en: "Responsible Business",
          id: "Bisnis Bertanggung Jawab",
        },
      },
      {
        icon: "Leaf",
        title: {
          en: "Environmental Awareness",
          id: "Kesadaran Lingkungan",
        },
      },
      {
        icon: "Users",
        title: {
          en: "Community Development",
          id: "Pengembangan Masyarakat",
        },
      },
      {
        icon: "TrendingUp",
        title: {
          en: "Long-Term Sustainability",
          id: "Keberlanjutan Jangka Panjang",
        },
      },
    ],
  },
  latestNews: {
    sectionHeader: {
      eyebrow: "Latest News",
      heading: "Updates from SBI.",
    },
    description: {
      en: "Stay informed with the latest announcements, public exposes, and updates from PT Bike Tbk.",
      id:
        "Tetap terinformasi dengan pengumuman terbaru, public expose, dan pembaruan dari PT Bike Tbk.",
    },
    viewAllButton: {
      label: "View All News",
      href: "/news",
      variant: "primary",
      external: false,
    },
  },
  cta: {
    title: {
      en: "Together We Move Indonesia Forward.",
      id: "Bersama Kita Majukan Indonesia.",
    },
    description: {
      en:
        "We believe every partnership begins with a conversation. Whether you're a business partner, investor, media representative, or customer, our team is ready to connect with you.",
      id:
        "Kami percaya setiap kemitraan dimulai dengan percakapan. Baik Anda mitra bisnis, investor, perwakilan media, atau pelanggan, tim kami siap terhubung dengan Anda.",
    },
    primaryButton: {
      label: "Contact Us",
      href: "/contact",
      variant: "primary",
      external: false,
    },
    secondaryButton: {
      label: "Get Directions",
      href: "https://maps.google.com",
      variant: "outline",
      external: true,
    },
  },
};
