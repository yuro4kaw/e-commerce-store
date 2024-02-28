export default {
    name: 'product',
    type: 'document',
    title: 'Product',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name of the product'
      },
      {
        name: 'images',
        type: 'array',
        title: 'Product Images',
        of: [{type: 'image'}]
      },
      {
        name: 'description',
        type: 'text',
        title: 'Desctiption of product'
      },
      {
        name: 'slug',
        type: 'slug',
        title: 'Product Slug',
        options: {
            source:'name'
        }
      },
      {
        name: 'price',
        type: 'number',
        title: 'Price'
      },
      {
        name: 'category',
        type: 'reference',
        title: 'Product Category',
        to: [
            {type: 'category'}
        ]
      },
    ]
  }