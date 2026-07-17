import { sanityFetch } from '@/sanity/lib/live'
import { GOVERNANCE_PAGE_QUERY } from '@/lib/cms/queries'
import { GOVERNANCE_PAGE } from '@/lib/data/governance-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
import type {
  GovernancePage,
  GovernanceHeroSection,
  GovernanceOverviewSection,
  GovernancePrinciplesSection,
  GovernancePrinciple,
  RiskManagementSection,
  CorporateStatementSection,
  LegalBasisSection,
  LegalBasisItem,
  CTASection,
  LocalizedText,
} from '@/lib/types/sanity'

export async function getGovernancePage(): Promise<GovernancePage> {
  const { data: cmsGovernancePage } = await sanityFetch({
    query: GOVERNANCE_PAGE_QUERY,
    tags: ['governance-page'],
  })

  if (!cmsGovernancePage) {
    console.warn('No Governance Page document found in Sanity, using fallback values')
    return GOVERNANCE_PAGE
  }

  const page = cmsGovernancePage as GovernancePage

  const hero: GovernanceHeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, GOVERNANCE_PAGE.hero?.eyebrow),
    headline: ensureLocalizedString(page.hero?.headline, GOVERNANCE_PAGE.hero?.headline),
    description: ensureLocalizedText(page.hero?.description, GOVERNANCE_PAGE.hero?.description),
    backgroundImage: page.hero?.backgroundImage ?? GOVERNANCE_PAGE.hero?.backgroundImage,
  }

  const overview: GovernanceOverviewSection = {
    sectionHeader: normalizeSectionHeader(
      page.overview?.sectionHeader,
      GOVERNANCE_PAGE.overview?.sectionHeader
    ),
    paragraphs: (page.overview?.paragraphs || GOVERNANCE_PAGE.overview?.paragraphs || []) as LocalizedText[],
    image: page.overview?.image ?? GOVERNANCE_PAGE.overview?.image,
  }

  const principles: GovernancePrinciplesSection = {
    sectionHeader: normalizeSectionHeader(
      page.principles?.sectionHeader,
      GOVERNANCE_PAGE.principles?.sectionHeader
    ),
    principles: (page.principles?.principles || GOVERNANCE_PAGE.principles?.principles || []).map(
      (principle: GovernancePrinciple, index: number) => ({
        _key: principle._key ?? `principle-${index}`,
        icon: principle.icon,
        title: ensureLocalizedString(principle.title, GOVERNANCE_PAGE.principles?.principles?.[index]?.title),
        description: ensureLocalizedText(principle.description, GOVERNANCE_PAGE.principles?.principles?.[index]?.description),
      })
    ),
  }

  const riskManagement: RiskManagementSection = {
    sectionHeader: normalizeSectionHeader(
      page.riskManagement?.sectionHeader,
      GOVERNANCE_PAGE.riskManagement?.sectionHeader
    ),
    subtitle: ensureLocalizedString(
      page.riskManagement?.subtitle,
      GOVERNANCE_PAGE.riskManagement?.subtitle
    ),
    cards: (page.riskManagement?.cards || GOVERNANCE_PAGE.riskManagement?.cards || []).map(
      (card: GovernancePrinciple, index: number) => ({
        _key: card._key ?? `risk-${index}`,
        icon: card.icon,
        title: ensureLocalizedString(card.title, GOVERNANCE_PAGE.riskManagement?.cards?.[index]?.title),
        description: ensureLocalizedText(card.description, GOVERNANCE_PAGE.riskManagement?.cards?.[index]?.description),
      })
    ),
  }

  const corporateStatement: CorporateStatementSection = {
    sectionHeader: normalizeSectionHeader(
      page.corporateStatement?.sectionHeader,
      GOVERNANCE_PAGE.corporateStatement?.sectionHeader
    ),
    statement: ensureLocalizedText(
      page.corporateStatement?.statement,
      GOVERNANCE_PAGE.corporateStatement?.statement
    ),
  }

  const legalBasis: LegalBasisSection = {
    sectionHeader: normalizeSectionHeader(
      page.legalBasis?.sectionHeader,
      GOVERNANCE_PAGE.legalBasis?.sectionHeader
    ),
    items: (page.legalBasis?.items || GOVERNANCE_PAGE.legalBasis?.items || []).map(
      (item: LegalBasisItem, index: number) => ({
        _key: item._key ?? `legal-${index}`,
        regulation: ensureLocalizedString(item.regulation, GOVERNANCE_PAGE.legalBasis?.items?.[index]?.regulation),
        description: ensureLocalizedText(item.description, GOVERNANCE_PAGE.legalBasis?.items?.[index]?.description),
      })
    ),
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, GOVERNANCE_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, GOVERNANCE_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, GOVERNANCE_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, GOVERNANCE_PAGE.cta?.secondaryButton),
  }

  return {
    ...GOVERNANCE_PAGE,
    _id: page._id ?? GOVERNANCE_PAGE._id,
    _type: page._type ?? GOVERNANCE_PAGE._type,
    seo: page.seo ?? GOVERNANCE_PAGE.seo,
    hero,
    overview,
    principles,
    riskManagement,
    corporateStatement,
    legalBasis,
    cta,
  }
}
