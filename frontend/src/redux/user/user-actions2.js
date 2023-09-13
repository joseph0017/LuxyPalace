import { userActionTypes } from './user-types';

export const setCurrentUser = (user) => ({
  type: userActionTypes.SET_CURRENT_USER,
  payload: user
});

export const requestLogin = (credentials) => ({
  type: userActionTypes.LOGIN_REQUEST,
  payload: credentials,
  isFetching: true,
  isAuthenticated: false
});

export const receiveLogin = (user) => ({
  type: userActionTypes.LOGIN_SUCCESS,
  payload: user,
  isFetching: false,
  isAuthenticated: true
});

export const loginError = (errMessage) => ({
  type: userActionTypes.LOGIN_FAILURE,
  payload: errMessage,
  isFetching: false,
  isAuthenticated: false
});

export const requestLogout = () => ({
  type: userActionTypes.LOGOUT_REQUEST,
  isFetching: true,
  isAuthenticated: true
});

export const receiveLogout = () => ({
  type: userActionTypes.LOGOUT_REQUEST,
  isFetching: false,
  isAuthenticated: false
});

export const loginUser = (credentials) => {
  let config = {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${credentials.username}&password=${credentials.password}`
  };

  return (dispatch) => {
    dispatch(requestLogin(credentials));

    return fetch('http://127.0.0.1:8000/login/', config)
      .then((response) => response.json()
        .then(user => ({user, response})))
      .then(({user, response}) => {
        if (!response.ok) {
          dispatch(loginError(user.errMessage));
          return Promise.reject(user);
        } else {
          localStorage.setItem('token', user.token);

          dispatch(receiveLogin(user));
        }
      }).catch(err => console.log('error', err));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    dispatch(requestLogout());
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  };
};
