// @flow

import React from 'react';
import {createComponent} from 'react-fela';
import {media} from '../config/constants';

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

const Description = createComponent(
  () => ({
    fontSize: '1.25rem',
    lineHeight: '1.2',
    color: '#777',
    fontWeight: '200'
  }),
  'div',
  ['dangerouslySetInnerHTML']
);

const Photo = createComponent(
  ({mobile}) => ({
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

const Welcome = ({description}: { description: string }) => (
  <div>
    <Logo id="logo" src="/static/Just_leaves-01_small.png" alt="Focus Leaves"/>

    <Jumbotron>
      <Heading>
        Welcome
        <br/>
        <To>to</To>
        {' '}
        FOCUS
      </Heading>
      <Description
        dangerouslySetInnerHTML={{
          __html: description
        }}
      />
    </Jumbotron>
    <Photo src="/static/students_for_web.png"/>
    <Photo mobile src="/static/icon_row_small.png"/>
  </div>
);

export default Welcome;
