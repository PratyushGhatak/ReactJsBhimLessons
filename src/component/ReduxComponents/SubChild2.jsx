import React from 'react'
import Child2 from './SubChild1'
import SubChild3 from './SubChild3'

const SubChild2 = () => {
  return (
    <div className='border border-danger p-5'>
        <div>

        SubChild2 of Child1
        </div>
        <SubChild3/>
    </div>
  )
}

export default SubChild2