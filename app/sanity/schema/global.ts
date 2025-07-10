import {defineType} from 'sanity'

export default defineType({
  name: 'global',
  title: 'Global',
  type: 'document',
  fields: [
    {
      name: 'siteTitle',
      type: 'string',
    },
    {
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'footerLogo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'socialLinks',
      type: 'array',
      of: [{type: 'social'}],
    },
  ],
})
