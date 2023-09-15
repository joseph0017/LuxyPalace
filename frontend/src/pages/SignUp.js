import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupRequest } from '../redux/user/user-actions';

const SignUp = ({user, signup}) => {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [password2, setPassword2] = useState('');
const [email, setEmail] = useState('');

  const navigate =  useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      alert('passwords do not match')
    } else {
      signup(username, password, email);
    navigate('/')

    }
  };

  return (
    <div>
      <section className='bg-gray-50 dark:bg-gray-900'>
        <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
          <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
            <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
              <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Create an account</h1>
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
                    placeholder='username'
                    onChange={(e) => setUsername(e.target.value, console.log(e.target.value))}
                    required 
                    />
                </div>
                <div>
                  <label htmlFor='email' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Your email
                  </label>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    placeholder='name@company.com'
                    onChange={(e) => setEmail(e.target.value, console.log(e.target.value))}
                    required 
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
                    onChange={(e) => setPassword(e.target.value, console.log(e.target.value))}
                    required />
                </div>
                <div>
                  <label htmlFor='confirm-password' className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
                    Confirm password
                  </label>
                  <input
                    type='confirm-password'
                    name='confirm-password'
                    id='confirm-password'
                    placeholder='••••••••'
                    className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                    onChange={(e) => setPassword2(e.target.value, console.log(e.target.value))}
                    required />
                </div>
                <div className='flex items-start'>
                </div>
                <button type='submit' className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-slate-400 rounded-lg hover:bg-slate-300 focus:outline-none focus:ring focus:ring-slate-200 focus:ring-opacity-50'>
                  Create an account
                </button>
                <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                  Already have an account?
                  <Link to='/login' className='font-medium text-primary-600 hover:underline dark:text-primary-500'> Login here
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

const mapStateToProps = (state) => {
  return {
    user: state.user.user
  };
};

function mapDispatchToProps (dispatch) {
  return {
    signup: (username, password, email) => dispatch(signupRequest(username, password, email))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
