import { paymentActionTypes } from "./payment-types"

const INITIAL_STATE = {
    success: false,
    error: false,
    payment: null
}

const paymentReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case paymentActionTypes.PAYMENT_SUCCESS:
            return {
                ...state,
                success: true,
                error: false,
                payment: action.payload
            }
        case paymentActionTypes.PAYMENT_FAILURE:
            return {
                ...state,
                success: false,
                error: true,
                payment: null
            }
        default:
            return state
    }
}

export default paymentReducer