const express = require('express');
const multer = require('multer');
const path = require('path');
const FastTrackFormDetails = require('../controllers/fastTrackFormController'); 

const router = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Ensure the folder 'uploads' exists or create it
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname); // Unique filename
    },
});

// Multer upload configuration
const upload = multer({ storage: storage });

// Route setup
router.post('/upload', upload.fields([
    { name: 'picture', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 }
]), FastTrackFormDetails);

module.exports = router;
