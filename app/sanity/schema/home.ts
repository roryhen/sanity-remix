import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'home',
  title: 'Home',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'hero',
      type: 'image',
    }),
    defineField({
      name: 'gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
})
