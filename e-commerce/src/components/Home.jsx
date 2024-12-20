import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Home.css';

function Home({ wishliststate, setWishliststate }) {
  const [data, setData] = useState([]);
  const [category,setCategory] = useState("all"); 
  const [error, setError] = useState(null);
  const dataFetch = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const filteredData = category === "all" 
        ? response.data
        : response.data.filter(item => item.category.toLowerCase() === category.toLowerCase());
      const sortedData = filteredData.sort((a, b) => a.price - b.price);
      setData(sortedData);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    dataFetch();
  }, [category]); 

  const handleAddToCart = (item) => {
    
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
      {error && <p className="error-message">Error: {error.message}</p>}
      {data.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt="product" className="product-image" />
          <h2 className="product-category">{item.category}</h2>
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
}

export default Home;
