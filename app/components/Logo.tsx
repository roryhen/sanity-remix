import {Link, useRouteLoaderData} from '@remix-run/react'
import {urlFor} from '~/lib/imageBuilder'

import type {HomeDocument} from '~/types/home'

export default function Logo() {
  const {home} = useRouteLoaderData(`root`) as {home: HomeDocument}

  return (
    <p className="text-xl font-bold">
      <Link to="/">
        {home.logoImage ? (
          <img
            className=""
            src={urlFor(home.logoImage).url()}
            alt={home.siteTitle ?? 'Sunnyside'}
            title={home.siteTitle ?? 'Sunnyside'}
          />
        ) : (
          home.siteTitle
        )}
      </Link>
    </p>
  )
}
