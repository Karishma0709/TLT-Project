// controllers/personalInfoController.js
const PersonalInfo = require('../models/personalInfo');

exports.createPersonalInfo = async (req, res) => {
  try {
    const personalInfo = new PersonalInfo(req.body);
    await personalInfo.save();
    res.status(201).json(personalInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.find();
    res.status(200).json(personalInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
