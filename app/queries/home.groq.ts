import groq from 'groq'
import {getClient} from '~/sanity/client'
import {homeZ} from '~/types/home'

export const homeQuery = groq`*[_type == "home"][0]{
  title,
  "heroImage": hero.asset._ref,
  gallery[]{
    "image": asset._ref,
  }
}`

export async function getHome(preview: boolean = false) {
  const res = await getClient(preview).fetch(homeQuery)
  return res ? homeZ.partial().parse(res) : null
}
