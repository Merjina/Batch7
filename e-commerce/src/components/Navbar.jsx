import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for routing
import '../styles/Navbar.css';
import Login from './Login';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
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
          <Link to="/login">Login</Link> {/* Use Link for routing */}
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
