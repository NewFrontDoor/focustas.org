const {deferConfig} = require('config/defer');

module.exports = {
  PORT: process.env.PORT || 3000,
  API_CLIENT_URL: '',
  API_SERVER_URL: deferConfig(config => `http://localhost:${config.port}`),
  COOKIE_SECRET: 'focustas',
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost/focustas',
  dev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development',
  S3_KEY: process.env.S3_KEY,
  S3_SECRET: process.env.S3_SECRET,
  S3_BUCKET: process.env.S3_BUCKET,
  S3_BUCKET_PATH: process.env.S3_BUCKET_PATH,
  S3_REGION: process.env.S3_REGION
};
