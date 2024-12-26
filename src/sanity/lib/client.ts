import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!, // Access directly from .env.local
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,     // Ensure these variables are defined
  apiVersion: '2023-01-01',                             // Use the required API version
  useCdn: true,                                         // Set to false for fresh data in real-time
});




// import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'

// export const client = createClient({
//   projectId,
//   dataset,
//   apiVersion,
//   useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
// })



// import sanityClient from '@sanity/client';

// export const client = sanityClient({
//   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
//   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
//   apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
//   token: process.env.NEXT_PUBLIC_SANITY_TOKEN,   Optional, if using authentication
//   useCdn: true,   Use the CDN for faster response
// });
