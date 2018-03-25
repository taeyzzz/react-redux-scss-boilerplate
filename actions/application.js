import io from 'socket.io-client';
import { updateActiveUserSocket } from './chat'

export const connectSocket = () => {
  return dispatch => {
    const socket = io('http://localhost:5555');
    socket.on('connect', (data) => {
      console.log(data);
    })
    socket.on('new-active-user', (data) => {
      dispatch(updateActiveUserSocket(data))
    })
  }
}
