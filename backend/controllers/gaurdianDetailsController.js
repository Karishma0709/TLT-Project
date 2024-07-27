const GuardianDetails = require('../models/guardianDetails');

const saveGuardianDetails = async (req, res) => {
  const { guardianName, guardianProffession } = req.body;

  try {
    const newGuardianDetails = new GuardianDetails({
      guardianName,
      guardianProffession,
    });

    await newGuardianDetails.save();
    res.status(201).send({ message: 'Guardian details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving guardian details', error });
  }
};

module.exports = { saveGuardianDetails };
