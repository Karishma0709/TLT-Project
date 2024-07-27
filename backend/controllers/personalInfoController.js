const PersonalInfo = require('../models/personalInfo');

const createPersonalInfo = async (req, res) => {
  try {
    const personalInfo = new PersonalInfo(req.body);
    await personalInfo.save();
    res.status(201).json(personalInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPersonalInfo = async (req, res) => {
  try {
    const personalInfo = await PersonalInfo.find();
    res.status(200).json(personalInfo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { createPersonalInfo, getPersonalInfo };
