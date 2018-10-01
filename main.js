import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'mobx-react';
import BirdStore from './store/BirdStore';
import AnimalStore from './store/AnimalStore';

import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import routes from './routes'

import './asset/app.scss'


const renderDOM = Component => {
  if(process.env.NODE_ENV === 'production'){
    render(
      <Provider store={store}>
        <Router history={history} children={routes} />
      </Provider>,
      document.getElementById('app')
    );
  }
  else{
    render(
      <Provider BirdStore={BirdStore} AnimalStore={AnimalStore}>
        {routes}
      </Provider>,
      document.getElementById('app')
    );
  }
}

renderDOM()
