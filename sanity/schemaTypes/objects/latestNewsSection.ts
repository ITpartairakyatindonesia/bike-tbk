import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'latestNewsSection',
  title: 'Latest News Section',
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
      description: 'Latest News section description.',
    }),
    defineField({
      name: 'viewAllButton',
      title: 'View All Button',
      type: 'button',
      description: 'Button linking to the full news listing.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading.en',
    },
    prepare({ heading }) {
      return {
        title: heading || 'Latest News Section',
      }
    },
  },
})
