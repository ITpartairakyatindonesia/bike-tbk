import { sanityFetch } from '@/sanity/lib/live'
import { INVESTOR_PAGE_QUERY } from '@/lib/cms/queries'
import { INVESTOR_PAGE } from '@/lib/data/investor-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
import type {
  InvestorPage,
  InvestorHeroSection,
  InvestorOverviewSection,
  InvestorHighlightsSection,
  InvestorHighlightCard,
  InvestorQuickAccessSection,
  InvestorQuickAccessCard,
  InvestorDocumentSection,
  InvestorDocumentItem,
  InvestorStockInfoSection,
  InvestorStockInfoField,
  InvestorCorporateActionSection,
  InvestorCorporateActionItem,
  InvestorAttractionSection,
  InvestorAttractionCard,
  ShareholderStructureSection,
  ShareholderItem,
  CapitalMarketInstitutionsSection,
  CapitalMarketInstitutionItem,
  CTASection,
  LocalizedText,
} from '@/lib/types/sanity'

function normalizeDocumentSection(
  section: InvestorDocumentSection | undefined,
  fallback: InvestorDocumentSection | undefined,
  keyPrefix: string
): InvestorDocumentSection {
  return {
    sectionHeader: normalizeSectionHeader(
      section?.sectionHeader,
      fallback?.sectionHeader
    ),
    documents: (section?.documents || fallback?.documents || []).map(
      (doc: InvestorDocumentItem, index: number) => ({
        _key: doc._key ?? `${keyPrefix}-${index}`,
        title: ensureLocalizedString(doc.title, fallback?.documents?.[index]?.title),
        year: doc.year ?? fallback?.documents?.[index]?.year,
        category: ensureLocalizedString(doc.category, fallback?.documents?.[index]?.category),
        description: ensureLocalizedText(doc.description, fallback?.documents?.[index]?.description),
        file: doc.file ?? fallback?.documents?.[index]?.file,
        thumbnail: doc.thumbnail ?? fallback?.documents?.[index]?.thumbnail,
      })
    ),
  }
}

function normalizeHighlightsSection(
  section: InvestorHighlightsSection | undefined,
  fallback: InvestorHighlightsSection | undefined,
  keyPrefix: string
): InvestorHighlightsSection {
  return {
    sectionHeader: normalizeSectionHeader(
      section?.sectionHeader,
      fallback?.sectionHeader
    ),
    cards: (section?.cards || fallback?.cards || []).map(
      (card: InvestorHighlightCard, index: number) => ({
        _key: card._key ?? `${keyPrefix}-${index}`,
        value: ensureLocalizedString(card.value, fallback?.cards?.[index]?.value),
        label: ensureLocalizedString(card.label, fallback?.cards?.[index]?.label),
        description: ensureLocalizedText(card.description, fallback?.cards?.[index]?.description),
      })
    ),
  }
}

function normalizeAttractionSection(
  section: InvestorAttractionSection | undefined,
  fallback: InvestorAttractionSection | undefined,
  keyPrefix: string
): InvestorAttractionSection {
  return {
    sectionHeader: normalizeSectionHeader(
      section?.sectionHeader,
      fallback?.sectionHeader
    ),
    cards: (section?.cards || fallback?.cards || []).map(
      (card: InvestorAttractionCard, index: number) => ({
        _key: card._key ?? `${keyPrefix}-${index}`,
        icon: card.icon ?? fallback?.cards?.[index]?.icon,
        title: ensureLocalizedString(card.title, fallback?.cards?.[index]?.title),
        description: ensureLocalizedText(card.description, fallback?.cards?.[index]?.description),
      })
    ),
  }
}

