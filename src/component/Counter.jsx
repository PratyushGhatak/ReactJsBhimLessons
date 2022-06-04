import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
  return (
    <>
    <div className='border border-info p-5'>

    
    <div className='row justify-content-center'>
        <div className='col-auto'><h3>Counter Value : {counter}</h3></div>
    </div>
    <div className='row justify-content-center'>
        <button className='btn btn-success col-3 m-3' children="increment by 1" onClick={()=>setCounter(curr=>curr+1)}/>
        <button className='btn btn-danger col-3 m-3' children="decrement by 1" onClick={()=>setCounter(curr=>curr-1)}/>
    </div>
    </div>
    </>
  )
}

export default Counter