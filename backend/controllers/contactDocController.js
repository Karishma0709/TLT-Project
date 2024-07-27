const ContactDocumentDetails = require('../models/contactDocumentDetails');

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

module.exports = { saveContactDocumentDetails };
