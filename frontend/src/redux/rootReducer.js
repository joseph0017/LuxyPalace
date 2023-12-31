import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import cartReducer from './cart/cart-reducer';
import productReducer from './product/product-reducer';
import paymentReducer from './payment/payment-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'user']
};
const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  product: productReducer,
  payment: paymentReducer
});

export default persistReducer(persistConfig, rootReducer);
