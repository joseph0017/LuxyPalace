import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';
import { createStore } from 'redux';

// Define the initial state
const initialState = {
  authTokens: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
  user: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) : null,
  loading: true
};

// Define the reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        authTokens: action.payload.authTokens,
        user: action.payload.user
      };
    case 'LOGOUT':
      return {
        ...state,
        authTokens: null,
        user: null
      };
    default:
      return state;
  }
};

// Create the store
const store = createStore(reducer);

const UserAuth = () => {
  const [loading, setLoading] = useState(true);
  const history = useNavigate();

  const loginUser = async(e, username, password) => {
    e.preventDefault();

    console.log('logging in...')

    const response = await fetch('http://127.0.0.1:8000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    const data = await response.json()

    if (response.status === 200) {
        let tokens = {
            'userToken': data.token
        }

        let url = data.url

        // Dispatch the LOGIN action
        store.dispatch({
          type: 'LOGIN',
          payload: {
            authTokens: tokens,
            user: jwt_decode(tokens.userToken)
          }
        });

        localStorage.setItem('token', JSON.stringify(tokens))

        window.location.replace(url)
    } else {
        alert('Some Error occurred')
    }

  }

  const registerUser = async(e, username, password) => {
    e.preventDefault();

    console.log('logging in...')

    const response = await fetch('http://127.0.0.1:8000/signup/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username,
            password
        })
    })

    if(response.status === 201) {
        history.push('/login', {replace: true})
    } else {
        alert('could not login')
    }

  }

  const logoutUser = () => {

    // Dispatch the LOGOUT action
    store.dispatch({ type: 'LOGOUT' });

    localStorage.removeItem('token');
  };

  return (
      <div>
          <h1>User Authentication</h1>
          <button onClick={logoutUser}>Logout</button>
      </div>
  );
};
