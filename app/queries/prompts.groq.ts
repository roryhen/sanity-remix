import groq from 'groq'

export const promptsQuery = groq`*[_id == "prompts"]{
  title,
  description,
  image: image.asset._ref,
}`
