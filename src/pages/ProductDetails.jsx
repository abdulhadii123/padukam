import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import product_list from '../components/ProductList'; // Importing the product list
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice'; // Import the addItem action

function ProductDetails() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items); // Get cart items from Redux store

  const { id } = useParams();  // Getting product id from the URL params
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find product by id from the product list
    const foundProduct = product_list.find((product) => product.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading message until the product is set
  }

  const handleAddToCart = () => {
    const currentQuantity = getProductQuantity(product.id); // Get current quantity
    dispatch(addItem({ ...product, quantity: currentQuantity + 1 })); // Increase quantity by 1
  };

  const getProductQuantity = (productId) => {
    const cartItem = cartItems.find(item => item.id === productId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="product-details main-content">
      <img src={product.image} alt={product.name} className="product-details__image" />
      <div className="product-details__info">
        <h1 className="product-details__name">{product.name}</h1>
        <p className="product-details__price">${product.price.toFixed(2)}</p>
        <p className="product-details__description">{product.description}</p>
        <button
          onClick={handleAddToCart} // Call the function without parameters
          className="product-card__button"
        >
          Add to Cart ({getProductQuantity(product.id)}) {/* Show current quantity */}
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
