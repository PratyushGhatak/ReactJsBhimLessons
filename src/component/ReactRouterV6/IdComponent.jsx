import React from 'react'
import { useParams } from 'react-router-dom'

const IdComponent = () => {
    const params= useParams()
  return (
    <div>{params.id}</div>
  )
}

export default IdComponent