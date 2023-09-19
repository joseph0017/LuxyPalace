import React, { useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import CardProduct from '../components/CardProduct';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllProduct, selectAllProductCopy, selectCategory, selectSearch } from '../redux/product/product-selectors';
import { getAllProducts, setSearch, setCategory, allProducts } from '../redux/product/product-actions';
import ShoppingCart from '../components/ShoppingCart';

const Product = ({products, productCopy, search, category, setFilteredProducts, setSearch, fetchAllProducts}) => {

  const filterSearch = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = productCopy.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
      // Use the toLowerCase() method to make it case-insensitive
      });
      setFilteredProducts(results);
    } else {
      setFilteredProducts(productCopy);
    // return all products
    }
    setSearch(keyword);
  };

  const filterCategory = (keyword) => {
    if (keyword !== '') {
      const results = productCopy.filter((product) => {
        return product.category === keyword;
      });
      setFilteredProducts(results);
    } else {
      setFilteredProducts(productCopy);
    }
    setCategory(keyword);
  };

  useEffect(() => {
    fetchAllProducts();
  }
    , [fetchAllProducts]);

  return (
    <div>
      <SearchBar
        search={search}
        filterSearch={filterSearch}
        filterCategory={filterCategory}
        category={category} />
      <ShoppingCart />
      <div className='sm:grid grid-cols-3 gap-4 mt-20'>
        {products && products.map(product => (
           <div className='col-span-1 mb-20' key={product.id}>
             <Link to={`/product/${product.id}`}>
             <CardProduct name={product.name} productImg={product.image} price={product.price} />
             </Link>
           </div>
         ))}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectAllProduct,
  productCopy: selectAllProductCopy,
  search: selectSearch,
  category: selectCategory
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(getAllProducts()),
    setFilteredProducts: (dataCopy) => dispatch(allProducts(dataCopy)),
    setSearch: (keyword) => dispatch(setSearch(keyword)),
    setCategory: (keyword) => dispatch(setCategory(keyword))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
