import groq from 'groq'
import {client} from '~/sanity/client'
import {promptZ} from '~/types/prompt'

export const promptsQuery = groq`*[_type == "prompt"]{
  title,
  description,
  "image": image.asset._ref,
}`

export async function getPrompts(preview: boolean = false) {
  const res = await client.fetch(promptsQuery)
  return res ? promptZ.partial().array().parse(res) : null
}
