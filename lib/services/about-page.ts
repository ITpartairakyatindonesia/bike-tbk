import { sanityFetch } from '@/sanity/lib/live'
import { ABOUT_PAGE_QUERY } from '@/lib/cms/queries'
import { ABOUT_PAGE } from '@/lib/data/about-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'
import type {
  AboutPage,
  LocalizedString,
  LocalizedText,
  AboutHeroSection,
  AboutOverviewSection,
  AboutInfoSection,
  AboutVisionMissionSection,
  AboutCultureSection,
  AboutManagementSection,
  MilestonesSection,
  CTASection,
  SanityImage,
} from '@/lib/types/sanity'

export async function getAboutPage(): Promise<AboutPage> {
  const { data: cmsAboutPage } = await sanityFetch({
    query: ABOUT_PAGE_QUERY,
    tags: ['about-page'],
  })

  if (!cmsAboutPage) {
    console.warn('No About Page document found in Sanity, using fallback values')
    return ABOUT_PAGE
  }

  const page = cmsAboutPage as AboutPage

  const hero: AboutHeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, ABOUT_PAGE.hero?.eyebrow),
    title: ensureLocalizedString(page.hero?.title, ABOUT_PAGE.hero?.title),
    subtitle: ensureLocalizedText(page.hero?.subtitle, ABOUT_PAGE.hero?.subtitle),
    backgroundImage: page.hero?.backgroundImage ?? ABOUT_PAGE.hero?.backgroundImage,
    primaryButton: normalizeButton(page.hero?.primaryButton, ABOUT_PAGE.hero?.primaryButton),
    secondaryButton: normalizeButton(page.hero?.secondaryButton, ABOUT_PAGE.hero?.secondaryButton),
  }

  const overview: AboutOverviewSection = {
    sectionHeader: normalizeSectionHeader(
      page.overview?.sectionHeader,
      ABOUT_PAGE.overview?.sectionHeader
    ),
    paragraphs: (page.overview?.paragraphs || ABOUT_PAGE.overview?.paragraphs || []).map((para: LocalizedText | string) =>
      ensureLocalizedText(para)
    ),
  }

  const info: AboutInfoSection = {
    sectionHeader: normalizeSectionHeader(
      page.info?.sectionHeader,
      ABOUT_PAGE.info?.sectionHeader
    ),
    items: (page.info?.items || ABOUT_PAGE.info?.items || []).map((item: { label?: LocalizedString | string; value?: LocalizedString | string }) => ({
      label: ensureLocalizedString(item.label),
      value: ensureLocalizedString(item.value),
    })),
  }

  const visionMission: AboutVisionMissionSection = {
    sectionHeader: normalizeSectionHeader(
      page.visionMission?.sectionHeader,
      ABOUT_PAGE.visionMission?.sectionHeader
    ),
    vision: {
      label: ensureLocalizedString(
        page.visionMission?.vision?.label,
        ABOUT_PAGE.visionMission?.vision?.label
      ),
      statement: ensureLocalizedText(
        page.visionMission?.vision?.statement,
        ABOUT_PAGE.visionMission?.vision?.statement
      ),
    },
    mission: {
      title: ensureLocalizedString(
        page.visionMission?.mission?.title,
        ABOUT_PAGE.visionMission?.mission?.title
      ),
      items: (page.visionMission?.mission?.items || ABOUT_PAGE.visionMission?.mission?.items || []).map(
        (item: { title?: LocalizedString | string; description?: LocalizedText | string }) => ({
          title: ensureLocalizedString(item.title),
          description: ensureLocalizedText(item.description),
        })
      ),
    },
  }

  const culture: AboutCultureSection = {
    sectionHeader: normalizeSectionHeader(
      page.culture?.sectionHeader,
      ABOUT_PAGE.culture?.sectionHeader
    ),
    introduction: ensureLocalizedText(
      page.culture?.introduction,
      ABOUT_PAGE.culture?.introduction
    ),
    cards: (page.culture?.cards || ABOUT_PAGE.culture?.cards || []).map((card: { icon?: string; title?: LocalizedString | string; description?: LocalizedText | string }) => ({
      icon: card.icon,
      title: ensureLocalizedString(card.title),
      description: ensureLocalizedText(card.description),
    })),
  }

  const management: AboutManagementSection = {
    sectionHeader: normalizeSectionHeader(
      page.management?.sectionHeader,
      ABOUT_PAGE.management?.sectionHeader
    ),
    introduction: ensureLocalizedText(
      page.management?.introduction,
      ABOUT_PAGE.management?.introduction
    ),
    placeholder: ensureLocalizedText(
      page.management?.placeholder,
      ABOUT_PAGE.management?.placeholder
    ),
    viewBiographyLabel: ensureLocalizedString(
      page.management?.viewBiographyLabel,
      ABOUT_PAGE.management?.viewBiographyLabel
    ),
    executives: (page.management?.executives || ABOUT_PAGE.management?.executives || []).map(
      (executive: { name?: string; position?: LocalizedString | string; biography?: LocalizedText | string; slug?: { current?: string }; image?: SanityImage | null }) => ({
        name: executive.name,
        position: ensureLocalizedString(executive.position),
        biography: ensureLocalizedText(executive.biography),
        slug: executive.slug,
        image: executive.image || undefined,
      })
    ),
  }

  const milestonesSection: MilestonesSection = {
    sectionHeader: normalizeSectionHeader(
      page.milestonesSection?.sectionHeader,
      ABOUT_PAGE.milestonesSection?.sectionHeader
    ),
    cards: (page.milestonesSection?.cards || ABOUT_PAGE.milestonesSection?.cards || []).map((card) => ({
      ...card,
      title: ensureLocalizedString(card.title),
      description: ensureLocalizedText(card.description),
    })),
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, ABOUT_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, ABOUT_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, ABOUT_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, ABOUT_PAGE.cta?.secondaryButton),
  }

  return {
    ...ABOUT_PAGE,
    _id: page._id ?? ABOUT_PAGE._id,
    _type: page._type ?? ABOUT_PAGE._type,
    seo: page.seo ?? ABOUT_PAGE.seo,
    hero,
    overview,
    info,
    visionMission,
    culture,
    management,
    milestonesSection,
    cta,
  }
}
