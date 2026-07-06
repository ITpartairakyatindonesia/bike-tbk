import { sanityFetch } from '@/sanity/lib/live'
import { HERO_QUERY } from '@/lib/cms/queries'

// Fallback values when CMS data is not available
const FALLBACK_HERO = {
  title: 'Empowering Active Lifestyles Across Indonesia.',
  subtitle: 'PT Sepeda Bersama Indonesia Tbk is a leading bicycle distribution company committed to providing high-quality products, expanding nationwide distribution, and creating sustainable value for customers, business partners, shareholders, and communities.',
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
