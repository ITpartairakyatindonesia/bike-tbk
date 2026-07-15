import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'productCard',
  title: 'Product Card',
  type: 'object',
  fields: [
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Product image.',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localizedString',
      description: 'Product name in English, Indonesian, and Chinese.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Product description.',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
      description: 'Optional product link.',
    }),
  ],
  preview: {
    select: {
      name: 'name.en',
      media: 'image',
    },
    prepare({ name, media }) {
      return {
        title: name || 'Untitled Product',
        media,
      }
    },
  },
})
