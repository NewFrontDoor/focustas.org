/** @jsx jsx */
import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Flex, Styled} from 'theme-ui';
import {Link as ScrollLink} from 'react-scroll';
import {LinkProps} from 'react-scroll/modules/components/Link';

type NavCollapseProps = {
  isCollapsed: boolean;
};

const NavCollapse: FC<NavCollapseProps> = ({isCollapsed, ...props}) => (
  <div
    {...props}
    sx={{
      maxHeight: '340px',
      overflowX: 'visible',
      paddingTop: '0.5rem',
      paddingRight: '1rem',
      paddingBottom: '0.5rem',
      paddingLeft: '1rem',
      borderTop: '1px solid transparent',
      boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      '--webkit-overflow-scrolling': 'touch',
      marginLeft: '-1rem',
      marginRight: '-1rem',
      height: [isCollapsed ? '1px' : 'auto', 'auto'],
      display: [isCollapsed ? 'none' : 'block', 'flex']
    }}
  />
);

NavCollapse.propTypes = {
  isCollapsed: PropTypes.bool.isRequired
};

const NavLink: FC<LinkProps> = props => (
  <Styled.li
    {...props}
    as={ScrollLink}
    sx={{
      padding: 3,
      color: 'white',
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 'normal',
      textDecoration: 'none',
      '&:hover,&:focus,&:active,&:visited': {
        color: '#fff',
        textDecoration: 'none'
      }
    }}
  />
);

const NavItem: FC = props => <Flex {...props} alignItems="center" />;

/*
Nav is currently hard-coded - when and if FOCUS want
different segments on their front page we can use
Sanity to dynamically build the Nav
*/

const Nav: FC<NavCollapseProps> = ({isCollapsed}) => {
  return (
    <NavCollapse isCollapsed={isCollapsed}>
      <Flex
        as="ul"
        sx={{
          justifyContent: ['start', 'end'],
          flexWrap: 'wrap',
          margin: 0,
          listStyle: 'none'
        }}
      >
        <NavItem>
          <NavLink smooth href="#home" to="home" duration={500} offset={-70}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
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
        <NavItem>
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
        <NavItem>
          <NavLink smooth href="#about" to="about" duration={500} offset={-70}>
            About us
          </NavLink>
        </NavItem>
        <NavItem>
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
  isCollapsed: PropTypes.bool.isRequired
};

export default Nav;
