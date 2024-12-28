import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home({ wishliststate, setWishliststate,category, addToCart }) {
  const [data, setData] = useState([]); 
  const [error, setError] = useState(null);
  const dataFetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const filteredData =
        category === "all"
          ? response.data
          : response.data.filter((item) =>
              item.category.toLowerCase() === category.toLowerCase()
            );
      setData(filteredData);
    } catch (error) {
      setError(error);
    }
  };


  useEffect(() => {
    dataFetch();
  }, [category]);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(`${item.title} added to cart`);
  };
const handleWishlist = (item) => {
  console.log(`${item.title} added to wishlist`)
  if (!wishliststate.find((wishlistItem) => wishlistItem.id === item.id)) {
    const updatedWishlist = [...wishliststate, item];
    setWishliststate(updatedWishlist);
    console.log("Updated Wishlist:", updatedWishlist);
  } else {
    console.log(`${item.title} is already in the wishlist`);
  }
}
  return (
    <div className="product-container">
      {/* Show error message if API call fails */}
      {error && <p className="error-message">Error: {error.message}</p>}

      {/* Map through the fetched data and render product cards */}
      {data.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.title} className="product-image" />
          <h3 className="product-title">{item.title}</h3>
          <p className="product-price">Price: ${item.price.toFixed(2)}</p>
          <button
            className="add-to-cart-button"
            onClick={() => handleAddToCart(item)}
          >
            Add to Cart
          </button>
          <button 
          className="add-to-wishlist-button"
          onClick={() => handleWishlist(item)}>
            <i className='fas fa-heart'> </i>
            Add to wishlist
            </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
