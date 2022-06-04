import { DECREMENT_BY_NUMBER, DECREMENT_BY_ONE, INCREMENT_BY_NUMBER, INCREMENT_BY_ONE } from "./counterTypes"

export const incrementReduxCounterByOne=()=>
{
    return{type:INCREMENT_BY_ONE}
}

export const incrementReduxCounterByNumber=(data)=>
{
    return{type:INCREMENT_BY_NUMBER,payload:data}
}

export const decrementReduxCounterByOne=()=>
{
    return{type:DECREMENT_BY_ONE}
}

export const decrementReduxCounterByNumber=(data)=>
{
    return{type:DECREMENT_BY_NUMBER,payload:data}
}