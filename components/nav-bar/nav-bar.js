import React from 'react';
import styled from 'react-emotion';
import {Events} from 'react-scroll';
import SrOnly from '../sr-only';
import {createContainer} from '../container';
import {media} from '../../config/constants';
import Nav from './nav';
import ToggleButton from './toggle-button';
import NavBrand from './nav-brand';

const FixedNavBar = styled.header`
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

const NavBarContainer = styled(createContainer('nav'))`
  display: flex;
  flex-direction: column;
  ${media.tablet} {
    flex-direction: row;
  }
`;

const IconBar = styled.div`
  background-color: #fff;
  display: block;
  width: 22px;
  height: 2px;
  border-radius: 1px;
  margin-top: ${({marginTop}) => marginTop};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

class NavBar extends React.Component {
  state = {
    collapsed: true
  };

  static toggle = ({collapsed}) => {
    return ({collapsed: !collapsed});
  }

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      this.setState({collapsed: true});
    });
  }

  handleCollapse = () => this.setState(NavBar.toggle)

  render() {
    return (
      <FixedNavBar>
        <NavBarContainer role="navigation">
          <FlexContainer>
            <NavBrand/>
            <ToggleButton type="button" onClick={this.handleCollapse}>
              <SrOnly>Toggle navigation</SrOnly>
              <IconBar/>
              <IconBar marginTop="4px"/>
              <IconBar marginTop="4px"/>
            </ToggleButton>
          </FlexContainer>
          <Nav collapsed={this.state.collapsed}/>
        </NavBarContainer>
      </FixedNavBar>
    );
  }
}

export default NavBar;
