import { sanityFetch } from '@/sanity/lib/live'
import { NEWS_QUERY, LATEST_NEWS_QUERY } from '@/lib/cms/queries'
import { FALLBACK_NEWS } from '@/lib/data/news'
import type { News } from '@/lib/types/sanity'

function sortNewsByDate(news: News[]): News[] {
  return [...news].sort((a, b) => {
    const dateA = a.publishedAt ? new Date(a.publishedAt).getTime() : 0
    const dateB = b.publishedAt ? new Date(b.publishedAt).getTime() : 0
    return dateB - dateA
  })
}

function getLatestFallbackNews(limit: number): News[] {
  return sortNewsByDate(FALLBACK_NEWS).slice(0, limit)
}

export async function getNews(): Promise<News[]> {
  try {
    const { data } = await sanityFetch({ query: NEWS_QUERY })
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn('No news found in Sanity')
      return []
    }
    return data as News[]
  } catch (error) {
    console.warn('Failed to fetch news from Sanity', error)
    return []
  }
}

export async function getLatestNews(limit = 3): Promise<News[]> {
  try {
    const { data } = await sanityFetch({ query: LATEST_NEWS_QUERY })
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.warn('No latest news found in Sanity')
      return []
    }
    return data as News[]
  } catch (error) {
    console.warn('Failed to fetch latest news from Sanity', error)
    return []
  }
}
