import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';
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
  const handleEditProduct =(productId)=>{

  };

  const handleDeleteProduct = (productId) => {
  };
    

  return (
    <div>
      <h2><center><u>ADMIN PANNEL</u></center></h2>
      <div>
        <h3><center>Add New Product</center></h3>
        <input className="Admin-input"
          type="text"
          placeholder="Name of Product"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <input className="Admin-input"
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input className="Admin-input"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input className="Admin-input"
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button className="Add-product-button" onClick={handleAddProduct}>Add Product</button>
      </div>

      <h3>All Products</h3>
      <div className="Admin-container">
        {products.map((product) => (
          <div key={product.id} className="Admin-product-card">
            <img src={product.image} alt={product.title} className="Admin-product-image" width="50" />
            <h4 className="Admin-product-title">{product.title}</h4>
            <p className="Admin-product-description">{product.description}</p>
            <p className="Admin-product-price">${product.price}</p>
            <button
              className="Admin-product-delete-button" onClick={() => handleDeleteProduct(product.id)}
              >
             <i class="fas fa-trash"></i>
            </button>

            <button
              className="Admin-product-edit-button" onClick={() => handleEditProduct(product.id)}
              >
             <i class="fas fa-edit"></i>
            </button>

           
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;