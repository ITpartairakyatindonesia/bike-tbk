export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface LocalizedString {
  en: string
  id: string
}

export interface LocalizedText {
  en: string
  id: string
}

export interface SiteSettings {
  _id: string
  _type: 'siteSettings'
  companyName: string
  companyShortName?: string
  companyLegalName: string
  legalName?: string
  companyInitials?: string
  tagline?: LocalizedString | null
  footerDescription: LocalizedText | null
  logo?: SanityImage | null
  favicon?: SanityImage | null
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
  defaultSeoTitle?: LocalizedString | null
  defaultSeoDescription?: LocalizedText | null
  defaultOgImage?: SanityImage | null
  currentYear: number
}

export interface NavigationLink {
  _key?: string
  label: LocalizedString
  href: string
  external?: boolean
}

export interface Navigation {
  _id: string
  _type: 'navigation'
  mainNavigation?: NavigationLink[]
  footerCompanyLinks?: NavigationLink[]
  footerResourceLinks?: NavigationLink[]
  footerLegalLinks?: NavigationLink[]
}

export interface NavigationGroups {
  mainNavigation: NavigationLink[]
  footerCompanyLinks: NavigationLink[]
  footerResourceLinks: NavigationLink[]
  footerLegalLinks: NavigationLink[]
}

export interface Seo {
  title?: string
  description?: string
  ogImage?: SanityImage
}

export interface SectionHeader {
  eyebrow?: string
  heading: string
  description?: string
}

export interface Button {
  label: string
  href: string
  variant?: 'primary' | 'secondary' | 'outline'
  external?: boolean
}

export interface HeroSection {
  eyebrow?: LocalizedString
  title?: LocalizedString
  subtitle?: LocalizedText
  backgroundImage?: SanityImage
  primaryButton?: Button
  secondaryButton?: Button
}

export interface AboutPreviewSection {
  sectionHeader?: SectionHeader
  description?: LocalizedText
  image?: SanityImage
  button?: Button
}

export interface BusinessHighlightCard {
  _key?: string
  image?: SanityImage
  title?: LocalizedString
  description?: LocalizedText
  button?: Button
}

export interface BusinessHighlightsSection {
  sectionHeader?: SectionHeader
  cards?: BusinessHighlightCard[]
}

export interface SustainabilitySection {
  sectionHeader?: SectionHeader
  description?: LocalizedText
  image?: SanityImage
  button?: Button
}

export interface LatestNewsSection {
  sectionHeader?: SectionHeader
  description?: LocalizedText
  viewAllButton?: Button
}

export interface CTASection {
  title?: LocalizedString
  description?: LocalizedText
  primaryButton?: Button
  secondaryButton?: Button
}

export interface HomePage {
  _id: string
  _type: 'homePage'
  seo?: Seo
  hero?: HeroSection
  aboutPreview?: AboutPreviewSection
  businessHighlights?: BusinessHighlightsSection
  sustainability?: SustainabilitySection
  latestNews?: LatestNewsSection
  cta?: CTASection
}
