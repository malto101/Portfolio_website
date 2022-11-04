export default {
    name: 'testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',

        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',

        },
        {
            name: 'imageurl',
            title: 'ImgURL',
            type: 'image',
            Options: {
                hotspot: true
            },

        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string',

        },
    ],
}