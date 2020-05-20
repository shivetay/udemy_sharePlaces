import React from 'react';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';

const MainLayout = ({ children }) => {
  return (
    <section>
      <Navigation />
      <main>{children}</main>
    </section>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
