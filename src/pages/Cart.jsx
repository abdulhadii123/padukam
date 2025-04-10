// src/pages/Cart.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Fresh Tomatoes', price: 2.99, quantity: 2 },
    { id: 2, name: 'Organic Apples', price: 3.99, quantity: 1 },
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className="cart main-content">
      <h1 className="cart__title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart__empty-message">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart__items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span className="cart-item__name">{item.name}</span>
                <span className="cart-item__price">${item.price.toFixed(2)}</span>
                <input 
                  type="number" 
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="cart-item__quantity"
                  min="1"
                />
                <button onClick={() => removeItem(item.id)} className="cart-item__remove">Remove</button>
              </li>
            ))}
          </ul>
          <div className="cart__total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button onClick={handleCheckout} className="cart__checkout-button">Proceed to Checkout</button>
        </>
      )}
      <Link to="/products" className="cart__continue-shopping">Continue Shopping</Link>
    </div>
  );
}

export default Cart;