import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import './SideMenu.scss';

const SideMenu = ({ children, onClick }) => {
  const content = (
    <aside className='side-drawer' onClick={onClick}>
      {children}
    </aside>
  );

  return ReactDOM.createPortal(content, document.getElementById('side-nav'));
};

SideMenu.propTypes = {
  children: PropTypes.node,
};

export default SideMenu;
