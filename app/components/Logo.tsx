import {Link} from 'react-router'
import {urlFor} from '~/lib/imageBuilder'
import type {GlobalDocument} from '~/types/global'

type Props = {
  footer?: boolean
  global?: GlobalDocument
}

export default function Logo({footer, global}: Props) {
  const logo = footer ? global?.footerLogo : global?.logo

  return (
    <p className="text-xl font-bold">
      <Link to="/">
        {logo ? (
          <img
            className={footer ? 'w-48' : undefined}
            src={urlFor(logo).url()}
            alt={global?.siteTitle ?? 'Sunnyside'}
            title={global?.siteTitle ?? 'Sunnyside'}
          />
        ) : (
          global?.siteTitle
        )}
      </Link>
    </p>
  )
}
