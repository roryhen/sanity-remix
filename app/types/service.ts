import {z} from 'zod'

export const serviceZ = z.object({
  image: z.string().nullable(),
  title: z.string().nullable(),
  slug: z.string().nullable(),
  description: z.string().nullable(),
})

export type ServiceDocument = z.infer<typeof serviceZ>
