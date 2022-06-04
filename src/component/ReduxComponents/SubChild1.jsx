import React, { Component } from 'react'
import { connect } from 'react-redux'
import { decrementReduxCounterByNumber, decrementReduxCounterByOne, incrementReduxCounterByNumber, incrementReduxCounterByOne } from '../../redux/counterState/counterActions'

class SubChild1 extends Component {
  render() {

    return (
      <>
      {/* <button onClick={()=>this.props.incrementReduxCounterByNumber(5)}>+</button> */}
      <div className='border border-success p-5'>SubChild of Child1</div>
      </>
    )
  }
}

const mapStateToProps=(state)=>
    {
        return {counterState:state.counterState}
    }
const mapDispatchToProps=(dispatch)=>
{
    return {
      incrementReduxCounterByOne:()=>dispatch(incrementReduxCounterByOne()),
      decrementReduxCounterByOne:()=>dispatch(decrementReduxCounterByOne()),
      incrementReduxCounterByNumber:(number)=>dispatch(incrementReduxCounterByNumber(number)),
      decrementReduxCounterByNumber:(number)=>dispatch(decrementReduxCounterByNumber(number)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SubChild1)
