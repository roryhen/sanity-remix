import type {LinksFunction, LoaderArgs, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useLoaderData} from '@remix-run/react'
import groq from 'groq'
import Layout from '~/components/Layout'
import Title from '~/components/Title'
import {getClient} from '~/sanity/client'
import styles from '~/styles/app.css'
import {useRouteData} from 'remix-utils'
import type {HomeDocument} from '~/types/home'
import {heroZ} from '~/types/home'
import {getSession} from '~/sessions'

export const links: LinksFunction = () => {
  return [{rel: 'stylesheet', href: styles}]
}

export const meta: MetaFunction = (data) => {
  const home = data.parentsData.root.home as HomeDocument

  return {
    title: [home.title, home.siteTitle].filter(Boolean).join(' | '),
  }
}

export const loader = async ({params, request}: LoaderArgs) => {
  const session = await getSession(request.headers.get('Cookie'))
  const token = session.get('token')
  const preview = Boolean(token)

  const query = groq`*[_id == "home"][0]{
    "image": hero.asset->url
  }`

  const hero = await getClient(preview)
    .fetch(query)
    .then((res) => (res ? heroZ.parse(res) : null))

  return json({hero})
}

export default function Index() {
  const {hero} = useLoaderData<typeof loader>()
  const {home} = useRouteData(`root`) as {home: HomeDocument}

  return (
    <Layout>
      <div className="grid grid-cols-1 gap-6 md:gap-12">
        {home.title ? <Title>{home.title}</Title> : null}
        {hero?.image && <img src={hero.image} alt="Close up of orange slice" />}
      </div>
    </Layout>
  )
}
