import {
  LOGIN_CHAT_REQUEST,
  LOGIN_CHAT_SUCCESS,
  LOGIN_CHAT_FAILURE,
  LOGIN_CHAT_IDLE,
  UPDATE_ACTIVE_USERS,
  UPDATE_CHAT_LIST
} from '../actions/chat'

const initialState = {
  activeUser: [],
  chatHistory: []
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
    case UPDATE_CHAT_LIST: {
      const tempChatHistory = state.chatHistory
      tempChatHistory.push({
        userName: action.payload.userName,
        text: action.payload.inCommingTxt
      })
      return Object.assign({}, state, {
        chatHistory: tempChatHistory
      })
    }
    default:
      return state
  }
}
export default chat
