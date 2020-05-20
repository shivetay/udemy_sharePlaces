import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './SideMenu.scss';

const SideMenu = ({ children }) => {
  const content = <aside className='side-drawer'>{children}</aside>;

  return ReactDOM.createPortal(content, document.getElementById('side-nav'));
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

export default SideMenu;
