import React from 'react';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Infinite from 'react-infinite'

import {post} from '../../utils'

import './style.scss'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      name : 'no name',
      friend: 'no friend'
    }
  }

  getName(){
    post('/needresult',{name: 'taey',friend: 'doing'})
      .then(res => {
        this.setState({
          name: res.name,
          friend: res.friend
        })
      })
  }

  render(){

    return(
      <div>
        <div>bbbb: {this.state.name}</div>
        <div>friend: {this.state.friend}</div>
        <button onClick={() => this.getName()}>get Result</button>
      </div>
    )
  }
}

export default App
