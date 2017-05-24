import { createReducer } from '../utils';
import {UPDATE_CLUSTERS} from "../actions/landing"
const initialState = {
  landing : 0
}

let actions = {
  [UPDATE_CLUSTERS]: (state, payload) => {
    return Object.assign({}, state, {"landing": state.landing +payload})
  }
}

export default createReducer(initialState, actions)
