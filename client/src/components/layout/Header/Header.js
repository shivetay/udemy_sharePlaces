import React from 'react';
import PropTypes from 'prop-types';

import './Header.scss';

const Header = ({ children }) => {
  return <header className='main-header'>{children}</header>;
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
