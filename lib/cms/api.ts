import { client } from './client'
import { SITE_SETTINGS_QUERY } from './queries'
import type { SiteSettings } from '@/lib/types/sanity'

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const settings = await client.fetch(SITE_SETTINGS_QUERY)
    
    if (!settings) {
      return null
    }
    
    return settings
  } catch (error) {
    console.error('Error fetching Site Settings from Sanity:', error)
    return null
  }
}
