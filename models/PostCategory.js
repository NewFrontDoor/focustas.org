const keystone = require('keystone');
const transform = require('model-transform');

const PostCategory = new keystone.List('PostCategory', {
  autokey: { from: 'name', path: 'key', unique: true },
  sortable: true,
});

PostCategory.add({
  name: { type: String, required: true },
});

PostCategory.relationship({ ref: 'Post', refPath: 'categories' });

transform.toJSON(PostCategory);
PostCategory.register();
