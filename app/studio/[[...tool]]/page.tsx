/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../sanity.config'
import { sanityFetch } from '@/sanity/lib/live'
import { SITE_SETTINGS_QUERY } from '@/lib/cms/queries'
import { urlFor } from '@/lib/cms/image'
import type { Metadata } from 'next'
import type { SiteSettings } from '@/lib/types/sanity'

export const revalidate = 3600 // Revalidate every hour to avoid infinite loops

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data: siteSettings } = await sanityFetch({ query: SITE_SETTINGS_QUERY })
    
    let faviconUrl = '/favicon.ico'
    const favicon = (siteSettings as SiteSettings)?.favicon
    if (favicon?.asset) {
      try {
        faviconUrl = urlFor(favicon).url()
      } catch {
        // Fallback to default if urlFor fails
      }
    }

    return {
      title: 'Bike Tbk Studio',
      icons: {
        icon: faviconUrl,
      },
    }
  } catch (error) {
    // Fallback metadata if fetch fails
    return {
      title: 'Bike Tbk Studio',
      icons: {
        icon: '/favicon.ico',
      },
    }
  }
}

export { viewport } from 'next-sanity/studio'

export default function StudioPage() {
  return <NextStudio config={config} />
}
