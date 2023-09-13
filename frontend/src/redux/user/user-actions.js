import { userActionTypes } from './user-types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (username, password) => ({
  type: userActionTypes.LOGIN,
  payload: {username, password}
});

export const logout = () => ({
  type: userActionTypes.LOGOUT
});

export const loginSuccess = (tokens) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: tokens
});

export const loginFailure = () => ({
  type: userActionTypes.LOGIN_FAILURE
});
export const signup = (username, password, email) => ({
  type: userActionTypes.SIGNUP,
  payload: {username, password, email}
});


export const signupSuccess = (tokens) => ({
  type: userActionTypes.SIGNUP_SUCCESS,
  payload: tokens
});

export const signupFailure = () => ({
  type: userActionTypes.SIGNUP_FAILURE
});

export const loginRequest = (username, password) => {
  return async (dispatch) => {
    dispatch(login(username, password));
    await fetch('http://localhost:8000/login/', {
      method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error occurred');
      }
    })
    .then(data => {
      // console.log(data);
      // console.log('hey joe this is the token', data.token)
      // Check if data.token exists and is a string
      if (data && typeof data.token === 'string') {

        dispatch(loginSuccess(data.token))
        localStorage.setItem('token', data.token)
        // window.location.replace('/')
      } else {
        console.error('Token is not defined or not a string:', data.token);
      }
    })
    .catch(dispatch(loginFailure));
  };
};

export const signupRequest = (username, password, email) => {
  return async (dispatch) => {
    dispatch(signup(username, password, email));
    await fetch('http://localhost:8000/signup/', {
      method: 'POST',
        headers: {
            'Content-Type':'application/x-www-form-urlencoded'
        },
        body: `username=${username}&password=${password}&email=${email}`
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error('Error occurred');
      }
    })
    .then(data => {
      // console.log(data);
      // console.log('hey joe this is the token', data.token)
      // Check if data.token exists and is a string
      if (data && typeof data.token === 'string') {

        dispatch(signupSuccess(data.token))
        localStorage.setItem('token', data.token)
        // window.location.replace('/')
      } else {
        console.error('Token is not defined or not a string:', data.token);
      }
    })
    .catch(dispatch(signupFailure));
  };
};
