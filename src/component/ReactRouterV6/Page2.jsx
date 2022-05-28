import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import withRouter from './HOC/withRouter'

class Page2 extends Component {
  render() {
    return (
      <>
      <div>Page2 {this.props.params.id}</div>
      <Outlet/>
      </>
    )
  }
}

export default withRouter(Page2)
