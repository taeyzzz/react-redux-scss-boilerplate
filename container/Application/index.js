import React from 'react'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  gotologin(){
    console.log(this.props);
    this.props.history.push('/login')
  }

  gotodashboard(){
    this.props.history.push('/dashboard')
  }

  render() {
    return (
      <div>
        Homepage
        <button onClick={() => this.gotologin()}>
          login
        </button>
        <button onClick={() => this.gotodashboard()}>
          Dashboard
        </button>
      </div>
    )
  }
}
