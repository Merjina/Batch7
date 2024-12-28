import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Searchbar.css';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setFilteredData([]);
    } else {
      const results = data.filter((item) =>
        item.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredData(results);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading && <p>Loading products...</p>}
      {error && (
        <p className="error-message">
          Error: {error.message || 'Failed to fetch products.'}
        </p>
      )}
      {!loading && !filteredData.length && searchTerm && (
        <p>No products found for "{searchTerm}".</p>
      )}
      <div className="search-results">
        {filteredData.map((item) => (
          <div key={item.id} className="search-card">
            <img
              src={item.image || 'placeholder-image-url'}
              alt={item.title || 'Product image'}
              className="search-image"
            />
            <h3 className="search-title">{item.title}</h3>
            <p className="search-price">
              Price: ${item.price ? item.price.toFixed(2) : 'N/A'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searchbar;
