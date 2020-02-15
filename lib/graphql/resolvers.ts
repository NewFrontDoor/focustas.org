import upperFirst from 'lodash/upperFirst';
import {Resolvers, Maybe, Document} from './gen-types';

type SanityType = 'Main' | 'Profile' | 'Segment';

const resolveSanityDocument = <T extends SanityType>(
  parent: Document
): Maybe<T> => {
  if (parent?._type) {
    return upperFirst(parent._type) as T;
  }

  return null;
};

export const resolvers: Resolvers = {
  Query: {
    async pageOne(_parent, args, context) {
      return context.models.page.find(args);
    },
    async staffMany(_parent, _args, context) {
      return context.models.staff.all();
    }
  },
  Document: {
    __resolveType: resolveSanityDocument
  }
};
