import {Studio, type Config} from 'sanity'
import {config} from '~/sanity/sanity.config'

export default function StudioRoute() {
  return (
    <div className="h-screen max-h-dvh overflow-auto overscroll-none antialiased">
      <Studio config={config as Config} />
    </div>
  )
}
