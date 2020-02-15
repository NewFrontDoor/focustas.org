import gql from 'graphql-tag';

export default gql`
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
