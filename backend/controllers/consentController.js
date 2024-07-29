const ConsentDetails = require('../models/consent');

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

const findConsentDetails = async (req, res) => {
  try {
    const consentDetails = await ConsentDetails.find();
    res.status(200).send(consentDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving consent details', error });
  }
};

module.exports = { saveConsentDetails, findConsentDetails };
