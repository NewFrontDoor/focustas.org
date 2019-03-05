/* eslint-disable camelcase */

module.exports = {
  apps: [
    {
      name: 'www',
      script: './app.js',
      ignore_watch: [
        '.git',
        '.next',
        '.next/**',
        'data/**',
        'node_modules/.cache/**',
        'node_modules/keystone/admin/**',
        'components/**',
        'pages/**'
      ],
      env: {
        PORT: '3000',
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
