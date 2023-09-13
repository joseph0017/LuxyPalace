import { useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

const UserAuth = () => {
  const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);

  const [user, setUser] = useState(() => localStorage.getItem('token')
  ? jwt_decode(localStorage.getItem('token')): null)

  const [loading, setLoading] = useState(true)

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
        setAuthTokens(tokens)
        setUser(jwt_decode(tokens.userToken))
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
    setAuthTokens(null)
    setUser(null)
    localStorage.removeItem('token')
    history.push('/', {replace: true})
  }

  const logoutUserSafe = () => {
    useNavigate.push('/')
  }

  useEffect(() => {
    if (authTokens) {
        setUser(jwt_decode(authTokens.userToken))
    }
    setLoading(false)
  }, [authTokens, loading])
};

export default UserAuth;
