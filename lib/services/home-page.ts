import { sanityFetch } from '@/sanity/lib/live'
import { HOME_PAGE_QUERY } from '@/lib/cms/queries'
import { HOME_PAGE } from '@/lib/data/home-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
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
  BrandsSection,
  MilestonesSection,
  SustainabilityCard,
  BrandCard,
} from '@/lib/types/sanity'

export async function getHomePage(): Promise<HomePage> {
  const { data: cmsHomePage } = await sanityFetch({
    query: HOME_PAGE_QUERY,
    tags: ['home-page'],
  })

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
    primaryButton: normalizeButton(page.hero?.primaryButton, HOME_PAGE.hero?.primaryButton),
    secondaryButton: normalizeButton(page.hero?.secondaryButton, HOME_PAGE.hero?.secondaryButton),
  }

  const aboutPreview: AboutPreviewSection = {
    sectionHeader: normalizeSectionHeader(
      page.aboutPreview?.sectionHeader,
      HOME_PAGE.aboutPreview?.sectionHeader
    ),
    description: ensureLocalizedText(
      page.aboutPreview?.description,
      HOME_PAGE.aboutPreview?.description
    ),
    secondaryDescription: ensureLocalizedText(
      page.aboutPreview?.secondaryDescription,
      HOME_PAGE.aboutPreview?.secondaryDescription
    ),
    visionCard: {
      label: ensureLocalizedString(
        page.aboutPreview?.visionCard?.label,
        HOME_PAGE.aboutPreview?.visionCard?.label
      ),
      statement: ensureLocalizedString(
        page.aboutPreview?.visionCard?.statement,
        HOME_PAGE.aboutPreview?.visionCard?.statement
      ),
    },
    image: page.aboutPreview?.image ?? HOME_PAGE.aboutPreview?.image,
    button: normalizeButton(page.aboutPreview?.button, HOME_PAGE.aboutPreview?.button),
  }

  const businessHighlights: BusinessHighlightsSection = {
    sectionHeader: normalizeSectionHeader(
      page.businessHighlights?.sectionHeader,
      HOME_PAGE.businessHighlights?.sectionHeader
    ),
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
            button: normalizeButton(
              card.button,
              HOME_PAGE.businessHighlights?.cards?.[index]?.button
            ),
          }))
        : HOME_PAGE.businessHighlights?.cards,
    viewAllButton: normalizeButton(
      page.businessHighlights?.viewAllButton,
      HOME_PAGE.businessHighlights?.viewAllButton
    ),
  }

  const sustainability: SustainabilitySection = {
    sectionHeader: normalizeSectionHeader(
      page.sustainability?.sectionHeader,
      HOME_PAGE.sustainability?.sectionHeader
    ),
    description: ensureLocalizedText(
      page.sustainability?.description,
      HOME_PAGE.sustainability?.description
    ),
    image: page.sustainability?.image ?? HOME_PAGE.sustainability?.image,
    cards: (page.sustainability?.cards || HOME_PAGE.sustainability?.cards || []).map(
      (card: SustainabilityCard) => ({
        ...card,
        title: ensureLocalizedString(card.title),
        description: ensureLocalizedText(card.description),
      })
    ),
    viewAllButton: normalizeButton(
      page.sustainability?.viewAllButton,
      HOME_PAGE.sustainability?.viewAllButton
    ),
  }

  const latestNews: LatestNewsSection = {
    sectionHeader: normalizeSectionHeader(
      page.latestNews?.sectionHeader,
      HOME_PAGE.latestNews?.sectionHeader
    ),
    description: ensureLocalizedText(
      page.latestNews?.description,
      HOME_PAGE.latestNews?.description
    ),
    viewAllButton: normalizeButton(
      page.latestNews?.viewAllButton,
      HOME_PAGE.latestNews?.viewAllButton
    ),
    noNewsMessage: ensureLocalizedText(
      page.latestNews?.noNewsMessage,
      HOME_PAGE.latestNews?.noNewsMessage
    ),
    readMoreLabel: ensureLocalizedString(
      page.latestNews?.readMoreLabel,
      HOME_PAGE.latestNews?.readMoreLabel
    ),
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, HOME_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, HOME_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, HOME_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, HOME_PAGE.cta?.secondaryButton),
  }

  const brandsSection: BrandsSection = {
    sectionHeader: normalizeSectionHeader(
      page.brandsSection?.sectionHeader,
      HOME_PAGE.brandsSection?.sectionHeader
    ),
    cards: (page.brandsSection?.cards || HOME_PAGE.brandsSection?.cards || []).map((card: BrandCard) => ({
      ...card,
      name: ensureLocalizedString(card.name),
      description: ensureLocalizedText(card.description),
      button: normalizeButton(card.button, HOME_PAGE.brandsSection?.cards?.find((c: BrandCard) => c._key === card._key)?.button),
    })),
  }

  const milestonesSection: MilestonesSection = {
    sectionHeader: normalizeSectionHeader(
      page.milestonesSection?.sectionHeader,
      HOME_PAGE.milestonesSection?.sectionHeader
    ),
    cards: (page.milestonesSection?.cards || HOME_PAGE.milestonesSection?.cards || []).map((card) => ({
      ...card,
      title: ensureLocalizedString(card.title),
      description: ensureLocalizedText(card.description),
    })),
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
    brandsSection,
    milestonesSection,
  }
}
