import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrementReduxCounterByNumber, decrementReduxCounterByOne, incrementReduxCounterByNumber, incrementReduxCounterByOne } from '../../redux/counterState/counterActions'

class SubChild1 extends Component {
  render() {

    return (
      <>
      <div className='border border-success p-5'>
        <div>
          SubChild of Child1, {this.props.counterValue}
          <button 
          onClick={()=>this.props.decrementReduxCounterByNumber(5)}
          >Decrement by 5</button>
        </div>
      </div>
      {/* <button onClick={()=>this.props.setCounter(curr=>curr+1)} >+</button> */}
      </>
    )
  }
}

const mapStateToProps=(state)=>
    {
        return {counterValue:state.counterValue}
    }
const mapDispatchToProps=(dispatch)=>
{
    return {
      // incrementReduxCounterByOne:()=>dispatch(incrementReduxCounterByOne()),
      // decrementReduxCounterByOne:()=>dispatch(decrementReduxCounterByOne()),
      fun1:(number)=>dispatch(incrementReduxCounterByNumber(number)),
      decrementReduxCounterByNumber:(number)=>dispatch(decrementReduxCounterByNumber(number)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SubChild1)

// let obj={
// 'key1':function hi(){console.log("hi")}
// }
// obj.key1()