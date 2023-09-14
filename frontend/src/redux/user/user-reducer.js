import { userActionTypes } from "./user-types"


const INITIAL_STATE = {
    isUserLoggedIn: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
                isAuthenticated: true,
            }
        case userActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false,
                isAuthenticated: false,
            }
        case userActionTypes.LOGIN:
            return {
                ...state,
                user: action.payload,
            }
        case userActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true,
                isAuthenticated: true,
            }
        case userActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false,
                isAuthenticated: false,
            }
        case userActionTypes.SIGNUP:
            return {
                ...state,
                user: action.payload,
            }
        case userActionTypes.LOGOUT:
            return {
                ...state,
                user: null,
                isAuthenticated: false
            }
            default:
                return state
    }
}

export default userReducer