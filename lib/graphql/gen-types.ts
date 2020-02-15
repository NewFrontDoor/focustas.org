/* eslint-disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './';
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



export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: ResolverTypeWrapper<{}>,
  FilterFindOnePageInput: ResolverTypeWrapper<any>,
  String: ResolverTypeWrapper<any>,
  Main: ResolverTypeWrapper<any>,
  Document: ResolverTypeWrapper<any>,
  Date: ResolverTypeWrapper<any>,
  ID: ResolverTypeWrapper<any>,
  Segment: ResolverTypeWrapper<any>,
  JSON: ResolverTypeWrapper<any>,
  SEO: ResolverTypeWrapper<any>,
  Profile: ResolverTypeWrapper<any>,
  Boolean: ResolverTypeWrapper<any>,
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Query: {},
  FilterFindOnePageInput: any,
  String: any,
  Main: any,
  Document: any,
  Date: any,
  ID: any,
  Segment: any,
  JSON: any,
  SEO: any,
  Profile: any,
  Boolean: any,
};

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export type DocumentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Document'] = ResolversParentTypes['Document']> = {
  __resolveType: TypeResolveFn<'Main' | 'Segment' | 'Profile', ParentType, ContextType>,
  _createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON'
}

export type MainResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Main'] = ResolversParentTypes['Main']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['Segment']>>>, ParentType, ContextType>,
  hero?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  mainBody?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  seo?: Resolver<Maybe<ResolversTypes['SEO']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type ProfileResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Profile'] = ResolversParentTypes['Profile']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  bodyText?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  image?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  pageOne?: Resolver<Maybe<ResolversTypes['Main']>, ParentType, ContextType, QueryPageOneArgs>,
  staffMany?: Resolver<Maybe<Array<Maybe<ResolversTypes['Profile']>>>, ParentType, ContextType>,
};

export type SegmentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Segment'] = ResolversParentTypes['Segment']> = {
  _createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  _rev?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  _updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>,
  bodyText?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>,
  header?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type SeoResolvers<ContextType = Context, ParentType extends ResolversParentTypes['SEO'] = ResolversParentTypes['SEO']> = {
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
};

export type Resolvers<ContextType = Context> = {
  Date?: GraphQLScalarType,
  Document?: DocumentResolvers,
  JSON?: GraphQLScalarType,
  Main?: MainResolvers<ContextType>,
  Profile?: ProfileResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Segment?: SegmentResolvers<ContextType>,
  SEO?: SeoResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = Context> = Resolvers<ContextType>;
