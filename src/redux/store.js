import { createStore } from "redux";
import { counterReducer } from "./counterState/counterReducer";

export const store=createStore(counterReducer)