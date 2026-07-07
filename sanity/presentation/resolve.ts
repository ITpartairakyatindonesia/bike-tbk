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
    homePage: defineLocations({
      select: {
        title: 'seo.title',
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || 'Home Page',
            href: '/',
          },
        ],
      }),
    }),
  },
}
