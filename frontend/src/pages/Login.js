import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '../redux/user/user-actions';

const Login = ({user, login,}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(username, password)
    navigate('/')
  }

  return (
    <div>
      {/* <p onClick={handleLogout}>LOGOUT HERE!!</p> */}
      <section className='bg-gray-50 dark:bg-gray-900 mt-32 md:mt-0'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Login to Continue</h1>
              <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                <div>
                  <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your username
                  </label>
                  <input
                    type='text'
                    name='username'
                    id='username'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='Your username'
                    required='' 
                    onChange={(e) => setUsername(e.target.value, console.log(e.target.value))}
                    />
                </div>
                <div>
                  <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Password
                  </label>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    required=''
                    onChange={(e) => setPassword(e.target.value, console.log(e.target.value))}
                     />
                </div>
                <div className='flex items-start'>
                </div>
                <button type='submit' className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-400 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-opacity-50'
                >
                  Log In
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Don't have an account?
                  <Link to='/register' className='font-medium text-primary-600 hover:underline dark:text-primary-500'> Sign up here!
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function mapStateToProps (state) {
  return {
    user: state.user.user
  };
}

function mapDispatchToProps (dispatch) {
  return {
    login: (username, password) => dispatch(loginRequest(username, password)),
    logoutUser: () => dispatch(logoutRequest())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
