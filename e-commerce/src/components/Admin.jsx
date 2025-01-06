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
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddProduct = () => {
    
    axios
      .post('https://fakestoreapi.com/products', newProduct)
      .then((response) => {
        setProducts([...products, response.data]);
        setNewProduct({ title: '', description: '', price: '', image: '' });
      })
      .catch((error) => console.error('Error adding product:', error));
  };

  const handleEditProduct = (productId) => {
    const productToEdit = products.find((product) => product.id === productId);
    setEditingProduct(productToEdit);
  };

  const handleSaveEdit = () => {
    axios
      .put(`https://fakestoreapi.com/products/${editingProduct.id}`, editingProduct)
      .then((response) => {
        const updatedProducts = products.map((product) =>
          product.id === editingProduct.id ? response.data : product
        );
        setProducts(updatedProducts);
        setEditingProduct(null);
      })
      .catch((error) => console.error('Error updating product:', error));
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`https://fakestoreapi.com/products/${productId}`)
      .then(() => {
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      })
      .catch((error) => console.error('Error deleting product:', error));
  };

  return (
    <div>
      <h2>
        <center>
          <u>ADMIN PANEL</u>
        </center>
      </h2>
      <div>
        <h3>
          <center>Add New Product</center>
        </h3>
        <input
          className="Admin-input"
          type="text"
          placeholder="Name of Product"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
        />
        <input
          className="Admin-input"
          type="text"
          placeholder="Description"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          className="Admin-input"
          type="number"
          placeholder="Price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          className="Admin-input"
          type="text"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button className="Add-product-button" onClick={handleAddProduct}>
          Add Product
        </button>
      </div>

      {editingProduct && (
        <div className="Admin-edit-form">
          <h3>Edit Product</h3>
          <input
            className="Admin-input"
            type="text"
            value={editingProduct.title}
            onChange={(e) => setEditingProduct({ ...editingProduct, title: e.target.value })}
          />
          <input
            className="Admin-input"
            type="text"
            value={editingProduct.description}
            onChange={(e) => setEditingProduct({ ...editingProduct, description: e.target.value })}
          />
          <input
            className="Admin-input"
            type="number"
            value={editingProduct.price}
            onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })}
          />
          <input
            className="Admin-input"
            type="text"
            value={editingProduct.image}
            onChange={(e) => setEditingProduct({ ...editingProduct, image: e.target.value })}
          />
          <center>
          <button className="Admin-save-button" onClick={handleSaveEdit}>
            Save
          </button>
          <button className="Admin-cancel-button" onClick={() => setEditingProduct(null)}>
            Cancel
          </button>
          </center>
        </div>
      )}

      <h3>All Products</h3>
      <div className="Admin-container">
        {products.map((product) => (
          <div key={product.id} className="Admin-product-card">
            <img src={product.image} alt={product.title} className="Admin-product-image" width="50" />
            <h4 className="Admin-product-title">{product.title}</h4>
            <p className="Admin-product-description">{product.description}</p>
            <p className="Admin-product-price">${product.price}</p>
            <button
              className="Admin-product-delete-button"
              onClick={() => handleDeleteProduct(product.id)}
            >
              <i className="fas fa-trash"></i>
            </button>
            <button
              className="Admin-product-edit-button"
              onClick={() => handleEditProduct(product.id)}
            >
              <i className="fas fa-edit"></i>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
