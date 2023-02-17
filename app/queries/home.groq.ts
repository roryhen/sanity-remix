import groq from 'groq'

export const homeQuery = groq`*[_id == "home"][0]{
  title,
  siteTitle,
  "logoImage": logo.asset._ref,
  "heroImage": hero.asset._ref,
  socialLinks[]{
    url,
    icon,
  }
}`
