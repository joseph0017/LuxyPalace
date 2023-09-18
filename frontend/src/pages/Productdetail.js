import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import shoppingCart from '../images/shopping-cart.png';
import { connect } from 'react-redux';
import { getSingleProduct } from '../redux/product/product-actions';
import { createStructuredSelector } from 'reselect';
import { selectSingleProduct } from '../redux/product/product-selectors';

const ProductDetail = ({fetchProduct, product}) => {

  const {id} = useParams();

  useEffect(() => {
    fetchProduct(id);
  }
    , [fetchProduct, id]);

  return (
    <div key={product.id} className='container px-6 py-16 mx-auto bg-gradient-to-t from-orange-100 mt-20 mb-48'>
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
            <p className='text-2xl mt-10 mr-96'>
              <b>${product.price}</b>
            </p>
            <div className='flex items-center'>
              <div className='container rounded-full w-48 mt-14 bg-slate-200 cursor-pointer'>
                <div className='flex items-center'>
                  <p className='text-4xl ml-3 mb-2 cursor-pointer'>
                    -
                  </p>
                  <p className='text-3xl ml-14 cursor-pointer'>
                    0
                  </p>
                  <p className='text-4xl ml-14 mb-2 cursor-pointer'>
                    +
                  </p>
                </div>
              </div>
              <button className='text-2xl bg-orange-300 rounded-full px-9 py-2 flex flex-start mt-14 ml-20 hover:bg-orange-200'>
                <img src={shoppingCart} alt='cart' className='w-6 mt-1 mr-5' /> Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  product: selectSingleProduct

});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (id) => dispatch(getSingleProduct(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
