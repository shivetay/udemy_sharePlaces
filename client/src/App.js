import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout/MainLayout';
import Home from './components/views/Home/Home';
import Users from './components/views/Users/Users';
import UserPlaces from './components/views/UserPlaces/UserPlaces';
import NewPlace from './components/views/NewPlace/NewPlace';

const App = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/:userId/places' component={UserPlaces} />
          <Route exact path='/places/new' component={NewPlace} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
};

export default App;
