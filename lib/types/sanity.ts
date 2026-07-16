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
  zh?: string
}

export interface LocalizedText {
  en: string
  id: string
  zh?: string
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
  title?: LocalizedString
  description?: LocalizedText
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
  viewAllButton?: Button
}

export interface SustainabilitySection {
  sectionHeader?: SectionHeader
  description?: LocalizedText
  image?: SanityImage
  cards?: SustainabilityCard[]
  viewAllButton?: Button
}

export interface SustainabilityCard {
  _key?: string
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
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
  author?: string
  seo?: Seo
  body?: any[]
}

export interface NewsPage {
  _id: string
  _type: 'newsPage'
  seo?: Seo
  hero?: {
    eyebrow?: LocalizedString
    title?: LocalizedString
    description?: LocalizedText
  }
  noNewsMessage?: LocalizedText
  readMoreLabel?: LocalizedString
  backToNewsLabel?: LocalizedString
  loadMoreLabel?: LocalizedString
}

export interface NewsCategory {
  _id: string
  _type: 'newsCategory'
  title?: LocalizedString
  slug?: {
    _type?: 'slug'
    current?: string
  }
}

export interface NewsDetail {
  article: News
  relatedArticles: News[]
}

export interface LatestNewsSection {
  sectionHeader?: SectionHeader
  description?: LocalizedText
  viewAllButton?: Button
  noNewsMessage?: LocalizedText
  readMoreLabel?: LocalizedString
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
  placeholder?: LocalizedText
  viewBiographyLabel?: LocalizedString
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
  milestonesSection?: MilestonesSection
  cta?: CTASection
}

export interface ProductHeroSection {
  eyebrow?: LocalizedString
  title?: LocalizedString
  subtitle?: LocalizedText
  backgroundImage?: SanityImage
  primaryButton?: Button
  secondaryButton?: Button
}

export interface ProductStatCard {
  value?: LocalizedString
  label?: LocalizedString
}

export interface ProductIntroductionSection {
  sectionHeader?: SectionHeader
  paragraphs?: LocalizedText[]
  statCards?: ProductStatCard[]
}

export interface ProductFeature {
  title?: LocalizedString
  description?: LocalizedText
}

export interface ProductWhySection {
  sectionHeader?: SectionHeader
  features?: ProductFeature[]
}

export interface ProductBrandCard {
  name?: string
  description?: LocalizedText
  highlights?: LocalizedString[]
  button?: Button
}

export interface ProductBrandsSection {
  sectionHeader?: SectionHeader
  brandCards?: ProductBrandCard[]
}

export interface ProductFeaturedSection {
  sectionHeader?: SectionHeader
  products?: ProductCard[]
}

export interface ProductMarketStage {
  title?: LocalizedString
  description?: LocalizedText
}

export interface ProductMarketPositionSection {
  sectionHeader?: SectionHeader
  stages?: ProductMarketStage[]
}

export interface ProductBrandLink {
  name?: string
  website?: string
}

export interface ProductCTASection {
  title?: LocalizedString
  description?: LocalizedText
  brandLinks?: ProductBrandLink[]
}

export interface ProductPage {
  _id: string
  _type: 'productPage'
  seo?: Seo
  hero?: ProductHeroSection
  introduction?: ProductIntroductionSection
  why?: ProductWhySection
  brands?: ProductBrandsSection
  featured?: ProductFeaturedSection
  marketPosition?: ProductMarketPositionSection
  cta?: ProductCTASection
}

export interface ContactHeroSection {
  eyebrow?: LocalizedString
  title?: LocalizedString
  description?: LocalizedText
}

export interface ContactInformationSection {
  title?: LocalizedString
  address?: LocalizedText
  phone?: string
  email?: string
  contactPerson?: string
  icon?: string
}

export interface ContactMapSection {
  title?: LocalizedString
  embedUrl?: string
  button?: Button
}

export interface ContactPage {
  _id: string
  _type: 'contactPage'
  seo?: Seo
  hero?: ContactHeroSection
  contactInformation?: ContactInformationSection
  map?: ContactMapSection
  cta?: CTASection
}

export interface InvestorHeroSection {
  label?: LocalizedString
  title?: LocalizedString
  description?: LocalizedText
}

