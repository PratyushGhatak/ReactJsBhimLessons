import React, { memo } from 'react'

const ValueComponent = memo((props) =>
{
    const { value } = props
    console.log("Value Component Rerendered")
    return (
        <h2 style={{ textAlign: "center" }}>{value}</h2>
    )
})

export default ValueComponent