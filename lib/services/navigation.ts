import { sanityFetch } from '@/sanity/lib/live'
import { NAVIGATION_QUERY } from '@/lib/cms/queries'
import { NAVIGATION } from '@/lib/data/navigation'
import { FOOTER_COMPANY_LINKS, FOOTER_RESOURCE_LINKS, FOOTER_LEGAL_LINKS } from '@/lib/data/footer'
import type { Navigation, NavigationGroups } from '@/lib/types/sanity'

const FALLBACK_NAVIGATION: NavigationGroups = {
  mainNavigation: NAVIGATION.map((item) => ({
    _key: item.href,
    label: item.label,
    href: item.href,
    external: false,
  })),
  footerCompanyLinks: FOOTER_COMPANY_LINKS.map((item) => ({
    _key: item.href,
    label: { en: item.label, id: item.label },
    href: item.href,
    external: false,
  })),
  footerResourceLinks: FOOTER_RESOURCE_LINKS.map((item) => ({
    _key: item.href,
    label: { en: item.label, id: item.label },
    href: item.href,
    external: false,
  })),
  footerLegalLinks: FOOTER_LEGAL_LINKS.map((item) => ({
    _key: item.href,
    label: { en: item.label, id: item.label },
    href: item.href,
    external: false,
  })),
}

export async function getNavigation(): Promise<NavigationGroups> {
  const { data: cmsNavigation } = await sanityFetch({ query: NAVIGATION_QUERY })

  if (!cmsNavigation) {
    console.warn('No Navigation document found in Sanity, using fallback values')
    return FALLBACK_NAVIGATION
  }

  const navigation = cmsNavigation as Navigation

  return {
    mainNavigation: navigation.mainNavigation?.length
      ? navigation.mainNavigation
      : FALLBACK_NAVIGATION.mainNavigation,
    footerCompanyLinks: navigation.footerCompanyLinks ?? FALLBACK_NAVIGATION.footerCompanyLinks,
    footerResourceLinks: navigation.footerResourceLinks ?? FALLBACK_NAVIGATION.footerResourceLinks,
    footerLegalLinks: navigation.footerLegalLinks ?? FALLBACK_NAVIGATION.footerLegalLinks,
  }
}
