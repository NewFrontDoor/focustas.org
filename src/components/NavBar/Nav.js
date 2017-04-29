// @flow
import React from 'react'
import './Nav.css';

const Nav = () => (
  <ul className="nav">
    <li className="nav__item"><a className="nav__item-link" href="#home">Home</a></li>
    <li className="nav__item"><a className="nav__item-link" href="#events">Events</a></li>
    <li className="nav__item"><a className="nav__item-link" href="#involved">Get involved</a></li>
    <li className="nav__item"><a className="nav__item-link" href="#about">About us</a></li>
    <li className="nav__item"><a className="nav__item-link" href="#contact">Contact</a></li>
  </ul>
);

export default Nav;