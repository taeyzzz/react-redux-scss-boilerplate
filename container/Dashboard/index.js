import React from 'react'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  gotohomepage(){
    this.props.history.push('/')
  }

  render() {
    console.log('dashboard');
    return (
      <div>
        Dashboard
        <button onClick={() => this.gotohomepage()}>
          go to home page
        </button>
      </div>
    )
  }
}
