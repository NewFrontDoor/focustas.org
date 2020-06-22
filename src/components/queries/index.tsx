/* eslint-disable */
import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  Date: any,
  JSON: any,
  Geopoint: any,
};


export type Document = {
  _createdAt?: Maybe<Scalars['Date']>,
  _id: Scalars['ID'],
  _rev?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _updatedAt?: Maybe<Scalars['Date']>,
};

export type FilterFindOnePageInput = {
  slug?: Maybe<Scalars['String']>,
};



export type Main = Document & {
   __typename?: 'Main',
  _createdAt?: Maybe<Scalars['Date']>,
  _id: Scalars['ID'],
  _rev?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  content?: Maybe<Array<Maybe<Segment>>>,
  hero?: Maybe<Scalars['JSON']>,
  mainBody?: Maybe<Scalars['JSON']>,
  seo?: Maybe<Seo>,
};

export type Maps = Document & {
   __typename?: 'Maps',
  _createdAt?: Maybe<Scalars['Date']>,
  _id: Scalars['ID'],
  _rev?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  title?: Maybe<Scalars['String']>,
  location?: Maybe<Scalars['Geopoint']>,
};

export type Profile = Document & {
   __typename?: 'Profile',
  _createdAt?: Maybe<Scalars['Date']>,
  _id: Scalars['ID'],
  _rev?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  bodyText?: Maybe<Scalars['JSON']>,
  image?: Maybe<Scalars['JSON']>,
  name?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  pageOne?: Maybe<Main>,
  staffMany?: Maybe<Array<Maybe<Profile>>>,
};


export type QueryPageOneArgs = {
  filter?: Maybe<FilterFindOnePageInput>
};

export type Segment = Document & {
   __typename?: 'Segment',
  _createdAt?: Maybe<Scalars['Date']>,
  _id: Scalars['ID'],
  _rev?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  bodyText?: Maybe<Scalars['JSON']>,
  header?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  slug?: Maybe<Scalars['String']>,
};

export type Seo = {
   __typename?: 'SEO',
  title?: Maybe<Scalars['String']>,
};

export type FirstPageQueryVariables = {
  input?: Maybe<FilterFindOnePageInput>
};


export type FirstPageQuery = (
  { __typename?: 'Query' }
  & { page: Maybe<(
    { __typename?: 'Main' }
    & Pick<Main, '_id' | 'hero' | 'mainBody'>
    & { content: Maybe<Array<Maybe<(
      { __typename?: 'Segment' }
      & Pick<Segment, '_id' | 'bodyText' | 'header' | 'icon' | 'slug'>
    )>>>, seo: Maybe<(
      { __typename?: 'SEO' }
      & Pick<Seo, 'title'>
    )> }
  )> }
);

export type AllProfilesQueryVariables = {};


export type AllProfilesQuery = (
  { __typename?: 'Query' }
  & { staffMembers: Maybe<Array<Maybe<(
    { __typename?: 'Profile' }
    & Pick<Profile, '_id' | '_type' | 'bodyText' | 'image' | 'name'>
  )>>> }
);


export const FirstPageDocument = gql`
    query firstPage($input: FilterFindOnePageInput) {
  page: pageOne(filter: $input) {
    _id
    content {
      _id
      bodyText
      header
      icon
      slug
    }
    hero
    mainBody
    seo {
      title
    }
  }
}
    `;

/**
 * __useFirstPageQuery__
 *
 * To run a query within a React component, call `useFirstPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFirstPageQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFirstPageQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useFirstPageQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<FirstPageQuery, FirstPageQueryVariables>) {
        return ApolloReactHooks.useQuery<FirstPageQuery, FirstPageQueryVariables>(FirstPageDocument, baseOptions);
      }
export function useFirstPageLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<FirstPageQuery, FirstPageQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<FirstPageQuery, FirstPageQueryVariables>(FirstPageDocument, baseOptions);
        }
export type FirstPageQueryHookResult = ReturnType<typeof useFirstPageQuery>;
export type FirstPageLazyQueryHookResult = ReturnType<typeof useFirstPageLazyQuery>;
export type FirstPageQueryResult = ApolloReactCommon.QueryResult<FirstPageQuery, FirstPageQueryVariables>;
export const AllProfilesDocument = gql`
    query allProfiles {
  staffMembers: staffMany {
    _id
    _type
    bodyText
    image
    name
  }
}
    `;

/**
 * __useAllProfilesQuery__
 *
 * To run a query within a React component, call `useAllProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProfilesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
        return ApolloReactHooks.useQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, baseOptions);
      }
export function useAllProfilesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AllProfilesQuery, AllProfilesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AllProfilesQuery, AllProfilesQueryVariables>(AllProfilesDocument, baseOptions);
        }
export type AllProfilesQueryHookResult = ReturnType<typeof useAllProfilesQuery>;
export type AllProfilesLazyQueryHookResult = ReturnType<typeof useAllProfilesLazyQuery>;
export type AllProfilesQueryResult = ApolloReactCommon.QueryResult<AllProfilesQuery, AllProfilesQueryVariables>;