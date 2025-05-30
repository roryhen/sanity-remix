import {ConciergeBell, FlagTriangleRight, Globe, Home, Users} from 'lucide-react'
import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Singleton, home page curation
      S.listItem().title('Global').icon(Globe).child(S.editor().schemaType('global')),
      S.listItem().title('Home').icon(Home).child(S.editor().schemaType('home')),
      S.divider(),
      // Document lists
      S.documentTypeListItem('prompt').title('Prompts').icon(FlagTriangleRight),
      S.documentTypeListItem('service').title('Services').icon(ConciergeBell),
      S.documentTypeListItem('testimonial').title('Testimonials').icon(Users),
    ])
