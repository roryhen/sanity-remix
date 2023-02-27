import {Link, useRouteLoaderData} from '@remix-run/react'
import {urlFor} from '~/lib/imageBuilder'
import type {GlobalDocument} from '~/types/global'

export default function Logo() {
  const {global} = useRouteLoaderData('root') as {global: GlobalDocument}

  return (
    <p className="text-xl font-bold">
      <Link to="/">
        {global.logoImage ? (
          <img
            className=""
            src={urlFor(global.logoImage).url()}
            alt={global.siteTitle ?? 'Sunnyside'}
            title={global.siteTitle ?? 'Sunnyside'}
          />
        ) : (
          global.siteTitle
        )}
      </Link>
    </p>
  )
}
