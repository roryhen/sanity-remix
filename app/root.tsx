import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from 'react-router'
import styles from '~/app.css?url'
import type {Route} from './+types/root'
import {projectDetails} from './sanity/projectDetails'

export const links: Route.LinksFunction = () => {
  return [
    {rel: 'stylesheet', href: styles},
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

export const loader = async ({}: Route.LoaderArgs) => {
  const {projectId, dataset, apiVersion} = projectDetails()

  return {
    ENV: {
      VITE_SANITY_PROJECT_ID: projectId,
      VITE_SANITY_DATASET: dataset,
      VITE_SANITY_API_VERSION: apiVersion,
    },
  }
}

export function Layout({children}: {children: React.ReactNode}) {
  const {ENV} = useLoaderData<typeof loader>()

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="bg-very-light-yellow text-base leading-relaxed">
        {children}
        <ScrollRestoration />
        <Scripts />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.ENV = ${JSON.stringify(ENV)}`,
          }}
        />
      </body>
    </html>
  )
}

export default function App({loaderData}: Route.ComponentProps) {
  return <Outlet context={loaderData} />
}

export function ErrorBoundary({error}: Route.ErrorBoundaryProps) {
  let message = 'Oops!'
  let details = 'An unexpected error occurred.'
  let stack: string | undefined

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? '404' : 'Error'
    details =
      error.status === 404 ? 'The requested page could not be found.' : error.statusText || details
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message
    stack = error.stack
  }

  return (
    <main className="container mx-auto p-4 pt-16">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full overflow-x-auto p-4">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  )
}
