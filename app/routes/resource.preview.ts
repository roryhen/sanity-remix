import type {ActionFunction, LoaderArgs} from '@remix-run/node'
import {json, redirect} from '@remix-run/node'

import {commitSession, destroySession, getSession} from '~/sessions'

// A `POST` request to this route will exit preview mode
export const action: ActionFunction = async ({request}) => {
  if (request.method !== 'POST') {
    return json({message: 'Method not allowed'}, 405)
  }

  const session = await getSession(request.headers.get('Cookie'))

  return redirect('/', {
    headers: {
      'Set-Cookie': await destroySession(session),
    },
  })
}

// A `GET` request to this route will enter preview mode
// It will check if the "token" document in the dataset
// Is the same as the one passed in the query string
// If so, it will write the Viewer Token to the session
export const loader = async ({request}: LoaderArgs) => {
  // Write viewer token to session so that every route can authenticate by it
  const session = await getSession(request.headers.get('Cookie'))
  session.set(`token`, process.env.SANITY_READ_TOKEN)

  return redirect('/', {
    headers: {
      'Set-Cookie': await commitSession(session),
    },
  })
}
