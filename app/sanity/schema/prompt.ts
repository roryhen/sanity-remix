import {defineType} from 'sanity'

export default defineType({
  name: 'prompt',
  title: 'Prompt',
  type: 'document',
  fields: [
    {
      name: 'image',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'title',
      type: 'string',
      description: 'The goal',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    },
    {
      name: 'description',
      type: 'text',
      description: 'The how',
    },
  ],
})
