import React from 'react';
import styled from '@emotion/styled';
import {flow} from 'lodash';
import withData from '../lib/with-data';
import NavBar from '../components/nav-bar/nav-bar';
import Home from '../components/home';

const Footer = styled('footer')`
  padding: 2rem 1.5rem;
`;

const enhance = flow(withData);

export default enhance(() => (
  <>
    <NavBar />
    <Home slug="home" />
    <Footer>
      <hr />
      <p>© Shiloh Design 2018</p>
    </Footer>
  </>
));
