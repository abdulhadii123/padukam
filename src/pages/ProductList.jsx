import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice'; // Importing the correct action
import { Link } from 'react-router-dom';
import product_list from '../components/ProductList'; // Assuming this contains the product data

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  // Function to handle adding products to the cart
  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 })); // Dispatch the addItem action with product and default quantity of 1
  };

  // Get the quantity of the product in the cart
  const getProductQuantity = (productId) => {
    const cartItem = cartItems.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="product-list">
      <h1 className="product-list__title">Our Products</h1>
      <div className="product-list__grid">
        {product_list.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-card__image"
            />
            <h3 className="product-card__name">{product.name}</h3>
            <p className="product-card__price">
              ${product.price.toFixed(2)}
            </p>
            <div className="product-list-display-buttons">
              <Link
                to={`/product/${product.id}`}
                className="product-card__link"
              >
                View Details
              </Link>
              
              <button
                onClick={() => handleAddToCart(product)}
                className="product-card__button"
              >
                Add to Cart ({getProductQuantity(product.id)})
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
