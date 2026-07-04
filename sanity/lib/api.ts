import { client } from './client'
import { SITE_SETTINGS_QUERY } from './queries'
import type { SiteSettings } from '@/lib/types/sanity'

// Hardcoded fallback values
const FALLBACK_SITE_SETTINGS = {
  companyName: 'Bike',
  companyLegalName: 'PT Bike Tbk',
  tagline: '',
  description: 'Bike is a leading company driving innovation and growth across multiple industries.',
  copyright: `© ${new Date().getFullYear()} PT Bike Tbk. All rights reserved.`,
}

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
    return FALLBACK_SITE_SETTINGS
  }
  
  return {
    companyName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    companyLegalName: settings.companyLegalName ?? FALLBACK_SITE_SETTINGS.companyLegalName,
    tagline: settings.tagline ?? FALLBACK_SITE_SETTINGS.tagline,
    description: settings.description ?? FALLBACK_SITE_SETTINGS.description,
    copyright: settings.copyright ?? FALLBACK_SITE_SETTINGS.copyright,
  }
}
