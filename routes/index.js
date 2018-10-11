import React from 'react'
import Loadable from 'react-loadable';

import {Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

const Application = Loadable({
  loader: () => import('../container/Application'),
  loading: () => null,
});
const Todos = Loadable({
  loader: () => import('../container/Todos'),
  loading: () => null,
});

const handUpdatePath = (arg) =>{
  window.scrollTo(0, 0);
}

export default (
  <Router history={browserHistory} onUpdate={handUpdatePath}>
    <Route path="/" component={Application} />
    <Route path="/todos" component={Todos} />
  </Router>
)
