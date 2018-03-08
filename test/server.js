import test from 'ava';
import pinoColada from 'pino-colada';
import {MongoDBServer} from 'mongomem';
import fetch from 'isomorphic-fetch';
import server from '../server';
import getConfig from './_config';

const pretty = pinoColada();
pretty.pipe(process.stdout);

let testServer;

test.before('start server', async () => {
  await MongoDBServer.start();
  const config = await getConfig();
  testServer = await server.start({config, pretty});
});

test.after.always('cleanup database', async () => {
  await server.stop(testServer);
  MongoDBServer.tearDown();
});

function graphqlQuery(port, query) {
  const normalizedQuery = query.replace(/[\s,]+/g, ' ').trim();
  return fetch(`http://localhost:${port}/graphql?query=${normalizedQuery}`);
}

// eslint-disable-next-line ava/no-skip-test
test.skip('should respond with site', async t => {
  const {port} = testServer.address();

  const response = await fetch(`http://localhost:${port}`);

  t.snapshot(response);
});

test('should respond with User fields', async t => {
  const {port} = testServer.address();
  const query = `{
    userMany {
      name {
        first
        last
      }
    }
  }`;

  const response = await graphqlQuery(port, query);
  t.is(response.status, 200);
  t.deepEqual(await response.json(), {
    data: {
      userMany: [
        {
          name: {
            first: 'Demo',
            last: 'User'
          }
        }
      ]
    }
  });
});

test('should error when query for email or password fields', async t => {
  const port = testServer.address().port;
  const query = `{
    userMany {
      email
      password
    }
  }`;

  const response = await graphqlQuery(port, query);

  t.is(response.status, 400);
  const {errors} = await response.json();
  t.deepEqual(errors.map(({message}) => ({message})), [
    {
      message: 'Cannot query field "email" on type "User".'
    },
    {
      message: 'Cannot query field "password" on type "User".'
    }
  ]);
});
