import { MetadataRoute } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'
const locales = ['en', 'id', 'zh'] as const
const paths = ['', '/about', '/governance', '/business', '/investor', '/sustainability', '/news', '/career', '/contact', '/organization', '/products']

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemap: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    for (const path of paths) {
      sitemap.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: path === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(loc => [loc, `${baseUrl}/${loc}${path}`])
          ),
        },
      })
    }
  }

  return sitemap
}
