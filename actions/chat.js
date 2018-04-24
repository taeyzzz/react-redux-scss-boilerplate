import { post } from '../utils'
export const LOGIN_CHAT_REQUEST = "LOGIN_CHAT_REQUEST"
export const LOGIN_CHAT_SUCCESS = "LOGIN_CHAT_SUCCESS"
export const LOGIN_CHAT_FAILURE = "LOGIN_CHAT_FAILURE"
export const LOGIN_CHAT_IDLE = "LOGIN_CHAT_IDLE"
export const UPDATE_ACTIVE_USERS = "UPDATE_ACTIVE_USERS"
export const UPDATE_CHAT_LIST = "UPDATE_CHAT_LIST"

export const updateActiveUserSocket = (response) => {
  return {
    type: UPDATE_ACTIVE_USERS,
    payload: {
      newActiveUser: response.newUser
    }
  }
}

export const updateChatList = (response) => {
  return {
    type: UPDATE_CHAT_LIST,
    payload: {
      inCommingTxt: response.data.inCommingTxt,
      userName: response.data.userName
    }
  }
}

const loginRequest = () => {
  return {
    type: LOGIN_CHAT_REQUEST
  }
}
const loginSuccess = (response) => {
  return {
    type: LOGIN_CHAT_SUCCESS,
    payload: {
      listActiveUsers: response.userList
    }
  }
}
const loginFailure = () => {
  return {
    type: LOGIN_CHAT_FAILURE
  }
}
const loginIdle = () => {
  return {
    type: LOGIN_CHAT_IDLE
  }
}
export const loginChat = (userName, date) => {
  const data = {
    userName,
    date
  }
  return dispatch => {
    dispatch(loginRequest())
    return post('/chat/login', data)
      .then(res => {
        dispatch(loginSuccess(res))
      })
      .catch(err => {
        dispatch(loginFailure())
      })
  }
}

export const SEND_MESSAGE_REQUEST = 'SEND_MESSAGE_REQUEST'
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS'
export const SEND_MESSAGE_FAILURE = 'SEND_MESSAGE_FAILURE'
export const SEND_MESSAGE_IDLE = 'SEND_MESSAGE_REQUEST'

const sendMessageRequest = () => {
  return {
    type: SEND_MESSAGE_REQUEST
  }
}

const sendMessageSuccess = (res) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
  }
}

const sendMessageFailure = () => {
  return {
    type: SEND_MESSAGE_FAILURE
  }
}

const sendMessageIdle = () => {
  return {
    type: SEND_MESSAGE_IDLE
  }
}

export const sendMessage = (messageTxt, userName) => {
  const data = {
    messageTxt,
    userName
  }
  return dispatch => {
    dispatch(sendMessageRequest())
    return post("/chat/send-message", data)
      .then(res => {
        dispatch(sendMessageSuccess())
      })
      .catch(err => {
        console.log(err);
        dispatch(sendMessageFailure())
      })
  }
}
