const express = require('express');
const { createRegistrationForm } = require('../controllers/registrationFormController');
const { createPersonalInfo, getPersonalInfo } = require('../controllers/personalInfoController');
const { getAllPyPapersDetails,createPyPapersDetails } = require('../controllers/pyPaperController');
const router = express.Router();

router.post('/fastTrackForm', createRegistrationForm);

router.post('/personal-info', createPersonalInfo);
router.get('/personal-info', getPersonalInfo);

router.post('/pyPaper-info', createPyPapersDetails);
router.get('/pyPaper-info', getAllPyPapersDetails);

module.exports = router;