export interface InvestorDocument {
  title?: string
  file?: {
    asset?: {
      _id?: string
      _type?: string
      url?: string
      originalFilename?: string
      mimeType?: string
      size?: number
    }
  }
}

export interface InvestorCard {
  title?: LocalizedString
  description?: LocalizedText
  iconKey?: string
  documents?: InvestorDocument[]
}

export interface InvestorOverviewSection {
  sectionHeader?: SectionHeader
  paragraphs?: LocalizedText[]
  image?: SanityImage
}

export interface InvestorHighlightCard {
  _key?: string
  value?: LocalizedString
  label?: LocalizedString
  description?: LocalizedText
}

export interface InvestorHighlightsSection {
  sectionHeader?: SectionHeader
  cards?: InvestorHighlightCard[]
}

export interface InvestorQuickAccessCard {
  _key?: string
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
  button?: Button
}

export interface InvestorQuickAccessSection {
  sectionHeader?: SectionHeader
  cards?: InvestorQuickAccessCard[]
}

export interface InvestorDocumentItem {
  _key?: string
  title?: LocalizedString
  year?: string
  category?: LocalizedString
  description?: LocalizedText
  file?: {
    asset?: {
      _id?: string
      _type?: string
      url?: string
      originalFilename?: string
      mimeType?: string
      size?: number
    }
  }
  thumbnail?: SanityImage
}

export interface InvestorDocumentSection {
  sectionHeader?: SectionHeader
  documents?: InvestorDocumentItem[]
}

export interface InvestorStockInfoField {
  _key?: string
  label?: LocalizedString
  value?: LocalizedString
}

export interface InvestorStockInfoSection {
  sectionHeader?: SectionHeader
  stockCode?: string
  exchange?: LocalizedString
  listingDate?: string
  market?: LocalizedString
  fields?: InvestorStockInfoField[]
}

export interface InvestorCorporateActionItem {
  _key?: string
  date?: string
  title?: LocalizedString
  description?: LocalizedText
  type?: LocalizedString
}

export interface InvestorCorporateActionSection {
  sectionHeader?: SectionHeader
  actions?: InvestorCorporateActionItem[]
}

export interface InvestorAttractionCard {
  _key?: string
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
}

export interface InvestorAttractionSection {
  sectionHeader?: SectionHeader
  cards?: InvestorAttractionCard[]
}

export interface InvestorPage {
  _id: string
  _type: 'investorPage'
  seo?: Seo
  hero?: InvestorHeroSection
  overview?: InvestorOverviewSection
  investmentHighlights?: InvestorHighlightsSection
  financialHighlights?: InvestorHighlightsSection
  quickAccess?: InvestorQuickAccessSection
  annualReports?: InvestorDocumentSection
  financialStatements?: InvestorDocumentSection
  prospectus?: InvestorDocumentSection
  publicExpose?: InvestorDocumentSection
  stockInfo?: InvestorStockInfoSection
  corporateAction?: InvestorCorporateActionSection
  attraction?: InvestorAttractionSection
  cta?: CTASection
  cards?: InvestorCard[]
}

export interface BusinessHeroSection {
  eyebrow?: LocalizedString
  headline?: LocalizedString
  description?: LocalizedText
  backgroundImage?: SanityImage
}

export interface BusinessStatCard {
  _key?: string
  value?: LocalizedString
  label?: LocalizedString
}

export interface BusinessIntroductionSection {
  title?: LocalizedString
  paragraphs?: LocalizedText[]
  statCards?: BusinessStatCard[]
}

export interface BusinessInfoCard {
  _key?: string
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
}

export interface BusinessExtensionSection {
  sectionHeader?: SectionHeader
  cards?: BusinessInfoCard[]
}

export interface BusinessDevelopmentSection {
  sectionHeader?: SectionHeader
  cards?: BusinessInfoCard[]
}

export interface BusinessDiversificationSection {
  sectionHeader?: SectionHeader
  paragraph?: LocalizedText
  ctaLabel?: LocalizedString
  ctaHref?: string
}

export interface SubHoldingCard {
  _key?: string
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
}

export interface SubHoldingStructureSection {
  sectionHeader?: SectionHeader
  cards?: SubHoldingCard[]
  tagline?: LocalizedString
}

