import { Email_Submit, Name_Submit, Phone_Submit } from "../actions/FormActions";

export const FormReducer = (state = [], action) => {
    switch (action.type) {
        case Name_Submit:
            return [...state, action.payload];
        case Email_Submit:
            return [...state, action.payload];
        case Phone_Submit:
            return [...state, action.payload];
        default:
            return [...state]
    }
}