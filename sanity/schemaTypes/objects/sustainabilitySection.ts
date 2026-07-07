import { defineType, defineField } from 'sanity'
import { LanguageSelector } from '@/sanity/presentation/LanguageSelector'

export default defineType({
  name: 'sustainabilitySection',
  title: 'Sustainability Section',
  type: 'object',
  components: {
    input: LanguageSelector,
  },
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
      name: 'button',
      title: 'Button',
      type: 'button',
      description: 'Call-to-action button for the Sustainability section.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading',
    },
    prepare({ heading }) {
      return {
        title: heading || 'Sustainability Section',
      }
    },
  },
})
