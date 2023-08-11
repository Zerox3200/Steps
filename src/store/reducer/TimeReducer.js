import { Yearly } from "../actions/actions.js";

export const TimeReducer = (state = "", action) => {
    switch (action.type) {
        case Yearly:
            return state = action.payload;
        default:
            return state
    }
}