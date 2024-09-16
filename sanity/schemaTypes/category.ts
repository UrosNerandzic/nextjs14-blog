export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Enter category',
    },
    {
      name: 'categorySlug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
  ],
}
