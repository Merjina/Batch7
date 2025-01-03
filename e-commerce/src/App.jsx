import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import Cart from './components/Cart';
import Login from './components/Login';
import Wishlist from './components/Wishlist';
import AdminPage from './components/Admin';

function App() {
  const [category, setCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [wishliststate, setWishliststate] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  // Add a state for the current user if needed
  const [currentUser, setCurrentUser] = useState(null);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <Router>
      <div>
        <Navbar
          setCategory={setCategory}
          cartItems={cartItems}
          setSearchQuery={setSearchQuery}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                wishliststate={wishliststate}
                setWishliststate={setWishliststate}
                category={category}
                addToCart={addToCart}
                searchQuery={searchQuery}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
          />
          <Route
            path="/login"
            element={<Login setCurrentUser={setCurrentUser} />}
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishliststate={wishliststate}
                setWishliststate={setWishliststate}
              />
            }
          />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
