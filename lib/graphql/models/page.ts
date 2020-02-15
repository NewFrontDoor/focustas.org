import {Main, QueryPageOneArgs} from '../gen-types';
import sanity from '../../sanity';

export async function find(args: QueryPageOneArgs): Promise<Main> {
  const {slug} = args.filter;
  return sanity.fetch(
    ['*']
      .concat([
        '[_type=="main"][0]',
        `{
          ...,
          "mainBody": mainbody,
          content[]->{
            ...,
            "slug": slug.current,
            "bodyText": bodytext[] {
              ...,
              _type == 'reference' => @ -> {
                ...,
                "bodyText": bodytext[] {
                  ...
                }
              }
            }
          }
        }`
      ])
      .join('|'),
    {slug}
  );
}
