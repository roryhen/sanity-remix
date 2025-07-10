import imageUrlBuilder from '@sanity/image-url'
import type {SanityImageSource} from '@sanity/image-url/lib/types/types'
import {dataset, projectId} from '~/sanity/projectDetails'

const builder = imageUrlBuilder({dataset, projectId})

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}
