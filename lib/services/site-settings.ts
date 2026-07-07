import { sanityFetch } from '@/sanity/lib/live'
import { SITE_SETTINGS_QUERY } from '@/lib/cms/queries'
import { SITE_SETTINGS } from '@/lib/data/site-settings'
import type { LocalizedString, LocalizedText, SiteSettings } from '@/lib/types/sanity'

// Fallback values when CMS data is not available
const FALLBACK_SITE_SETTINGS = {
  companyName: SITE_SETTINGS.companyName,
  companyLegalName: SITE_SETTINGS.companyLegalName,
  companyInitials: SITE_SETTINGS.companyInitials,
  tagline: SITE_SETTINGS.tagline,
  footerDescription: SITE_SETTINGS.footerDescription,
  contactInfo: SITE_SETTINGS.contactInfo,
  socialLinks: SITE_SETTINGS.socialLinks,
  defaultSeoTitle: SITE_SETTINGS.defaultSeoTitle,
  defaultSeoDescription: SITE_SETTINGS.defaultSeoDescription,
}

const ensureLocalizedString = (value?: LocalizedString | null, fallback?: LocalizedString | null | undefined) => ({
  en: value?.en ?? fallback?.en ?? '',
  id: value?.id ?? fallback?.id ?? '',
})

const ensureLocalizedText = (value?: LocalizedText | null, fallback?: LocalizedText | null | undefined) => ({
  en: value?.en ?? fallback?.en ?? '',
  id: value?.id ?? fallback?.id ?? '',
})

export async function getSiteSettings(): Promise<SiteSettings> {
  const { data: cmsSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY })

  if (!cmsSettings) {
    console.warn('No Site Settings document found in Sanity, using fallback values')
    return {
      ...SITE_SETTINGS,
      companyName: FALLBACK_SITE_SETTINGS.companyName,
      companyShortName: FALLBACK_SITE_SETTINGS.companyName,
      legalName: FALLBACK_SITE_SETTINGS.companyLegalName,
      companyLegalName: FALLBACK_SITE_SETTINGS.companyLegalName,
      companyInitials: FALLBACK_SITE_SETTINGS.companyInitials,
      tagline: ensureLocalizedString(FALLBACK_SITE_SETTINGS.tagline),
      footerDescription: ensureLocalizedText(FALLBACK_SITE_SETTINGS.footerDescription),
      logo: undefined,
      favicon: undefined,
      contactInfo: {
        address: FALLBACK_SITE_SETTINGS.contactInfo?.address ?? '',
        phone: FALLBACK_SITE_SETTINGS.contactInfo?.phone ?? '',
        email: FALLBACK_SITE_SETTINGS.contactInfo?.email ?? '',
        corporateSecretary: FALLBACK_SITE_SETTINGS.contactInfo?.corporateSecretary ?? '',
      },
      socialLinks: FALLBACK_SITE_SETTINGS.socialLinks,
      defaultSeoTitle: ensureLocalizedString(FALLBACK_SITE_SETTINGS.defaultSeoTitle),
      defaultSeoDescription: ensureLocalizedText(FALLBACK_SITE_SETTINGS.defaultSeoDescription),
      defaultOgImage: undefined,
      currentYear: SITE_SETTINGS.currentYear,
    }
  }

  const settings = cmsSettings as SiteSettings

  return {
    ...SITE_SETTINGS,
    _id: settings._id ?? SITE_SETTINGS._id,
    _type: settings._type ?? SITE_SETTINGS._type,
    companyName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    companyShortName: settings.companyName ?? FALLBACK_SITE_SETTINGS.companyName,
    legalName: settings.companyLegalName ?? FALLBACK_SITE_SETTINGS.companyLegalName,
    companyLegalName: settings.companyLegalName ?? FALLBACK_SITE_SETTINGS.companyLegalName,
    companyInitials: settings.companyInitials ?? FALLBACK_SITE_SETTINGS.companyInitials,
    tagline: ensureLocalizedString(settings.tagline, FALLBACK_SITE_SETTINGS.tagline),
    footerDescription: ensureLocalizedText(settings.footerDescription, FALLBACK_SITE_SETTINGS.footerDescription),
    logo: settings.logo ?? undefined,
    favicon: settings.favicon ?? undefined,
    contactInfo: {
      address: settings.contactInfo?.address ?? FALLBACK_SITE_SETTINGS.contactInfo?.address ?? '',
      phone: settings.contactInfo?.phone ?? FALLBACK_SITE_SETTINGS.contactInfo?.phone ?? '',
      email: settings.contactInfo?.email ?? FALLBACK_SITE_SETTINGS.contactInfo?.email ?? '',
      corporateSecretary: settings.contactInfo?.corporateSecretary ?? FALLBACK_SITE_SETTINGS.contactInfo?.corporateSecretary ?? '',
    },
    socialLinks: settings.socialLinks ?? FALLBACK_SITE_SETTINGS.socialLinks,
    defaultSeoTitle: ensureLocalizedString(settings.defaultSeoTitle, FALLBACK_SITE_SETTINGS.defaultSeoTitle),
    defaultSeoDescription: ensureLocalizedText(settings.defaultSeoDescription, FALLBACK_SITE_SETTINGS.defaultSeoDescription),
    defaultOgImage: settings.defaultOgImage ?? undefined,
    currentYear: SITE_SETTINGS.currentYear,
  }
}
