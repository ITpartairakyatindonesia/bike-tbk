import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'investorPage',
  title: 'Investor Page',
  type: 'document',
  description: 'Singleton document for the Investor Page. Only one Investor Page document should exist.',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine optimization settings for the Investor Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      description: 'Hero section for the Investor Page.',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'localizedString',
        }),
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
        }),
        defineField({
          name: 'description',
          title: 'Description',
          type: 'localizedText',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'cards',
      title: 'Investor Cards',
      type: 'array',
      description: 'Investor resource cards with downloadable documents.',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localizedString',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'localizedText',
            }),
            defineField({
              name: 'iconKey',
              title: 'Icon Key',
              type: 'string',
              description: 'Lucide icon name (e.g., "FileText", "BarChart3", "ShieldCheck", "Presentation")',
            }),
            defineField({
              name: 'documents',
              title: 'Documents',
              type: 'array',
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      name: 'title',
                      title: 'Title',
                      type: 'string',
                    }),
                    defineField({
                      name: 'file',
                      title: 'File',
                      type: 'file',
                      description: 'Upload the document file (PDF, etc.)',
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Investor Page',
      }
    },
  },
})
