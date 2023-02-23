import {z} from 'zod'

export const testimonialZ = z.object({
  avatar: z.string().nullable(),
  name: z.string().nullable(),
  slug: z.string().nullable(),
  title: z.string().nullable(),
  description: z.string().nullable(),
})

export type TestimonialDocument = z.infer<typeof testimonialZ>
