import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Dashboard, NewOrder, Calculate, Login, Signup } from './containers/'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Dashboard} />
    <Route exact path='/new' component={NewOrder} />
    <Route exact path='/calculate' component={Calculate} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/signup' component={Signup} />
  </Switch>
)

export default Routes
