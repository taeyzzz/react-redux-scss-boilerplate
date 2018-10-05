import React from 'react'

import { BrowserRouter as Router, Route, Switch, Link, hashHistory } from 'react-router-dom'
import * as AA from 'react-router-dom'
import Application from '../container/Application'
import LoginPage from '../container/Login'
import RegisterPage from '../container/RegisterPage'
import Dashboard from '../container/Dashboard'

const Header = () => {
  return (
    <div>
      Header
    </div>
  )
}

const Footer = () => {
  console.log('render');
  return (
    <div>
      Footer
    </div>
  )
}

const applicationRoute = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={Header} />
      <Route exact path={match.url} component={Application} />
      <Footer />
    </div>
  )
}

const dashboardRoute = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={Header} />
      <Route exact path={match.url} component={Dashboard} />
      <Footer />
    </div>
  )
}

const NotFound = () => {
  return (
    <div>
      not found
    </div>
  )
}


export default (
  <Router>
    <Switch>
      <Route exact path="/" component={applicationRoute} />
      <Route path="/dashboard" component={dashboardRoute} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register/:token" component={RegisterPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
