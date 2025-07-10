import groq from 'groq'
import {z} from 'zod'
import {imageZ} from './common'

export const testimonialZ = z.object({
  image: imageZ,
  name: z.string().nullable(),
  slug: z.string().nullable(),
  title: z.string().nullable(),
  description: z.string().nullable(),
})

export type TestimonialDocument = z.infer<typeof testimonialZ>

export const testimonialsQuery = groq`*[_type == "testimonial"]{
  name, 
  title,
  description,
  "image": avatar
}`
