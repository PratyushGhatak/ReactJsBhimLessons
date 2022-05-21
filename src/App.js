import './App.css';

import React, { Component, Pure } from 'react'
import ValueComponent from './component/ValueComponent';
import ChildComponent from './component/ChildComponent';
import { FunctionalComponent } from './component/FunctionalComponent';
const arr=[{id:1,val:1},{id:2,val:2},{id:3,val:3},{id:4,val:4}]
export class App extends Component
{
  constructor(props)
  {
    // alo has its own `this`. `this` keyword in constructor points to App
    super(props)
    console.log("constructor")
    this.state = {
      counterValue: 0,
      showChild:true,
    }
    // this.incrementByOne = this.incrementByOne.bind(this)
    // this.decrementByOne = this.decrementByOne.bind(this)

  }
  incrementByNumber = (param = 1) =>
  {
    //every function has its own `this` and this `this` is undefined

    this.setState({ ...this.state, counterValue: this.state.counterValue + param },
      ()=>
      {
        console.log("value of counter after increment",this.state.counterValue)
      })
    
  }

  decrementByOne = async() =>
  {
    await this.setState({ ...this.state, counterValue: this.state.counterValue - 1 })
    console.log("value of counter after decrement",this.state.counterValue)
  }
  componentDidMount()
  {
  console.log("componentDidMount")
  }

  render()
  {
    console.log("rerendered App.js")
    return (
      <>
        {
         arr.length>0
         ? arr.map((el,index)=><h1 key={el.id}>{el.val}</h1>)
         :
         <>
         </>
        }
        {/* <ValueComponent value={this.state.counterValue} /> */}
        {/* {this.state.showChild && <ChildComponent/>} */}
        {/* <button onClick={() => this.incrementByNumber(1)}>increment by 1</button> */}
        {/* <button onClick={this.decrementByOne}>decrement by 1</button> */}
        {/* {this.state.showChild ?<FunctionalComponent/>:<></>} */}
        {/* <button onClick={()=>this.setState({...this.state,showChild:false})}>Hide Functional Component</button> */}
      </>
    )
  }
}

export default App
