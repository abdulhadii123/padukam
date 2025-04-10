// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import product_list from "../components/ProductList";

function Home() {

  return (
    <div className='home'>
      <section className='hero '>
      <div className="total">
        <h1 className='hero__title '>Welcome to Padukam Footwear</h1>
        <p className='hero__subtitle'>
        Step into comfort & style – Shop the best footwear at unbeatable prices!👟✨
        </p>
        <Link to='/products' className='hero__cta-button'>
          Shop Now
        </Link>
        </div>
      </section>

      <section className='featured-products main-content'>
        <h2 className='featured-products__title'>Featured Products</h2>
        <div className='featured-products__list'>
          {product_list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className='about-us main-content'>
        <h2 className='about-us__title'>About Us</h2>
        <p className='about-us__text'>
        At Padukam Footwear, we believe that the right pair of shoes can make all the difference. Whether you're looking for everyday comfort, trendy sneakers, or premium footwear, we’ve got you covered.

Our collection is carefully curated to bring you the latest styles, superior quality, and unbeatable prices. We are committed to delivering not just shoes, but confidence, comfort, and style—right to your doorstep.

Join us on this journey and step into a world of fashion, comfort, and durability!
        </p>
      </section>
    </div>
  );
}

export default Home;
