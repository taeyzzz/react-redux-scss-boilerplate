import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import landing from './landing'
const rootReducer = combineReducers({
  routing: routerReducer, landing
})

export default rootReducer;
