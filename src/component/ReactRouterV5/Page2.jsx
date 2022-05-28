import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Page2 extends Component {
  render() {
    return (
      <div>Page2 {this.props.match.params.id}</div>
    )
  }
}

export default withRouter(Page2)