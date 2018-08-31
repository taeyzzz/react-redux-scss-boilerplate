import React from 'react'

import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router-dom'
import history from './history';

import Application from '../container/Application'
import Login from '../container/Login'
import RegisterPage from '../container/RegisterPage'

export default (
  <Router history={history}>
    <div>
      <Route exact path="/" component={Application} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={RegisterPage} />
    </div>
  </Router>
)
