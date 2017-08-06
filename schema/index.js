const keystone = require('keystone');
const { GraphQLString } = require('graphql');
const { GQC } = require('graphql-compose');
const { composeWithMongoose } = require('graphql-compose-mongoose');

console.log(composeWithMongoose);

const UserTC = composeWithMongoose(keystone.list('User').model);
const PostTC = composeWithMongoose(keystone.list('Post').model);
const PostCategoryTC = composeWithMongoose(keystone.list('PostCategory').model);

PostTC.addFields({
  link: {
    type: GraphQLString,
    resolve: source => `/post/${source.slug}`,
    projection: { slug: true },
  },
});

GQC.rootQuery().addFields({
  hello: {
    type: GraphQLString,
    resolve: () => 'Hi! How are you?',
  },

  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userTotal: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),

  postById: PostTC.getResolver('findById'),
  postByIds: PostTC.getResolver('findByIds'),
  postOne: PostTC.getResolver('findOne'),
  postMany: PostTC.getResolver('findMany'),
  postTotal: PostTC.getResolver('count'),
  postConnection: PostTC.getResolver('connection'),

  postCategoryById: PostCategoryTC.getResolver('findById'),
  postCategoryByIds: PostCategoryTC.getResolver('findByIds'),
  postCategoryOne: PostCategoryTC.getResolver('findOne'),
  postCategoryMany: PostCategoryTC.getResolver('findMany'),
  postCategoryTotal: PostCategoryTC.getResolver('count'),
  postCategoryConnection: PostCategoryTC.getResolver('connection'),
});

const schema = GQC.buildSchema();

module.exports = schema;
