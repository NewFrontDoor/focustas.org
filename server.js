const express = require('express')
const expressGraphQL = require('express-graphql');
const keystone = require('keystone')
const next = require('next')
const pinoColada = require('pino-colada');
const pinoHttp = require('pino-http');

const config = require('./config');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express()
  const pretty = pinoColada();
  pretty.pipe(process.stdout);

  keystone.init(config.options);
  keystone.import('models');
  keystone.set('locals', config.locals);
  keystone.set('nav', config.nav);

  keystone.initDatabaseConfig();
  keystone.initExpressSession();

  server.use('/keystone', keystone.Admin.Server.createStaticRouter(keystone));
  server.use(express.static('static'));
  server.use(keystone.get('session options').cookieParser);
  server.use(keystone.expressSession);
  server.use(keystone.session.persist);

  server.use(pinoHttp({ stream: pretty }));
  server.use('/keystone', keystone.Admin.Server.createDynamicRouter(keystone));

  server.use(
    '/graphql',
    expressGraphQL(req => ({
      // eslint-disable-next-line global-require
      schema: require('./schema'),
      graphiql: dev,
      rootValue: { request: req },
      pretty: dev,
    }))
  );

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  keystone.openDatabaseConnection(() => {
    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  });
}).catch(err => console.error(err));
