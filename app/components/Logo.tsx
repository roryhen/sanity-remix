import {Link, useRouteLoaderData} from 'react-router'
import {urlFor} from '~/lib/imageBuilder'
import type {GlobalDocument} from '~/types/global'

type Props = {
  footer?: boolean
}

export default function Logo(props: Props) {
  const {global} = useRouteLoaderData('root') as {global: GlobalDocument}

  const logo = props.footer ? global.footerLogo : global.logo

  return (
    <p className="text-xl font-bold">
      <Link to="/">
        {logo ? (
          <img
            className={props.footer ? 'w-48' : undefined}
            src={urlFor(logo).url()}
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
