import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import '../styles/Navbar.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <div className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price.toFixed(2)}</p>
                <p>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      )}
    </div>
  );
};

export default Cart;
