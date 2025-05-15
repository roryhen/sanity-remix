import {Studio, type Config} from 'sanity'
import {config} from '~/sanity/sanity.config'
import type {Route} from './+types/studio'

export const loader = async () => {
  return {config}
}

export default function StudioRoute({loaderData}: Route.ComponentProps) {
  return <Studio config={loaderData.config as Config} />
}
