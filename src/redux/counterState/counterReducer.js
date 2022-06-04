import { DECREMENT_BY_NUMBER, DECREMENT_BY_ONE, INCREMENT_BY_NUMBER, INCREMENT_BY_ONE } from "./counterTypes"

const initialState = {counterValue:0}

export const counterReducer= (state = initialState, action) => {
  switch (action.type) {

  case INCREMENT_BY_ONE:
    return { ...state, counterValue:state.counterValue+1 }
  case DECREMENT_BY_ONE:
    return { ...state, counterValue:state.counterValue-1 }
  case INCREMENT_BY_NUMBER:
    return { ...state, counterValue:state.counterValue+action.payload }
  case DECREMENT_BY_NUMBER:
    return { ...state, counterValue:state.counterValue-action.payload }

  default:
    return state
  }
}
