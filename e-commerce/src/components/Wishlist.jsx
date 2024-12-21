import React from 'react';
import '../styles/Wishlist.css';

function Wishlist({ wishliststate }) { // Destructure wishliststate prop
  return (
    <div className="wishlist-container">
      <h1>Your Wishlist</h1>
      {wishliststate.length === 0 ? 
        <p>Your wishlist is empty.</p>
       : (
        <div className="wishlist-grid">
          {wishliststate.map((item) => (
            <div key={item.id} className="wishlist-card">
              <img src={item.image} alt={item.title} className="wishlist-image" />
              <h2 className="wishlist-title">{item.title}</h2>
              <p className="wishlist-price">Price: ${item.price.toFixed(2)}</p>
              <p className="wishlist-category">Category: {item.category}</p>
              <p className="wishlist-description">{item.description.length > 50
    ? `${item.description.slice(0, 50)}...`
    : item.description}</p>
              <button className="wishlist-remove-button">
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
      
      
      
      

    

    



  

