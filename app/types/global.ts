import groq from 'groq'
import {z} from 'zod'

export const globalZ = z.object({
  siteTitle: z.string().nullable(),
  logo: z.string().nullable(),
  footerLogo: z.string().nullable(),
  socialLinks: z.array(z.object({url: z.string().nullable(), icon: z.string().nullable()})),
})

export type GlobalDocument = z.infer<typeof globalZ>

export const globalQuery = groq`*[_type == "global"][0]{
  siteTitle,
  logo,
  footerLogo,
  socialLinks[]{
    url,
    icon,
  }
}`
