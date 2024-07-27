const MPCJFormdetails = require('../models/ContactForm');

const saveMPCJFormDetails = async (req, res) => {
  const { name, email, contact, purchasedProduct } = req.body;

  try {
    const newMPCJFormdetails = new MPCJFormdetails({
      name,
      email,
      contact,
      purchasedProduct,
    });

    await newMPCJFormdetails.save();
    res.status(201).send({ message: 'MPCJ form details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving MPCJ form details', error });
  }
};

module.exports = { saveMPCJFormDetails };
