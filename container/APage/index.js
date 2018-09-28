import React from 'react'
import { browserHistory } from 'react-router'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        A Page
        <button onClick={() => browserHistory.push('/b')} >GO TO B</button>
      </div>
    )
  }
}
