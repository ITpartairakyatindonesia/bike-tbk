import { defineType, defineField } from 'sanity'
import { LanguageSelector } from '@/sanity/presentation/LanguageSelector'

export default defineType({
  name: 'brandsSection',
  title: 'Brands Section',
  type: 'object',
  components: {
    input: LanguageSelector,
  },
  fields: [
    defineField({
      name: 'sectionHeader',
      title: 'Section Header',
      type: 'sectionHeader',
      description: 'Eyebrow, heading, and description for the brands section.',
    }),
    defineField({
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [{ type: 'brandCard' }],
      description: 'List of brand cards.',
    }),
  ],
  preview: {
    select: {
      heading: 'sectionHeader.heading.en',
      cards: 'cards',
    },
    prepare({ heading, cards }) {
      return {
        title: heading || 'Brands Section',
        subtitle: `${cards?.length || 0} card${cards?.length === 1 ? '' : 's'}`,
      }
    },
  },
})
