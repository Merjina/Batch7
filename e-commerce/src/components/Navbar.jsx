import React from 'react';
import '../styles/Navbar.css';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">E-Shop</a>
      </div>
      <ul className="navbar-links">
        <li><a href="/" onClick={() => setCategory("all")}>Home</a></li>
        <li><a href="/shop" onClick={() => setCategory("men")}>Men</a></li>
        <li><a href="/about" onClick={() => setCategory("women")}>Women</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="navbar-login">
        <a href="/login">
           <input type="button" value="Login" />
          
        </a>
      </div>

     
      <div className="navbar-cart">
        <a href="/cart">
          🛒 <span className="cart-count">0</span>
          
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
