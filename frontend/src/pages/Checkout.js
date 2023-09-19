import React from 'react';
import CheckoutProducts from '../components/CheckoutProducts';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../redux/cart/cart-selectors';
import { connect } from 'react-redux';
import StripeButton from '../components/StripeButton';

const Checkout = ({cartItems, total}) => {
  return (
    <div>
      <div className='h-screen py-8'>
        <div className='container mx-auto px-4'>
          <h1 className='text-2xl font-semibold mb-4'>Shopping Cart</h1>
          <div className='flex flex-col md:flex-row gap-4'>
            <div className='w-full'>
              {cartItems.map((cartItem) => (
                 <CheckoutProducts key={cartItem.id} cartItem={cartItem} />
               
               ))}
            </div>
            <div className='md:w-1/4'>
              <div className='bg-white rounded-lg shadow-md p-6'>
                <h2 className='text-lg font-semibold mb-4'>Summary</h2>
                <div className='flex justify-between mb-2'>
                  <span>Subtotal</span>
                  <span className='md:pl-4'>${total}</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Taxes</span>
                  <span>$0.00</span>
                </div>
                <div className='flex justify-between mb-2'>
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className='my-2' />
                <div className='flex justify-between mb-2'>
                  <span className='font-semibold'>Total</span>
                  <span className='font-semibold'>${total}</span>
                </div>
                <StripeButton price={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);
