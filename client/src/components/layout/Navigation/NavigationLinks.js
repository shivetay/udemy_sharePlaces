import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationLinks.scss';

const NavigationLinks = () => {
  return (
    <ul className='nav-links'>
      <li>
        <NavLink exact to='/users'>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to='/u1/places'>My Places</NavLink>
      </li>
      <li>
        <NavLink to='/places/new'>Add Places</NavLink>
      </li>
      {/* <li>
        <NavLink to='/auth'>Login</NavLink>
      </li> */}
    </ul>
  );
};

export default NavigationLinks;
