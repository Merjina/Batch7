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
<<<<<<< HEAD
        <Link to="/" onClick={() => setCategory("all")}>E-Shop</Link>
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
        <li>
          <div className="navbar-button">
            <Link to="/login"> Login
            </Link> {/* Use Link for routing */}
          </div>
          
        </li>
      </ul>
      <div className="navbar-cart">
        <Link to="/cart">
          🛒 <span className="cart-count">0</span>
=======
        <Link to="/" onClick={() => setCategory("all")}>
          ZUKO!
>>>>>>> 3662a9e53f7eb6979f3a0c34dab9c72ea1285262
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