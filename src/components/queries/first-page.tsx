import gql from 'graphql-tag';

export default gql`
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
