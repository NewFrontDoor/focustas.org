const config = require('config');
const keystone = require('keystone');
const storageAdapterS3 = require('keystone-storage-adapter-s3');

const imageStorage = new keystone.Storage({
  adapter: storageAdapterS3,
  s3: {
    key: config.get('S3_KEY'),
    secret: config.get('S3_SECRET'),
    bucket: config.get('S3_BUCKET'),
    region: config.get('S3_REGION'),
    path: '/images',
    publicUrl: config.get('CLOUDFRONT_PUBLIC_URL'),
    generateFilename: file => file.originalname.replace(/ /g, '-')
  },
  schema: {
    bucket: true,
    etag: true,
    path: true,
    url: true
  }
});

module.exports = imageStorage;
