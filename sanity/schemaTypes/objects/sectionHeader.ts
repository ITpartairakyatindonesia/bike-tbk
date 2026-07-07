import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sectionHeader',
  title: 'Section Header',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    select: {
      eyebrow: 'eyebrow',
      heading: 'heading',
    },
    prepare({ eyebrow, heading }) {
      return {
        title: heading || 'Section Header',
        subtitle: eyebrow || '',
      }
    },
  },
})
