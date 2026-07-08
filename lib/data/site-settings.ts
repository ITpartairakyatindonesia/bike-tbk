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
  },
  footerDescription: {
    en: "Bike is a leading company driving innovation and growth across multiple industries.",
    id: "Bike adalah perusahaan terkemuka yang mendorong inovasi dan pertumbuhan di berbagai industri.",
  },
  defaultSeoTitle: {
    en: "Bike - Shaping a Sustainable Future",
    id: "Bike - Mewujudkan Masa Depan Berkelanjutan",
  },
  defaultSeoDescription: {
    en: "Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare, and infrastructure.",
    id: "Bike adalah perusahaan super holding terdiversifikasi yang menciptakan nilai berkelanjutan di bidang energi, logistik, keuangan, kesehatan, dan infrastruktur.",
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
