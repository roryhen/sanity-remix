import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    defineField({
      name: 'avatar',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      description: 'Profession or role',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
