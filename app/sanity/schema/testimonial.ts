import {defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'avatar',
      type: 'image',
      options: {hotspot: true},
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'title',
      type: 'string',
      description: 'Profession or role',
    },
    {
      name: 'description',
      type: 'text',
    },
  ],
})
