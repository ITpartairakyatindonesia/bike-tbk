import { sanityFetch } from '@/sanity/lib/live'
import { CONTACT_PAGE_QUERY } from '@/lib/cms/queries'
import { CONTACT_PAGE } from '@/lib/data/contact-page'
import { ensureLocalizedString, ensureLocalizedText, normalizeButton } from '@/lib/utils/localization'
import type {
  ContactPage,
  LocalizedString,
  LocalizedText,
  ContactHeroSection,
  ContactInformationSection,
  ContactMapSection,
  CTASection,
} from '@/lib/types/sanity'

export async function getContactPage(): Promise<ContactPage> {
  let cmsContactPage

  try {
    const result = await sanityFetch({
      query: CONTACT_PAGE_QUERY,
      tags: ['contact-page'],
    })
    cmsContactPage = result.data
  } catch (error) {
    console.warn('Failed to fetch Contact Page from Sanity, using fallback values:', error)
    return CONTACT_PAGE
  }

  if (!cmsContactPage) {
    console.warn('No Contact Page document found in Sanity, using fallback values')
    return CONTACT_PAGE
  }

  const page = cmsContactPage as ContactPage

  const hero: ContactHeroSection = {
    eyebrow: ensureLocalizedString(page.hero?.eyebrow, CONTACT_PAGE.hero?.eyebrow),
    title: ensureLocalizedString(page.hero?.title, CONTACT_PAGE.hero?.title),
    description: ensureLocalizedText(page.hero?.description, CONTACT_PAGE.hero?.description),
  }

  const contactInformation: ContactInformationSection = {
    title: ensureLocalizedString(page.contactInformation?.title, CONTACT_PAGE.contactInformation?.title),
    address: ensureLocalizedText(page.contactInformation?.address, CONTACT_PAGE.contactInformation?.address),
    phone: page.contactInformation?.phone ?? CONTACT_PAGE.contactInformation?.phone,
    email: page.contactInformation?.email ?? CONTACT_PAGE.contactInformation?.email,
    contactPerson: page.contactInformation?.contactPerson ?? CONTACT_PAGE.contactInformation?.contactPerson,
    icon: page.contactInformation?.icon ?? CONTACT_PAGE.contactInformation?.icon,
  }

  const map: ContactMapSection = {
    title: ensureLocalizedString(page.map?.title, CONTACT_PAGE.map?.title),
    embedUrl: page.map?.embedUrl ?? CONTACT_PAGE.map?.embedUrl,
    button: normalizeButton(page.map?.button, CONTACT_PAGE.map?.button),
  }

  const cta: CTASection = {
    title: ensureLocalizedString(page.cta?.title, CONTACT_PAGE.cta?.title),
    description: ensureLocalizedText(page.cta?.description, CONTACT_PAGE.cta?.description),
    primaryButton: normalizeButton(page.cta?.primaryButton, CONTACT_PAGE.cta?.primaryButton),
    secondaryButton: normalizeButton(page.cta?.secondaryButton, CONTACT_PAGE.cta?.secondaryButton),
  }

  return {
    ...CONTACT_PAGE,
    _id: page._id ?? CONTACT_PAGE._id,
    _type: page._type ?? CONTACT_PAGE._type,
    seo: page.seo ?? CONTACT_PAGE.seo,
    hero,
    contactInformation,
    map,
    cta,
  }
}
