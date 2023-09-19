import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { makeStripePayment } from '../redux/payment/payment-actions';
import { connect } from 'react-redux';

const StripeButton = ({ price, stripePayday }) => {
  const priceForStripe = price;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    console.log(token);
    stripePayday(token, priceForStripe);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='LUXY PALACE'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is ${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey} />
  );
};

const mapDispatchToProps = (dispatch) => ({
  stripePayday: (token, amount) => dispatch(makeStripePayment(token, amount))
});

export default connect(null, mapDispatchToProps)(StripeButton);
