import groq from 'groq'
import {getClient} from '~/sanity/client'
import {homeZ} from '~/types/home'

export const homeQuery = groq`*[_type == "home"][0]{
  title,
  siteTitle,
  "logoImage": logo.asset._ref,
  "heroImage": hero.asset._ref,
  socialLinks[]{
    url,
    icon,
  }
}`

export async function getHome(preview: boolean = false) {
  const res = await getClient(preview).fetch(homeQuery)
  return res ? homeZ.partial().parse(res) : null
}
