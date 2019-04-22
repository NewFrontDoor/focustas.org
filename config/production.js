const {deferConfig} = require('config/defer');

module.exports = {
  dev: false,

  PORT: process.env.PORT || 3000,

  MONGO_URI: process.env.MONGO_URI,

  HOST: process.env.HOST || 'focustas.org',
  HOST_URL: process.env.HOST_URL || 'https://focustas.org',
  GRAPHQL_URI: deferConfig(config => `${config.HOST_URL}/graphql`),

  API_CLIENT_URL: 'https://focustas.org',
  API_SERVER_URL: 'https://focustas.org',

  COOKIE_SECRET: process.env.COOKIE_SECRET,

  S3_KEY: process.env.S3_KEY,
  S3_SECRET: process.env.S3_SECRET,
  S3_BUCKET: process.env.S3_BUCKET,
  S3_REGION: process.env.S3_REGION,
  CLOUDFRONT_PUBLIC_URL: process.env.CLOUDFRONT_PUBLIC_URL
};
