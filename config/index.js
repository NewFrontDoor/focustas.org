const dev = process.env.NODE_ENV === 'production';

const port = process.env.PORT || '3000';

const api = {
  // API URL to be used in the client-side code
  clientUrl: process.env.API_CLIENT_URL || '',
  // API URL to be used in the server-side code
  serverUrl:
    process.env.API_SERVER_URL ||
    `http://localhost:${port}`
};

const analytics = {};

const options = {
  name: 'focustas',
  brand: 'focustas',

  favicon: 'static/favicon.ico',
  less: 'static',
  static: 'static',

  updates: 'updates',
  'auto update': true,
  mongo: process.env.MONGO_URI || '<MongoDB Atlas Connection String>',

  session: true,
  auth: true,
  'user model': 'User',
  'cookie secret': process.env.COOKIE_SECRET || '<Cookie Secret>'
};

const locals = {};

const nav = {
  people: ['users', 'staffs'],
  content: ['pages', 'venues', 'events']
};

module.exports = {
  api,
  dev,
  analytics,
  options,
  locals,
  nav,
  port
};
