// Querying with "sanityFetch" will keep content automatically updated
// Before using it, import and render "<SanityLive />" in your layout, see
// https://github.com/sanity-io/next-sanity#live-content-api for more information.



import { client } from './client'; // Import the configured client

export const fetchPosts = async () => {
  const posts = await client.fetch('*[_type == "post"]'); // Sanity query for posts
  return posts;
};







// import { defineLive } from "next-sanity";
// import { client } from './client'

// export const { sanityFetch, SanityLive } = defineLive({ 
//   client: client.withConfig({ 
//     Live content is currently only available on the experimental API
//      https://www.sanity.io/docs/api-versioning
//     apiVersion: 'vX' 
//   }) 
// });
