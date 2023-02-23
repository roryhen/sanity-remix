import type {LinksFunction, LoaderArgs, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useLoaderData, useRouteLoaderData} from '@remix-run/react'
import Hero from '~/components/Hero'
import ImageWithText from '~/components/ImageWithText'
import Layout from '~/components/Layout'
import {urlFor} from '~/lib/imageBuilder'
import {getPrompts} from '~/queries/prompts.groq'
import {getServices} from '~/queries/services.groq'
import {getTestimonials} from '~/queries/testimonials.groq'
import {getSession} from '~/sessions'
import styles from '~/styles/app.css'
import type {HomeDocument} from '~/types/home'

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = (data) => {
  const home = data.parentsData.root.home as HomeDocument

  return {
    title: [home.title, home.siteTitle].filter(Boolean).join(' | '),
  }
}

function getPromiseValue<T>(result: PromiseSettledResult<T>) {
  return result.status === 'fulfilled' ? result.value : null
}

export const loader = async ({params, request}: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const token = session.get('token')
  const preview = Boolean(token)

  const [prompts, services, testimonials] = await Promise.allSettled([
    getPrompts(preview),
    getServices(preview),
    getTestimonials(preview),
  ])

  return json({
    preview,
    prompts: getPromiseValue(prompts),
    services: getPromiseValue(services),
    testimonials: getPromiseValue(testimonials),
  })
}

export default function Index() {
  const {home} = useRouteLoaderData(`root`) as {home: HomeDocument}
  const {prompts, services, testimonials} = useLoaderData<typeof loader>()

  return (
    <Layout>
      <Hero
        darkBG
        title={home.title}
        image={{id: home?.heroImage ?? '', alt: 'Close up of orange slice'}}
      />
      {prompts?.map((prompt, i) => (
        <ImageWithText
          heading={prompt.title}
          paragraph={prompt.description}
          imageOnRight={i % 2 === 0}
          key={i}
        >
          {prompt.image && (
            <img
              src={urlFor(prompt.image).width(1920).auto('format').url()}
              alt={prompt.title ?? ''}
            />
          )}
        </ImageWithText>
      ))}
    </Layout>
  )
}
