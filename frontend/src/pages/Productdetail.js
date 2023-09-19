import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart.png';
import { connect } from 'react-redux';
import { getSingleProduct } from '../redux/product/product-actions';
import { createStructuredSelector } from 'reselect';
import { selectSingleProduct } from '../redux/product/product-selectors';

import { addItem, removeItem } from '../redux/cart/cart-actions';
import ShoppingCart from '../components/ShoppingCart';
import { selectCartItemsCount } from '../redux/cart/cart-selectors';

const ProductDetail = ({fetchProduct, product, addItem, removeItem, countProduct}) => {

  const {id} = useParams();

  useEffect(() => {
    fetchProduct(id);
  }
    , [fetchProduct, id]);

  return (
    <>
    <br />
    <ShoppingCart />
    <div key={product.id} className='container px-6 py-16 mx-auto bg-gradient-to-t from-orange-100 mb-48'>
      <div className='items-center lg:flex'>
        <div className='flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2'>
          <img className='w-96 h-full lg:max-w-3xl rounded-lg' src={product.image} alt='Catalogue-pana.svg' />
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='lg:max-w-lg'>
            <h1 className='text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl'>{product.name}</h1>
            <p className='mt-3 text-gray-600 dark:text-gray-400'>
              {product.description}
            </p>
            <p className='text-2xl mt-10 mr-96 sm:ml-56 md:ml-72 lg:ml-0'>
              <b>${product.price}</b>
            </p>
            <div className='flex items-center sm:ml-20 md:ml-48 lg:ml-0'>
              <div className=' rounded-full mt-14 bg-slate-200 cursor-pointer sm:px-4 lg:px-2'>
                <div className='flex items-center'>
                  <p className='text-3xl pl-2 mb-2 cursor-pointer mr-1 lg:mr-5 lg:font-semibold ' onClick={() => removeItem(product)}>
                    -
                  </p>
                  <p className='text-2xl ml-5 cursor-pointer lg:mr-3 lg:font-semibold'>
                    {countProduct}
                  </p>
                  <p className='text-3xl ml-7 mb-2 cursor-pointer lg:font-semibold lg:pr-2' onClick={() => addItem(product)} >
                    +
                  </p>
                </div>
              </div>
              <button className='text-xl bg-orange-300 rounded-full flex flex-start mt-14 hover:bg-orange-200 ml-10 py-2 px-1 sm:px-7 sm:ml-24 xl:px-12 lg:py-3 xl:ml-20'
              onClick={() => addItem(product)}
              >
                <img src={shoppingCart} alt='cart' className='w-6 mt-1 mr-5' /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectSingleProduct,
  countProduct: selectCartItemsCount
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(getSingleProduct(id)),
    addItem: (addproduct) => dispatch(addItem(addproduct)),
    removeItem: (removeproduct) => dispatch(removeItem(removeproduct))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
