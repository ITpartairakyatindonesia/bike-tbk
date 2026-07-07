import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      title: 'URL',
      type: 'string',
      description: 'Use absolute paths for internal links (e.g. /about) or full URLs for external links.',
      validation: (Rule) => Rule.required(),
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
      label: 'label',
      href: 'href',
    },
    prepare({ label, href }) {
      return {
        title: label || 'Link',
        subtitle: href || '',
      }
    },
  },
})
