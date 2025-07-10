import {VisualEditing} from '@sanity/visual-editing/react-router'
import {lazy, Suspense} from 'react'
import {Outlet} from 'react-router'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import {loadQueryOptions} from '~/sanity/loadQueryOptions'
import type {Route} from './+types/layout'
import {loadQuery, useQuery} from '@sanity/react-loader'
import {GlobalDocument, globalQuery} from '~/types/global'

const SanityLiveMode = lazy(() => import('~/components/SanityLiveMode').then((module) => module))
const ExitPreview = lazy(() => import('~/components/ExitPreview').then((module) => module))

export const loader = async ({request}: Route.LoaderArgs) => {
  const params = {}
  const {preview, options} = await loadQueryOptions(request.headers)
  const initial = await loadQuery<GlobalDocument>(globalQuery, params, options)
  return {
    initial,
    params,
    sanity: {preview},
  }
}

export default function Layout({loaderData}: Route.ComponentProps) {
  const {initial, params, sanity} = loaderData
  const {data: global} = useQuery<GlobalDocument>(globalQuery, params, {initial})

  return (
    <>
      <Header global={global} />
      <Outlet />
      <Footer global={global} />
      {sanity.preview ? (
        <Suspense>
          <SanityLiveMode />
          <ExitPreview />
          <VisualEditing />
        </Suspense>
      ) : null}
    </>
  )
}
