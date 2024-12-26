export default {
    title: 'Blog',
    name: 'blog',
    type: 'document',
    fields: [
      {
        title: 'Poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true, // Enables hotspot for better cropping
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
          },
          {
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          },
          // Adding more fields:
          {
            name: 'altText',
            type: 'string',
            title: 'Alt Text', // Useful for accessibility and SEO
          },
          {
            name: 'imageDescription',
            type: 'text',
            title: 'Image Description', // Provide a detailed description of the image
          },
          {
            name: 'imageCategory',
            type: 'string',
            title: 'Image Category', // Categorize the image (e.g., nature, technology)
          },
          {
            name: 'order',
            type: 'number',
            title: 'Order', // Specify the order of images if you plan to display them in a sequence
          },
          {
            name: 'isFeatured',
            type: 'boolean',
            title: 'Is Featured?', // A boolean field to mark if the image is a featured one
          }
        ],
      }
      ,
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        title: 'Subheading',
        name: 'subheading',
        type: 'string',
      },
    ],
  };
  