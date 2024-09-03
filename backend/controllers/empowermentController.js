


// const mongoose = require('mongoose');
// require('../models/empowerment');
// const ESchema = mongoose.model("empowermentFormDetails");

// const createEmpowerment = async (req, res) => {
//     const requiredFields = [
//         'name', 'placeOfBirth', 'dateOfBirth', 'fullAddress', 'state', 'pinCode',
//         'qualification', 'collegeUniversity', 'pursuingLLB', 'yearOfPassing', 'email',
//         'fatherName', 'motherName', 'permanentAddress', 'permanentState', 'permanentCity',
//         'institution'
//     ];

//     // Check for missing fields
//     for (const field of requiredFields) {
//         if (!req.body[field]) {
//             return res.status(400).json({ status: `Field ${field} is required.` });
//         }
//     }

//     // Check for files
//     if (!req.files.photo || !req.files.aadharCard) {
//         return res.status(400).json({ status: 'Both photo and aadharCard are required.' });
//     }

//     const {
//         name,
//         placeOfBirth,
//         dateOfBirth,
//         fullAddress,
//         state,
//         pinCode,
//         qualification,
//         collegeUniversity,
//         pursuingLLB,
//         yearOfPassing,
//         email,
//         fatherName,
//         motherName,
//         permanentAddress,
//         permanentState,
//         permanentCity,
//         oldStudentOfShubhamSir,
//         feesPaid = {},
//         institution
//     } = req.body;

//     const photo = req.files.photo[0].buffer; // Get the photo file buffer from multer
//     const aadharCard = req.files.aadharCard[0].buffer; // Get the aadharCard file buffer from multer

//     const { amountPaid = 0, onlineUPI = false } = feesPaid;

//     try {

//         console.log(req.body)
//         await ESchema.create({
//             name,
//             photo, // Store the photo file buffer
//             aadharCard, // Store the aadharCard file buffer
//             placeOfBirth,
//             dateOfBirth,
//             fullAddress,
//             state,
//             pinCode,
//             qualification,
//             collegeUniversity,
//             pursuingLLB: pursuingLLB === 'true' ? 'yes' : 'no', // Convert boolean to "yes"/"no"
//             email,
//             fatherName,
//             motherName,
//             yearOfPassing,
//             permanentAddress,
//             permanentState,
//             permanentCity,
//             oldStudentOfShubhamSir: oldStudentOfShubhamSir === 'true' ? 'yes' : 'no', // Convert boolean to "yes"/"no"
//             feesPaid: {
//                 amountPaid,
//                 onlineUPI: onlineUPI === 'true' // Convert to boolean
//             },
//             institution: Array.isArray(institution) ? institution.join(', ') : institution // Convert array to string
//         });
//         res.send({ status: "ok" });
//     } catch (error) {
//         console.error("Error during Empowerment creation:", error);
//         res.status(500).json({ status: error.message });
//     }
// };

// const getempowerment = async (req, res) => {
//     try {
//         const data = await ESchema.find({});
//         res.send({ status: "ok", data: data });
//     } catch (error) {
//         console.error(error);
//         res.json({ status: error.message });
//     }
// };

// module.exports = {
//     createEmpowerment,
//     getempowerment
// };



const mongoose = require('mongoose');
require('../models/empowerment');
const ESchema = mongoose.model("empowermentFormDetails");

const createEmpowerment = async (req, res) => {
    const requiredFields = [
      'name', 'placeOfBirth', 'dateOfBirth', 'fullAddress', 'state', 'pinCode',
      'qualification', 'collegeUniversity', 'pursuingLLB', 'yearOfPassing', 'email',
      'fatherName', 'motherName', 'permanentAddress', 'permanentState', 'permanentCity',
      'institution'
    ];
  
    // Check for missing fields in the request body
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({ status: `Field ${field} is required.` });
      }
    }
  
    // Check if files are present in the request
    if (!req.files || !req.files.photo || !req.files.aadharCard) {
      return res.status(400).json({ status: 'Both photo and aadharCard are required.' });
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
      yearOfPassing,
      email,
      fatherName,
      motherName,
      permanentAddress,
      permanentState,
      permanentCity,
      oldStudentOfShubhamSir,
      feesPaid = {},
      institution
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
          onlineUPI: onlineUPI === 'true'
        },
        institution: Array.isArray(institution) ? institution.join(', ') : institution
      });
  
      res.send({ status: "ok" });
    } catch (error) {
      console.error("Error during Empowerment creation:", error);
      res.status(500).json({ status: error.message });
    }
  };



  const getempowerment = async (req, res) => {
    try {
        const data = await ESchema.find({});
        res.send({ status: "ok", data: data });
    } catch (error) {
        console.error(error);
        res.json({ status: error.message });
    }
};
  
module.exports = {
    createEmpowerment,
    getempowerment
};