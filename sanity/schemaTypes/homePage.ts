import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  description: 'Singleton document for the Home Page. Only one Home Page document should exist.',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine optimization settings for the Home Page.',
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroSection',
      description: 'Hero section for the Home Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'aboutPreview',
      title: 'About Preview',
      type: 'aboutPreviewSection',
      description: 'About Preview section for the Home Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'businessHighlights',
      title: 'Business Highlights',
      type: 'businessHighlightsSection',
      description: 'Business Highlights section for the Home Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'sustainability',
      title: 'Sustainability',
      type: 'sustainabilitySection',
      description: 'Sustainability section for the Home Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'latestNews',
      title: 'Latest News',
      type: 'latestNewsSection',
      description: 'Latest News preview section for the Home Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'cta',
      title: 'CTA',
      type: 'ctaSection',
      description: 'Call-to-action section for the Home Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page',
      }
    },
  },
})
