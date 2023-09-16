import { productActionTypes } from './product-types';

const INITIAL_STATE = {
  products: [],
  productsCopy: [],
  search: '',
  category: ''
};

const productReducer = (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case productActionTypes.GET_PRODUCT:
      return action.payload;

    case productActionTypes.GET_PRODUCT_FAILURE:
      return null;

    case productActionTypes.GET_ALL_PRODUCTS: 
    return { ...state, products: action.payload }

    case productActionTypes.GET_ALL_PRODUCT_COPY:
      return { ...state, productsCopy: action.payload }

    case productActionTypes.SET_SEARCH:
      return { ...state, search: action.payload }

    case productActionTypes.SET_CATEGORY:
      return { ...state, category: action.payload }

    default:
      return state;
  }
};

export default productReducer;
