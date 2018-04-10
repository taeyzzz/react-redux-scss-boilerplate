import React from 'react'

import {Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import Application from '../container/Application'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Application} />
  </Router>
)
