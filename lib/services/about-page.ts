import { sanityFetch } from '@/sanity/lib/live'
import { ABOUT_PAGE_QUERY } from '@/lib/cms/queries'
import { ABOUT_PAGE } from '@/lib/data/about-page'
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
  SanityImage,
} from '@/lib/types/sanity'

const ensureLocalizedString = (
  value?: LocalizedString | string | null,
  fallback?: LocalizedString | null
) => {
  if (typeof value === 'string') {
    return { en: value, id: value }
  }
  return {
    en: value?.en ?? fallback?.en ?? '',
    id: value?.id ?? fallback?.id ?? '',
  }
}

const ensureLocalizedText = (
  value?: LocalizedText | string | null,
  fallback?: LocalizedText | null
) => {
  if (typeof value === 'string') {
    return { en: value, id: value }
  }
  return {
    en: value?.en ?? fallback?.en ?? '',
    id: value?.id ?? fallback?.id ?? '',
  }
}

const normalizeSectionHeader = (
  value?: { eyebrow?: LocalizedString | string; heading?: LocalizedString | string; description?: LocalizedText | string } | null,
  fallback?: { eyebrow?: LocalizedString; heading?: LocalizedString; description?: LocalizedText } | null
) => ({
  eyebrow: ensureLocalizedString(value?.eyebrow, fallback?.eyebrow),
  heading: ensureLocalizedString(value?.heading, fallback?.heading),
  description: ensureLocalizedText(value?.description, fallback?.description),
})

const normalizeButton = (
  value?: { label?: LocalizedString | string; href?: string; variant?: 'primary' | 'secondary' | 'outline'; external?: boolean } | null,
  fallback?: { label?: LocalizedString; href?: string; variant?: 'primary' | 'secondary' | 'outline'; external?: boolean } | null
) => {
  if (!value && !fallback) return undefined
  const base = value ?? fallback
  return {
    label: ensureLocalizedString(base?.label, fallback?.label),
    href: base?.href ?? fallback?.href ?? '#',
    variant: base?.variant ?? fallback?.variant,
    external: base?.external ?? fallback?.external,
  }
}

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
  }
}
