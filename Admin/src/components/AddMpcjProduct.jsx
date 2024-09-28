import React, { useState } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const AddMpcjProduct = () => {
  const [productData, setProductData] = useState({
    title: '',
    price: '',
    description: '',
  });

  // Handle input change
  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Make POST request to backend API
      const response = await axios({
        url: SummaryApi.createMpcjProduct.url,
        method: SummaryApi.createMpcjProduct.method,
        data: productData,
      }); // Adjust the URL based on your backend
  
      // Alert success message
      alert(response.data.message);
  
      // Clear form data
      setProductData({
        title: '',
        price: '',
        description: '',
      });
    } catch (error) {
      console.error('Error adding product:', error);
      alert('Error adding product');
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">

      <div className="mb-6">
        <input 
          type="text" 
          name="title" 
          placeholder="Title" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productData.title}
        />
      </div>
      <div className="mb-6">
        <input 
          type="number" 
          name="price" 
          placeholder="Price" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productData.price}
        />
      </div>
      <div className="mb-6">
        <textarea 
          name="description" 
          placeholder="Description" 
          onChange={handleChange} 
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={productData.description}
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
