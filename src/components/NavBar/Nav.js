// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import { Link } from 'react-scroll';
import { media } from '../../constants';

const NavCollapse = createComponent(({ collapsed }) => ({
  maxHeight: '340px',
  overflowX: 'visible',
  paddingTop: '.5rem',
  paddingRight: '1rem',
  paddingBottom: '.5rem',
  paddingLeft: '1rem',
  borderTop: '1px solid transparent',
  boxShadow: 'inset 0 1px 0 rgba(255,255,255,.1)',
  webkitOverflowScrolling: 'touch',
  height: collapsed ? '1px' : 'auto',
  display: collapsed ? 'none' : 'block',
  marginLeft: '-1rem',
  marginRight: '-1rem',
  [media.tablet]: {
    height: 'auto',
    display: 'flex',
    flexBasis: '100%'
  }
}));

const NavList = createComponent(
  () => ({
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'space-between',
    paddingLeft: 0,
    margin: 0,
    flexBasis: '100%',
    listStyle: 'none',
    [media.tablet]: {
      justifyContent: 'flex-end'
    }
  }),
  'ul'
);

const NavItem = createComponent(
  () => ({
    display: 'list-item',
    marginBottom: 0
  }),
  'li'
);

const NavLink = createComponent(
  () => ({
    display: 'inline-block',
    position: 'relative',
    paddingTop: '10px',
    paddingRight: '1rem',
    paddingBottom: '10px',
    paddingLeft: '1rem',
    color: '#FFF',
    fontFamily: 'Raleway',
    fontSize: '1rem',
    fontWeight: 'normal',
    lineHeight: '30px',
    textDecoration: 'none',
    ':hover': {
      color: '#FFF',
      textDecoration: 'none'
    },
    ':active': {
      color: '#FFF',
      textDecoration: 'none'
    },
    ':visited': {
      color: '#FFF',
      textDecoration: 'none'
    },
    [media.tablet]: {
      paddingTop: 0,
      paddingRight: '30px',
      paddingBottom: 0,
      paddingLeft: '30px'
    }
  }),
  Link,
  ['href', 'to', 'smooth', 'duration', 'offset']
);

export type Props = {
  collapsed: boolean
};

const Nav = ({ collapsed }: Props) => {
  return (
    <NavCollapse collapsed={collapsed}>
      <NavList>
        <NavItem>
          <NavLink href="#home" to="home" smooth duration={500} offset={-70}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#events"
            to="events"
            smooth
            duration={500}
            offset={-70}
          >
            Events
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#involved"
            to="involved"
            smooth
            duration={500}
            offset={-70}
          >
            Get involved
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about" to="about" smooth duration={500} offset={-70}>
            About us
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#contact"
            to="contact"
            smooth
            duration={500}
            offset={-70}
          >
            Contact
          </NavLink>
        </NavItem>
      </NavList>
    </NavCollapse>
  );
};

export default Nav;
