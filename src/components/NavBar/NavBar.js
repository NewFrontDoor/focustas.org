// @flow
import React, { Component } from 'react'
import cx from 'classnames';
import './NavBar.css';
import Nav from './Nav';
import ToggleButton from './ToggleButton';

class NavBar extends Component {
  state = {
    collapsed: true,  
  }
  
  toggleCollapse = (event: Event) => {
    event.preventDefault();
    this.setState({ collapsed: !this.state.collapsed });
  }
  
  render() {
    const collapseClass = cx('navbar-collapse', {
      'collapsed': this.state.collapsed,
    });
    
    return (
      <div className="navbar" role="navigation">
        <div className="navbar-wrapper">
          <div className="navbar-header">
            <ToggleButton onClick={this.toggleCollapse}/>
            <a className="navbar-brand" href="#focus"></a>
          </div>
          <div className={collapseClass}>
            <Nav />
          </div>
        </div>
      </div>
    );
  }
};

export default NavBar;
