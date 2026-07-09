import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  description: 'Singleton document for the About Page. Only one About Page document should exist.',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine optimization settings for the About Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'heroSection',
      description: 'Hero section for the About Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'object',
      description: 'Company overview section.',
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
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'info',
      title: 'Company Information',
      type: 'object',
      description: 'Corporate information section.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'items',
          title: 'Information Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'label',
                  title: 'Label',
                  type: 'localizedString',
                }),
                defineField({
                  name: 'value',
                  title: 'Value',
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
      name: 'visionMission',
      title: 'Vision & Mission',
      type: 'object',
      description: 'Vision and mission section.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'vision',
          title: 'Vision',
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'localizedString',
            }),
            defineField({
              name: 'statement',
              title: 'Statement',
              type: 'localizedText',
            }),
          ],
        }),
        defineField({
          name: 'mission',
          title: 'Mission',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'localizedString',
            }),
            defineField({
              name: 'items',
              title: 'Mission Items',
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
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'culture',
      title: 'Culture',
      type: 'object',
      description: 'Company culture section.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'introduction',
          title: 'Introduction',
          type: 'localizedText',
        }),
        defineField({
          name: 'cards',
          title: 'Culture Cards',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Lucide icon name (e.g., "TreePine", "HeartHandshake")',
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
      name: 'management',
      title: 'Management',
      type: 'object',
      description: 'Management profile section.',
      fields: [
        defineField({
          name: 'sectionHeader',
          title: 'Section Header',
          type: 'sectionHeader',
        }),
        defineField({
          name: 'introduction',
          title: 'Introduction',
          type: 'localizedText',
        }),
        defineField({
          name: 'executives',
          title: 'Executives',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                defineField({
                  name: 'name',
                  title: 'Name',
                  type: 'string',
                }),
                defineField({
                  name: 'position',
                  title: 'Position',
                  type: 'localizedString',
                }),
                defineField({
                  name: 'biography',
                  title: 'Biography',
                  type: 'localizedText',
                }),
                defineField({
                  name: 'slug',
                  title: 'Slug',
                  type: 'slug',
                }),
                defineField({
                  name: 'image',
                  title: 'Image',
                  type: 'image',
                  options: {
                    hotspot: true,
                  },
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
        title: 'About Page',
      }
    },
  },
})
