import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../redux/cart/cart-actions';

const CheckoutProducts = ({cartItem, addProducts, removeProducts, clearProducts}) => {
  return (
    <div className='flex flex-col md:flex-row '>
      <div className='bg-white rounded-lg shadow-md mb-4'>
        <table className='w-full text-sm sm:text-base'>
          <thead>
            <tr>
              <th className='text-left font-semibold sm:pl-6'>
                Product
              </th>
              <th className='text-left font-semibold pl-14'>
                Price
              </th>
              <th className='text-left font-semibold pr-5 md:pr-10'>
                Quantity
              </th>
              <th className='text-left font-semibold lg:pr-10'>
                Clear Cart
              </th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td className='py-4'>
                <div className='flex items-center sm:pl-5'>
                  <img className='h-12 w-12 mr-4 lg:h-14 lg:w-20' src={cartItem.image} alt='Product' />
                  <span className='text-xs font-semibold lg:text-base'>{cartItem.name}</span>
                </div>
              </td>
              <td className='py-4'>
                <span className='text-xs px-12 sm:text-base' >${cartItem.price}</span>
                
              </td>
              <td className='py-4'>
                <div className='flex items-center text-xs sm:text-base '>
                  <button className='border rounded-md py-1 px-1 ' onClick={() => removeProducts(cartItem)}>
                    -
                  </button>
                  <span className='text-center w-8'>{cartItem.quantity}</span>
                  <button className='border rounded-md py-1 px-1' onClick={() => addProducts(cartItem)} >
                    +
                  </button>
                </div>
              </td>
              <td className='py-4 text-xl cursor-pointer' onClick={() => clearProducts(cartItem)}>
                X
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  clearProducts: (product) => dispatch(clearItemFromCart(product)),
  addProducts: (product) => dispatch(addItem(product)),
  removeProducts: (product) => dispatch(removeItem(product))
});

export default connect(null, mapDispatchToProps)(CheckoutProducts);
