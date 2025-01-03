import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';
import '../styles/Navbar.css';


const Cart = ({ cartItems, setCartItems }) => {
  const handleRemoveItem = (itemIndex) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item, index) =>
          index === itemIndex
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
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
            <Link to="/Payment">
              <button className="Payment-button">Proceed to Payment</button>
            </Link>
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



