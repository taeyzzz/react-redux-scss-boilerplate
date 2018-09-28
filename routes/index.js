import React from 'react'

import { BrowserRouter as Router, Route, IndexRoute, Link, hashHistory } from 'react-router-dom'
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
      <Route path={match.url} component={Footer} />
    </div>
  )
}

const dashboardRoute = ({ match }) => {
  return (
    <div>
      <Route path={match.url} component={Header} />
      <Route exact path={match.url} component={Dashboard} />
      <Route path={match.url} component={Footer} />
    </div>
  )
}


export default (
  <Router>
    <div>
      <Route exact path="/" component={applicationRoute} />
      <Route path="/dashboard" component={dashboardRoute} />
      <Route path="/login" component={LoginPage} />
      <Route path="/register/:token" component={RegisterPage} />
    </div>
  </Router>
)
