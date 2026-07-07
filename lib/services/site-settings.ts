import { sanityFetch } from '@/sanity/lib/live'
import { SITE_SETTINGS_QUERY } from '@/lib/cms/queries'
import { SITE_SETTINGS } from '@/lib/data/site-settings'
import type { SiteSettings } from '@/lib/types/sanity'

// Fallback values when CMS data is not available
const FALLBACK_SITE_SETTINGS = {
  companyName: SITE_SETTINGS.companyName,
  companyLegalName: SITE_SETTINGS.legalName,
  companyInitials: SITE_SETTINGS.companyInitials,
  tagline: SITE_SETTINGS.companyTagline,
  footerDescription: SITE_SETTINGS.companyDescription,
  contactInfo: {
    address: '',
    phone: '',
    email: '',
    corporateSecretary: '',
  },
  socialLinks: [] as { platform: string; href: string; label?: string }[],
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
      companyTagline: FALLBACK_SITE_SETTINGS.tagline,
      footerDescription: FALLBACK_SITE_SETTINGS.footerDescription,
      logo: null,
      favicon: null,
      contactInfo: FALLBACK_SITE_SETTINGS.contactInfo,
      socialLinks: FALLBACK_SITE_SETTINGS.socialLinks,
      defaultSeoTitle: FALLBACK_SITE_SETTINGS.companyName,
      defaultSeoDescription: FALLBACK_SITE_SETTINGS.footerDescription,
      defaultOgImage: null,
    }
  }

  const settings = cmsSettings as SiteSettings

  return {
    ...SITE_SETTINGS,
    companyName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    companyShortName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    legalName: settings.companyLegalName ?? FALLBACK_SITE_SETTINGS.companyLegalName,
    companyInitials: settings.companyInitials ?? FALLBACK_SITE_SETTINGS.companyInitials,
    companyTagline: settings.tagline ?? FALLBACK_SITE_SETTINGS.tagline,
    footerDescription: settings.footerDescription ?? FALLBACK_SITE_SETTINGS.footerDescription,
    logo: settings.logo ?? null,
    favicon: settings.favicon ?? null,
    contactInfo: {
      address: settings.contactInfo?.address ?? FALLBACK_SITE_SETTINGS.contactInfo.address,
      phone: settings.contactInfo?.phone ?? FALLBACK_SITE_SETTINGS.contactInfo.phone,
      email: settings.contactInfo?.email ?? FALLBACK_SITE_SETTINGS.contactInfo.email,
      corporateSecretary: settings.contactInfo?.corporateSecretary ?? FALLBACK_SITE_SETTINGS.contactInfo.corporateSecretary,
    },
    socialLinks: settings.socialLinks ?? FALLBACK_SITE_SETTINGS.socialLinks,
    defaultSeoTitle: settings.defaultSeoTitle ?? settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    defaultSeoDescription: settings.defaultSeoDescription ?? settings.footerDescription ?? FALLBACK_SITE_SETTINGS.footerDescription,
    defaultOgImage: settings.defaultOgImage ?? null,
  }
}
