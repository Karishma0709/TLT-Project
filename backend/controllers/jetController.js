const multer = require('multer');
const path = require('path');
const ContactDocumentDetails = require('../models/contactDocument');
const JetForm = require('../models/jetForm');

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads'); // Ensure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Route to save contact document details
const saveContactDocumentDetails = async (req, res) => {
  upload.fields([{ name: 'photo' }, { name: 'aadhar' }])(req, res, async function (err) {
    if (err) {
      return res.status(400).send({ message: 'Error uploading files', err });
    }

    const { files } = req;
    if (!files || !files.photo || !files.aadhar) {
      return res.status(400).send({ message: 'Photo and Aadhar are required' });
    }

    try {
      const newContactDocumentDetails = new ContactDocumentDetails({
        photo: {
          data: files.photo[0].filename,
          contentType: files.photo[0].mimetype,
        },
        aadhar: {
          data: files.aadhar[0].filename,
          contentType: files.aadhar[0].mimetype,
        },
      });

      await newContactDocumentDetails.save();
      res.status(200).send({ message: 'Successfully uploaded and saved document details' });
    } catch (error) {
      res.status(500).send({ message: 'Error saving contact document details', error });
    }
  });
};

// Route to create JetForm data
const createJetForm = async (req, res) => {
  const formData = req.body;

  try {
    const newJetForm = new JetForm(formData);
    await newJetForm.save();
    res.status(201).json({ message: "Form data saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Route to find contact document details
const findContactDocumentDetails = async (req, res) => {
  try {
    const contactDocumentDetails = await ContactDocumentDetails.find();
    res.status(200).send(contactDocumentDetails);
  } catch (error) {
    res.status(400).send({ message: 'Error retrieving contact document details', error });
  }
};

module.exports = { saveContactDocumentDetails, createJetForm, findContactDocumentDetails };
