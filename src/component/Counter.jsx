import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementReduxCounterByOne, incrementReduxCounterByOne } from '../redux/counterState/counterActions'

const Counter = () => {
    const counterValue=useSelector(state=>state.counterValue)
    const dispatch=useDispatch()
    
  return (
    <>
    <div className='border border-info p-5'>

    
    <div className='row justify-content-center'>
        <div className='col-auto'><h3>Counter Value : {counterValue}</h3></div>
    </div>
    <div className='row justify-content-center'>
        <button className='btn btn-success col-3 m-3' children="increment by 1" onClick={()=>dispatch(incrementReduxCounterByOne())}/>
        <button className='btn btn-danger col-3 m-3' children="decrement by 1" onClick={()=>dispatch(decrementReduxCounterByOne())}/>
    </div>
    </div>
    </>
  )
}

export default Counter

/*

dispatch->action->reducer->(oldState->newState)
*/