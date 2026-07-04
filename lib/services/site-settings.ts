import { getSiteSettings as getCmsSiteSettings } from '@/lib/cms/api'
import { SITE_SETTINGS } from '@/lib/data/site-settings'
import type { SiteSettings } from '@/lib/types/sanity'

// Fallback values when CMS data is not available
const FALLBACK_SITE_SETTINGS = {
  companyName: SITE_SETTINGS.companyName,
  companyLegalName: SITE_SETTINGS.legalName,
  tagline: SITE_SETTINGS.companyTagline,
  description: SITE_SETTINGS.companyDescription,
  copyright: `© ${SITE_SETTINGS.currentYear} ${SITE_SETTINGS.legalName}. All rights reserved.`,
}

export async function getSiteSettings() {
  const cmsSettings = await getCmsSiteSettings()
  
  if (!cmsSettings) {
    console.warn('No Site Settings document found in Sanity, using fallback values')
    return {
      ...SITE_SETTINGS,
      companyName: FALLBACK_SITE_SETTINGS.companyName,
      companyShortName: FALLBACK_SITE_SETTINGS.companyName,
      legalName: FALLBACK_SITE_SETTINGS.companyLegalName,
      companyDescription: FALLBACK_SITE_SETTINGS.description,
      companyTagline: FALLBACK_SITE_SETTINGS.tagline,
      logo: null,
      favicon: null,
    }
  }
  
  return {
    ...SITE_SETTINGS,
    companyName: cmsSettings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    companyShortName: cmsSettings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    legalName: cmsSettings.companyLegalName ?? FALLBACK_SITE_SETTINGS.companyLegalName,
    companyDescription: cmsSettings.description ?? FALLBACK_SITE_SETTINGS.description,
    companyTagline: cmsSettings.tagline ?? FALLBACK_SITE_SETTINGS.tagline,
    logo: cmsSettings.logo ?? null,
    favicon: cmsSettings.favicon ?? null,
  }
}
