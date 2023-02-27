import {z} from 'zod'

export const homeZ = z.object({
  title: z.string().nullable(),
  heroImage: z.string().nullable(),
  gallery: z.array(z.object({image: z.string().nullable()})).nullable(),
})

export type HomeDocument = z.infer<typeof homeZ>
