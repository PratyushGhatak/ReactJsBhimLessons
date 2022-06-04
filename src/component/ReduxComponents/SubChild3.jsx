import React from 'react'
import { useSelector } from 'react-redux'

const SubChild3 = () => {
    const counter=useSelector(state=>state.counterValue)
  return (
    <div className='border border-warning p-5'>
        SubChild of SubChild2 , {counter}
    </div>
  )
}

export default SubChild3