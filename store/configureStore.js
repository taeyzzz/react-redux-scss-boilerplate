import React from 'react'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { applyMiddleware, compose, createStore, combineReducers } from 'redux'

export default function configureStore(DevTools) {


  const createStoreWithMiddleware = applyMiddleware(thunk)
  const store = createStore(
    rootReducer,
    compose(
      createStoreWithMiddleware,
      DevTools.instrument()
    )
  )

  return store
}
