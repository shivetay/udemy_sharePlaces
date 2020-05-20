import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Header from '../Header/Header';
import NavigationLinks from './NavigationLinks';
import SideMenu from './SideMenu';
import Backdrop from '../../common/Backdrop/Backdrop';

import './Navigation.scss';

function Navigation() {
  const [sideNavOpen, setSideNavOpen] = useState(false);

  const openSideNav = () => {
    setSideNavOpen(true);
  };

  const closeSideNav = () => {
    setSideNavOpen(false);
  };

  return (
    <React.Fragment>
      {sideNavOpen && <Backdrop onClick={closeSideNav} />}
      {sideNavOpen && (
        <SideMenu onClick={closeSideNav}>
          <nav className='main-navigation__drawer-nav'>
            <NavigationLinks />
          </nav>
        </SideMenu>
      )}
      <Header>
        <button className='main-navigation__menu-btn' onClick={openSideNav}>
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
