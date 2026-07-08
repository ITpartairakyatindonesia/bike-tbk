import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          { title: 'LinkedIn', value: 'linkedin' },
          { title: 'Twitter / X', value: 'twitter' },
          { title: 'Facebook', value: 'facebook' },
          { title: 'Instagram', value: 'instagram' },
          { title: 'YouTube', value: 'youtube' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'href',
      title: 'Profile URL',
      type: 'url',
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Optional screen reader label.',
    }),
  ],
  preview: {
    select: {
      platform: 'platform',
      href: 'href',
    },
    prepare({ platform, href }) {
      return {
        title: platform ? platform.charAt(0).toUpperCase() + platform.slice(1) : 'Social Link',
        subtitle: href || '',
      }
    },
  },
})
