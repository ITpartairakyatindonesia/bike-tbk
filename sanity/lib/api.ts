import { client } from './client'
import { SITE_SETTINGS_QUERY } from './queries'
import type { SiteSettings } from '@/lib/types/sanity'
import { SITE_SETTINGS } from '@/lib/data/site-settings'

export async function getSiteSettings(): Promise<SiteSettings | null> {
  try {
    const settings = await client.fetch(SITE_SETTINGS_QUERY)
    
    if (!settings) {
      console.warn('No Site Settings document found in Sanity, using fallback values')
      return null
    }
    
    return settings
  } catch (error) {
    console.error('Error fetching Site Settings from Sanity:', error)
    return null
  }
}

export function getSiteSettingsWithFallback(settings: SiteSettings | null) {
  if (!settings) {
    return SITE_SETTINGS
  }
  
  return {
    ...SITE_SETTINGS,
    companyName: settings.companyName ?? SITE_SETTINGS.companyName,
    companyLegalName: settings.companyLegalName ?? SITE_SETTINGS.companyLegalName,
    tagline: settings.tagline ?? SITE_SETTINGS.tagline,
    footerDescription: settings.footerDescription ?? SITE_SETTINGS.footerDescription,
  }
}
