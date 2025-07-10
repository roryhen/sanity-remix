import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {dataset, projectId} from '~/sanity/projectDetails'
import schema from '~/sanity/schema'
import {resolve} from './presentation/resolve'
import {structure} from './structure'

export const config = defineConfig({
  projectId,
  dataset,
  name: 'sanity-react-router',
  title: 'Sanity React Router',
  plugins: [
    structureTool({structure}),
    presentationTool({
      resolve,
      previewUrl: {
        previewMode: {
          enable: '/resource/preview/enable',
        },
      },
    }),
    visionTool(),
  ],
  basePath: '/studio',
  useCdn: false,
  schema: {types: schema},
})
