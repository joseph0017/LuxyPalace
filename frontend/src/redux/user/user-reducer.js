import { userActionTypes } from "./user-types"


const INITIAL_STATE = {
    currentUser: null,
    isUserLoggedIn: false,
    isAuthenticated: localStorage.getItem('token') ? true : false,
    user: null
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case userActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        case userActionTypes.LOGIN_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case userActionTypes.LOGIN_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false
            }
        case userActionTypes.LOGIN:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
            }
        case userActionTypes.SIGNUP_SUCCESS:
            return {
                ...state,
                isUserLoggedIn: true
            }
        case userActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                isUserLoggedIn: false
            }
        case userActionTypes.SIGNUP:
            return {
                ...state,
                user: action.payload,
                isAuthenticated: true
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