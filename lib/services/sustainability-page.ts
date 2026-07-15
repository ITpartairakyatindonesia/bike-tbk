import { sanityFetch } from '@/sanity/lib/live'
import { SUSTAINABILITY_PAGE_QUERY } from '@/lib/cms/queries'
import { SUSTAINABILITY_PAGE } from '@/lib/data/sustainability-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
import type {
  SustainabilityPage,
  SustainabilityHeroSection,
  SustainabilityOverviewSection,
  SustainabilityInitiativesSection,
  SustainabilityCard,
  CTASection,
  LocalizedText,
} from '@/lib/types/sanity'

function normalizeInitiativesSection(
  section: SustainabilityInitiativesSection | undefined,
  fallback: SustainabilityInitiativesSection | undefined,
  keyPrefix: string
): SustainabilityInitiativesSection {
  return {
    sectionHeader: normalizeSectionHeader(
      section?.sectionHeader,
      fallback?.sectionHeader
    ),
    cards: (section?.cards || fallback?.cards || []).map(
      (card: SustainabilityCard, index: number) => ({
        _key: card._key ?? `${keyPrefix}-${index}`,
        icon: card.icon,
        title: ensureLocalizedString(card.title, fallback?.cards?.[index]?.title),
        description: ensureLocalizedText(card.description, fallback?.cards?.[index]?.description),
      })
    ),
  }
}

export async function getSustainabilityPage(): Promise<SustainabilityPage> {
  const { data: cmsSustainabilityPage } = await sanityFetch({
    query: SUSTAINABILITY_PAGE_QUERY,
    tags: ['sustainability-page'],
  })

  if (!cmsSustainabilityPage) {
    console.warn('No Sustainability Page document found in Sanity, using fallback values')
    return SUSTAINABILITY_PAGE
  }

  const page = cmsSustainabilityPage as SustainabilityPage

  const hero: SustainabilityHeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, SUSTAINABILITY_PAGE.hero?.eyebrow),
    headline: ensureLocalizedString(page.hero?.headline, SUSTAINABILITY_PAGE.hero?.headline),
    description: ensureLocalizedText(page.hero?.description, SUSTAINABILITY_PAGE.hero?.description),
    backgroundImage: page.hero?.backgroundImage ?? SUSTAINABILITY_PAGE.hero?.backgroundImage,
  }

  const overview: SustainabilityOverviewSection = {
    sectionHeader: normalizeSectionHeader(
      page.overview?.sectionHeader,
      SUSTAINABILITY_PAGE.overview?.sectionHeader
    ),
    paragraphs: (page.overview?.paragraphs || SUSTAINABILITY_PAGE.overview?.paragraphs || []) as LocalizedText[],
    image: page.overview?.image ?? SUSTAINABILITY_PAGE.overview?.image,
  }

  const esgCommitment = normalizeInitiativesSection(
    page.esgCommitment,
    SUSTAINABILITY_PAGE.esgCommitment,
    'esg'
  )

  const environmentalInitiatives = normalizeInitiativesSection(
    page.environmentalInitiatives,
    SUSTAINABILITY_PAGE.environmentalInitiatives,
    'env'
  )

  const socialResponsibility = normalizeInitiativesSection(
    page.socialResponsibility,
    SUSTAINABILITY_PAGE.socialResponsibility,
    'soc'
  )

  const governanceIntegration = normalizeInitiativesSection(
    page.governanceIntegration,
    SUSTAINABILITY_PAGE.governanceIntegration,
    'gov'
  )

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, SUSTAINABILITY_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, SUSTAINABILITY_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, SUSTAINABILITY_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, SUSTAINABILITY_PAGE.cta?.secondaryButton),
  }

  return {
    ...SUSTAINABILITY_PAGE,
    _id: page._id ?? SUSTAINABILITY_PAGE._id,
    _type: page._type ?? SUSTAINABILITY_PAGE._type,
    seo: page.seo ?? SUSTAINABILITY_PAGE.seo,
    hero,
    overview,
    esgCommitment,
    environmentalInitiatives,
    socialResponsibility,
    governanceIntegration,
    cta,
  }
}
