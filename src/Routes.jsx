import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard, NewOrder } from './containers/';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/new" component={NewOrder} />
  </Switch>
);

export default Routes;
