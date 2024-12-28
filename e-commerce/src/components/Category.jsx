import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Category = ({ setCategory }) => {
  const handleCategoryClick = (category) => {
    setCategory(category); 
  };

  return (
    <div className="category-container">
      <Link to="/" onClick={() => handleCategoryClick("all")} className="category-link">
        All
      </Link>
      <Link to="/" onClick={() => handleCategoryClick("men's clothing")} className="category-link">
        Men
      </Link>
      <Link to="/" onClick={() => handleCategoryClick("women's clothing")} className="category-link">
        Women
      </Link>
      <Link to="/" onClick={() => handleCategoryClick("electronics")} className="category-link">
        Electronics
      </Link>
      <Link to="/" onClick={() => handleCategoryClick("jewelery")} className="category-link">
        Jewelry
      </Link>
    </div>
  );
};

export default Category;
