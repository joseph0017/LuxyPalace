import React, { useEffect, useState } from 'react';
import SearchBar from '../components/SearchBar';
import CardProduct from '../components/CardProduct';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productCopy, setProductCopy] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState();

  const filterSearch = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = productCopy.filter((product) => {
        return product.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      })
      setProducts(results)
    } else {
      setProducts(productCopy)
      // return all products
    }
    setSearch(keyword)
  }

  const filterCategory = (keyword) => {
    if (keyword !== '') {
      const results = productCopy.filter((product) => {
        return product.category ===keyword
      })
      setProducts(results)
    } else {
      setProducts(productCopy)
    }
    setCategory(keyword)
  }

  const getProduct = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/jewelry-list/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data); 
      setProductCopy(data);  
    } catch (error) {
      console.log('There was a problem with the fetch operation: ' + error.message);
    }
  }

  useEffect(() => {
    getProduct();
  }
  ,[])

  return (
    <div>
      <SearchBar search = {search} filterSearch={filterSearch} filterCategory={filterCategory} category={category} />

      <div className="grid grid-cols-3 gap-4 mt-20">

      {products.map(product => (
        <div className="col-span-1 mb-20" key={product.id}>
          <Link to= {`/product/${product.id}`} >
            <CardProduct name={product.name} productImg={product.image} price={product.price} />
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Product;
