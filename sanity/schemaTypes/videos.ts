import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'videos',
  title: 'Videos',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'adProjects',
      title: 'Ads',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: [{ type: 'project' }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
    defineField({
      name: 'vfxProjects',
      title: 'VFX',
      type: 'array',
      of: [
        {
          type: 'reference',
          weak: true,
          to: [{ type: 'vfxProjects' }],
          options: {
            disableNew: true,
          },
        },
      ],
    }),
  ],
});
