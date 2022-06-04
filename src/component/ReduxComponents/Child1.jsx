import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Counter from '../Counter'
import SubChild1 from './SubChild1'
import SubChild2 from './SubChild2'


const Child1 = () => {
//   const globalState = useSelector(state=>state)
//   console.log(globalState)
  return (
    <div className='border border-primary p-5'>
        <div>Child 1</div>
        <Counter/>
        <SubChild1/>
        <SubChild2 />
    </div>
  )
}

export default Child1