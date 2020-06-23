import gql from 'graphql-tag';

export const schema = gql`
  type Query {
    pageOne(filter: FilterFindOnePageInput): Main
    staffMany: [Profile]
  }

  scalar Date

  scalar JSON

  input FilterFindOnePageInput {
    slug: String
  }

  interface Document {
    _createdAt: Date
    _id: ID!
    _rev: String
    _type: String
    _updatedAt: Date
  }

  type Main implements Document {
    _createdAt: Date
    _id: ID!
    _rev: String
    _type: String
    _updatedAt: Date
    content: [Segment]
    hero: JSON
    mainBody: JSON
    seo: SEO
  }

  type Segment implements Document {
    _createdAt: Date
    _id: ID!
    _rev: String
    _type: String
    _updatedAt: Date
    bodyText: JSON
    header: String
    icon: String
    slug: String
  }

  type Profile implements Document {
    _createdAt: Date
    _id: ID!
    _rev: String
    _type: String
    _updatedAt: Date
    bodyText: JSON
    image: JSON
    name: String
  }

  type Maps implements Document {
    _createdAt: Date
    _id: ID!
    _rev: String
    _type: String
    _updatedAt: Date
    title: String
    address: String
  }

  type SEO {
    title: String
  }
`;