export async function getInvestorPage(): Promise<InvestorPage> {
  const { data: cmsInvestorPage } = await sanityFetch({
    query: INVESTOR_PAGE_QUERY,
    tags: ['investor-page'],
  })

  if (!cmsInvestorPage) {
    console.warn('No Investor Page document found in Sanity, using fallback values')
    return INVESTOR_PAGE
  }

  const page = cmsInvestorPage as InvestorPage

  const hero: InvestorHeroSection = {
    label: ensureLocalizedString(page.hero?.label, INVESTOR_PAGE.hero?.label),
    title: ensureLocalizedString(page.hero?.title, INVESTOR_PAGE.hero?.title),
    description: ensureLocalizedText(page.hero?.description, INVESTOR_PAGE.hero?.description),
  }

  const overview: InvestorOverviewSection = {
    sectionHeader: normalizeSectionHeader(
      page.overview?.sectionHeader,
      INVESTOR_PAGE.overview?.sectionHeader
    ),
    paragraphs: (page.overview?.paragraphs || INVESTOR_PAGE.overview?.paragraphs || []) as LocalizedText[],
    image: page.overview?.image ?? INVESTOR_PAGE.overview?.image,
  }

  const investmentHighlights = normalizeHighlightsSection(
    page.investmentHighlights,
    INVESTOR_PAGE.investmentHighlights,
    'ih'
  )

  const financialHighlights = normalizeHighlightsSection(
    page.financialHighlights,
    INVESTOR_PAGE.financialHighlights,
    'fh'
  )

  const quickAccess: InvestorQuickAccessSection = {
    sectionHeader: normalizeSectionHeader(
      page.quickAccess?.sectionHeader,
      INVESTOR_PAGE.quickAccess?.sectionHeader
    ),
    cards: (page.quickAccess?.cards || INVESTOR_PAGE.quickAccess?.cards || []).map(
      (card: InvestorQuickAccessCard, index: number) => ({
        _key: card._key ?? `qa-${index}`,
        icon: card.icon,
        title: ensureLocalizedString(card.title, INVESTOR_PAGE.quickAccess?.cards?.[index]?.title),
        description: ensureLocalizedText(card.description, INVESTOR_PAGE.quickAccess?.cards?.[index]?.description),
        button: normalizeButton(card.button, INVESTOR_PAGE.quickAccess?.cards?.[index]?.button),
      })
    ),
  }

  const annualReports = normalizeDocumentSection(
    page.annualReports,
    INVESTOR_PAGE.annualReports,
    'ar'
  )

  const financialStatements = normalizeDocumentSection(
    page.financialStatements,
    INVESTOR_PAGE.financialStatements,
    'fs'
  )

  const prospectus = normalizeDocumentSection(
    page.prospectus,
    INVESTOR_PAGE.prospectus,
    'pro'
  )

  const publicExpose = normalizeDocumentSection(
    page.publicExpose,
    INVESTOR_PAGE.publicExpose,
    'pe'
  )

  const stockInfo: InvestorStockInfoSection = {
    sectionHeader: normalizeSectionHeader(
      page.stockInfo?.sectionHeader,
      INVESTOR_PAGE.stockInfo?.sectionHeader
    ),
    stockCode: page.stockInfo?.stockCode ?? INVESTOR_PAGE.stockInfo?.stockCode,
    exchange: ensureLocalizedString(page.stockInfo?.exchange, INVESTOR_PAGE.stockInfo?.exchange),
    listingDate: page.stockInfo?.listingDate ?? INVESTOR_PAGE.stockInfo?.listingDate,
    market: ensureLocalizedString(page.stockInfo?.market, INVESTOR_PAGE.stockInfo?.market),
    fields: (page.stockInfo?.fields || INVESTOR_PAGE.stockInfo?.fields || []).map(
      (field: InvestorStockInfoField, index: number) => ({
        _key: field._key ?? `si-${index}`,
        label: ensureLocalizedString(field.label, INVESTOR_PAGE.stockInfo?.fields?.[index]?.label),
        value: ensureLocalizedString(field.value, INVESTOR_PAGE.stockInfo?.fields?.[index]?.value),
      })
    ),
  }

  const corporateAction: InvestorCorporateActionSection = {
    sectionHeader: normalizeSectionHeader(
      page.corporateAction?.sectionHeader,
      INVESTOR_PAGE.corporateAction?.sectionHeader
    ),
    actions: (page.corporateAction?.actions || INVESTOR_PAGE.corporateAction?.actions || []).map(
      (action: InvestorCorporateActionItem, index: number) => ({
        _key: action._key ?? `ca-${index}`,
        date: action.date ?? INVESTOR_PAGE.corporateAction?.actions?.[index]?.date,
        title: ensureLocalizedString(action.title, INVESTOR_PAGE.corporateAction?.actions?.[index]?.title),
        description: ensureLocalizedText(action.description, INVESTOR_PAGE.corporateAction?.actions?.[index]?.description),
        type: ensureLocalizedString(action.type, INVESTOR_PAGE.corporateAction?.actions?.[index]?.type),
      })
    ),
  }

  const attraction = normalizeAttractionSection(
    page.attraction,
    INVESTOR_PAGE.attraction,
    'attr'
  )

  const shareholderStructure: ShareholderStructureSection = {
    sectionHeader: normalizeSectionHeader(
      page.shareholderStructure?.sectionHeader,
      INVESTOR_PAGE.shareholderStructure?.sectionHeader
    ),
    items: (page.shareholderStructure?.items || INVESTOR_PAGE.shareholderStructure?.items || []).map(
      (item: ShareholderItem, index: number) => ({
        _key: item._key ?? `sh-${index}`,
        name: ensureLocalizedString(item.name, INVESTOR_PAGE.shareholderStructure?.items?.[index]?.name),
        percentage: item.percentage ?? INVESTOR_PAGE.shareholderStructure?.items?.[index]?.percentage ?? '',
        role: ensureLocalizedString(item.role, INVESTOR_PAGE.shareholderStructure?.items?.[index]?.role),
      })
    ),
    totalShares: page.shareholderStructure?.totalShares ?? INVESTOR_PAGE.shareholderStructure?.totalShares,
    note: ensureLocalizedText(page.shareholderStructure?.note, INVESTOR_PAGE.shareholderStructure?.note),
  }

  const capitalMarketInstitutions: CapitalMarketInstitutionsSection = {
    sectionHeader: normalizeSectionHeader(
      page.capitalMarketInstitutions?.sectionHeader,
      INVESTOR_PAGE.capitalMarketInstitutions?.sectionHeader
    ),
    items: (page.capitalMarketInstitutions?.items || INVESTOR_PAGE.capitalMarketInstitutions?.items || []).map(
      (item: CapitalMarketInstitutionItem, index: number) => ({
        _key: item._key ?? `cmi-${index}`,
        label: ensureLocalizedString(item.label, INVESTOR_PAGE.capitalMarketInstitutions?.items?.[index]?.label),
        value: ensureLocalizedString(item.value, INVESTOR_PAGE.capitalMarketInstitutions?.items?.[index]?.value),
      })
    ),
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, INVESTOR_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, INVESTOR_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, INVESTOR_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, INVESTOR_PAGE.cta?.secondaryButton),
  }

  return {
    ...INVESTOR_PAGE,
    _id: page._id ?? INVESTOR_PAGE._id,
    _type: page._type ?? INVESTOR_PAGE._type,
    seo: page.seo ?? INVESTOR_PAGE.seo,
    hero,
    overview,
    investmentHighlights,
    financialHighlights,
    quickAccess,
    annualReports,
    financialStatements,
    prospectus,
    publicExpose,
    stockInfo,
    corporateAction,
    shareholderStructure,
    capitalMarketInstitutions,
    attraction,
    cta,
  }
}
