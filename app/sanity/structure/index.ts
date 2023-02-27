import type {DefaultDocumentNodeResolver, StructureResolver} from 'sanity/desk'
import Iframe from 'sanity-plugin-iframe-pane'
import {Users, Home, ConciergeBell, FlagTriangleRight, Globe} from 'lucide-react'

import {projectDetails} from '~/sanity/projectDetails'
import type {SanityDocumentWithSlug} from '~/sanity/structure/resolvePreviewUrl'
import {resolvePreviewUrl} from '~/sanity/structure/resolvePreviewUrl'

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

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType, getClient}) => {
  const {apiVersion} = projectDetails()
  const client = getClient({apiVersion})

  switch (schemaType) {
    case `record`:
      return S.document().views([
        S.view.form(),
        S.view
          .component(Iframe)
          .options({
            url: (doc: SanityDocumentWithSlug) => resolvePreviewUrl(doc, client),
            reload: {button: true},
          })
          .title('Preview'),
      ])

    default:
      return S.document().views([S.view.form()])
  }
}
