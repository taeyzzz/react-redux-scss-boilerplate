import React from 'react';
import { render } from 'react-dom'

import routes from './routes'

import './asset/app.scss'

const renderDOM = Component => {
  if(process.env.NODE_ENV === 'production'){
    render(
      routes
      ,
      document.getElementById('app')
    );
  }
  else{
    render(
      routes
      ,
      document.getElementById('app')
    );
  }
}

renderDOM()
