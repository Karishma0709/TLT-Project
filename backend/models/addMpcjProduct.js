const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  buy: { type: String, default: 'Buy Now' }
});

const addMpcjProduct = mongoose.model('addMpcjProduct', productSchema);
module.exports = addMpcjProduct;
