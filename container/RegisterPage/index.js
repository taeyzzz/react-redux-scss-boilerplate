import React from 'react'
import BrowserHistory from '../../routes/history'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  gotohomepage(){
    BrowserHistory.push('/')
  }

  render() {
    return (
      <div>
        Register page
        <button onClick={() => this.gotohomepage()}>
          go to home page
        </button>
      </div>
    )
  }
}
