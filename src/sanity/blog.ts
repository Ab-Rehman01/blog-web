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
          {
            name: 'description',
            type: 'string',
            title: 'Description',
          },
        ],
      },
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
  