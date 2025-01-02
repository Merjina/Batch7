import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Category from './Category';

const Navbar = ({ setCategory, cartItems }) => {
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <Link to="/" onClick={() => setCategory("all")}>
          ZUKO!
        </Link>
      </div>

      {/* Category Links */}
      <div className="navbar-links">
        <Category setCategory={setCategory} />
      </div>

      {/* Right Section */}
      <div className="navbar-right">
        {/* User Icon */}
        <Link to="/login">
          <i className="fa-solid fa-user"></i>
        </Link>

        {/* Wishlist Icon */}
        <Link to="/wishlist">
          <i className="fas fa-heart"></i>
        </Link>

        {/* Cart Section */}
        <div className="navbar-cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
