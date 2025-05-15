import imageUrlBuilder from '@sanity/image-url'
import {dataset, projectId} from '~/sanity/projectDetails'

const builder = imageUrlBuilder({dataset, projectId})

export function urlFor(source: string) {
  return builder.image(source)
}
