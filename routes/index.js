import React from 'react'

import {Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'
import ApplicationMenu from '../container/ApplicationMenu'
import AppChat from '../container/AppChat'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={ApplicationMenu} />
    <Route path="/chat" component={AppChat}></Route>
  </Router>
)
