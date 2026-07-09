import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sustainabilitySection',
  title: 'Sustainability Section',
  type: 'object',
  fields: [
    defineField({
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
      description: 'Eyebrow, heading, and description for the section header.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Sustainability section body text.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Sustainability section image.',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'sustainabilityCard' }],
      description: 'Focus area cards shown beside the section text.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading.en',
      cards: 'cards',
    },
    prepare({ heading, cards }) {
      return {
        title: heading || 'Sustainability Section',
        subtitle: `${cards?.length || 0} card${cards?.length === 1 ? '' : 's'}`,
      }
    },
  },
})
