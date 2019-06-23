const util = require('util');
const express = require('express');
const expressGraphQL = require('express-graphql');
const keystone = require('keystone');
const pinoHttp = require('pino-http');
const config = require('config');

const openDatabaseConnection = util.promisify(
  keystone.openDatabaseConnection.bind(keystone)
);
const closeDatabaseConnection = util.promisify(
  keystone.closeDatabaseConnection.bind(keystone)
);

const start = async ({app}) => {
  const keystoneConfig = require('./config/keystone');
  const port = config.get('PORT');

  const server = express();

  keystone.init(keystoneConfig.options);
  keystone.import('models');
  keystone.set('locals', keystoneConfig.locals);
  keystone.set('nav', keystoneConfig.nav);

  keystone.initDatabaseConfig();
  keystone.initExpressSession(keystone.mongoose);

  server.use('/keystone', keystone.Admin.Server.createStaticRouter(keystone));
  server.use(express.static('static'));
  server.use(keystone.get('session options').cookieParser);
  server.use(keystone.expressSession);
  server.use(keystone.session.persist);

  server.use(pinoHttp());
  server.use('/keystone', keystone.Admin.Server.createDynamicRouter(keystone));

  server.use(
    '/graphql',
    expressGraphQL(req => ({
      schema: require('./schema'),
      graphiql: config.dev,
      rootValue: {request: req},
      pretty: config.dev
    }))
  );

  server.get('*', app.getRequestHandler());

  await openDatabaseConnection();

  return server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
};

const stop = async server => {
  await closeDatabaseConnection();
  if (server) {
    server.close();
  }
};

module.exports = {
  start,
  stop
};
