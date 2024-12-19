import React, { useState } from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"

function App() {
  const [category, setCategory] = useState("all"); 

  return (
    <div>
      <Navbar setCategory={setCategory} /> {/* Pass the setCategory function */}
      <Home category={category} /> {/* Pass the selected category to Home */}
      <Footer />
      
    </div>
  );
}

export default App;
