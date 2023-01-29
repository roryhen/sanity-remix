import type {LinksFunction, LoaderArgs, MetaFunction} from '@remix-run/node'
import {json} from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useLocation,
} from '@remix-run/react'
import groq from 'groq'

import {getClient} from '~/sanity/client'
import {homeZ} from '~/types/home'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  viewport: 'width=device-width,initial-scale=1',
})

export const links: LinksFunction = () => {
  return [
    {rel: 'preconnect', href: 'https://cdn.sanity.io'},
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
      crossOrigin: 'anonymous',
    },
    {
      href: 'https://fonts.googleapis.com/css2?family=Barlow:wght@600&family=Fraunces:opsz,wght@9..144,700;9..144,900&display=swap',
      rel: 'stylesheet',
    },
  ]
}

export const loader = async ({request}: LoaderArgs) => {
  // Sanity content throughout the site
  const query = groq`*[_id == "home"][0]{
    title,
    siteTitle,
    "logo": logo.asset->url,
    socialLinks[]{
      url,
      icon,
    }
  }`
  const home = await getClient()
    .fetch(query)
    .then((res) => (res ? homeZ.parse(res) : null))

  return json({
    home,
    ENV: {
      SANITY_PUBLIC_PROJECT_ID: process.env.SANITY_PUBLIC_PROJECT_ID,
      SANITY_PUBLIC_DATASET: process.env.SANITY_PUBLIC_DATASET,
      SANITY_PUBLIC_API_VERSION: process.env.SANITY_PUBLIC_API_VERSION,
    },
  })
}

export default function App() {
  const {ENV} = useLoaderData<typeof loader>()

  const {pathname} = useLocation()
  const isStudioRoute = pathname.startsWith('/studio')

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        {isStudioRoute && typeof document === 'undefined' ? '__STYLES__' : null}
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
