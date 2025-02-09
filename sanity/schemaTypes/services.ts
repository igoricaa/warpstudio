import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        defineField({
          name: 'service',
          title: 'Service',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'photoPortfolio',
      title: 'Photography Portfolio',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'Title',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: 'projects',
          title: 'Projects',
          type: 'array',
          of: [
            defineField({
              name: 'project',
              title: 'Project',
              type: 'object',
              fields: [
                defineField({
                  name: 'title',
                  title: 'Title',
                  type: 'string',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'galleryLink',
                  title: 'Gallery Link',
                  type: 'url',
                  validation: (rule) => rule.required(),
                }),
                defineField({
                  name: 'coverImage',
                  title: 'Cover Image',
                  type: 'image',
                  validation: (rule) => rule.required(),
                  fields: [
                    defineField({
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      description: 'Important for SEO and accessiblity.',
                      validation: (rule) => {
                        return rule.custom((alt, context) => {
                          if (
                            (context.document?.picture as any)?.asset?._ref &&
                            !alt
                          ) {
                            return 'Required';
                          }
                          return true;
                        });
                      },
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
});
