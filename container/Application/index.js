import React from 'react'
import BrowserHistory from '../../routes/history'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  gotologin(){
    BrowserHistory.push('/login')
  }

  render() {
    return (
      <div>
        Homepage
        <button onClick={() => this.gotologin()}>
          login
        </button>
      </div>
    )
  }
}
