import React from 'react';
import pearl from '../images/luisana-galicia.jpg';
import shoppingCart from '../images/shopping-cart.png';

const ProductDetail = () => {
  return (
    <div className='container px-6 py-16 mx-auto bg-gradient-to-t from-orange-100 '>
      <div className='items-center lg:flex'>
        <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
          <img className='w-96 h-full lg:max-w-3xl rounded-lg' src={pearl} alt='Catalogue-pana.svg' />
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>Fall Limited Edition Gold Rings</h1>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro beatae error laborum ab amet sunt recusandae? Reiciendis natus perspiciatis optio.
            </p>
            <p className='text-2xl mt-10 mr-96'>
              <b>$200.00</b>
            </p>
            <div className='flex items-center'>
              <div className='container rounded-full w-48 mt-14 bg-slate-200 cursor-pointer'>
                <div className='flex items-center'>
                  <p className='text-4xl ml-3 mb-2 cursor-pointer'>
                    -
                  </p>
                  <p className='text-3xl ml-14 cursor-pointer'>
                    0
                  </p>
                  <p className='text-4xl ml-14 mb-2 cursor-pointer'>
                    +
                  </p>
                </div>
              </div>
              <button className='text-2xl bg-orange-300 rounded-full px-9 py-2 flex flex-start mt-14 ml-20 hover:bg-orange-200'>
                <img src={shoppingCart} alt='cart' className='w-6 mt-1 mr-5' /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;