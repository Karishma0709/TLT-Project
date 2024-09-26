const MPCJFormDetails = require('../models/mpcjOfflineMT');

// Save MPCJ form details
const createMPCJFormDetails = async (req, res) => {
  const { name, email, contact, purchasedProduct } = req.body;
  console.log('Received request to save MPCJ form details:', req.body);

  try {
    const newMPCJFormDetails = new MPCJFormDetails({
      name,
      email,
      contact,
      purchasedProduct,
    });

    await newMPCJFormDetails.save();
    res.status(201).send({ message: 'MPCJ form details saved successfully' });
  } catch (error) {
    console.error('Error saving MPCJ form details:', error);
    res.status(400).send({ message: 'Error saving MPCJ form details', error });
  }
};

// Find all MPCJ form details
const getMPCJFormDetails = async (req, res) => {
  console.log('Received request to find MPCJ form details');

  try {
    const mpcjFormDetails = await MPCJFormDetails.find();
    res.status(200).send(mpcjFormDetails);
  } catch (error) {
    console.error('Error retrieving MPCJ form details:', error);
    res.status(400).send({ message: 'Error retrieving MPCJ form details', error });
  }
};

// Update MPCJ form details by ID
const updateMPCJFormDetails = async (req, res) => {
  const { id } = req.params;
  const { name, email, contact, purchasedProduct } = req.body;
  console.log(`Received request to update MPCJ form details for ID: ${id}`);

  try {
    const updatedMPCJFormDetails = await MPCJFormDetails.findByIdAndUpdate(
      id,
      { name, email, contact, purchasedProduct },
      { new: true }
    );

    if (!updatedMPCJFormDetails) {
      return res.status(404).send({ message: 'MPCJ form details not found' });
    }

    res.status(200).send({ message: 'MPCJ form details updated successfully', data: updatedMPCJFormDetails });
  } catch (error) {
    console.error('Error updating MPCJ form details:', error);
    res.status(400).send({ message: 'Error updating MPCJ form details', error });
  }
};

// Delete MPCJ form details by ID
const deleteMPCJFormDetails = async (req, res) => {
  const { id } = req.params;
  console.log(`Received request to delete MPCJ form details for ID: ${id}`);

  try {
    const deletedMPCJFormDetails = await MPCJFormDetails.findByIdAndDelete(id);

    if (!deletedMPCJFormDetails) {
      return res.status(404).send({ message: 'MPCJ form details not found' });
    }

    res.status(200).send({ message: 'MPCJ form details deleted successfully' });
  } catch (error) {
    console.error('Error deleting MPCJ form details:', error);
    res.status(400).send({ message: 'Error deleting MPCJ form details', error });
  }
};

// 
const getTotalMPCJform = async (req, res) => {
  try {
    const totalForms = await MPCJFormDetails.countDocuments();
    res.status(200).send({ totalForms }); 
  } catch (error) {
    console.error('Error retrieving MPCJ form count:', error);
    res.status(400).send({ message: 'Error retrieving MPCJ form count', error });
  }
};


module.exports = {
  createMPCJFormDetails,
  getMPCJFormDetails,
  updateMPCJFormDetails,
  deleteMPCJFormDetails,
  getTotalMPCJform
};
