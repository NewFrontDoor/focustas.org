// @flow
import React from 'react'
import cx from 'classnames';
import './Nav.css';

export type Props = {
  collapsed: boolean,
};

const Nav = ({ collapsed }: Props) => {
  const collapseClass = cx('nav__collapse', {
    'collapsed': collapsed,
  });
  
  return (
    <div className={collapseClass}>
      <ul className="nav">
        <li className="nav__item"><a className="nav__item-link" href="#home">Home</a></li>
        <li className="nav__item"><a className="nav__item-link" href="#events">Events</a></li>
        <li className="nav__item"><a className="nav__item-link" href="#involved">Get involved</a></li>
        <li className="nav__item"><a className="nav__item-link" href="#about">About us</a></li>
        <li className="nav__item"><a className="nav__item-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  );
};

export default Nav;