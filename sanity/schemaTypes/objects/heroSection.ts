import { defineType, defineField } from 'sanity'
import { LanguageSelector } from '@/sanity/presentation/LanguageSelector'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  components: {
    input: LanguageSelector,
  },
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'localizedString',
      description: 'Short text shown above the hero title.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'Main hero headline.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'localizedText',
      description: 'Supporting paragraph below the hero title.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Hero background image.',
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
      subtitle: 'eyebrow.en',
    },
    prepare({ title, subtitle }) {
      return {
        title: title || 'Hero Section',
        subtitle: subtitle || '',
      }
    },
  },
})
