import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'productPage',
  title: 'Product Page',
  type: 'document',
  description: 'Singleton document for the Product Page. Only one Product Page document should exist.',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine optimization settings for the Product Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroSection',
      description: 'Hero section for the Product Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'introduction',
      title: 'Introduction',
      type: 'object',
      description: 'Product introduction section with statistics.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'paragraphs',
          title: 'Paragraphs',
          type: 'array',
          of: [
            {
              type: 'localizedText',
            },
          ],
        }),
        defineField({
          name: 'statCards',
          title: 'Stat Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'value',
                  title: 'Value',
                  type: 'localizedString',
                }),
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'localizedString',
                }),
              ],
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'why',
      title: 'Why Our Products',
      type: 'object',
      description: 'Features section explaining why to choose our products.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'features',
          title: 'Features',
          type: 'array',
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
              ],
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'brands',
      title: 'Our Brands',
      type: 'object',
      description: 'Brand showcase section with brand cards.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'brandCards',
          title: 'Brand Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Brand Name',
                  type: 'string',
                }),
                defineField({
                  name: 'description',
                  title: 'Description',
                  type: 'localizedText',
                }),
                defineField({
                  name: 'highlights',
                  title: 'Key Highlights',
                  type: 'array',
                  of: [
                    {
                      type: 'localizedString',
                    },
                  ],
                }),
                defineField({
                  name: 'button',
                  title: 'Button',
                  type: 'button',
                  description: 'Button to visit brand website.',
                }),
              ],
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Products',
      type: 'object',
      description: 'Featured products section using product cards.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'products',
          title: 'Products',
          type: 'array',
          of: [
            {
              type: 'productCard',
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'marketPosition',
      title: 'Market Position',
      type: 'object',
      description: 'Market position stages section.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'stages',
          title: 'Market Stages',
          type: 'array',
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
              ],
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'cta',
      title: 'Call to Action',
      type: 'object',
      description: 'CTA section with brand links.',
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
          name: 'brandLinks',
          title: 'Brand Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Brand Name',
                  type: 'string',
                }),
                defineField({
                  name: 'website',
                  title: 'Website URL',
                  type: 'url',
                }),
              ],
            },
          ],
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Product Page',
      }
    },
  },
})
