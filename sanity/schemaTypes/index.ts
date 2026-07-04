import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from './siteSettings'
import hero from './hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, hero],
}
