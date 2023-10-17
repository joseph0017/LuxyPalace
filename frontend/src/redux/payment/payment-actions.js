import { paymentActionTypes } from './payment-types';

export const paymentSuccess = (token, amount, name, email, address_city, address_country) => ({
  type: paymentActionTypes.PAYMENT_SUCCESS,
  payload: {token, amount, name, email, address_city, address_country}
});

export const paymentFailure = () => ({
  type: paymentActionTypes.PAYMENT_FAILURE
});

export const makeStripePayment = (token, amount, name, email, address_city, address_country) => {
  return async (dispatch) => {
    dispatch(paymentSuccess(token, amount, name, email, address_city, address_country));
    await fetch('https://joe00017.pythonanywhere.com/stripe-payment/', {
      method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({
            token: token.id, amount: amount, name:token.card.name, email:token.email,
            address_city:token.card.address_city, address_country: token.card.address_country,

        })
    })
    .then(response => {
      if (response.status === 200) {
        return response.json();
      }
    })
    .catch(dispatch(paymentFailure()));
  };
};