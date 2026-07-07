import { defineType, defineField } from 'sanity'
import { LanguageSelector } from '@/sanity/presentation/LanguageSelector'

export default defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  components: {
    input: LanguageSelector,
  },
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'CTA heading.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'CTA supporting text.',
    }),
    defineField({
      name: 'primaryButton',
      title: 'Primary Button',
      type: 'button',
      description: 'Main call-to-action button.',
    }),
    defineField({
      name: 'secondaryButton',
      title: 'Secondary Button',
      type: 'button',
      description: 'Optional secondary action.',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
    },
    prepare({ title }) {
      return {
        title: title || 'CTA Section',
      }
    },
  },
})
