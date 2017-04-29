// @flow
import React from 'react';
import './ToggleButton.css';

const ToggleButton = ({ onClick }: { onClick: Function }) => (
  <button type="button" className="navbar-toggle" onClick={onClick}>
    <span className="sr-only">Toggle navigation</span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
    <span className="icon-bar"></span>
  </button>
);

export default ToggleButton;