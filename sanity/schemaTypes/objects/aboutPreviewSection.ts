import { defineType, defineField } from 'sanity'
import { LanguageSelector } from '@/sanity/presentation/LanguageSelector'

export default defineType({
  name: 'aboutPreviewSection',
  title: 'About Preview Section',
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
      description: 'Main body text for the About Preview section.',
    }),
    defineField({
      name: 'secondaryDescription',
      title: 'Secondary Description',
      type: 'localizedText',
      description: 'Secondary body text below the main description.',
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
      name: 'visionCard',
      title: 'Vision Card',
      type: 'object',
      description: 'Small overlay card shown on the section image.',
      fields: [
        defineField({
          name: 'label',
          title: 'Label',
          type: 'localizedString',
        }),
        defineField({
          name: 'statement',
          title: 'Statement',
          type: 'localizedString',
        }),
      ],
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
      heading: 'sectionHeader.heading.en',
    },
    prepare({ heading }) {
      return {
        title: heading || 'About Preview Section',
      }
    },
  },
})
