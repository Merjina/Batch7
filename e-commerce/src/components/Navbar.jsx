// Updated Navbar component
import React from 'react';
import '../styles/Navbar.css';
import Login from './Login';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/" onClick={() => setCategory("all")}>E-Shop</a>
      </div>
      <ul className="navbar-links">

        <li>
          <button className="navbar-button" onClick={() => setCategory("all")}>
            Home
          </button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("men's clothing")}>
            Men
          </button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("women's clothing")}>
            Women
          </button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("electronics")}>
            Electronics
          </button>
        </li>
        <li>
          <button className="navbar-button" onClick={() => setCategory("jewelery")}>
            Jewelry
          </button>
        </li>

       
        <li><a href="/login" onClick={Login}>Login</a></li>

      </ul>
     

     
      <div className="navbar-cart">
        <a href="/cart">
          🛒 <span className="cart-count">0</span>
          
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
