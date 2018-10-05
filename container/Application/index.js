import React from 'react'

export default class Application extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    console.log(this.props);
    return (
      <div id="a">
        Application
      </div>
    )
  }
}
