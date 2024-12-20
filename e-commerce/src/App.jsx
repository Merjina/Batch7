//import React, { useState } from "react";
//import Home from "./components/Home";
//import Navbar from "./components/Navbar";
//import Footer from "./components/Footer";
import Wishlist from "./components/Wishlist";

function App() {
  const [category, setCategory] = useState("all"); 

  return (
    <div>
      <Navbar setCategory={setCategory} /> {/* Pass the setCategory function */}
      <Home category={category} /> {/* Pass the selected category to Home */}
      <Footer />
      <Wishlist/>
    </div>
  );
}

export default App;
