import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [category, setCategory] = useState("all"); 
  const [loginstate,setLoginstate]=useState([]);

  return (
    <Router>
      <div>
        
        <Navbar setCategory={setCategory} /> {/* Pass the setCategory function */}

        <Routes>
          <Route path="/" element=<Home category={category}/>} />
          <Route path="/login" element={<Login loginstate={loginstate} setLoginstate={setLoginstate}/> }/>
          
        </Routes>
      
        <Footer />
      </div>
    </Router>
  );
};

export default App;
