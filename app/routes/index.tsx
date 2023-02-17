import type {LinksFunction, LoaderArgs, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {useRouteLoaderData} from '@remix-run/react'
import Layout from '~/components/Layout'
import styles from '~/styles/app.css'
import type {HomeDocument} from '~/types/home'
import Hero from '~/components/Hero'
import ImageWithText from '~/components/ImageWithText'
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

  return json({})
}

export default function Index() {
  const {home} = useRouteLoaderData(`root`) as {home: HomeDocument}

  return (
    <Layout>
      <Hero
        darkBG
        title={home.title}
        image={{id: home?.heroImage ?? '', alt: 'Close up of orange slice'}}
      />
      <ImageWithText heading="" paragraph="">
        <img src="" alt="" />
      </ImageWithText>
    </Layout>
  )
}
