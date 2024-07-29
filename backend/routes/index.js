// const express = require('express');
// const { createRegistrationForm } = require('../controllers/registrationFormController');
// const { createPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
// const { getAllPyPapersDetails,createPyPapersDetails } = require('../controllers/pyPaperController');
// const {saveGuardianDetails} =require("../controllers/gaurdianDetailsController")
// const {saveContactDocumentDetails,findContactDocumentDetails} =require("../controllers/contactDocController")
// const {saveEducationalDetails,findEducationalDetails} =require("../controllers/educationalController")
// const {saveConsentDetails, findConsentDetails} =require("../controllers/consentController")



// const router = express.Router();

// router.post('/fastTrackForm', createRegistrationForm);


// router.post('/personal-info', createPersonalInfo);
// router.get('/personal-info', getPersonalInfo);

// router.post('/pyPaper-info', createPyPapersDetails);
// router.get('/pyPaper-info', getAllPyPapersDetails);

// ;
// router.post('/saveGuardianDetails', saveGuardianDetails);
// router.get('/saveGuardianDetails', saveGuardianDetails);

// router.post('/constactDocumentDetails', saveContactDocumentDetails);
// router.get('/constactDocumentDetails', findContactDocumentDetails);

// router.post('/EducationalDetails', saveEducationalDetails);
// router.get('/EducationalDetails', findEducationalDetails);

// router.post('/ConsentDetails', saveConsentDetails);
// router.get('/ConsentDetails', findConsentDetails);

// module.exports = router;

const express = require('express');
const { createRegistrationForm } = require('../controllers/registrationFormController');
const { createPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
const { getAllPyPapersDetails, createPyPapersDetails } = require('../controllers/pyPaperController');
const { saveGuardianDetails } = require("../controllers/gaurdianDetailsController"); // Fixed typo
const { saveContactDocumentDetails, findContactDocumentDetails } = require("../controllers/contactDocController");
const { saveEducationalDetails, findEducationalDetails } = require("../controllers/educationalController");
const { saveConsentDetails, findConsentDetails } = require("../controllers/consentController");

const router = express.Router();

router.post('/fastTrackForm', createRegistrationForm);

router.post('/personal-info', createPersonalInfo);
router.get('/personal-info', getPersonalInfo);

router.post('/pyPaper-info', createPyPapersDetails);
router.get('/pyPaper-info', getAllPyPapersDetails);

router.post('/guardian-details', saveGuardianDetails); // Consistent naming
router.get('/guardian-details', saveGuardianDetails); // This should probably have a corresponding GET controller if needed

router.post('/contact-document-details', saveContactDocumentDetails); // Consistent naming
router.get('/contact-document-details', findContactDocumentDetails); // Consistent naming

router.post('/educational-details', saveEducationalDetails); // Consistent naming
router.get('/educational-details', findEducationalDetails); // Consistent naming

router.post('/consent-details', saveConsentDetails); // Consistent naming
router.get('/consent-details', findConsentDetails); // Consistent naming

module.exports = router;
