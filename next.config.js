require('dotenv').config();
const bundleAnalyzer = require('@next/bundle-analyzer');
const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true'
});

let HOST_URL = 'http://localhost:3000';

if (process.env.NODE_ENV === 'production') {
  HOST_URL = process.env.HOST_URL;
}

module.exports = withBundleAnalyzer({
  env: {
    HOST_URL
  },
  webpack(config) {
    config.node = {fs: 'empty'};
    return config;
  }
});
