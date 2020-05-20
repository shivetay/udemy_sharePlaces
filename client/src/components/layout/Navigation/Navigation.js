import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import NavigationLinks from './NavigationLinks';
import SideMenu from './SideMenu';

import './Navigation.scss';

function Navigation() {
  return (
    <React.Fragment>
      <SideMenu>
        <nav className='main-navigation__drawer-nav'>
          <NavigationLinks />
        </nav>
      </SideMenu>
      <Header>
        <button className='main-navigation__menu-btn'>
          <span />
          <span />
          <span />
        </button>
        <h1 className='main-navigation__title'>
          <Link to='/'>Your Places</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavigationLinks />
        </nav>
      </Header>
    </React.Fragment>
  );
}

export default Navigation;
