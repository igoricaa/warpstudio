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
      S.listItem()
        .title('Photography')
        .child(
          S.document().schemaType('photography').documentId('photography')
        ),
      S.listItem()
        .title('Videos')
        .child(S.document().schemaType('videos').documentId('videos')),
      ...S.documentTypeListItems().filter(
        (listItem) =>
          !['about-us', 'services', 'photography', 'videos'].includes(
            listItem.getId() || ''
          )
      ),
    ]);
