import React from 'react';
import customerSupport from '../images/pexels-mikhail.jpg';
import address from '../images/pin.png';
import Phone from '../images/phone-call.png';
import email from '../images/email.png';

const Contact = () => {
  return (
    <section className='mb-72'>
      <h1 className='text-6xl font-bold mt-14'>CONTACT US</h1>
      <div className=' lg:py-12 lg:flex lg:justify-center mt-20'>
        <div className='overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl'>
          <div className='lg:w-1/2'>
            <img className='bg-cover lg:h-full' src={customerSupport} alt='customer support' />
          </div>
          <div className='max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2'>
            <h2 className='text-2xl mt-10 font-semibold text-gray-800 dark:text-white md:text-3xl'>CUSTOMER SUPPORT</h2>
            <p className='mt-10 text-gray-500 dark:text-gray-300'>
              Have an Issue? We have a reliable customer support service which is availble 24/7. Kindly reach out to us to get you sorted.
            </p>
          </div>
        </div>
      </div>
      <section className='bg-white dark:bg-gray-900'>
        <div className=' grid grid-cols-1 gap-8 px-4 py-12 mx-auto lg:grid-cols-3 lg:shadow-md rounded-lg'>
          <div className='flex flex-col items-center max-w-lg mx-auto text-center'>
            <img src={email} alt='email' className='w-10' />
            <h2 className='text-3xl font-semibold tracking-tight text-gray-800 dark:text-white'>Email</h2>
            <p className='mt-3 text-gray-500 dark:text-gray-300'>
              Kindly reach out to us via email, so we can assist you.
              <br />
              <cite>luxypalace@gmail.com</cite>
            </p>
          </div>
          <div className='flex flex-col items-center max-w-lg mx-auto text-center'>
            <img src={address} alt='phone' className='w-10' />
            <h2 className='text-3xl font-semibold tracking-tight text-gray-800 dark:text-white'>Address</h2>
            <p className='mt-3 text-gray-500 dark:text-gray-300'>
              You can find us at this address.
            </p>
            <address className='text-gray-500 dark:text-gray-300'>17 kurosaki street shibuya, tokyo, Japan.</address>
          </div>
          <div className='flex flex-col items-center max-w-lg mx-auto text-center'>
            <img src={Phone} alt='phone' className='w-10' />
            <h2 className='text-3xl font-semibold tracking-tight text-gray-800 dark:text-white'>Phone</h2>
            <p className='mt-3 text-gray-500 dark:text-gray-300'>
              Kindly reach out to us via our hotline, so we can assist you.
              <br />
              <cite>+17-111-111-111-11</cite>
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
