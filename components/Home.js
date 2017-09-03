// @flow

import React from 'react';
import {gql, graphql} from 'react-apollo';
import {createComponent} from 'react-fela';
import {media} from '../config/constants';
import Welcome from './Welcome';
import Events from './Events';
import Involved from './Involved';
import Contact from './Contact';
import Where from './Where';
import About from './About';
import SideBar from './SideBar';
import {createContainer, Column} from './Container';

const HomeContainer = createComponent(
  () => ({
    paddingTop: '4rem'
  }),
  createContainer()
);

const HomeColumn = createComponent(() => ({}), Column, ['id']);

const SideBarColumn = createComponent(
  () => ({
    paddingTop: '4rem',
    [media.tablet]: {
      minWidth: '340px'
    }
  }),
  Column
);

type Props = {
  page: any;
};

const Home = ({page}: Props) => (
  <HomeContainer>
    <HomeColumn id="home" width={{tablet: '100%', desktop: '70%'}}>
      <Welcome description={page.description}/>
      <Events events={page.events}/>
      <Involved description={page.getInvolved}/>
      <About {...page.aboutUs}/>
      <Where/>
      <Contact description={page.contactUs}/>
    </HomeColumn>
    <SideBarColumn width={{tablet: '100%', desktop: '30%'}}>
      <SideBar/>
    </SideBarColumn>
  </HomeContainer>
);

const firstPage = gql`
query firstPage($input: FilterFindOnePageInput) {
  page: pageOne(filter: $input) {
    description
    events {
      name
      description
      what
      when
      where
      location {
        street1
      }
      hasLocation
    }
    getInvolved
    aboutUs {
      description
      team
    }
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

export default withData(Home);
