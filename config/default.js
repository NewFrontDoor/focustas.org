const {deferConfig} = require('config/defer');

module.exports = {
  PORT: process.env.PORT || 3000,
  API_CLIENT_URL: '',
  API_SERVER_URL: deferConfig(config => `http://localhost:${config.port}`),
  COOKIE_SECRET: 'focustas',
  MONGO_URI: 'mongodb://localhost/focustas',
  dev: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
};
