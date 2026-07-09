import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'milestonesSection',
  title: 'Milestones Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
      description: 'Eyebrow, heading, and description for the milestones section.',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'milestoneCard' }],
      description: 'List of milestone cards.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading.en',
      cards: 'cards',
    },
    prepare({ heading, cards }) {
      return {
        title: heading || 'Milestones Section',
        subtitle: `${cards?.length || 0} card${cards?.length === 1 ? '' : 's'}`,
      }
    },
  },
})
