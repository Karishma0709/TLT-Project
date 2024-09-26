const mongoose = require('mongoose');
require('../models/empowerment');
const ESchema = mongoose.model('empowermentFormDetails');

const createEmpowerment = async (req, res) => {
  console.log(req.body, req.files);
  const requiredFields = [
    'name',
    'placeOfBirth',
    'dateOfBirth',
    'fullAddress',
    'state',
    'pinCode',
    'qualification',
    'collegeUniversity',
    'pursuingLLB',
    'yearOfPassing',
    'email',
    'fatherName',
    'motherName',
    'permanentAddress',
    'permanentState',
    'permanentCity',
    'institution',
  ];

  // Check for missing fields in the request body
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ status: `Field ${field} is required.` });
    }
  }

  // Check if files are present in the request
  if (!req.files || !req.files.photo || !req.files.aadharCard) {
    return res
      .status(400)
      .json({ status: 'Both photo and aadharCard are required.' });
  }

  // Extract and process form data
  const {
    name,
    placeOfBirth,
    dateOfBirth,
    fullAddress,
    state,
    pinCode,
    qualification,
    collegeUniversity,
    pursuingLLB,
    Batch,
    yearOfPassing,
    email,
    fatherName,
    motherName,
    permanentAddress,
    permanentState,
    permanentCity,
    oldStudentOfShubhamSir,
    feesPaid = {},
    institution,
  } = req.body;

  // Access the uploaded files
  const photo = req.files.photo[0].filename; // Store filename instead of buffer
  const aadharCard = req.files.aadharCard[0].filename; // Store filename instead of buffer

  const { amountPaid = 0, onlineUPI = false } = feesPaid;

  try {
    // Save to the database
    await ESchema.create({
      name,
      photo,
      aadharCard,
      placeOfBirth,
      dateOfBirth,
      fullAddress,
      state,
      pinCode,
      qualification,
      collegeUniversity,
      pursuingLLB: pursuingLLB === 'true' ? 'yes' : 'no',
      Batch,
      email,
      fatherName,
      motherName,
      yearOfPassing,
      permanentAddress,
      permanentState,
      permanentCity,
      oldStudentOfShubhamSir: oldStudentOfShubhamSir === 'true' ? 'yes' : 'no',
      feesPaid: {
        amountPaid,
        onlineUPI: onlineUPI === 'true',
      },
      institution: Array.isArray(institution)
        ? institution.join(', ')
        : institution,
    });

    res.send({ status: 'ok' });
  } catch (error) {
    console.error('Error during Empowerment creation:', error);
    res.status(500).json({ status: error.message });
  }
};

const getempowerment = async (req, res) => {
  try {
    const data = await ESchema.find({});
    res.send({ status: 'ok', data: data });
  } catch (error) {
    console.error(error);
    res.json({ status: error.message });
  }
};

const Update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await ESchema.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: 'User not found' });
    }
    const updateUser = await ESchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    console.error(error);
    res.json({ status: error.message });
  }
};

const Edelete = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await ESchema.findById({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: 'User Not Found.' });
    }
    await ESchema.findByIdAndDelete(id);
    res.status(201).json({ message: 'user Deletes Successfully' });
  } catch (error) {
    console.error(error);
    res.json({ status: error.message });
  }
};


// Get Total Form Count
const getTotalEmpowermentForms = async (req, res) => {
  try {
    const totalForms = await ESchema.countDocuments();
    res.send({ status: 'ok', totalForms: totalForms });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: error.message });
  }
};

module.exports = {
  createEmpowerment,
  getempowerment,
  getTotalEmpowermentForms,
  Update,
  Edelete,
};
