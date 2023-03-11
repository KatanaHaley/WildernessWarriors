export default {
    name: 'post',
    title: 'Post',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'paragraph1',
            title: 'Paragraph1',
            type: 'string',
        },
        {
            name: 'header1',
            title: 'Header1',
            type: 'string',
        },
        {
            name: 'paragraph2',
            title: 'Paragraph2',
            type: 'string',
        },
        {
            name: 'header2',
            title: 'Header2',
            type: 'string',
        },
        {
            name: 'paragraph3',
            title: 'Paragraph3',
            type: 'string',
        },
        {
            name: 'callToAction',
            title: 'CallToAction',
            type: 'string',
        },
    ],
  };