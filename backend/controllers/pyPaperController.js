// controllers/pyPaperController.js
const pyPapersDetails = require('../models/pyPaper');

const createPyPapersDetails = async (req, res) => {
  console.log("createPyPapersDetails called");
  console.log("Request body:", req.body);
  try {
    const newPyPapersDetails = new pyPapersDetails(req.body);
    await newPyPapersDetails.save();
    res.status(201).json(newPyPapersDetails);
  } catch (error) {
    console.error("Error saving pyPaper details:", error);
    res.status(400).json({ error: error.message });
  }
};

const getAllPyPapersDetails = async (req, res) => {
  console.log("getAllPyPapersDetails called");
  try {
    const details = await pyPapersDetails.find();
    res.status(200).json(details);
  } catch (error) {
    console.error("Error fetching pyPaper details:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPyPapersDetails,
  getAllPyPapersDetails,
};
