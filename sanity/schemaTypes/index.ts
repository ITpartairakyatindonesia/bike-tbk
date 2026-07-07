import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import navigation from './navigation'
import hero from './hero'
import button from './objects/button'
import link from './objects/link'
import seo from './objects/seo'
import imageBlock from './objects/imageBlock'
import sectionHeader from './objects/sectionHeader'
import socialLink from './objects/socialLink'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    siteSettings,
    navigation,
    hero,
    button,
    link,
    seo,
    imageBlock,
    sectionHeader,
    socialLink,
  ],
}
