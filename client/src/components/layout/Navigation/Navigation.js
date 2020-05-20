import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import NavigationLinks from './NavigationLinks';

import './Navigation.scss';

function Navigation() {
  return (
    <Header>
      <button className='main-navigation__menu-btn'>
        <span />
        <span />
        <span />
      </button>
      <h1 className='main-navigation__title'>
        <Link to='/'>Your Places</Link>
      </h1>
      <nav>
        <NavigationLinks />
      </nav>
    </Header>
  );
}

export default Navigation;
