import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigation',
  type: 'document',
  description: 'Singleton document for site-wide navigation. Only one navigation document should exist, managed via the Navigation item in the sidebar.',
  fields: [
    defineField({
      name: 'mainNavigation',
      title: 'Main Navigation',
      type: 'array',
      of: [{ type: 'link' }],
      description: 'Links shown in the site header.',
    }),
    defineField({
      name: 'footerCompanyLinks',
      title: 'Footer Company Links',
      type: 'array',
      of: [{ type: 'link' }],
    }),
    defineField({
      name: 'footerResourceLinks',
      title: 'Footer Resource Links',
      type: 'array',
      of: [{ type: 'link' }],
    }),
    defineField({
      name: 'footerLegalLinks',
      title: 'Footer Legal Links',
      type: 'array',
      of: [{ type: 'link' }],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Navigation',
      }
    },
  },
})
