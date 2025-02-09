import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Us')
        .child(S.document().schemaType('about-us').documentId('about-us')),
      S.listItem()
        .title('Services')
        .child(S.document().schemaType('services').documentId('services')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['about-us', 'services'].includes(listItem.getId() || '')
      ),
    ]);
