import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'about-us',
  title: 'About Us',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'aboutUsText',
      title: 'About Us Text',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'text',
          title: 'Text',
          type: 'array',
          validation: (rule) => rule.min(1),
          of: [
            defineField({
              name: 'paragraph',
              title: 'Paragraph',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'logosTitle',
      title: 'Logos Title',
      type: 'string',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          name: 'logo',
          title: 'Logo',
          type: 'image',
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessiblity.',
              validation: (rule) => {
                return rule.custom((alt, context) => {
                  if ((context.document?.picture as any)?.asset?._ref && !alt) {
                    return 'Required';
                  }
                  return true;
                });
              },
            },
          ],
        },
      ],
    }),
  ],
});
