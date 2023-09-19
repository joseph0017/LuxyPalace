import React from 'react';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../redux/cart/cart-selectors';
import { withRouter } from '../utils/withRouter';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../redux/cart/cart-actions';
import CartItem from './CartItem';

const CartDropdown = ({cartItems,  toggleCart, router: {navigate}}) => {
  return (
    <div>
      {cartItems.length ? (
         cartItems.map(cartItem => (
           <CartItem key={cartItem.id} item={cartItem} />
         ))
         ) : (
         <span>Your Cart is empty. let's fill it up smileys</span>
         )}
        <button onClick={() => {navigate('/checkout') 
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
