import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Infinite from 'react-infinite'
import io from 'socket.io-client';
const socket = io('http://localhost:5555');

socket.on('connect', function(data) {
    socket.emit('join', 'Hello World from client');
 });



import {post} from '../../utils'

import './style.scss'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      listChat: [
        {
          author: 'initial',
          message: 'initial message'
        }
      ]
    }
  }

  generateListChat(){
    return (
      <div>
        {
          this.state.listChat.map(chat => {
            return (
              <div className="message-container">
                <div>{chat.author}</div>
                <div>{chat.message}</div>
              </div>
            )
          })
        }
      </div>
    )
  }

  render(){

    return(
      <div>
        { this.generateListChat() }
      </div>
    )
  }
}

export default App
