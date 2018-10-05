import React from 'react'
import { Router, BrowserRouter, Route, Switch, Link, hashHistory, Redirect } from 'react-router-dom'

import Loadable from 'react-loadable';

import browserHistory from './history'

const Application = Loadable({
  loader: () => import('../container/Application'),
  loading: () => null,
});

const LoginPage = Loadable({
  loader: () => import('../container/LoginPage'),
  loading: () => null,
});

const RegisterPage = Loadable({
  loader: () => import('../container/RegisterPage'),
  loading: () => null,
});

const DashboardPage = Loadable({
  loader: () => import('../container/DashboardPage'),
  loading: () => null,
});

const Header = Loadable({
  loader: () => import('../container/Header'),
  loading: () => null,
});

const AppLayout = (props) => {
  return (
    <div>
      <Header {...props}/>
      <Switch>
        <Route exact path='/home' component={Application}/>
        <Route path='/home/dashboard' component={DashboardPage} />
      </Switch>
    </div>
  )
}

const Not = () => <h1>not foud</h1>

const handleRouteChanged = (arg) => {
  window.scrollTo(0, 0);
}

browserHistory.listen(arg => {
  handleRouteChanged(arg)
})

export default (
  <Router history={browserHistory}>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/home"/>} />
      <Route path='/home' component={AppLayout} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register/:token" component={RegisterPage} />
      <Route component={Not} />
    </Switch>
  </Router>
)
