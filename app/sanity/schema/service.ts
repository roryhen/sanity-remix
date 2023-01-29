import {ConciergeBell} from 'lucide-react'
import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: ConciergeBell,
  fields: [
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
  ],
})
