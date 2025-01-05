
export const post = {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'heading',
        title: 'Blog Heading',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Blog Image',
        type: 'image',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title', 
          maxLength: 96,  
        },
      },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'author' }], 
      },
      {
        name: 'description',
        title: 'Blog Description',
        type: 'string',
      },
      
      {
        name: 'additionalImages',
        title: 'Additional Images',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'image',
                title: 'Image',
                type: 'image',
              },
              {
                name: 'description',
                title: 'Description',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  };
  