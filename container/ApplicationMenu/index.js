import React from 'react'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as ApplicationActions from '../../actions/application'

import './style.scss'

class ApplicationMenu extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      menuList: [
        {
          label: 'Application-Chat',
          route: 'chat'
        }
      ]
    }
  }

  componentWillMount() {
    this.props.connectSocket()
  }

  navigate(route) {
    browserHistory.push(route)
  }

  generateMenuList() {
    let listMenu = this.state.menuList.map(obj => {
      return (
        <span className="list-menu" onClick={() => this.navigate(obj.route)}>
          {obj.label}
        </span>
      )
    })
    return (
      <div className="list-menu-container">
        {listMenu}
      </div>
    )
  }

  render() {
    return (
      <div className="menu-page">
        <div className="menu-container">
          <div className="menu-header">
            Menu
          </div>
          { this.generateMenuList() }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({}, ApplicationActions), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ApplicationMenu)
