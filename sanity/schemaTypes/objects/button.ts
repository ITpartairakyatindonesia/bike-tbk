import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'button',
  title: 'Button',
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
      label: 'label.en',
      href: 'href',
    },
    prepare({ label, href }) {
      return {
        title: label || 'Button',
        subtitle: href || '',
      }
    },
  },
})
