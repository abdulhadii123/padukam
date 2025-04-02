// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import product_list from "../components/ProductList";

function Home() {

  return (
    <div className='home'>
      <section className='hero'>
        <h1 className='hero__title'>Welcome to FarmFresh Market</h1>
        <p className='hero__subtitle'>
          Fresh produce straight from local farmers to your table
        </p>
        <Link to='/products' className='hero__cta-button'>
          Shop Now
        </Link>
      </section>

      <section className='featured-products'>
        <h2 className='featured-products__title'>Featured Products</h2>
        <div className='featured-products__list'>
          {product_list.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className='about-us'>
        <h2 className='about-us__title'>About Us</h2>
        <p className='about-us__text'>
          FarmFresh Market is committed to connecting local farmers with
          consumers, ensuring you get the freshest produce while supporting your
          local agricultural community.
        </p>
      </section>
    </div>
  );
}

export default Home;
