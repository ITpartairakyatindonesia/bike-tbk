import type { SiteSettings } from "@/lib/types/sanity";

export const SITE_SETTINGS: SiteSettings = {
  _id: "siteSettingsFallback",
  _type: "siteSettings",
  companyName: "Bike",
  companyShortName: "Bike",
  companyInitials: "B",
  companyLegalName: "PT Bike Tbk",
  legalName: "PT Bike Tbk",
  tagline: {
    en: "Shaping a Sustainable Future",
    id: "Mewujudkan Masa Depan Berkelanjutan",
    zh: "塑造可持续未来",
  },
  footerDescription: {
    en: "Bike is a leading company driving innovation and growth across multiple industries.",
    id: "Bike adalah perusahaan terkemuka yang mendorong inovasi dan pertumbuhan di berbagai industri.",
    zh: "Bike 是一家推动多行业创新和增长的领先企业。",
  },
  defaultSeoTitle: {
    en: "Bike - Shaping a Sustainable Future",
    id: "Bike - Mewujudkan Masa Depan Berkelanjutan",
    zh: "Bike - 塑造可持续未来",
  },
  defaultSeoDescription: {
    en: "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare, and infrastructure.",
    id: "Bike adalah perusahaan super holding terdiversifikasi yang menciptakan nilai berkelanjutan di bidang energi, logistik, keuangan, kesehatan, dan infrastruktur.",
    zh: "Bike 是一家多元化超级控股公司，在能源、物流、金融、医疗和基础设施领域创造持久价值。",
  },
  logo: null,
  favicon: null,
  defaultOgImage: null,
  contactInfo: {
    address: "",
    phone: "",
    email: "",
    corporateSecretary: "",
  },
  socialLinks: [],
  currentYear: new Date().getFullYear(),
};
