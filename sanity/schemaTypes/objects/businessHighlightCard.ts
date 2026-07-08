import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'businessHighlightCard',
  title: 'Business Highlight Card',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Card image or icon.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'Card title.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Card description.',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
      description: 'Optional call-to-action button.',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      subtitle: 'description.en',
      media: 'image',
    },
    prepare({ title, subtitle, media }) {
      return {
        title: title || 'Business Highlight Card',
        subtitle: subtitle || '',
        media,
      }
    },
  },
})
