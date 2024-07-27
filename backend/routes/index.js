const express = require('express');
const { createRegistrationForm } = require('../controllers/registrationFormController');
const { createPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
const { getAllPyPapersDetails,createPyPapersDetails } = require('../controllers/pyPaperController');
const {saveGuardianDetails} =require("../controllers/gaurdianDetailsController")
const {saveContactDocumentDetails,findContactDocumentDetails} =require("../controllers/contactDocController")

const router = express.Router();

router.post('/fastTrackForm', createRegistrationForm);


router.post('/personal-info', createPersonalInfo);
router.get('/personal-info', getPersonalInfo);

router.post('/pyPaper-info', createPyPapersDetails);
router.get('/pyPaper-info', getAllPyPapersDetails);

router.post('/pyPaper-info', createPyPapersDetails);
router.get('/pyPaper-info', getAllPyPapersDetails);
router.post('/saveGuardianDetails', saveGuardianDetails);
router.get('/saveGuardianDetails', saveGuardianDetails);
router.post('/constactDocumentDetails', saveContactDocumentDetails);
router.get('/constactDocumentDetails', findContactDocumentDetails);
router.post('/EducationalDetails', saveEducationalDetails);
router.post('/EducationalDetails', findEducationalDetails);




module.exports = router;
