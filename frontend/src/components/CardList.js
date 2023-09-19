import React from 'react';
import heart from '../images/cornelia-ng.jpg';
import pearl from '../images/luisana-galicia.jpg';
import gold from '../images/nati-melnychuk.jpg';

const CardList = () => {
  return (
    <div className='sm:grid grid-cols-3 gap-4 mt-28'>
      <div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-16'>
        <img className='w-full h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md sm:w-full md:w-full md:h-64' src={heart} alt='heart' />
        <div className='w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 sm:w-44'>
          <h3 className='text-base py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white md:text-xl'>Nike Revolt</h3>
          <div className='flex items-center justify-between px-2 py-1 bg-gray-200 dark:bg-gray-700'>
            <span className='text-base font-bold text-gray-800 dark:text-gray-200 md:text-xl'>$129</span>
            <button className='text-base px-2 py-1 font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none md:text-base'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-16'>
        <img className='w-full h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md sm:w-full md:w-full md:h-64' src={pearl} alt='heart' />
        <div className='w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 sm:w-44'>
          <h3 className='text-base py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white md:text-xl'>Nike Revolt</h3>
          <div className='flex items-center justify-between px-2 py-1 bg-gray-200 dark:bg-gray-700'>
            <span className='text-base font-bold text-gray-800 dark:text-gray-200 md:text-xl'>$129</span>
            <button className='text-base px-2 py-1 font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none md:text-base'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <div className='flex flex-col items-center justify-center w-full max-w-sm mx-auto mb-16'>
        <img className='w-full h-48 bg-gray-300 bg-center bg-cover rounded-lg shadow-md sm:w-full md:w-full md:h-64' src={gold} alt='heart' />
        <div className='w-64 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800 sm:w-44'>
          <h3 className='text-base py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white md:text-xl'>Nike Revolt</h3>
          <div className='flex items-center justify-between px-2 py-1 bg-gray-200 dark:bg-gray-700'>
            <span className='text-base font-bold text-gray-800 dark:text-gray-200 md:text-xl'>$129</span>
            <button className='text-base px-2 py-1 font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none md:text-base'>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardList;
