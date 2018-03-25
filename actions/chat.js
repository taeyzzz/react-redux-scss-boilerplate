import { post } from '../utils'
export const LOGIN_CHAT_REQUEST = "LOGIN_CHAT_REQUEST"
export const LOGIN_CHAT_SUCCESS = "LOGIN_CHAT_SUCCESS"
export const LOGIN_CHAT_FAILURE = "LOGIN_CHAT_FAILURE"
export const LOGIN_CHAT_IDLE = "LOGIN_CHAT_IDLE"
export const UPDATE_ACTIVE_USERS = "UPDATE_ACTIVE_USERS"

export const updateActiveUserSocket = (response) => {
  return {
    type: UPDATE_ACTIVE_USERS,
    payload: {
      newActiveUser: response.newUser
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
