import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';

const Product = () => {
  const [products, setProducts] = useState([]);

  const getProduct = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/jewelry-list/');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);  // Update the state with the fetched data
    } catch (error) {
      console.log('There was a problem with the fetch operation: ' + error.message);
    }
  }

  return (
    <div>
      <SearchBar />
      <div onClick={getProduct}>
        CLICK HERE JOE
      </div>
      {products.map(product => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <img src={product.image} alt="nothing" />
          {/* Add more fields as needed */}
        </div>
      ))}
    </div>
  );
};

export default Product;
