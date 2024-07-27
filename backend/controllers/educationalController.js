const EducationalDetails = require('../models/educationalDetails');

const saveEducationalDetails = async (req, res) => {
  const {
    degree,
    college,
    graduationYear,
    masterGraduationYear,
    masterUniversityDegree,
  } = req.body;

  try {
    const newEducationalDetails = new EducationalDetails({
      degree,
      college,
      graduationYear,
      masterGraduationYear,
      masterUniversityDegree,
    });

    await newEducationalDetails.save();
    res.status(201).send({ message: 'Educational details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving educational details', error });
  }
};

module.exports = { saveEducationalDetails };
