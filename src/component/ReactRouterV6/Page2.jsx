import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import withRouter from './HOC/withRouter'

class Page2 extends Component {
  render() {
    return (
      <>
      <Outlet/>
      <div>Page2</div>
      </>
    )
  }
}

export default withRouter(Page2)
