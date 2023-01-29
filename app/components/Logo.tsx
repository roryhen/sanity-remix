import {Link} from '@remix-run/react'
import {useRouteData} from 'remix-utils'

import type {HomeDocument} from '~/types/home'

export default function Logo() {
  const {home} = useRouteData(`root`) as {home: HomeDocument}

  return (
    <p className="text-black text-lg font-black tracking-tighter lg:text-2xl">
      <Link to="/">
        {home.logo ? <img src={home.logo} alt={home.siteTitle ?? 'Sunnyside'} /> : home.siteTitle}
      </Link>
    </p>
  )
}
