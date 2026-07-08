import {defineType, defineField} from 'sanity'
import { LanguageAwareStringInput } from '@/sanity/presentation/LanguageAwareStringInput'

export default defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'object',
  components: {
    input: LanguageAwareStringInput,
  },
  fields: [
    defineField({
      name: 'en',
      title: 'English',
      type: 'string',
    }),
    defineField({
      name: 'id',
      title: 'Indonesian',
      type: 'string',
    }),
  ],
})
