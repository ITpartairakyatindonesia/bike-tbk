import { sanityFetch } from '@/sanity/lib/live'
import { HOME_PAGE_QUERY } from '@/lib/cms/queries'
import { HOME_PAGE } from '@/lib/data/home-page'
import type {
  HomePage,
  LocalizedString,
  LocalizedText,
  HeroSection,
  AboutPreviewSection,
  BusinessHighlightsSection,
  SustainabilitySection,
  LatestNewsSection,
  CTASection,
} from '@/lib/types/sanity'

const ensureLocalizedString = (
  value?: LocalizedString | null,
  fallback?: LocalizedString | null
) => ({
  en: value?.en ?? fallback?.en ?? '',
  id: value?.id ?? fallback?.id ?? '',
})

const ensureLocalizedText = (
  value?: LocalizedText | null,
  fallback?: LocalizedText | null
) => ({
  en: value?.en ?? fallback?.en ?? '',
  id: value?.id ?? fallback?.id ?? '',
})

export async function getHomePage(): Promise<HomePage> {
  const { data: cmsHomePage } = await sanityFetch({ query: HOME_PAGE_QUERY })

  if (!cmsHomePage) {
    console.warn('No Home Page document found in Sanity, using fallback values')
    return HOME_PAGE
  }

  const page = cmsHomePage as HomePage

  const hero: HeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, HOME_PAGE.hero?.eyebrow),
    title: ensureLocalizedString(page.hero?.title, HOME_PAGE.hero?.title),
    subtitle: ensureLocalizedText(page.hero?.subtitle, HOME_PAGE.hero?.subtitle),
    backgroundImage: page.hero?.backgroundImage ?? HOME_PAGE.hero?.backgroundImage,
    primaryButton: page.hero?.primaryButton ?? HOME_PAGE.hero?.primaryButton,
    secondaryButton: page.hero?.secondaryButton ?? HOME_PAGE.hero?.secondaryButton,
  }

  const aboutPreview: AboutPreviewSection = {
    sectionHeader: page.aboutPreview?.sectionHeader ?? HOME_PAGE.aboutPreview?.sectionHeader,
    description: ensureLocalizedText(
      page.aboutPreview?.description,
      HOME_PAGE.aboutPreview?.description
    ),
    image: page.aboutPreview?.image ?? HOME_PAGE.aboutPreview?.image,
    button: page.aboutPreview?.button ?? HOME_PAGE.aboutPreview?.button,
  }

  const businessHighlights: BusinessHighlightsSection = {
    sectionHeader:
      page.businessHighlights?.sectionHeader ?? HOME_PAGE.businessHighlights?.sectionHeader,
    cards:
      page.businessHighlights?.cards?.length
        ? page.businessHighlights.cards.map((card, index) => ({
            _key: card._key ?? `card-${index}`,
            image: card.image ?? HOME_PAGE.businessHighlights?.cards?.[index]?.image,
            title: ensureLocalizedString(
              card.title,
              HOME_PAGE.businessHighlights?.cards?.[index]?.title
            ),
            description: ensureLocalizedText(
              card.description,
              HOME_PAGE.businessHighlights?.cards?.[index]?.description
            ),
            button: card.button ?? HOME_PAGE.businessHighlights?.cards?.[index]?.button,
          }))
        : HOME_PAGE.businessHighlights?.cards,
  }

  const sustainability: SustainabilitySection = {
    sectionHeader: page.sustainability?.sectionHeader ?? HOME_PAGE.sustainability?.sectionHeader,
    description: ensureLocalizedText(
      page.sustainability?.description,
      HOME_PAGE.sustainability?.description
    ),
    image: page.sustainability?.image ?? HOME_PAGE.sustainability?.image,
    button: page.sustainability?.button ?? HOME_PAGE.sustainability?.button,
  }

  const latestNews: LatestNewsSection = {
    sectionHeader: page.latestNews?.sectionHeader ?? HOME_PAGE.latestNews?.sectionHeader,
    description: ensureLocalizedText(
      page.latestNews?.description,
      HOME_PAGE.latestNews?.description
    ),
    viewAllButton: page.latestNews?.viewAllButton ?? HOME_PAGE.latestNews?.viewAllButton,
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, HOME_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, HOME_PAGE.cta?.description),
    primaryButton: page.cta?.primaryButton ?? HOME_PAGE.cta?.primaryButton,
    secondaryButton: page.cta?.secondaryButton ?? HOME_PAGE.cta?.secondaryButton,
  }

  return {
    ...HOME_PAGE,
    _id: page._id ?? HOME_PAGE._id,
    _type: page._type ?? HOME_PAGE._type,
    seo: page.seo ?? HOME_PAGE.seo,
    hero,
    aboutPreview,
    businessHighlights,
    sustainability,
    latestNews,
    cta,
  }
}
