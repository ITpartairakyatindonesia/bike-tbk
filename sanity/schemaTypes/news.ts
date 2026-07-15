import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'news',
  title: 'News',
  type: 'document',
  description: 'News articles for the website.',
  orderings: [
    {
      title: 'Published Date (Newest First)',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
    {
      title: 'Published Date (Oldest First)',
      name: 'publishedAtAsc',
      by: [{ field: 'publishedAt', direction: 'asc' }],
    },
    {
      title: 'Title (A-Z)',
      name: 'titleAsc',
      by: [{ field: 'title.en', direction: 'asc' }],
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'localizedString',
      description: 'The headline of the news article.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly identifier for the article.',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'localizedText',
      description: 'Short summary shown in news listings.',
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      description: 'Main image for the article.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'News category (e.g. Announcement, Public Expose, Press Release).',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      description: 'Publication date and time.',
      initialValue: () => new Date().toISOString(),
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Mark as featured to highlight on the home page.',
      initialValue: false,
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
      description: 'Search engine optimization settings for the article.',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'array',
      description: 'Main article content.',
      of: [{ type: 'block' }],
    }),
  ],
  preview: {
    select: {
      title: 'title.en',
      titleId: 'title.id',
      titleZh: 'title.zh',
      category: 'category',
      publishedAt: 'publishedAt',
      featured: 'featured',
      media: 'featuredImage',
    },
    prepare({ title, titleId, titleZh, category, publishedAt, featured, media }) {
      const displayTitle = title || titleId || titleZh || 'Untitled News'
      const date = publishedAt
        ? new Date(publishedAt).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })
        : 'Unscheduled'
      const badge = featured ? ' ★ Featured' : ''
      return {
        title: displayTitle,
        subtitle: `${date}${category ? ` · ${category}` : ''}${badge}`,
        media,
      }
    },
  },
})
