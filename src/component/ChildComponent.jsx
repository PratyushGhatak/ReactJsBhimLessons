import React, { Component } from 'react'

export default class ChildComponent extends Component {
    componentDidMount()
    {
        console.log("Child component mounted")
        // register api calls
        // timers
    }
    componentWillUnmount()
    {
        console.log("Child component unmounted")
        // api call cancellation
        // clean timers
    }
  render() {
    return (
      <div>Child</div>
    )
  }
}
