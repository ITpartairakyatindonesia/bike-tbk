export interface SanityImage {
  asset: {
    _ref: string
    _type: 'reference'
  }
  url?: string
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
  localizedContent?: {
    tagline?: LocalizedString | null
    footerDescription?: LocalizedText | null
    defaultSeoTitle?: LocalizedString | null
    defaultSeoDescription?: LocalizedText | null
  }
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
  eyebrow?: LocalizedString
  heading: LocalizedString
  description?: LocalizedText
}

export interface Button {
  label: LocalizedString
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
  secondaryDescription?: LocalizedText
  visionCard?: {
    label?: LocalizedString
    statement?: LocalizedString
  }
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
  cards?: SustainabilityCard[]
}

export interface SustainabilityCard {
  _key?: string
  icon?: string
  title?: LocalizedString
}

export interface BrandCard {
  _key?: string
  logo?: SanityImage
  name?: LocalizedString
  description?: LocalizedText
  button?: Button
  products?: ProductCard[]
}

export interface ProductCard {
  _key?: string
  image?: SanityImage
  name?: LocalizedString
  description?: LocalizedText
  link?: string
}

export interface MilestoneCard {
  _key?: string
  year?: string
  title?: LocalizedString
  description?: LocalizedText
  image?: SanityImage
}

export interface News {
  _id: string
  _type: 'news'
  title?: LocalizedString
  slug?: {
    _type?: 'slug'
    current?: string
  }
  excerpt?: LocalizedText
  featuredImage?: SanityImage
  category?: string
  publishedAt?: string
  featured?: boolean
  seo?: Seo
  body?: unknown
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

export interface BrandsSection {
  sectionHeader?: SectionHeader
  cards?: BrandCard[]
}

export interface MilestonesSection {
  sectionHeader?: SectionHeader
  cards?: MilestoneCard[]
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
  brandsSection?: BrandsSection
  milestonesSection?: MilestonesSection
}

export interface AboutHeroSection {
  eyebrow?: LocalizedString
  title?: LocalizedString
  subtitle?: LocalizedText
  backgroundImage?: SanityImage
  primaryButton?: Button
  secondaryButton?: Button
}

export interface AboutOverviewSection {
  sectionHeader?: SectionHeader
  paragraphs?: LocalizedText[]
}

export interface AboutInfoItem {
  label?: LocalizedString
  value?: LocalizedString
}

export interface AboutInfoSection {
  sectionHeader?: SectionHeader
  items?: AboutInfoItem[]
}

export interface AboutVision {
  label?: LocalizedString
  statement?: LocalizedText
}

export interface AboutMissionItem {
  title?: LocalizedString
  description?: LocalizedText
}

export interface AboutMission {
  title?: LocalizedString
  items?: AboutMissionItem[]
}

export interface AboutVisionMissionSection {
  sectionHeader?: SectionHeader
  vision?: AboutVision
  mission?: AboutMission
}

export interface AboutCultureCard {
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
}

export interface AboutCultureSection {
  sectionHeader?: SectionHeader
  introduction?: LocalizedText
  cards?: AboutCultureCard[]
}

export interface AboutManagementExecutive {
  name?: string
  position?: LocalizedString
  biography?: LocalizedText
  slug?: {
    _type?: 'slug'
    current?: string
  }
  image?: SanityImage | null
}

export interface AboutManagementSection {
  sectionHeader?: SectionHeader
  introduction?: LocalizedText
  executives?: AboutManagementExecutive[]
}

export interface AboutPage {
  _id: string
  _type: 'aboutPage'
  seo?: Seo
  hero?: AboutHeroSection
  overview?: AboutOverviewSection
  info?: AboutInfoSection
  visionMission?: AboutVisionMissionSection
  culture?: AboutCultureSection
  management?: AboutManagementSection
}
