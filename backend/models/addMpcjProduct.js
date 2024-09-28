const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  img: { type: String, required: true }, // For image URL
  title: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  buy: { type: String, default: 'Buy Now' }
});

const addMpcjProduct = mongoose.model('addMpcjProduct', productSchema);
module.exports = addMpcjProduct;
