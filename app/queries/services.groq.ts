import groq from 'groq'
import {client} from '~/sanity/client'
import {serviceZ} from '~/types/service'

export const servicesQuery = groq`*[_type == "service"]{
  title,
  description,
  "image": image.asset._ref,
}`

export async function getServices(preview: boolean = false) {
  const res = await client.fetch(servicesQuery)
  return res ? serviceZ.partial().array().parse(res) : null
}
