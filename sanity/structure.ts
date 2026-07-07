import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(() => '⚙️')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .title('Site Settings')
        ),
      S.listItem()
        .title('Navigation')
        .icon(() => '🔗')
        .child(
          S.editor()
            .id('navigation')
            .schemaType('navigation')
            .documentId('navigation')
            .title('Navigation')
        ),
      S.divider(),
      S.listItem()
        .title('Pages')
        .icon(() => '📄')
        .child(
          S.list()
            .title('Pages')
            .items([])
        ),
      S.divider(),
      S.listItem()
        .title('Collections')
        .icon(() => '🗂️')
        .child(
          S.list()
            .title('Collections')
            .items([])
        ),
      S.divider(),
      ...S.documentTypeListItems().filter((item) =>
        !['siteSettings', 'navigation'].includes(item.getId() || '')
      ),
    ])
