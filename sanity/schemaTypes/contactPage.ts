import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  description: 'Singleton document for the Contact Page. Only one Contact Page document should exist.',
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine optimization settings for the Contact Page.',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      description: 'Hero section for the Contact Page.',
      fields: [
        defineField({
          name: 'eyebrow',
          title: 'Eyebrow',
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
      name: 'contactInformation',
      title: 'Contact Information',
      type: 'object',
      description: 'Contact information section with address, phone, email, and contact person.',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'localizedText',
        }),
        defineField({
          name: 'phone',
          title: 'Phone',
          type: 'string',
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
        }),
        defineField({
          name: 'contactPerson',
          title: 'Contact Person',
          type: 'string',
        }),
        defineField({
          name: 'icon',
          title: 'Icon',
          type: 'string',
          description: 'Icon type (e.g., map, phone, email, user)',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'map',
      title: 'Map',
      type: 'object',
      description: 'Map section with embed URL and button.',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'localizedString',
        }),
        defineField({
          name: 'embedUrl',
          title: 'Embed URL',
          type: 'string',
          description: 'Google Maps embed URL. To get this URL: Go to Google Maps → Share → Embed a map → Copy HTML → Copy only the iframe src value. Accepted format: https://www.google.com/maps/embed?pb=...',
          validation: (Rule) =>
            Rule.custom((url) => {
              if (!url) return true // Allow empty
              if (url.startsWith('https://www.google.com/maps/embed?pb=')) return true
              return 'Must be a valid Google Maps Embed URL (https://www.google.com/maps/embed?pb=...)'
            }),
        }),
        defineField({
          name: 'button',
          title: 'Button',
          type: 'button',
          description: 'Button to view on Google Maps.',
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
      description: 'CTA section with title, description, and button.',
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
          name: 'button',
          title: 'Button',
          type: 'button',
          description: 'CTA button.',
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
        title: 'Contact Page',
      }
    },
  },
})
