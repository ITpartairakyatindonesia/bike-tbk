import { sanityFetch } from '@/sanity/lib/live'
import { NEWS_QUERY, LATEST_NEWS_QUERY, NEWS_BY_SLUG_QUERY, RELATED_NEWS_QUERY, NEWS_PAGE_QUERY } from '@/lib/cms/queries'
import { FALLBACK_NEWS, NEWS_PAGE_FALLBACK } from '@/lib/data/news'
import type { News, NewsPage } from '@/lib/types/sanity'
import { ensureLocalizedString, ensureLocalizedText } from '@/lib/utils/localization'

function sortNewsByDate(news: News[]): News[] {
  return [...news].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return dateB - dateA
  })
}

export async function getNews(): Promise<News[]> {
  try {
    const { data } = await sanityFetch({ query: NEWS_QUERY })
    if (!data || !Array.isArray(data) || data.length === 0) {
      return FALLBACK_NEWS
    }
    return data as News[]
  } catch (error) {
    console.warn('Failed to fetch news from Sanity', error)
    return FALLBACK_NEWS
  }
}

export async function getLatestNews(limit = 3): Promise<News[]> {
  try {
    const { data } = await sanityFetch({ query: LATEST_NEWS_QUERY })
    if (!data || !Array.isArray(data) || data.length === 0) {
      return sortNewsByDate(FALLBACK_NEWS).slice(0, limit)
    }
    return data as News[]
  } catch (error) {
    console.warn('Failed to fetch latest news from Sanity', error)
    return sortNewsByDate(FALLBACK_NEWS).slice(0, limit)
  }
}

export async function getNewsBySlug(slug: string): Promise<News | null> {
  try {
    const { data } = await sanityFetch({
      query: NEWS_BY_SLUG_QUERY,
      params: { slug }
    })
    if (!data) {
      const fallback = FALLBACK_NEWS.find((n) => n.slug?.current === slug)
      return fallback || null
    }
    return data as News
  } catch (error) {
    console.warn('Failed to fetch news by slug from Sanity', error)
    const fallback = FALLBACK_NEWS.find((n) => n.slug?.current === slug)
    return fallback || null
  }
}

export async function getRelatedNews(slug: string): Promise<News[]> {
  try {
    const { data } = await sanityFetch({
      query: RELATED_NEWS_QUERY,
      params: { slug }
    })
    if (!data || !Array.isArray(data) || data.length === 0) {
      return FALLBACK_NEWS.filter((n) => n.slug?.current !== slug).slice(0, 3)
    }
    return data as News[]
  } catch (error) {
    console.warn('Failed to fetch related news from Sanity', error)
    return FALLBACK_NEWS.filter((n) => n.slug?.current !== slug).slice(0, 3)
  }
}

export async function getNewsPage(): Promise<NewsPage> {
  try {
    const { data } = await sanityFetch({ query: NEWS_PAGE_QUERY })
    if (!data) {
      return NEWS_PAGE_FALLBACK
    }
    const page = data as Partial<NewsPage>

    return {
      _id: page._id || NEWS_PAGE_FALLBACK._id,
      _type: page._type || NEWS_PAGE_FALLBACK._type,
      seo: page.seo || NEWS_PAGE_FALLBACK.seo,
      hero: {
        eyebrow: ensureLocalizedString(page.hero?.eyebrow, NEWS_PAGE_FALLBACK.hero?.eyebrow),
        title: ensureLocalizedString(page.hero?.title, NEWS_PAGE_FALLBACK.hero?.title),
        description: ensureLocalizedText(page.hero?.description, NEWS_PAGE_FALLBACK.hero?.description),
      },
      noNewsMessage: ensureLocalizedText(page.noNewsMessage, NEWS_PAGE_FALLBACK.noNewsMessage),
      readMoreLabel: ensureLocalizedString(page.readMoreLabel, NEWS_PAGE_FALLBACK.readMoreLabel),
      backToNewsLabel: ensureLocalizedString(page.backToNewsLabel, NEWS_PAGE_FALLBACK.backToNewsLabel),
      loadMoreLabel: ensureLocalizedString(page.loadMoreLabel, NEWS_PAGE_FALLBACK.loadMoreLabel),
    }
  } catch (error) {
    console.warn('Failed to fetch news page from Sanity', error)
    return NEWS_PAGE_FALLBACK
  }
}
