import {z} from 'zod'

export const homeZ = z.object({
  title: z.string().nullable(),
  siteTitle: z.string().nullable(),
  logo: z.string().nullable(),
  socialLinks: z
    .array(z.object({url: z.string().nullable(), icon: z.string().nullable()}))
    .optional(),
})

export const heroZ = z.object({
  image: z.string().nullable(),
})

export type HomeDocument = z.infer<typeof homeZ>
