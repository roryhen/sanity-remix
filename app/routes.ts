import {type RouteConfig, index, route} from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  route('resource/preview/enable', 'routes/resource/preview/enable.ts'),
  route('resource/preview/disable', 'routes/resource/preview/disable.ts'),
  route('studio/*', 'routes/studio.tsx'),
  route('*', 'routes/404.tsx'),
] satisfies RouteConfig
