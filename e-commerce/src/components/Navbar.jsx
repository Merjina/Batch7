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


      <div className="navbar-links">
        <Category setCategory={setCategory} />
      </div>


      <div className="navbar-right">
        <Link to="/login">
        <i class="fa-solid fa-user"></i></Link>
        <Link to="/wishlist">
          <i className="fas fa-heart"></i> </Link>


        </div>

       
      
      
        <div className="navbar-cart">
          <Link to="/cart">
          <i class="fa-solid fa-cart-shopping"></i> <span className="cart-count">{totalItems}</span>
          </Link>
        </div>
      
    </nav>
  );
};

export default Navbar;
