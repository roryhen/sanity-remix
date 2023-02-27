import groq from 'groq'
import {getClient} from '~/sanity/client'
import {globalZ} from '~/types/global'

export const globalQuery = groq`*[_type == "global"][0]{
  siteTitle,
  "logo": logo.asset._ref,
  "footerLogo": footerLogo.asset._ref,
  socialLinks[]{
    url,
    icon,
  }
}`

export async function getGlobal(preview: boolean = false) {
  const res = await getClient(preview).fetch(globalQuery)
  return res ? globalZ.partial().parse(res) : null
}
