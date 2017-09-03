// @flow

import * as React from 'react';
import {createComponent} from 'react-fela';
import {Events} from 'react-scroll';
import SrOnly from '../SrOnly';
import {createContainer} from '../Container';
import {media} from '../../config/constants';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import NavBrand from './NavBrand';

const FixedNavBar = createComponent(
  () => ({
    backgroundImage: `url(/static/background.jpg)`,
    backgroundRepeat: 'repeat-x',
    left: 0,
    position: 'fixed',
    right: 0,
    zIndex: 10,
    [media.tablet]: {
      marginBottom: '20px'
    }
  }),
  'header'
);

const NavBarContainer = createComponent(
  () => ({
    display: 'flex',
    flexDirection: 'column',
    [media.tablet]: {
      flexDirection: 'row'
    }
  }),
  createContainer('nav'),
  ['role']
);

const IconBar = createComponent(({marginTop}) => ({
  backgroundColor: '#fff',
  display: 'block',
  width: '22px',
  height: '2px',
  borderRadius: '1px',
  marginTop
}));

const FlexContainer = createComponent(() => ({
  display: 'flex',
  justifyContent: 'flex-end'
}));

type State = {
  collapsed: boolean;
};

class NavBar extends React.Component<void, State> {
  state = {
    collapsed: true
  };

  componentDidMount() {
    Events.scrollEvent.register('begin', () => {
      this.setState({collapsed: true});
    });
  }

  handleCollapse = (event: SyntheticMouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    this.setState({collapsed: !this.state.collapsed});
  };

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
