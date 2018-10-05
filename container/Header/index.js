import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Header extends React.Component{
  constructor(props) {
    super(props)
  }

  componentDidMount(){
    console.log('mounted Header');
  }

  render() {
    console.log('render header');
    return (
      <div className="block">
        Header
        <button onClick={() => this.props.history.push('/home')}>
          goto home
        </button>
        <button onClick={() => this.props.history.push('/home/dashboard')}>
          goto dashboard
        </button>
        <button onClick={() => this.props.history.push('/login')}>
          goto login
        </button>
        <button onClick={() => this.props.history.push('/register/taey')}>
          goto register
        </button>
        <a href="#a">aaa</a>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
 return bindActionCreators(Object.assign({}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
