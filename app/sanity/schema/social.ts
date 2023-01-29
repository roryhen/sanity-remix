import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: 'url',
      type: 'url',
    }),
    defineField({
      name: 'icon',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'Twitter', value: 'twitter'},
          {title: 'Pinterest', value: 'pinterest'},
        ],
      },
    }),
  ],
})
