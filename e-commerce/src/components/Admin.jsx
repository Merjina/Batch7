import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddProduct = () => {
  
    setProducts([...products, newProduct]);
    setNewProduct({ title: '', description: '', price: '', image: '' });
  };

  const handleEditProduct = (productId) => {
    
  };

  return (
    <div>
      <h2><u>ADMIN PANNEL</u></h2>
      <div>
        <h3>Add New Product</h3>
        <input
          type="text"
          placeholder="Name of Product"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3><i>All Products</i></h3>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.title} width="50" />
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleEditProduct(product.id)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
