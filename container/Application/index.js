import React from 'react'
import { browserHistory } from 'react-router'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        hello
        <button onClick={() => browserHistory.push('/a')} >GO TO A</button>
      </div>
    )
  }
}
