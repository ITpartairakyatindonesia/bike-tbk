import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'sustainabilityCard',
  title: 'Sustainability Card',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name (e.g. ShieldCheck, Leaf, Users, TrendingUp).',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'Card title in English and Indonesian.',
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      icon: 'icon',
    },
    prepare({ title, icon }) {
      return {
        title: title || 'Sustainability Card',
        subtitle: icon || '',
      }
    },
  },
})
