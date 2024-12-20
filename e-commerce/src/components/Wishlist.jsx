import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Home.css";

function Home() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [error, setError] = useState(null);

  // Fetch products from Fake Store API
  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
    fetchProducts();
  }, []);

  // Save wishlist to localStorage whenever it updates
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Handle adding/removing items from wishlist
  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    if (isInWishlist) {
      setWishlist(wishlist.filter((item) => item.id !== product.id));
    } else {
      setWishlist([...wishlist, product]);
    }
  };

  return (
    <div className="home-container">
      <h1>Products</h1>
      {error && <p>Error: {error}</p>}
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">Price: ${product.price.toFixed(2)}</p>
            <button
              className="wishlist-button"
              onClick={() => toggleWishlist(product)}
            >
              {wishlist.some((item) => item.id === product.id)
                ? "Remove from Wishlist"
                : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>

      <div className="wishlist-container">
        <h2>Your Wishlist</h2>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-items">
            {wishlist.map((item) => (
              <div key={item.id} className="wishlist-card">
                <img src={item.image} alt={item.title} className="wishlist-image" />
                <h2 className="wishlist-title">{item.title}</h2>
                <p className="wishlist-price">Price: ${item.price.toFixed(2)}</p>
                <button
                  className="remove-wishlist-button"
                  onClick={() => toggleWishlist(item)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
