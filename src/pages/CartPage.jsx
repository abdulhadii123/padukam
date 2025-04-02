// src/pages/CartPage.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { updateQuantity, removeItem, clearCart } from '../redux/cartSlice';

function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const [total, setTotal] = useState(0);

  // Calculate total when cartItems change
  useEffect(() => {
    const newTotal = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cartItems]);

  // Handle checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add items to proceed.');
    } else {
      navigate('/checkout');
    }
  };

  // Clear cart functionality
  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear the cart?')) {
      dispatch(clearCart());
    }
  };

  // Update quantity of items
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  // Remove item confirmation
  const handleRemoveItem = (id) => {
    if (window.confirm('Are you sure you want to remove this item?')) {
      dispatch(removeItem(id));
    }
  };

  return (
    <div className="cart">
      <h1 className="cart__title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="cart__empty-message">Your cart is empty.</p>
      ) : (
        <>
          <ul className="cart__items">
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item">
                <div className="cartitem">
                <img src={item.image} alt={item.name} className="product-card-cart__image" />
                <span className="cart-item__name">{item.name}</span>
                <span className="cart-item__price">${item.price.toFixed(2)}</span>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleQuantityChange(item.id, parseInt(e.target.value))
                  }
                  className="cart-item__quantity"
                  min="1"
                />
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="cart-item__remove"
                >
                  Remove
                </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart__total">
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          <button
            onClick={handleCheckout}
            className="cart__checkout-button"
          >
            Proceed to Checkout
          </button>
          <button
            onClick={handleClearCart}
            className="cart__clear-button"
          >
            Clear Cart
          </button>
        </>
      )}
      <Link to="/products" className="cart__continue-shopping">
        Continue Shopping
      </Link>
    </div>
  );
}

export default CartPage;
