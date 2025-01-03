
import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Searchbar from "./components/Searchbar";
<<<<<<< HEAD
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
=======

import Cart from "./components/Cart";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";

>>>>>>> d00dd3b1a12e3d8e3a4be3aa1753f7a4d4e640c1
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminPage from "./components/Admin";

function App() {
  const [category, setCategory] = useState('all');
  const [cartItems, setCartItems] = useState([]);
  const [wishliststate, setWishliststate] = useState([]);
  const [currentUser, setCurrentUser] = useState(null); // State for logged-in user

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
        <Navbar setCategory={setCategory} cartItems={cartItems} />
        <Routes>

          <Route
            path="/"
            element={
              <Home
                wishliststate={wishliststate}
                setWishliststate={setWishliststate}
                category={category}
                addToCart={addToCart}
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

          <Route path="/category/:category" element={<category/>}/>
          <Route path="/Search"element={<Searchbar/>}/>

          <Route path="/admin" element={<AdminPage />} /> {/* Admin Route */}

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;