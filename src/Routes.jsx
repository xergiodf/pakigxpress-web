import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard, NewOrder, Login, Signup } from './containers/'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />
    <Route exact path="/new" component={NewOrder} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
)

export default Routes
