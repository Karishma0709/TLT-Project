
const express = require('express');
const createPyPapersDetail = require('../controllers/pyPaperController');
const newTpmFormDetails =require("../controllers/tpmController")

// const { createRegistrationForm } = require('../controllers/registrationFormController');
// const { createPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
// const { saveGuardianDetails } = require("../controllers/gaurdianDetailsController"); // Fixed typo
// const { saveContactDocumentDetails, findContactDocumentDetails } = require("../controllers/contactDocController");
// const { saveEducationalDetails, findEducationalDetails } = require("../controllers/educationalController");
// const { saveConsentDetails, findConsentDetails } = require("../controllers/consentController");
// const { saveMPCJFormDetails, findMPCJFormDetails } = require('../controllers/mpcjOfflineController');


const router = express.Router();
router.post('/prepaper',createPyPapersDetail );

router.post('/tpmForm',newTpmFormDetails);



// router.post('/consentdetails', saveConsentDetails); // Consistent naming
// router.get('/consent-details', findConsentDetails); // Consistent naming

// router.post("/mpcjForm",saveMPCJFormDetails)


// router.post('/fastTrackForm', createRegistrationForm);

// router.post('/personalinfo', createPersonalInfo);
// router.get('/personal-info', getPersonalInfo);


// router.post('/guardian-details', saveGuardianDetails); // Consistent naming
// router.get('/guardian-details', saveGuardianDetails); // This should probably have a corresponding GET controller if needed

// router.post('/contact-document-details', saveContactDocumentDetails); // Consistent naming
// router.get('/contact-document-details', findContactDocumentDetails); // Consistent naming

// router.post('/educational-details', saveEducationalDetails); // Consistent naming
// router.get('/educational-details', findEducationalDetails); // Consistent naming





module.exports = router;
