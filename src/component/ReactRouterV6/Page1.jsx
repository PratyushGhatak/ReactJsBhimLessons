import React from 'react'
import { useParams } from 'react-router-dom'

const Page1 = () => {
    const params=useParams()
    console.log(params)
  return (
    <div>Page1</div>
  )
}

export default Page1