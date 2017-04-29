// @flow
import React from 'react'
import './NavBar.css';

const NavBar = () => (
  <div className="navbar" role="navigation">
    <div className="navbar-wrapper">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#focus"></a>
      </div>
      <div className="navbar-collapse">
        <ul className="nav navbar-nav">
          <li><a className="scroll" data-speed="1000" data-easing="easeInOutCubic" href="#home">Home</a></li>
          <li><a className="scroll" data-speed="1000" data-easing="easeInOutCubic" href="#events">Events</a></li>
          <li><a className="scroll" data-speed="1000" data-easing="easeInOutCubic" href="#involved">Get involved</a></li>
          <li><a className="scroll" data-speed="1000" data-easing="easeInOutCubic" href="#about">About us</a></li>
          <li><a className="scroll" data-speed="1000" data-easing="easeInOutCubic" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
);

export default NavBar;
