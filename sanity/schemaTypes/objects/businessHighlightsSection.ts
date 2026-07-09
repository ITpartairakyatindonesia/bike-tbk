import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'businessHighlightsSection',
  title: 'Business Highlights Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
      description: 'Eyebrow, heading, and description for the section header.',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'businessHighlightCard' }],
      description: 'List of business highlight cards.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading.en',
      cards: 'cards',
    },
    prepare({ heading, cards }) {
      return {
        title: heading || 'Business Highlights Section',
        subtitle: `${cards?.length || 0} card${cards?.length === 1 ? '' : 's'}`,
      }
    },
  },
})
