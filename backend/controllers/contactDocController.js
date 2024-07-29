const ContactDocumentDetails = require('../models/contactDocument');

const saveContactDocumentDetails = async (req, res) => {
  const { photo, adhaarPhoto } = req.body;

  try {
    const newContactDocumentDetails = new ContactDocumentDetails({
      photo,
      adhaarPhoto,
    });

    await newContactDocumentDetails.save();
    res.status(201).send({ message: 'Contact document details saved successfully' });
  } catch (error) {
    res.status(400).send({ message: 'Error saving contact document details', error });
  }
};

const findContactDocumentDetails = async (req, res) => {
  try {
    const contactDocumentDetails = await ContactDocumentDetails.find();
    res.status(200).send(contactDocumentDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving contact document details', error });
  }
};

module.exports = { saveContactDocumentDetails, findContactDocumentDetails };
