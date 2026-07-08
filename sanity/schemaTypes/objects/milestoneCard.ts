import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'milestoneCard',
  title: 'Milestone Card',
  type: 'object',
  fields: [
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'The year this milestone represents.',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'Short milestone title in English and Indonesian.',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'localizedText',
      description: 'Detailed milestone description.',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional milestone image.',
    }),
  ],
  preview: {
    select: {
      year: 'year',
      title: 'title.en',
      media: 'image',
    },
    prepare({ year, title, media }) {
      return {
        title: `${year || ''} ${title || 'Untitled Milestone'}`.trim(),
        subtitle: title ? 'Milestone' : '',
        media,
      }
    },
  },
})
