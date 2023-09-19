import { productActionTypes } from './product-types';
// confirm

export const products = (data) => ({
  type: productActionTypes.GET_PRODUCT,
  payload: data
});

export const allProducts = (data) => ({
  type: productActionTypes.GET_ALL_PRODUCTS,
  payload: data
});

export const allProductsCopy = (dataCopy) => ({
  type: productActionTypes.GET_ALL_PRODUCT_COPY,
  payload: dataCopy
});

export const noProducts = () => ({
  type: productActionTypes.GET_PRODUCT_FAILURE
});

export const setSearch = (search) => ({
    type: productActionTypes.SET_SEARCH,
    payload: search
})

export const setCategory = (category) => ({
    type: productActionTypes.SET_CATEGORY,
    payload: category
})

export const getSingleProduct = (id) => {
    return async (dispatch) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/jewelry/' + id);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(products(data));
        } catch (error) {
            dispatch(noProducts())
            console.log('There was a problem with the fetch operation: ' + error.message);
        }
    }
}

export const getAllProducts = () => {
    return async (dispatch) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/jewelry-list/');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        dispatch(allProducts(data));
        dispatch(allProductsCopy(data));
        } catch (error) {
            dispatch(noProducts())
            console.log('There was a problem with the fetch operation: ' + error.message);
        }
    }
}