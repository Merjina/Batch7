import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

const App = () => {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Home category={category} />
      <Footer/>
    </div>
  );
};

export default App;
