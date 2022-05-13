import './App.css';

import React, { Component, Pure } from 'react'
import ValueComponent from './component/ValueComponent';

export class App extends Component
{
  constructor(props)
  {
    // alo has its own `this`. `this` keyword in constructor points to App
    super(props)
    console.log("constructor this", this)
    this.state = {
      counterValue: 0,
    }
    // this.incrementByOne = this.incrementByOne.bind(this)
    // this.decrementByOne = this.decrementByOne.bind(this)

  }
  incrementByNumber = (param = 1) =>
  {
    console.log("test")
    //every function has its own `this` and this `this` is undefined

    this.setState({ ...this.state, counterValue: this.state.counterValue + param })
  }
  decrementByOne = () =>
  {
    this.setState({ ...this.state, counterValue: this.state.counterValue - 1 })
  }
  render()
  {
    console.log("rerendered App.js")
    return (
      <>

        <ValueComponent value={100} />
        <button onClick={() => this.incrementByNumber(2)}>increment by Number</button>
        <button onClick={this.decrementByOne}>decrement by 1</button>
      </>
    )
  }
}

export default App
