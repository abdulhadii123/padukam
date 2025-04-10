// src/pages/Checkout.js
import React, { useState } from 'react';

function Checkout() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the checkout (will be implemented with backend later)
    console.log('Checkout data:', formData);
    alert('Thank you for your order!');
  };

  return (
    <div className="checkout main-content">
      <h1 className="checkout__title">Checkout</h1>
      <form onSubmit={handleSubmit} className="checkout-form">
        <div className="checkout-form__section">
          <h2 className="checkout-form__section-title">Shipping Information</h2>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="checkout-form__input"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="checkout-form__input"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Address"
            required
            className="checkout-form__input"
          />
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            placeholder="City"
            required
            className="checkout-form__input"
          />
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            placeholder="Zip Code"
            required
            className="checkout-form__input"
          />
        </div>
        <div className="checkout-form__section">
          <h2 className="checkout-form__section-title">Payment Information</h2>
          <input
            type="text"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            placeholder="Card Number"
            required
            className="checkout-form__input"
          />
          <input
            type="text"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleChange}
            placeholder="MM/YY"
            required
            className="checkout-form__input"
          />
          <input
            type="text"
            name="cvv"
            value={formData.cvv}
            onChange={handleChange}
            placeholder="CVV"
            required
            className="checkout-form__input"
          />
        </div>
        <button type="submit" className="checkout-form__submit-button">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;