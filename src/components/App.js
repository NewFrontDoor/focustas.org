// @flow

import React from 'react';
import { createComponent } from 'react-fela';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';

const Footer = createComponent(
  () => ({
    paddingTop: '2rem',
    paddingRight: '1.5rem',
    paddingBottom: '2rem',
    paddingLeft: '1.5rem'
  }),
  'footer'
);

const App = () =>
  <div>
    <NavBar />
    <Home />
    <Footer>
      <hr />
      <p>© Shiloh Design 2014</p>
    </Footer>
  </div>;

export default App;
