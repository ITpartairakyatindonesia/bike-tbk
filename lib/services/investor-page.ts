import { sanityFetch } from '@/sanity/lib/live'
import { INVESTOR_PAGE_QUERY } from '@/lib/cms/queries'
import { INVESTOR_PAGE } from '@/lib/data/investor-page'
import { ensureLocalizedString, ensureLocalizedText } from '@/lib/utils/localization'
import type {
  InvestorPage,
  LocalizedString,
  LocalizedText,
  InvestorHeroSection,
  InvestorCard,
} from '@/lib/types/sanity'

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

  const cards: InvestorCard[] = (page.cards || INVESTOR_PAGE.cards || []).map((card: { title?: LocalizedString | string; description?: LocalizedText | string; iconKey?: string; documents?: any[] }) => ({
    title: ensureLocalizedString(card.title),
    description: ensureLocalizedText(card.description),
    iconKey: card.iconKey ?? 'FileText',
    documents: (card.documents || []).map((doc: { title?: string; file?: any }) => ({
      title: doc.title,
      file: doc.file,
    })),
  }))

  return {
    ...INVESTOR_PAGE,
    _id: page._id ?? INVESTOR_PAGE._id,
    _type: page._type ?? INVESTOR_PAGE._type,
    seo: page.seo ?? INVESTOR_PAGE.seo,
    hero,
    cards,
  }
}
