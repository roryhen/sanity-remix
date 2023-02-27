import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: 'footerLogo',
      type: 'image',
    }),
    defineField({
      name: 'socialLinks',
      type: 'array',
      of: [{type: 'social'}],
    }),
  ],
})
