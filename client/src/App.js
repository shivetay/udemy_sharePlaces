import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Users from './components/views/Users/Users';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
