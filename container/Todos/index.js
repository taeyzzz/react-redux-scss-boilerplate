import React from 'react'
import { browserHistory } from 'react-router'

export default class Todos extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Todo List
        <button onClick={() => browserHistory.push('/')} >Home</button>
      </div>
    )
  }
}
