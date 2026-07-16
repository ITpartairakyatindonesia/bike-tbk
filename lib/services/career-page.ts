import { sanityFetch } from '@/sanity/lib/live'
import { CAREER_PAGE_QUERY } from '@/lib/cms/queries'
import { CAREER_PAGE_FALLBACK } from '@/lib/data/career-page'
import type { CareerPage, JobOpening } from '@/lib/types/sanity'
import { ensureLocalizedString, ensureLocalizedText, normalizeSectionHeader, normalizeButton } from '@/lib/utils/localization'

export async function getCareerPage(): Promise<CareerPage> {
  try {
    const { data } = await sanityFetch({ query: CAREER_PAGE_QUERY })
    if (!data) {
      return CAREER_PAGE_FALLBACK
    }
    const page = data as Partial<CareerPage>

    const jobs: JobOpening[] = (page.jobOpenings?.jobs || []).map(
      (job: JobOpening, index: number) => ({
        _key: job._key ?? `job-${index}`,
        title: ensureLocalizedString(job.title),
        department: ensureLocalizedString(job.department),
        location: ensureLocalizedString(job.location),
        type: ensureLocalizedString(job.type),
        description: ensureLocalizedText(job.description),
        applyButton: normalizeButton(job.applyButton),
      })
    )

    return {
      _id: page._id || CAREER_PAGE_FALLBACK._id,
      _type: page._type || CAREER_PAGE_FALLBACK._type,
      seo: page.seo || CAREER_PAGE_FALLBACK.seo,
      hero: {
        eyebrow: ensureLocalizedString(page.hero?.eyebrow, CAREER_PAGE_FALLBACK.hero?.eyebrow),
        title: ensureLocalizedString(page.hero?.title, CAREER_PAGE_FALLBACK.hero?.title),
        description: ensureLocalizedText(page.hero?.description, CAREER_PAGE_FALLBACK.hero?.description),
      },
      jobOpenings: {
        sectionHeader: normalizeSectionHeader(
          page.jobOpenings?.sectionHeader,
          CAREER_PAGE_FALLBACK.jobOpenings?.sectionHeader
        ),
        emptyMessage: ensureLocalizedText(
          page.jobOpenings?.emptyMessage,
          CAREER_PAGE_FALLBACK.jobOpenings?.emptyMessage
        ),
        jobs,
      },
      cta: {
        title: ensureLocalizedString(page.cta?.title, CAREER_PAGE_FALLBACK.cta?.title),
        description: ensureLocalizedText(page.cta?.description, CAREER_PAGE_FALLBACK.cta?.description),
        primaryButton: normalizeButton(page.cta?.primaryButton, CAREER_PAGE_FALLBACK.cta?.primaryButton),
        secondaryButton: normalizeButton(page.cta?.secondaryButton, CAREER_PAGE_FALLBACK.cta?.secondaryButton),
      },
    }
  } catch (error) {
    console.warn('Failed to fetch career page from Sanity', error)
    return CAREER_PAGE_FALLBACK
  }
}
