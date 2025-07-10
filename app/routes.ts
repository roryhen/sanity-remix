import {type RouteConfig, index, layout, route} from '@react-router/dev/routes'

export default [
  layout('./routes/layout.tsx', [index('routes/home.tsx')]),
  route('resource/preview', './routes/resource/preview.ts'),
  route('studio/*', './routes/studio.tsx'),
  route('*', './routes/404.tsx'),
] satisfies RouteConfig
