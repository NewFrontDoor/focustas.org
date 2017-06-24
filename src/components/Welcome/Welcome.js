// @flow

import React from 'react';
import { createComponent } from 'react-fela';
import logo from './Just_leaves-01_small.png';
import icon from '../../static/icon_row_small.png';
import students from './students_for_web.png';
import { media } from '../../constants';

const Logo = createComponent(
  () => ({
    marginLeft: 0,
    marginBottom: 0,
    float: 'left',
    width: '110px',
    height: '122px',
    [media.tablet]: {
      width: '164px',
      height: '194px',
      marginBottom: '48px'
    }
  }),
  'img',
  ['id', 'src']
);

const Jumbotron = createComponent(() => ({
  marginBottom: '2rem',
  paddingBottom: '2rem',
  clear: 'both',
  [media.tablet]: {
    paddingRight: '2rem',
    paddingTop: '2rem'
  }
}));

const Heading = createComponent(
  () => ({
    fontSize: '3rem',
    fontWeight: '700',
    lineHeight: '1.1',
    [media.tablet]: {
      fontSize: '6rem',
      letterSpacing: '-2pt'
    }
  }),
  'h1'
);

const To = createComponent(
  () => ({
    fontSize: '60px',
    fontWeight: '200',
    display: 'block',
    [media.tablet]: {
      display: 'inline',
      fontSize: '3rem'
    }
  }),
  'span'
);

const P = createComponent(
  () => ({
    fontSize: '1.25rem',
    lineHeight: '1.2',
    color: '#777',
    fontWeight: '200'
  }),
  'p'
);

const Photo = createComponent(
  ({ mobile }) => ({
    marginTop: '-40px',
    maxHeight: '90px',
    width: 'auto',
    display: mobile ? 'block' : 'none',
    [media.tablet]: {
      maxHeight: '100%',
      display: mobile ? 'none' : 'block'
    }
  }),
  'img',
  ['src']
);

const Welcome = () =>
  <div>
    <Logo id="logo" src={logo} alt="Focus Leaves" />

    <Jumbotron>
      <Heading>
        Welcome
        <br />
        <To>to</To>
        {' '}
        FOCUS
      </Heading>
      <P>
        We love to share good things with you at FOCUS, like food, fun, and
        friendship. Even better, we love to share good news with you about God,
        who loved you so much He died to save you from this broken world.
      </P>
      <P>
        FOCUS stands for the Fellowship of Overseas Christian University
        Students. But you don't have to be a Christian to come to FOCUS — FOCUS
        welcomes all international students.
      </P>
    </Jumbotron>
    <Photo src={students} />
    <Photo mobile src={icon} />
  </div>;

export default Welcome;
