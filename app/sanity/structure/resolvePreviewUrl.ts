import type {SanityDocument, Slug} from 'sanity'

export type SanityDocumentWithSlug = SanityDocument & {slug: Slug}

export async function resolvePreviewUrl(doc: SanityDocumentWithSlug) {
  // Studio is a client-side only app so window should be available
  if (typeof window === 'undefined') {
    return ''
  }

  const previewUrl = new URL('/resource/preview', window.origin)

  if (!doc?.slug?.current) {
    return previewUrl.toString()
  }

  previewUrl.searchParams.set('slug', doc.slug.current)

  return previewUrl.toString()
}
