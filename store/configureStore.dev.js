import React from 'react'
import rootReducer from '../reducers'
import { syncHistory } from 'react-router-redux'

import thunk from 'redux-thunk'

import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import createLogger from 'redux-logger'

export default function configureStore(initialState, history, DevTools) {
  const middleware = syncHistory(history)
  const createStoreWithMiddleware = applyMiddleware(thunk, middleware)
  const store = createStore(rootReducer,
    compose(
      createStoreWithMiddleware,
      DevTools.instrument()
    )
  )

  if(module.hot) {

    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })

    module.hot.accept('../actions/user', () => {
    })
  }

  return store
}
