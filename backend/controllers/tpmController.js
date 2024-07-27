const TpmFormDetails = require('../models/tpmFormDetails');

const saveTpmFormDetails = async (req, res) => {
  const { name, email, contact, purchasedProduct } = req.body;

  try {
    const newTpmFormDetails = new TpmFormDetails({
      name,
      email,
      contact,
      purchasedProduct,
    });

    await newTpmFormDetails.save();
    res.status(201).send({ message: 'TPM form details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving TPM form details', error });
  }
};

module.exports = { saveTpmFormDetails };
