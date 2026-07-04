import { sanityFetch } from '@/sanity/lib/live'
import { HERO_QUERY } from '@/lib/cms/queries'

// Fallback values when CMS data is not available
const FALLBACK_HERO = {
  title: 'Shaping a sustainable future for the region.',
  subtitle: 'Bike is a diversified super holding company creating enduring value across energy, logistics, finance, healthcare and infrastructure — operating in 15 countries.',
  backgroundImage: null,
}

export async function getHero() {
  const { data } = await sanityFetch({ query: HERO_QUERY })
  
  if (!data) {
    console.warn('No Hero document found in Sanity, using fallback values')
    return FALLBACK_HERO
  }
  
  return {
    title: (data as any).title ?? FALLBACK_HERO.title,
    subtitle: (data as any).subtitle ?? FALLBACK_HERO.subtitle,
    backgroundImage: (data as any).backgroundImage ?? FALLBACK_HERO.backgroundImage,
  }
}
