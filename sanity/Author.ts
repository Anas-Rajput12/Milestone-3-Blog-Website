
export const Author = {
    name: 'author',
    type: 'document',
    title: 'Author',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'bio',
            title: 'Biography',
            type: 'text',
        },
        {
            name: 'avatar',
            title: 'Avatar',
            type: 'image',
        },
    ],
};
