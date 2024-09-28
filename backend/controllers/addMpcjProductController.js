const Product = require('../models/addMpcjProduct'); // Model for products

// Create a new product (POST)
const createMpcjProduct = async (req, res) => {
  try {
    // Create a new product from request body data
    const newProduct = new Product({
      img: req.body.img,
      title: req.body.title,
      price: req.body.price,
      description: req.body.description,
      buy: req.body.buy || 'Buy Now', // Default value if buy is not provided
    });

    // Save the new product to MongoDB
    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Get all products (GET)
const getAllMpcjProducts = async (req, res) => {
  try {
    // Fetch all products from MongoDB
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

module.exports = {
  createMpcjProduct,
  getAllMpcjProducts,
};
