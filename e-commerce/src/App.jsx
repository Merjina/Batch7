import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
