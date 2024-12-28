import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Wishlist from "./components/Wishlist";
function App() {
  const [category, setCategory] = useState("all");
  const [cartItems, setCartItems] = useState([]);
  const[wishliststate,setWishliststate]=useState([]);
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
          <Route path="/" element={<Home wishliststate={wishliststate}
          setWishliststate={setWishliststate} category={category} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/wishlist" element={<Wishlist wishliststate={wishliststate} setWishliststate={setWishliststate}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
