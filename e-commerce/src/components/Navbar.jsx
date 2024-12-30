import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

import Category from './Category';

const Navbar = ({ setCategory, cartItems }) => {

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);




  return (
    <nav className="navbar">
     
      <div className="navbar-logo">
        <Link to="/" onClick={() => setCategory("all")}>ZUKO!
         </Link>
      </div>
      <ul className="navbar-links">

        <li>
          <button className="navbar-button" onClick={() => setCategory("all")}>Home</button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("men's clothing")}>Men</button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("women's clothing")}>Women</button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("electronics")}>Electronics</button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("jewelery")}>Jewelry</button>
        </li>
        <li>
          <Link to="/login">Login</Link> {/* Use Link for routing */}
        </li>
        <li>
          <Link to="/search" className="search-link">Search</Link>
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          🛒 <span className="cart-count">0</span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;