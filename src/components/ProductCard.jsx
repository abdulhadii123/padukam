// src/components/ProductCard.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); 
    const handleAddToCart = (product) => {
        
        dispatch(addItem({ ...product, quantity: 1 })); // Dispatch the addItem action with product and default quantity of 1
      };

      const getProductQuantity = (productId) => {
        const cartItem = cartItems.find(item => item.id === productId);
        return cartItem ? cartItem.quantity : 0;
      };
    
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-card__image" />
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__description">{product.description}</p>
      <p className="product-card__price">${product.price}</p>
      <button
                onClick={() => handleAddToCart(product)}
                className="product-card__button"
              >
                Add to Cart ({getProductQuantity(product.id)})
              </button>
    </div>
  );
}

export default ProductCard;
