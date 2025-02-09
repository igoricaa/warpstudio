import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Us')
        .child(S.document().schemaType('aboutUs').documentId('aboutUs')),
      S.listItem()
        .title('Services')
        .child(S.document().schemaType('services').documentId('services')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['aboutUs', 'services'].includes(listItem.getId() || '')
      ),
    ]);
