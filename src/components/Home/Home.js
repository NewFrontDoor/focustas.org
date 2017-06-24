// @flow

import React from 'react';
import { createComponent } from 'react-fela';
import Welcome from '../Welcome/Welcome';
import Events from '../Events/Events';
import Involved from '../Involved/Involved';
import Contact from '../Contact/Contact';
import Where from '../Where/Where';
import About from '../About/About';
import SideBar from '../SideBar/SideBar';
import { Container, Column } from '../Container/Container';
import { media } from '../../constants';

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

const Home = () =>
  <HomeContainer>
    <HomeColumn id="home" width={{ tablet: '100%', desktop: '70%' }}>
      <Welcome />
      <Events />
      <Involved />
      <About />
      <Where />
      <Contact />
    </HomeColumn>
    <SideBarColumn width={{ tablet: '100%', desktop: '30%' }}>
      <SideBar />
    </SideBarColumn>
  </HomeContainer>;

export default Home;
