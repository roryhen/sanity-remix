import {ConciergeBell, FlagTriangleRight, Globe, Home, Users} from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .id('root')
    .title('Content')
    .items([
      // Singleton, home page curation
      S.documentListItem().schemaType('global').icon(Globe).id('global').title('Global'),
      S.documentListItem().schemaType('home').icon(Home).id('home').title('Home'),
      S.divider(),
      // Document lists
      S.documentTypeListItem('prompt').title('Prompts').icon(FlagTriangleRight),
      S.documentTypeListItem('service').title('Services').icon(ConciergeBell),
      S.documentTypeListItem('testimonial').title('Testimonials').icon(Users),
    ])
