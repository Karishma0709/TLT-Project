const express = require('express');
const router = express.Router();
const { saveTpmFormDetails, findTpmFormDetails } = require('../controllers/tpmController');
const createPyPapersDetail = require('../controllers/pyPaperController');
const { saveMPCJFormDetails, findMPCJFormDetails } = require('../controllers/mpcjOfflineController');
const {saveContactDocumentDetails,findContactDocumentDetails}=require("../controllers/contactDocController");
const userSignUpController = require('../controllers/userSingUp');
const userSignInController = require('../controllers/userSignIn');

// Define routes
router.post('/prepaper', createPyPapersDetail);
router.post('/tpmForm', saveTpmFormDetails);
router.post("/mpcjForm", saveMPCJFormDetails);

router.get('/tpmForm', findTpmFormDetails);
router.post('/contactDoc', saveContactDocumentDetails);
router.get('/contactDoc', findContactDocumentDetails);

router.post('/signup', userSignUpController)
router.post('/signin',  userSignInController)


module.exports = router;
