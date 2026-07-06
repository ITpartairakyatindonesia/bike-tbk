import { sanityFetch } from '@/sanity/lib/live'
import { SITE_SETTINGS_QUERY } from '@/lib/cms/queries'
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
  const { data: cmsSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY })

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

  const settings = cmsSettings as SiteSettings

  return {
    ...SITE_SETTINGS,
    companyName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    companyShortName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    legalName: settings.companyLegalName ?? FALLBACK_SITE_SETTINGS.companyLegalName,
    companyDescription: settings.description ?? FALLBACK_SITE_SETTINGS.description,
    companyTagline: settings.tagline ?? FALLBACK_SITE_SETTINGS.tagline,
    logo: settings.logo ?? null,
    favicon: settings.favicon ?? null,
  }
}
