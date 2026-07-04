export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  companyName: string
  companyLegalName: string
  tagline?: string
  description: string
  logo?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  favicon?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  defaultSeoTitle?: string
  defaultSeoDescription?: string
  defaultOgImage?: {
    asset: {
      _ref: string
      _type: 'reference'
    }
  }
  copyright: string
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
