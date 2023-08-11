import { combineReducers, createStore } from "redux";
import { TimeReducer } from "./reducer/TimeReducer.js";
import { FormReducer } from "./reducer/FormReducer.js";
import { DirectionReducer } from "./reducer/leftReducer.js";

const Reducers = combineReducers({ Form: FormReducer, Time: TimeReducer, Direction: DirectionReducer })
export const stateStore = createStore(Reducers);
