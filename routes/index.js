import React from 'react'

import {Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import App from '../container/App'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}></Route>
  </Router>
    )
