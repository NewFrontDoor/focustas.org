const config = require('config');

module.exports = {
  publicRuntimeConfig: {
    dev: config.get('dev')
  },
  onDemandEntries: {
    websocketPort: 3100
  }
};
