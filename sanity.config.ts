import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {presentationTool} from 'sanity/presentation'
import {structureTool} from 'sanity/structure'
import {dataset, projectId} from '~/sanity/projectDetails'
import schema from '~/sanity/schema'
import {resolve} from '~/sanity/presentation/resolve'
import {structure} from '~/sanity/structure'
import {STUDIO_BASEPATH} from '~/sanity/constants'

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
          enable: '/resource/preview',
        },
      },
    }),
    visionTool(),
  ],
  basePath: STUDIO_BASEPATH,
  useCdn: false,
  schema: {types: schema},
})
