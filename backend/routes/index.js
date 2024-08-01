const express = require('express');
const router = express.Router();
const { saveTpmFormDetails, findTpmFormDetails } = require('../controllers/tpmController');
const createPyPapersDetail = require('../controllers/pyPaperController');
const { saveMPCJFormDetails, findMPCJFormDetails } = require('../controllers/mpcjOfflineController');
const {saveContactDocumentDetails,findContactDocumentDetails}=require("../controllers/contactDocController")

// Define routes
router.post('/prepaper', createPyPapersDetail);
router.post('/tpmForm', saveTpmFormDetails);
router.post("/mpcjForm", saveMPCJFormDetails);

router.get('/tpmForm', findTpmFormDetails);
router.post('/contactDoc', saveContactDocumentDetails);
router.get('/contactDoc', findContactDocumentDetails);

module.exports = router;
