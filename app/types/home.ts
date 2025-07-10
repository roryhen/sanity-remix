import groq from 'groq'
import {z} from 'zod'
import {imageZ} from './common'

export const homeZ = z.object({
  title: z.string().nullable(),
  hero: imageZ,
  gallery: z.array(imageZ).nullable(),
})

export type HomeDocument = z.infer<typeof homeZ>

export const homeQuery = groq`*[_type == "home"][0]{
  title,
  hero,
  gallery
}`
