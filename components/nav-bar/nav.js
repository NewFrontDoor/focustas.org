import React from 'react';
import PropTypes from 'prop-types';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import Flex, {FlexItem} from 'mineral-ui/Flex';
import {Link as ScrollLink} from 'react-scroll';
import {media} from '../../config/constants';

const NavCollapse = styled('div')`
  max-height: 340px;
  overflow-x: visible;
  padding-top: 0.5rem;
  padding-right: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  border-top: 1px solid transparent;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1);
  --webkit-overflow-scrolling: touch;
  height: ${({collapsed}) => (collapsed ? '1px' : 'auto')};
  display: ${({collapsed}) => (collapsed ? 'none' : 'block')};
  margin-left: -1rem;
  margin-right: -1rem;
  ${media.tablet} {
    height: auto;
    display: flex;
  }
`;

const NavLink = styled(ScrollLink)`
  color: #fff;
  font-family: Raleway;
  font-size: 1rem;
  font-weight: normal;
  text-decoration: none;
  &:hover,
  &:focus,
  &:active,
  &:visited {
    color: #fff;
    text-decoration: none;
  }
`;

const NavItem = styled(FlexItem)`
  display: flex;
  align-items: center;
`;

const Nav = ({collapsed}) => {
  return (
    <NavCollapse collapsed={collapsed}>
      <Flex
        wrap
        as="ul"
        breakpoints={['medium']}
        justifyContent={['start', 'end']}
        css={css`
          margin: 0;
          list-style: none;
        `}
      >
        <NavItem as="li" padding="sm">
          <NavLink smooth href="#home" to="home" duration={500} offset={-70}>
            Home
          </NavLink>
        </NavItem>
        <NavItem as="li" padding="sm">
          <NavLink
            smooth
            href="#events"
            to="events"
            duration={500}
            offset={-70}
          >
            Events
          </NavLink>
        </NavItem>
        <NavItem as="li" padding="sm">
          <NavLink
            smooth
            href="#involved"
            to="involved"
            duration={500}
            offset={-70}
          >
            Get involved
          </NavLink>
        </NavItem>
        <NavItem as="li" padding="sm">
          <NavLink smooth href="#about" to="about" duration={500} offset={-70}>
            About us
          </NavLink>
        </NavItem>
        <NavItem as="li" padding="sm">
          <NavLink
            smooth
            href="#contact"
            to="contact"
            duration={500}
            offset={-70}
          >
            Contact
          </NavLink>
        </NavItem>
      </Flex>
    </NavCollapse>
  );
};

Nav.propTypes = {
  collapsed: PropTypes.bool.isRequired
};

export default Nav;
