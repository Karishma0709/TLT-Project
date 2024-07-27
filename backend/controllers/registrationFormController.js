const RegistrationForm = require('../models/RegistrationFormSchema');

const createRegistrationForm = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new RegistrationForm(formData);
    await newForm.save();
    res.status(201).json(newForm);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createRegistrationForm
};
