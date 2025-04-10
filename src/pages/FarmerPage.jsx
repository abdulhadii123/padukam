// src/pages/FarmerPage.js
import React, { useState } from 'react';
import { addProduct } from '../components/ProductList'; // Import the addProduct function
import { useNavigate } from 'react-router-dom';

function FarmerPage() {
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add product to the list
    addProduct({
      ...product,
      price: parseFloat(product.price), // Convert price to a number
    });

    // Navigate back to the products page or show a success message
    navigate('/products');
  };

  return (
    <div className="farmer-page main-content">
      <h1>Add a New Product</h1>
      <form onSubmit={handleSubmit} className="farmer-form">
        <div>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="description">Product Description</label>
          <textarea
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            step="0.01"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="image">Image URL</label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default FarmerPage;
