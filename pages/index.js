import React from 'react';
import styled from 'react-emotion';
import {flow} from 'lodash';
import withData from '../lib/with-data';
import withEmotion from '../lib/with-emotion';
import NavBar from '../components/nav-bar/nav-bar';
import Home from '../components/home';

const Footer = styled.footer`
  padding: 2rem 1.5rem;
`;

const enhance = flow(
  withEmotion,
  withData,
);

export default enhance(() => (
  <React.Fragment>
    <NavBar/>
    <Home slug="home"/>
    <Footer>
      <hr/>
      <p>© Shiloh Design 2018</p>
    </Footer>
  </React.Fragment>
));
