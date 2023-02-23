import {z} from 'zod'

export const promptZ = z.object({
  image: z.string().nullable(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  description: z.string().nullable(),
})

export type PromptDocument = z.infer<typeof promptZ>
