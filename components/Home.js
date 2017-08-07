// @flow

import React from 'react';
import { gql, graphql } from 'react-apollo'
import { createComponent } from 'react-fela';
import Welcome from './Welcome';
import Events from './Events';
import Involved from './Involved';
import Contact from './Contact';
import Where from './Where';
import About from './About';
import SideBar from './SideBar';
import { Container, Column } from './Container';
import { media } from '../config/constants';

const HomeContainer = createComponent(
  () => ({
    paddingTop: '4rem'
  }),
  Container()
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

const Home = ({ page }) =>
  <HomeContainer>
    <HomeColumn id="home" width={{ tablet: '100%', desktop: '70%' }}>
      <Welcome description={page.description} />
      <Events events={page.events} />
      <Involved />
      <About />
      <Where />
      <Contact />
    </HomeColumn>
    <SideBarColumn width={{ tablet: '100%', desktop: '30%' }}>
      <SideBar />
    </SideBarColumn>
  </HomeContainer>;

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
    }
  }
}
`;

export default graphql(firstPage, {
  options: (_) => ({
    variables: {
      input: {
        slug: 'home',
      }
    },
  }),
  props: ({ data }) => ({
    page: data.page,
  })
})(Home);
