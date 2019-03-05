import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import styled from 'react-emotion';
import {media} from '../config/constants';
import Welcome from './welcome';
import Events from './events';
import Involved from './involved';
import Contact from './contact';
import Where from './where';
import About from './about';
import SideBar from './side-bar';
import {createContainer, Column} from './container';

const HomeContainer = styled(createContainer())`
  padding-top: 4rem;
`;

const SideBarColumn = styled(Column)`
  padding-top: 4rem;
  ${media.tablet} {
    min-width: 340px;
  }
`;

const firstPage = gql`
  query firstPage($input: FilterFindOnePageInput) {
    page: pageOne(filter: $input) {
      description
      getInvolved
      aboutUs
      contactUs
    }
  }
`;

const withData = graphql(firstPage, {
  options: ({slug}) => ({
    variables: {
      input: {
        slug
      }
    }
  }),
  props: ({data}) => ({
    page: data.page || {}
  })
});

const Home = ({page}) => (
  <HomeContainer>
    <Column id="home" screen={{tablet: '100%', desktop: '70%'}}>
      <Welcome description={page.description} />
      <Events />
      <Involved description={page.getInvolved} />
      <About description={page.aboutUs} />
      <Where />
      <Contact description={page.contactUs} />
    </Column>
    <SideBarColumn screen={{tablet: '100%', desktop: '30%'}}>
      <SideBar />
    </SideBarColumn>
  </HomeContainer>
);

Home.propTypes = {
  page: PropTypes.shape({
    description: PropTypes.string,
    getInvolved: PropTypes.string,
    aboutUs: PropTypes.string,
    contactUs: PropTypes.string
  }).isRequired
};

export default withData(Home);
