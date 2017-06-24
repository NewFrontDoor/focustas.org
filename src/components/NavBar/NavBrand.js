// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import { media } from '../../constants';
import logo from './logo-long-white.png';

const BrandImage = createComponent(
  () => ({
    margin: 0,
    verticalAlign: 'middle',
    width: '160px',
    [media.tablet]: {
      width: '250px'
    }
  }),
  'img',
  ['src', 'alt']
);

const BrandLink = createComponent(
  () => ({
    textAlign: 'right',
    display: 'inline-block',
    fontSize: '1.25rem',
    lineHeight: '3rem',
    whiteSpace: 'nowrap',
    [media.tablet]: {
      textAlign: 'left'
    }
  }),
  'a',
  ['href']
);

const NavBrand = () =>
  <BrandLink href="#focus">
    <BrandImage src={logo} alt="focus logo" />
  </BrandLink>;

export default NavBrand;
