import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'aboutPreviewSection',
  title: 'About Preview Section',
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
      description: 'Main body text for the About Preview section.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'About Preview section image.',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
      description: 'Call-to-action button for the About Preview section.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'About Preview Section',
      }
    },
  },
})
