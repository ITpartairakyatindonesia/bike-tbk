import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'brandCard',
  title: 'Brand Card',
  type: 'object',
  fields: [
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Brand logo.',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'localizedString',
      description: 'Brand name in English, Indonesian, and Chinese.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Brand description.',
    }),
    defineField({
      name: 'button',
      title: 'Button',
      type: 'button',
      description: 'Button to visit brand website.',
    }),
    defineField({
      name: 'products',
      title: 'Products',
      type: 'array',
      description: 'Optional products associated with this brand.',
      of: [{ type: 'productCard' }],
    }),
  ],
  preview: {
    select: {
      name: 'name.en',
      media: 'logo',
    },
    prepare({ name, media }) {
      return {
        title: name || 'Untitled Brand',
        media,
      }
    },
  },
})
