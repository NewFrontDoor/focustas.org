import {ApolloServer} from 'apollo-server-micro';
import * as pageModel from './models/page';
import * as staffModel from './models/staff';
import {schema} from './schema';
import {resolvers} from './resolvers';

export type Context = {
  models: {
    page: typeof pageModel;
    staff: typeof staffModel;
  };
};

function context(): Context {
  return {
    models: {
      page: pageModel,
      staff: staffModel
    }
  };
}

export default new ApolloServer({
  typeDefs: schema,
  resolvers,
  context
});
