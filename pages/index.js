// @flow
import React from 'react';
import {createComponent} from 'react-fela';
import withData from '../lib/with-data';
import Page from '../lib/layout';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home';

const Footer = createComponent(
  () => ({
    paddingTop: '2rem',
    paddingRight: '1.5rem',
    paddingBottom: '2rem',
    paddingLeft: '1.5rem'
  }),
  'footer'
);

export default withData(() => (
  <Page>
    <div>
      <NavBar/>
      <Home slug="home"/>
      <Footer>
        <hr/>
        <p>© Shiloh Design 2014</p>
      </Footer>
    </div>
  </Page>
));
