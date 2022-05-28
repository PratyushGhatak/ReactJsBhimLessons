import React from 'react'
import { useParams } from 'react-router-dom'

const Page1 = () => {
    const params=useParams()
    console.log(params)
  return (
    <div>Page1 {params.id}</div>
  )
}

export default Page1