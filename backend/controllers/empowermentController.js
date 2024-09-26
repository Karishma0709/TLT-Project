const mongoose = require('mongoose');
require('../models/empowerment');
const axios = require('axios');
const crypto = require('crypto'); // Make sure to import crypto
const ESchema = mongoose.model('empowermentFormDetails');

const generateTransctionID = () => {
  const timestamp = Date.now();
  const randomNum = Math.floor(Math.random() * 1000000);
  const merchantPrefix = 'T';
  return `${merchantPrefix} ${timestamp} ${randomNum}`;
};

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

  // Check for missing fields
  for (const field of requiredFields) {
    if (!req.body[field]) {
      return res.status(400).json({ status: `Field ${field} is required.` });
    }
  }

  // Check if files are present
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

  // Access uploaded files
  const photo = req.files.photo[0].filename;
  const aadharCard = req.files.aadharCard[0].filename;

  const { amountPaid = 0, onlineUPI = false } = feesPaid;

  const data = {
    merchantId: 'M22U3BAWIN1EZ',
    merchantTransactionId: generateTransctionID(),
    merchantUserId: 'M22U3BAWIN1EZ_1.json',
    amount: 10000,
    redirectUrl: 'http://localhost:8080/api/paymentstatus',
    redirectMode: 'REDIRECT',
    mobileNumber: '9999999999',
    paymentInstrument: { type: 'PAY_PAGE' },
  };

  const payload = JSON.stringify(data);
  const payloadMain = Buffer.from(payload).toString('base64');
  const key = '9ab60f05-ecde-447b-b534-46b9db2d612a';
  const KeyIndex = 1;

  const stringToHash = `${payloadMain}/pg/v1/pay${key}`;
  const sha256 = crypto.createHash('sha256').update(stringToHash).digest('hex');
  const checksum = `${sha256}###${KeyIndex}`;

  const options = {
    method: 'POST',
    url: 'https://api.phonepe.com/apis/hermes/pg/v1/pay',
    headers: {
      accept: 'application/json', // Change this line
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
    },
    data: { request: payloadMain },
  };

  try {
    const response = await axios.request(options);
    console.log(response.data);

    // Save to the database after successful payment initiation
    await ESchema.create({
      name: Array.isArray(name) ? name.join(', ') : name,
      photo,
      aadharCard,
      placeOfBirth: Array.isArray(placeOfBirth)
        ? placeOfBirth.join(', ')
        : placeOfBirth,

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
      feesPaid: { amountPaid, onlineUPI: onlineUPI === 'true' },
      institution: Array.isArray(institution)
        ? institution.join(', ')
        : institution,
    });
    // return res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
    return res
      .status(200)
      .send(response.data.data.instrumentResponse.redirectInfo.url);
  } catch (error) {
    console.error(
      'Payment gateway error:',
      error.response ? error.response.data : error.message
    );
    return res
      .status(500)
      .json({ status: 'Payment gateway error', error: error.message });
  }
};

const paymentStatus = async (req, res) => {
  const merchantTransactionId = req.body.transactionId; // Fix: Use req.body
  const merchantId = req.body.merchantId;
  const KeyIndex = 1;
  const key = '9ab60f05-ecde-447b-b534-46b9db2d612a';
  const String =
    `/pg/v1/paymentstatus/${merchantId}/${merchantTransactionId}` + key;
  const sha256 = crypto.createHash('sha256').update(String).digest('hex'); // Fix: Use 'digest'
  const checksum = sha256 + '###' + KeyIndex;

  // const URL = `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantId}/${merchantTransactionId}`;

  const URL = `https://api.phonepe.com/apis/hermes/pg/v1/paymentstatus/${merchantId}/${merchantTransactionId}`;

  const options = {
    method: 'GET',
    url: URL,
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
      'X-VERIFY': checksum,
      'X-MERCHANT-ID': merchantId,
    },
  };

  try {
    const response = await axios.request(options);
    res.status(200).json(response.data); // Send the response back to client
  } catch (error) {
    console.error(
      'Payment status error:',
      error.response ? error.response.data : error.message
    );
    res
      .status(500)
      .json({ status: 'Payment status error', error: error.message });
  }
};

const getempowerment = async (req, res) => {
  try {
    const data = await ESchema.find({});
    res.send({ status: 'ok', data });
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
    res.status(201).json({ message: 'User Deleted Successfully' });
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
  paymentStatus,
  getempowerment,
  getTotalEmpowermentForms,
  Update,
  Edelete,
};
