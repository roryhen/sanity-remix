import {z} from 'zod'

export const globalZ = z.object({
  siteTitle: z.string().nullable(),
  logo: z.string().nullable(),
  footerLogo: z.string().nullable(),
  socialLinks: z.array(z.object({url: z.string().nullable(), icon: z.string().nullable()})),
})

export type GlobalDocument = z.infer<typeof globalZ>
