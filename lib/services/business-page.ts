import { sanityFetch } from '@/sanity/lib/live'
import { BUSINESS_PAGE_QUERY } from '@/lib/cms/queries'
import { BUSINESS_PAGE } from '@/lib/data/business-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
import type {
  BusinessPage,
  BusinessHeroSection,
  BusinessIntroductionSection,
  BusinessExtensionSection,
  BusinessDevelopmentSection,
  BusinessDiversificationSection,
  SubHoldingStructureSection,
  CoreBusinessSection,
  ProjectExperienceSection,
  ProjectExperienceItem,
  LegacyBusinessSection,
  LegacyBrandCard,
  CTASection,
  BusinessStatCard,
  BusinessInfoCard,
  SubHoldingCard,
  CoreBusinessCard,
  LocalizedText,
} from '@/lib/types/sanity'

export async function getBusinessPage(): Promise<BusinessPage> {
  const { data: cmsBusinessPage } = await sanityFetch({
    query: BUSINESS_PAGE_QUERY,
    tags: ['business-page'],
  })

  if (!cmsBusinessPage) {
    console.warn('No Business Page document found in Sanity, using fallback values')
    return BUSINESS_PAGE
  }

  const page = cmsBusinessPage as BusinessPage

  const hero: BusinessHeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, BUSINESS_PAGE.hero?.eyebrow),
    headline: ensureLocalizedString(page.hero?.headline, BUSINESS_PAGE.hero?.headline),
    description: ensureLocalizedText(page.hero?.description, BUSINESS_PAGE.hero?.description),
    backgroundImage: page.hero?.backgroundImage ?? BUSINESS_PAGE.hero?.backgroundImage,
  }

  const introduction: BusinessIntroductionSection = {
    title: ensureLocalizedString(page.introduction?.title, BUSINESS_PAGE.introduction?.title),
    paragraphs: (page.introduction?.paragraphs || BUSINESS_PAGE.introduction?.paragraphs || []) as LocalizedText[],
    statCards: (page.introduction?.statCards || BUSINESS_PAGE.introduction?.statCards || []).map((card, index) => ({
      _key: card?._key ?? `stat-${index}`,
      value: ensureLocalizedString(card?.value, BUSINESS_PAGE.introduction?.statCards?.[index]?.value),
      label: ensureLocalizedString(card?.label, BUSINESS_PAGE.introduction?.statCards?.[index]?.label),
    })) as BusinessStatCard[],
  }

  const extension: BusinessExtensionSection = {
    sectionHeader: normalizeSectionHeader(
      page.extension?.sectionHeader,
      BUSINESS_PAGE.extension?.sectionHeader
    ),
    cards: (page.extension?.cards || BUSINESS_PAGE.extension?.cards || []).map((card, index) => ({
      _key: card?._key ?? `ext-${index}`,
      icon: card?.icon,
      title: ensureLocalizedString(card?.title, BUSINESS_PAGE.extension?.cards?.[index]?.title),
      description: ensureLocalizedText(card?.description, BUSINESS_PAGE.extension?.cards?.[index]?.description),
    })) as BusinessInfoCard[],
  }

  const development: BusinessDevelopmentSection = {
    sectionHeader: normalizeSectionHeader(
      page.development?.sectionHeader,
      BUSINESS_PAGE.development?.sectionHeader
    ),
    cards: (page.development?.cards || BUSINESS_PAGE.development?.cards || []).map((card, index) => ({
      _key: card?._key ?? `dev-${index}`,
      icon: card?.icon,
      title: ensureLocalizedString(card?.title, BUSINESS_PAGE.development?.cards?.[index]?.title),
      description: ensureLocalizedText(card?.description, BUSINESS_PAGE.development?.cards?.[index]?.description),
    })) as BusinessInfoCard[],
  }

  const diversification: BusinessDiversificationSection = {
    sectionHeader: normalizeSectionHeader(
      page.diversification?.sectionHeader,
      BUSINESS_PAGE.diversification?.sectionHeader
    ),
    paragraph: ensureLocalizedText(
      page.diversification?.paragraph,
      BUSINESS_PAGE.diversification?.paragraph
    ),
    ctaLabel: ensureLocalizedString(
      page.diversification?.ctaLabel,
      BUSINESS_PAGE.diversification?.ctaLabel
    ),
    ctaHref: page.diversification?.ctaHref || BUSINESS_PAGE.diversification?.ctaHref || '',
  }

  const subHoldingStructure: SubHoldingStructureSection = {
    sectionHeader: normalizeSectionHeader(
      page.subHoldingStructure?.sectionHeader,
      BUSINESS_PAGE.subHoldingStructure?.sectionHeader
    ),
    cards: (page.subHoldingStructure?.cards || BUSINESS_PAGE.subHoldingStructure?.cards || []).map((card, index) => ({
      _key: card?._key ?? `sub-${index}`,
      icon: card?.icon,
      title: ensureLocalizedString(card?.title, BUSINESS_PAGE.subHoldingStructure?.cards?.[index]?.title),
      description: ensureLocalizedText(card?.description, BUSINESS_PAGE.subHoldingStructure?.cards?.[index]?.description),
    })) as SubHoldingCard[],
  }

  const coreBusiness: CoreBusinessSection = {
    sectionHeader: normalizeSectionHeader(
      page.coreBusiness?.sectionHeader,
      BUSINESS_PAGE.coreBusiness?.sectionHeader
    ),
    cards: (page.coreBusiness?.cards || BUSINESS_PAGE.coreBusiness?.cards || []).map((card, index) => ({
      _key: card?._key ?? `core-${index}`,
      image: card?.image,
      title: ensureLocalizedString(card?.title, BUSINESS_PAGE.coreBusiness?.cards?.[index]?.title),
      description: ensureLocalizedText(card?.description, BUSINESS_PAGE.coreBusiness?.cards?.[index]?.description),
    })) as CoreBusinessCard[],
  }

  const projectExperience: ProjectExperienceSection = {
    sectionHeader: normalizeSectionHeader(
      page.projectExperience?.sectionHeader,
      BUSINESS_PAGE.projectExperience?.sectionHeader
    ),
    projects: (page.projectExperience?.projects || BUSINESS_PAGE.projectExperience?.projects || []).map((project, index) => ({
      _key: project?._key ?? `proj-${index}`,
      image: project?.image,
      title: ensureLocalizedString(project?.title, BUSINESS_PAGE.projectExperience?.projects?.[index]?.title),
      location: ensureLocalizedString(project?.location, BUSINESS_PAGE.projectExperience?.projects?.[index]?.location),
      category: ensureLocalizedString(project?.category, BUSINESS_PAGE.projectExperience?.projects?.[index]?.category),
      description: ensureLocalizedText(project?.description, BUSINESS_PAGE.projectExperience?.projects?.[index]?.description),
    })) as ProjectExperienceItem[],
  }

  const legacyBusiness: LegacyBusinessSection = {
    sectionHeader: normalizeSectionHeader(
      page.legacyBusiness?.sectionHeader,
      BUSINESS_PAGE.legacyBusiness?.sectionHeader
    ),
    brands: (page.legacyBusiness?.brands || BUSINESS_PAGE.legacyBusiness?.brands || []).map((brand, index) => ({
      _key: brand?._key ?? `legacy-${index}`,
      name: ensureLocalizedString(brand?.name, BUSINESS_PAGE.legacyBusiness?.brands?.[index]?.name),
      description: ensureLocalizedText(brand?.description, BUSINESS_PAGE.legacyBusiness?.brands?.[index]?.description),
      highlights: (brand?.highlights || BUSINESS_PAGE.legacyBusiness?.brands?.[index]?.highlights || []) as LocalizedText[],
      button: normalizeButton(brand?.button, BUSINESS_PAGE.legacyBusiness?.brands?.[index]?.button),
    })) as LegacyBrandCard[],
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, BUSINESS_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, BUSINESS_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, BUSINESS_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, BUSINESS_PAGE.cta?.secondaryButton),
  }

  return {
    ...BUSINESS_PAGE,
    _id: page._id ?? BUSINESS_PAGE._id,
    _type: page._type ?? BUSINESS_PAGE._type,
    seo: page.seo ?? BUSINESS_PAGE.seo,
    hero,
    introduction,
    extension,
    development,
    diversification,
    subHoldingStructure,
    coreBusiness,
    projectExperience,
    legacyBusiness,
    cta,
  }
}
