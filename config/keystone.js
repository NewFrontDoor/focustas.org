const config = require('config');
const keystone = require('keystone');

const api = {
  // API URL to be used in the client-side code
  clientUrl: config.get('API_CLIENT_URL'),
  // API URL to be used in the server-side code
  serverUrl: config.get('API_SERVER_URL')
};

const analytics = {};

const storage = new keystone.Storage({
  adapter: require('keystone-storage-adapter-s3'),
  s3: {
    key: config.get('S3_KEY'), // required; defaults to process.env.S3_KEY
    secret: config.get('S3_SECRET'), // required; defaults to process.env.S3_SECRET
    bucket: config.get('S3_BUCKET'), // required; defaults to process.env.S3_BUCKET
    region: config.get('S3_REGION'), // optional; defaults to process.env.S3_REGION, or if that's not specified, us-east-1
    path: config.get('S3_BUCKET_PATH'),
    headers: {
      'x-amz-acl': 'public-read', // add default headers; see below for details
    },
    generateFilename: keystone.Storage.originalFilename
  },
  schema: {
    bucket: true, // optional; store the bucket the file was uploaded to in your db
    etag: true, // optional; store the etag for the resource
    path: true, // optional; store the path of the file in your db
    url: true, // optional; generate & store a public URL
  },
});

const options = {
  name: 'focustas',
  brand: 'focustas',

  favicon: 'static/favicon.ico',
  less: 'static',
  static: 'static',

  updates: 'updates',
  'auto update': true,
  mongo: config.get('MONGO_URI'),

  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': config.get('COOKIE_SECRET')
};

const locals = {};

const nav = {
  people: ['users', 'staffs'],
  content: ['pages', 'venues', 'events']
};

module.exports = {
  api,
  analytics,
  options,
  locals,
  nav,
  storage
};
