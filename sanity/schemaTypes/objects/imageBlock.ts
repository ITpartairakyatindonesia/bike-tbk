import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'imageBlock',
  title: 'Image',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text',
      type: 'string',
      description: 'Short description for accessibility and SEO.',
    }),
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      alt: 'alt',
      caption: 'caption',
      media: 'image',
    },
    prepare({ alt, caption, media }) {
      return {
        title: alt || caption || 'Image',
        media,
      }
    },
  },
})
