import { defineLocations, type PresentationPluginOptions } from 'sanity/presentation'

export const resolve: PresentationPluginOptions['resolve'] = {
  locations: {
    siteSettings: defineLocations({
      select: {
        companyName: 'companyName',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.companyName || 'Site Settings',
            href: '/',
          },
        ],
      }),
    }),
    hero: defineLocations({
      select: {
        title: 'title',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Hero',
            href: '/',
          },
        ],
      }),
    }),
  },
}
