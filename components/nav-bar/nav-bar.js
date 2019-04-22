import React from 'react';
import styled from '@emotion/styled';
import Flex, {FlexItem} from 'mineral-ui/Flex';
import {Events} from 'react-scroll';
import SrOnly from '../sr-only';
import {media} from '../../config/constants';
import SiteWrapper from '../site-wrapper';
import Nav from './nav';
import ToggleButton from './toggle-button';
import NavBrand from './nav-brand';

const FixedNavBar = styled('header')`
  background-image: url(/static/background.jpg);
  background-repeat: repeat-x;
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10;
  ${media.tablet} {
    margin-bottom: 20px;
  }
`;

const IconBar = styled('div')`
  background-color: #fff;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin-top: ${({marginTop}) => marginTop};
`;

class NavBar extends React.Component {
  state = {
    collapsed: true
  };

  static toggle = ({collapsed}) => {
    return {collapsed: !collapsed};
  };

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      this.setState({collapsed: true});
    });
  }

  handleCollapse = () => this.setState(NavBar.toggle);

  render() {
    return (
      <FixedNavBar>
        <SiteWrapper>
          <Flex
            as="nav"
            role="navigation"
            breakpoints={['medium']}
            direction={['column', 'row']}
            justifyContent="between"
          >
            <Flex justifyContent="between">
              <NavBrand />
              <ToggleButton type="button" onClick={this.handleCollapse}>
                <SrOnly>Toggle navigation</SrOnly>
                <IconBar />
                <IconBar marginTop="4px" />
                <IconBar marginTop="4px" />
              </ToggleButton>
            </Flex>
            <Nav collapsed={this.state.collapsed} />
          </Flex>
        </SiteWrapper>
      </FixedNavBar>
    );
  }
}

export default NavBar;
