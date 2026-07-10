'use client'

/**
 * This configuration is used to for the Sanity Studio that's mounted on the `/app/studio/[[...tool]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schemaTypes'
import {structure} from './sanity/structure'
import {resolve} from './sanity/presentation/resolve'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,
  brand: {
    title: 'Bike Tbk',
  },
  plugins: [
    structureTool({structure}),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    // Presentation Tool for live preview and visual editing
    presentationTool({
      resolve,
      previewUrl: {
        origin:
          process.env.NEXT_PUBLIC_VERCEL_ENV === 'production'
            ? process.env.NEXT_PUBLIC_VERCEL_URL
            : 'http://localhost:3000',
        previewMode: {
          enable: '/api/draft',
        },
      },
    }),
  ],
})
