// const EmpowermentFormDetails = require('../models/empowermentFormDetails');

// const saveEmpowermentFormDetails = async (req, res) => {
//   const {
//     picture,
//     name,
//     placeOfBirth,
//     dateOfBirth,
//     fullAddress,
//     state,
//     pinCode,
//     qualification,
//     collegeUniversity,
//     pursuingLLB,
//     yearOfPassing,
//     email,
//     fatherName,
//     motherName,
//     permanentAddress,
//     permanentState,
//     permanentCity,
//     aadharCard,
//     feesPaid,
//     oldStudentOfShubhamSir,
//     institution
//   } = req.body;

//   try {
//     const newEmpowermentFormDetails = new EmpowermentFormDetails({
//       picture,
//       name,
//       placeOfBirth,
//       dateOfBirth,
//       fullAddress,
//       state,
//       pinCode,
//       qualification,
//       collegeUniversity,
//       pursuingLLB,
//       yearOfPassing,
//       email,
//       fatherName,
//       motherName,
//       permanentAddress,
//       permanentState,
//       permanentCity,
//       aadharCard,
//       feesPaid,
//       oldStudentOfShubhamSir,
//       institution
//     });

//     await newEmpowermentFormDetails.save();
//     res.status(201).send({ message: 'Empowerment form details saved successfully' });
//   } catch (error) {
//     res.status(400).send({ message: 'Error saving empowerment form details', error });
//   }
// };

// const findEmpowermentFormDetails = async (req, res) => {
//   try {
//     const empowermentFormDetails = await EmpowermentFormDetails.find();
//     res.status(200).send(empowermentFormDetails);
//   } catch (error) {
//     res.status(400).send({ message: 'Error retrieving empowerment form details', error });
//   }
// };

// module.exports = { saveEmpowermentFormDetails, findEmpowermentFormDetails };


// controllers/notifyController.js
const mongoose = require('mongoose');
require('../models/empowerment');
const notifySchema = mongoose.model("empowermentFormDetails");

const createEmpowerment = async (req, res) => {
    console.log(req.file); // File information
    const notificationText = req.body.notificationText; // Text data
    const fileName = req.file ? req.file.filename : null; // Get the file name from multer

    try {
        await notifySchema.create({
            notificationText: notificationText,
            url: fileName // Store the file name
        });
        res.send({ Status: "ok" });
    } catch (error) {
        console.error("Error during Notify creation:", error);
        res.json({ status: error.message });
    }
};

const getempowerment = async (req, res) => {
    try {
        const data = await notifySchema.find({});
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
