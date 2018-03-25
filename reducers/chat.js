import {
  LOGIN_CHAT_REQUEST,
  LOGIN_CHAT_SUCCESS,
  LOGIN_CHAT_FAILURE,
  LOGIN_CHAT_IDLE,
  UPDATE_ACTIVE_USERS
} from '../actions/chat'

const initialState = {
  activeUser: []
}

const chat = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_CHAT_SUCCESS: {
      return Object.assign({}, state, {
        activeUser: action.payload.listActiveUsers
      })
    }
    case UPDATE_ACTIVE_USERS: {
      let tempActiveUsers = state.activeUser
      tempActiveUsers.push({
        userName: action.payload.newActiveUser.userName,
        date: action.payload.newActiveUser.date
      })
      return Object.assign({}, state, {
        activeUser: tempActiveUsers
      })
    }
    default:
      return state
  }
}
export default chat
