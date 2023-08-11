import { Rolling } from "../actions/leftAction";

export const DirectionReducer = (state = "", action) => {
    switch (action.type) {
        case Rolling:
            return state = action.payload;
        default:
            return state
    }
}