export interface CoreBusinessCard {
  _key?: string
  image?: SanityImage
  title?: LocalizedString
  description?: LocalizedText
}

export interface CoreBusinessSection {
  sectionHeader?: SectionHeader
  cards?: CoreBusinessCard[]
}

export interface BusinessPage {
  _id?: string
  _type?: string
  seo?: Seo
  hero?: BusinessHeroSection
  introduction?: BusinessIntroductionSection
  extension?: BusinessExtensionSection
  development?: BusinessDevelopmentSection
  diversification?: BusinessDiversificationSection
  subHoldingStructure?: SubHoldingStructureSection
  coreBusiness?: CoreBusinessSection
  projectExperience?: ProjectExperienceSection
  legacyBusiness?: LegacyBusinessSection
  cta?: CTASection
}

export interface ProjectExperienceItem {
  _key?: string
  image?: SanityImage
  title?: LocalizedString
  location?: LocalizedString
  category?: LocalizedString
  description?: LocalizedText
}

export interface ProjectExperienceSection {
  sectionHeader?: SectionHeader
  projects?: ProjectExperienceItem[]
}

export interface LegacyBrandCard {
  _key?: string
  name?: LocalizedString
  description?: LocalizedText
  highlights?: LocalizedString[]
  button?: Button
}

export interface LegacyBusinessSection {
  sectionHeader?: SectionHeader
  brands?: LegacyBrandCard[]
}

export interface GovernanceHeroSection {
  eyebrow?: LocalizedString
  headline?: LocalizedString
  description?: LocalizedText
  backgroundImage?: SanityImage
}

export interface GovernanceOverviewSection {
  sectionHeader?: SectionHeader
  paragraphs?: LocalizedText[]
  image?: SanityImage
}

export interface GovernancePrinciple {
  _key?: string
  icon?: string
  title?: LocalizedString
  description?: LocalizedText
}

export interface GovernancePrinciplesSection {
  sectionHeader?: SectionHeader
  principles?: GovernancePrinciple[]
}

export interface RiskManagementSection {
  sectionHeader?: SectionHeader
  subtitle?: LocalizedString
  cards?: GovernancePrinciple[]
}

export interface CorporateStatementSection {
  sectionHeader?: SectionHeader
  statement?: LocalizedText
}

export interface GovernancePage {
  _id?: string
  _type?: string
  seo?: Seo
  hero?: GovernanceHeroSection
  overview?: GovernanceOverviewSection
  principles?: GovernancePrinciplesSection
  riskManagement?: RiskManagementSection
  corporateStatement?: CorporateStatementSection
  cta?: CTASection
}

export interface SustainabilityHeroSection {
  eyebrow?: LocalizedString
  headline?: LocalizedString
  description?: LocalizedText
  backgroundImage?: SanityImage
}

export interface SustainabilityOverviewSection {
  sectionHeader?: SectionHeader
  paragraphs?: LocalizedText[]
  image?: SanityImage
}

export interface SustainabilityInitiativesSection {
  sectionHeader?: SectionHeader
  cards?: SustainabilityCard[]
}

export interface SustainabilityPage {
  _id?: string
  _type?: string
  seo?: Seo
  hero?: SustainabilityHeroSection
  overview?: SustainabilityOverviewSection
  esgCommitment?: SustainabilityInitiativesSection
  environmentalInitiatives?: SustainabilityInitiativesSection
  socialResponsibility?: SustainabilityInitiativesSection
  governanceIntegration?: SustainabilityInitiativesSection
  cta?: CTASection
}

export interface CareerHeroSection {
  eyebrow?: LocalizedString
  title?: LocalizedString
  description?: LocalizedText
}

export interface JobOpening {
  _key?: string
  title?: LocalizedString
  department?: LocalizedString
  location?: LocalizedString
  type?: LocalizedString
  description?: LocalizedText
  applyButton?: Button
}

export interface JobOpeningsSection {
  sectionHeader?: SectionHeader
  emptyMessage?: LocalizedText
  jobs?: JobOpening[]
}

export interface CareerPage {
  _id?: string
  _type?: string
  seo?: Seo
  hero?: CareerHeroSection
  jobOpenings?: JobOpeningsSection
  cta?: CTASection
}
