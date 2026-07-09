import type {StructureResolver} from 'sanity/structure'

const SINGLETONS = ['siteSettings', 'navigation', 'homePage', 'aboutPage']

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      S.listItem()
        .title('Navigation')
        .icon(() => '🔗')
        .child(
          S.document()
            .schemaType('navigation')
            .documentId('navigation')
            .title('Navigation')
        ),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .icon(() => '🏠')
        .child(
          S.document()
            .schemaType('homePage')
            .documentId('homePage')
            .title('Home Page')
        ),
      S.listItem()
        .title('About Page')
        .icon(() => 'ℹ️')
        .child(
          S.document()
            .schemaType('aboutPage')
            .documentId('aboutPage')
            .title('About Page')
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) =>
        !SINGLETONS.includes(item.getId() || '')
      ),
    ])
