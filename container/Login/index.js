import React from 'react'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  gotoregister(){
    this.props.history.push('/register/taey')
  }

  render() {
    return (
      <div>
        Login page
        <button onClick={() => this.gotoregister()}>
          register
        </button>
      </div>
    )
  }
}
