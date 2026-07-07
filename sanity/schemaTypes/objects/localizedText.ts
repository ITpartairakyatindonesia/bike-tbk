import {defineType, defineField} from 'sanity'
import { LanguageAwareTextInput } from '@/sanity/presentation/LanguageAwareTextInput'

export default defineType({
  name: 'localizedText',
  title: 'Localized Text',
  type: 'object',
  components: {
    input: LanguageAwareTextInput,
  },
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'Indonesian',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
})
