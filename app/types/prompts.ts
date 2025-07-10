import groq from 'groq'
import {z} from 'zod'
import {imageZ} from './common'

export const promptZ = z.object({
  image: imageZ,
  title: z.string().nullable(),
  slug: z.string().nullable(),
  description: z.string().nullable(),
})

export type PromptDocument = z.infer<typeof promptZ>

export const promptsQuery = groq`*[_type == "prompt"]{
  title,
  description,
  image
}`
