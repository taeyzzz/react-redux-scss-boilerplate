import React from 'react'
import { browserHistory } from 'react-router'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Application
        <button onClick={() => browserHistory.push('/todos')} >Todo List</button>
      </div>
    )
  }
}
