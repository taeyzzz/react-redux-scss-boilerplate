import React from 'react'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      msg: 'hello'
    }
  }

  gotologin(){
    console.log(this.props);
    this.props.history.push('/login')
  }

  gotodashboard(){
    this.props.history.push('/dashboard')
  }

  render() {
    console.log(this.state.msg);
    return (
      <div>
        Header
      </div>
    )
  }
}
