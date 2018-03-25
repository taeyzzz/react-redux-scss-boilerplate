import React from 'react';
import moment from 'moment'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ChatActions from '../../actions/chat'


import './style.scss'


class AppChat extends React.Component{
  constructor(props){
    super(props)
    this.state={
      userList: [],
      allHistoryChat: [
        {
          userName: 'hello',
          text: 'hello world'
        }
      ],
      inputText: '',
      userName: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    this.updateActiveUser(nextProps.chat.activeUser)
  }

  updateActiveUser(listActiveUsers){
    this.setState({
      userList: listActiveUsers
    })
  }

  componentDidMount() {
    let userName = prompt('Please type username', '')
    if(userName){
      this.setState({
        userName: userName
      })
      this.login(userName)
    }
  }

  login(userName) {
    this.props.loginChat(userName, new Date())
  }

  getAllChat() {
    let allChat = this.state.allHistoryChat.map(obj => {
      return (
        <div className="chat-detail-container">
          <div className="chat-detail-header">
            {obj.userName}
          </div>
          <div className="chat-detial-text">
            {obj.text}
          </div>
        </div>
      )
    })
    return (
      <div className="history-chat-container">
        {allChat}
      </div>
    )
  }

  getAllActiveUser() {
    let allActiveUsers = this.state.userList.map(obj => {
      return(
        <div className="active-user">
          {obj.userName} : {moment(obj.date).format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      )
    })
    return (
      <div className="active-user-list">
        {allActiveUsers}
      </div>
    )
  }

  handleIputChanged(text) {
    this.setState({
      inputText: text
    })
  }

  sendMessage() {
    alert(this.state.inputText)
    this.setState({
      inputText: ''
    })
  }


  render(){
    return(
      <div className="chat-page">
        <div className="all-chat-container">
          <div className="all-chat-list-container">
            { this.getAllChat() }
          </div>
          <div className="active-user-container">
            { this.getAllActiveUser() }
          </div>
        </div>
        <div className="chat-input-container">
          <input type="text" value={this.state.inputText} onChange={(e) => this.handleIputChanged(e.target.value)}/>
          <button onClick={() => this.sendMessage()}>Send</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, ChatActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AppChat)
