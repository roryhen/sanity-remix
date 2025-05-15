import groq from 'groq'
import {client} from '~/sanity/client'
import {testimonialZ} from '~/types/testimonial'

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  name, 
  title,
  description,
  "image": avatar.asset._ref,
}`

export async function getTestimonials(preview: boolean = false) {
  const res = await client.fetch(testimonialsQuery)
  return res ? testimonialZ.partial().array().parse(res) : null
}
