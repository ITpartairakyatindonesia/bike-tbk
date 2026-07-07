export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  companyName: string
  companyLegalName: string
  companyInitials?: string
  tagline?: string
  footerDescription: string
  logo?: SanityImage
  favicon?: SanityImage
  contactInfo?: {
    address?: string
    phone?: string
    email?: string
    corporateSecretary?: string
  }
  socialLinks?: {
    platform: string
    href: string
    label?: string
  }[]
  defaultSeoTitle?: string
  defaultSeoDescription?: string
  defaultOgImage?: SanityImage
}

export interface Hero {
  _id: string
  _type: 'hero'
  title: string
  subtitle: string
  backgroundImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
}
