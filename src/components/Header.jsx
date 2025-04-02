// src/components/Header.js
import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to="/" className="header__logo-link">FarmFresh Market</NavLink>
      </div>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
              }
              end
            >
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
              }
            >
              Products
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
              }
            >
              Cart
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/farmer"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
              }
            >
              Farmer
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
              }
            >
              Login
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? 'header__nav-link header__nav-link--active' : 'header__nav-link'
              }
            >
              Register
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
