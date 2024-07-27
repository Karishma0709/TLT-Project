const ConsentDetails = require('../models/consentDetails');

const saveConsentDetails = async (req, res) => {
  const { annualIncome, accomodationAssistance } = req.body;

  try {
    const newConsentDetails = new ConsentDetails({
      annualIncome,
      accomodationAssistance,
    });

    await newConsentDetails.save();
    res.status(201).send({ message: 'Consent details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving consent details', error });
  }
};

module.exports = { saveConsentDetails };
