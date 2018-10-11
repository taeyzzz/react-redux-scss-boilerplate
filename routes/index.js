import React from 'react'
import Loadable from 'react-loadable';

import {Router, Route, IndexRoute, Link, browserHistory, hashHistory } from 'react-router'

const Application = Loadable({
  loader: () => import('../container/Application'),
  loading: () => null,
});
const APage = Loadable({
  loader: () => import('../container/APage'),
  loading: () => null,
});
const BPage = Loadable({
  loader: () => import('../container/BPage'),
  loading: () => null,
});
const CPage = Loadable({
  loader: () => import('../container/CPage'),
  loading: () => null,
});

const handUpdatePath = (arg) =>{
  window.scrollTo(0, 0);
}

export default (
  <Router history={browserHistory} onUpdate={handUpdatePath}>
    <Route path="/" component={Application} />
    <Route path="/a" component={APage} />
    <Route path="/b" component={BPage} />
    <Route path="/c" component={CPage} />
  </Router>
)
