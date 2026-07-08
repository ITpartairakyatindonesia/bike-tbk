import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sectionHeader',
  title: 'Section Header',
  type: 'object',
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'localizedString',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'localizedString',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
    }),
  ],
  preview: {
    select: {
      eyebrow: 'eyebrow.en',
      heading: 'heading.en',
    },
    prepare({ eyebrow, heading }) {
      return {
        title: heading || 'Section Header',
        subtitle: eyebrow || '',
      }
    },
  },
})
