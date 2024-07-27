const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const educationalSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  graduationYear: {
    type: String,
    required: true,
  },
  masterGraduationYear: {
    type: String,
    required: true,
  },
  masterUniversityDegree: {
    type: String,
    required: true,
  },
});

const EducationalDetails = mongoose.model(
  "EducationalDetails",
  educationalSchema
);

module.exports = EducationalDetails;
