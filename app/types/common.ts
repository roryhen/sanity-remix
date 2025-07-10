import {z} from 'zod'

export const imageZ = z.object({
  _type: z.literal('image'),
  asset: z.object({_ref: z.string(), _type: z.literal('reference')}),
  alt: z.string().nullable().optional(),
})

export type SanityImage = z.infer<typeof imageZ>
