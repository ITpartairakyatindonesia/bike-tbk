import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'localizedString',
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      description: 'Use absolute paths for internal links (e.g. /about) or full URLs for external links.',
    }),
    defineField({
      name: 'external',
      title: 'Open in new tab',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      labelEn: 'label.en',
      labelId: 'label.id',
      labelZh: 'label.zh',
      href: 'href',
    },
    prepare({ labelEn, labelId, labelZh, href }) {
      const title = labelEn || labelId || labelZh || 'Link'
      return {
        title,
        subtitle: href || '',
      }
    },
  },
})
