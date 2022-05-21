import React, { useEffect, useState } from 'react'

export const FunctionalComponent = () => {
    // const [value, setterFunc] = useState(initialvalue)
    const [counterValue, setCounterValue] = useState({
        value:0,
        action:"",
    })
    useEffect(() => {
      //do something
      console.log("Functional Component Mounted")
      //api calls
        // set timers 
      return () => {     // this block mimicks componentWillUnmount
        // cleanup function
        // cancel api calls
        // reset timer
      console.log("Functional Component UnMounted")

      }
    }, []) // useEffect with empty dependency array mimicks componentDidMount
    
    useEffect(() => {
        if(counterValue.action=="increment")
        {
            console.log(counterValue)
        }
    }, [counterValue.value])
    
    

  return (
    <div>
        <h2 style={{ textAlign: "center" }}>{counterValue.value}</h2>
        <button onClick={()=>{
                            setCounterValue((currentValue)=>{
                                return ({...currentValue,value:currentValue.value+1,action:"increment"})})
                                }
                        }
                        >Increment</button>
        <button onClick={
                        ()=>setCounterValue((currentValue)=>({...currentValue,value:currentValue.value-1,action:"decrement"}))    
                        }
                        >Decrement</button>
    </div>
  )
}
