import React from 'react'
import { browserHistory } from 'react-router'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        B Page
        <button onClick={() => browserHistory.push('/c')} >GO TO C</button>
      </div>
    )
  }
}
