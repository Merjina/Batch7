import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("all");
  const[wishliststate,setWishliststate]=useState([]);

  return (
    <Router> {/* Ensure Router wraps everything */}
      <div>
        <Navbar setCategory={setCategory} /> {/* Pass the setCategory function */}
        <Routes>
          {/* Define Routes */}
          <Route path="/" element={<Home 
          wishliststate={wishliststate}
          setWishliststate={setWishliststate} />} />
          <Route path="/wishlist" element={<Wishlist wishliststate={wishliststate} setWishliststate={setWishliststate}/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
