import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import '../styles/Navbar.css';

const Cart = ({ cartItems, setCartItems }) => {
  const handleAddItem = (itemIndex) => {
    setCartItems((prevItems) =>
      prevItems.map((item, index) =>
        index === itemIndex
          ? { 
              ...item, 
              quantity: item.quantity + 1,  // Increase quantity
              price: item.price + item.price // Increase price based on the quantity
            }
          : item
      )
    );
  };
  

  const handleSubtractItem = (itemIndex) => {
    setCartItems((prevItems) =>
      prevItems.map((item, index) =>
        index === itemIndex
          ? { 
              ...item, 
              quantity: Math.max(1, item.quantity - 1),  // Decrease quantity but prevent below 1
              price: Math.max(item.price, item.price - item.price / item.quantity) // Decrease price
            }
          : item
      )
    );
  };

  const handleRemoveItem = (itemIndex) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== itemIndex));
  };

  const calculateTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length > 0 ? (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price: ${item.price.toFixed(2)}</p>
                  <p>Quantity: {item.quantity}</p>
                  <div className="quantity-actions">
                    <button
                      className="subtract-item-button"
                      onClick={() => handleSubtractItem(index)}
                    >
                      -
                    </button>
                    <button
                      className="add-item-button"
                      onClick={() => handleAddItem(index)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="remove-item-button"
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${calculateTotal().toFixed(2)}</h3>
          </div>
        </>
      ) : (
        <p>
          Your cart is empty. <Link to="/">Continue shopping</Link>
        </p>
      )}
    </div>
  );
};

export default Cart;


