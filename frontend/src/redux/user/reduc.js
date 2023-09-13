import { userActionTypes } from "./user-types"


const INITIAL_STATE = {
    currsentUser: null,
    isFetching: false,
    isAuthenticated: localStorage.getItem('token') ? true : false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currsentUser: action.payload
            }
        case userActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
                user: action.credentials
            }
        case userActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: true,
                errorMessage: ''
            }
        case userActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isAuthenticated: false,
                errorMessage: action.errMessage
            }
        case userActionTypes.LOGOUT_SUCCESS:
            return {
                ...state,
                isFetching: true,
                isAuthenticated: false,
            }
            default:
                return state
    }
}

export default userReducer