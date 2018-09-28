import React from 'react'
import { browserHistory } from 'react-router'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        CPage
        <button onClick={() => browserHistory.push('/')} >HOME</button>
      </div>
    )
  }
}
