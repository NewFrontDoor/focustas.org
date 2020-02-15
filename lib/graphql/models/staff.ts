import {Profile} from '../gen-types';
import sanity from '../../sanity';

export async function all(): Promise<Profile[]> {
  return sanity.fetch(
    ['*']
      .concat([
        '[_type=="profile"]',
        `{
          ...
        }`
      ])
      .join('|')
  );
}
