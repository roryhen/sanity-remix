import {useLiveMode} from '@sanity/react-loader'

import {client} from '~/sanity/client'
import {STUDIO_BASEPATH} from '~/sanity/constants'

const liveClient = client.withConfig({
  stega: {
    enabled: true,
    studioUrl: STUDIO_BASEPATH,
  },
})

export default function SanityLiveMode() {
  useLiveMode({client: liveClient})

  return null
}
