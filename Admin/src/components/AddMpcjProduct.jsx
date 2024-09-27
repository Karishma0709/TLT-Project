import React, { useState } from 'react';
import axios from 'axios';

const AddMpcjProduct = () => {
  const [productData, setProductData] = useState({
    img: '',
    title: '',
    price: '',
    description: '',
  });

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/products/add', productData);
      alert(response.data.message);
    } catch (error) {
      alert('Error adding product');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="mb-6">
        <input 
          type="text" 
          name="img" 
          placeholder="Image URL" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <input 
          type="text" 
          name="price" 
          placeholder="Price" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6">
        <textarea 
          name="description" 
          placeholder="Description" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button 
        type="submit" 
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        Add Product
      </button>
    </form>
  );
  
};

export default AddMpcjProduct;
