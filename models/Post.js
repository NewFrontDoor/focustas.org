const keystone = require('keystone');
const transform = require('model-transform');

const Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
  autokey: { path: 'slug', from: 'name', unique: true },
  track: true,
});

Post.add({
  name: { type: String, required: true },
  state: {
    type: Types.Select,
    options: 'draft, published, archived',
    default: 'draft',
    index: true,
  },
  author: { type: Types.Relationship, ref: 'User', index: true },
  publishedDate: {
    type: Types.Date,
    index: true,
    dependsOn: { state: 'published' },
  },
  content: {
    brief: { type: Types.Html, wysiwyg: true, height: 150 },
    extended: { type: Types.Html, wysiwyg: true, height: 400, collapse: true },
  },
  categories: { type: Types.Relationship, ref: 'PostCategory', many: true },
});

Post.schema
  .virtual('content.full')
  .get(() => this.content.extended || this.content.brief);

Post.defaultColumns =
  'name, state|20%, author|20%, categories|20%, publishedDate|20%';

transform.toJSON(Post);
Post.register();
