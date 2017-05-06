// @flow
import React, { Component } from 'react'
import './NavBar.css';
import Nav from './Nav';
import ToggleButton from './ToggleButton';
import logo from './logo-long-white.png';

class NavBar extends Component {
  state = {
    collapsed: true,  
  }
  
  toggleCollapse = (event: Event) => {
    event.preventDefault();
    this.setState({ collapsed: !this.state.collapsed });
  }
  
  render() {
    return (
      <nav className="navbar" role="navigation">
        <ToggleButton onClick={this.toggleCollapse}/>
        <a className="navbar-brand" href="#focus">
          <img src={logo} height="40px" alt="focus logo"/>
        </a>
        <Nav collapsed={this.state.collapsed} />
      </nav>
    );
  }
};

export default NavBar;
