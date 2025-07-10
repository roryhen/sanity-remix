import groq from 'groq'
import {z} from 'zod'
import {imageZ} from './common'

export const serviceZ = z.object({
  image: imageZ,
  title: z.string().nullable(),
  slug: z.string().nullable(),
  description: z.string().nullable(),
})

export type ServiceDocument = z.infer<typeof serviceZ>

export const servicesQuery = groq`*[_type == "service"]{
  title,
  description,
  image
}`
