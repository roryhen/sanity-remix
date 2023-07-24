import type {LinksFunction, V2_MetaFunction} from '@remix-run/node'
import {ClientOnly} from 'remix-utils'
import {Studio} from 'sanity'

import styles from '~/styles/studio.css'
import {config} from '~/sanity/sanity.config'

export const meta: V2_MetaFunction = () => [{title: 'Sanity Studio'}, {robots: 'noindex'}]

export const links: LinksFunction = () => [{rel: 'stylesheet', href: styles}]

export default function StudioPage() {
  return (
    <ClientOnly>
      {() => (
        <Studio
          config={config}
          // To enable guests view-only access to your Studio,
          // uncomment this line!
          // unstable_noAuthBoundary
        />
      )}
    </ClientOnly>
  )
}
