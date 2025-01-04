

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import Category from './Category';

const Navbar = ({ 
  setCategory, 
  cartItems, 
  setSearchQuery, 
  wishliststate, 
  setWishliststate 
}) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setSearchQuery(value); // Update search query in parent
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemoveFromWishlist = (itemId) => {
    setWishliststate(wishliststate.filter((item) => (item.id) !== itemId));
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/" onClick={() => setCategory("all")}>
          E-Shop
        </Link>
      </div>
      <div className="navbar-category">
        <Category setCategory={setCategory} />
      </div>
      <div className="navbar-search">
        <input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={handleSearch}
          className="search-input"
        />
      </div>
      <div className="navbar-right">
        <Link to="/login">
          <i className="fa-solid fa-user"></i>
        </Link>
        <Link to="/wishlist">
          <i className="fas fa-heart"></i>
          <span className="wishlist-count">{wishliststate ? wishliststate.length : 0}</span>
        </Link>
        <div className="navbar-cart">
          <Link to="/cart">
            <i className="fa-solid fa-cart-shopping"></i>{' '}
            <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



