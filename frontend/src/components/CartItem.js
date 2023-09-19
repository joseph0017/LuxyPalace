import React from 'react';

const CartItem = ({ item: {price, image, name, quantity} }) => {
  return (
    <div className='flex flex-row mb-8 font-medium text-xl bg-orange-100'>
      <img className='w-20' src={image} alt='original' />
      <div className='ml-20 mt-4'>
        <span>{name}</span>
        <span className='ml-7'>{quantity} x {price}</span>
      </div>
    </div>
  );
};

export default CartItem;
