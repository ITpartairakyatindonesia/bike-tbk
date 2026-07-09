import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'localizedSiteSettingsContent',
  title: 'Localized Content',
  type: 'object',
  fields: [
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'localizedString',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'localizedText',
      description: 'Short paragraph shown in the footer.',
    }),
    defineField({
      name: 'defaultSeoTitle',
      title: 'Default SEO Title',
      type: 'localizedString',
    }),
    defineField({
      name: 'defaultSeoDescription',
      title: 'Default SEO Description',
      type: 'localizedText',
    }),
  ],
})
