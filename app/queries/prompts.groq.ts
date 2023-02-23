import groq from 'groq'
import {getClient} from '~/sanity/client'
import {promptZ} from '~/types/prompt'

export const promptsQuery = groq`*[_type == "prompt"]{
  title,
  description,
  "image": image.asset._ref,
}`

export async function getPrompts(preview: boolean = false) {
  const res = await getClient(preview).fetch(promptsQuery)
  return res ? promptZ.partial().array().parse(res) : null
}
