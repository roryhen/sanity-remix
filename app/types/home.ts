import {z} from 'zod'

export const homeZ = z.object({
  title: z.string().nullable(),
  siteTitle: z.string().nullable(),
  logoImage: z.string(),
  heroImage: z.string(),
  socialLinks: z
    .array(z.object({url: z.string().nullable(), icon: z.string().nullable()}))
    .optional(),
})

export type HomeDocument = z.infer<typeof homeZ>
