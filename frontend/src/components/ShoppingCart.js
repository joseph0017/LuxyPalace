import React from 'react';
import CartDropdown from './CartDropdown';
import shoppingCart from '../images/shopping-cart.png';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden, selectCartItemsCount } from '../redux/cart/cart-selectors';
import { toggleCartHidden } from '../redux/cart/cart-actions';

const ShoppingCart = ({toggleCartHidden, hidden, itemCount}) => {
  return (
    <div className='grid justify-items-end mr-40 overflow-y-auto h-32 sm:mr-80 md:mr-96 lg:mr-20 '>
      <img
        src={shoppingCart}
        alt='cart'
        onClick={toggleCartHidden}
        className='h-12 w-12 mt-1 ml-6 cursor-pointer' />
      {/* <span className=' mr-3 mt-3 font-medium absolute'>{itemCount}</span> */}
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
  itemCount: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
