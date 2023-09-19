import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart-selectors';
import { withRouter } from '../utils/withRouter';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart-actions';
import CartItem from './CartItem';

const CartDropdown = ({cartItems,  toggleCart, router: {navigate}}) => {
  return (
    <div className=''>
      {cartItems.length ? (
         cartItems.map(cartItem => (
           <CartItem key={cartItem.id} item={cartItem} />
         ))
         ) : (
         <span>Your cart is empty. let's fill it up &#128578;</span>
         )}
        <button className='text-xl bg-orange-200 rounded-full flex flex-start mt-14 hover:bg-orange-100 ml-10 py-2 px-1 sm:px-7 sm:ml-24 xl:px-12 lg:py-3 xl:ml-20'
         onClick={() => {navigate('/checkout') 
        toggleCart()
    }}>
            GO TO CHECKOUT
        </button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const mapDispatchToProps = (dispatch) => {
  return {
    toggleCart: () => dispatch(toggleCartHidden())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
