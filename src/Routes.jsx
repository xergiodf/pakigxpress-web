import React from 'react'
import { Route, Switch } from 'react-router-dom'
import WithAuthorization from './containers/WithAuthorization'
import { Dashboard, NewOrder, Calculate, Login, Signup } from './containers/'

const withAuthorization = WrappedComponent => (
  <WithAuthorization component={WrappedComponent} />
)

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => withAuthorization(Dashboard)} />
    <Route
      exact
      path="/calculate"
      render={() => withAuthorization(Calculate)}
    />
    <Route exact path="/login" component={Login} />
    <Route exact path="/signup" component={Signup} />
  </Switch>
)

export default Routes
