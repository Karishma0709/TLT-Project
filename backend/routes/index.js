const express = require('express');
const router = express.Router();
const { saveTpmFormDetails, findTpmFormDetails } = require('../controllers/tpmController');
const createPyPapersDetail = require('../controllers/pyPaperController');
const { saveMPCJFormDetails, findMPCJFormDetails } = require('../controllers/mpcjOfflineController');
const userSignUpController = require('../controllers/userSingUp');
const userSignInController = require('../controllers/userSignIn');
const userDetailsController = require('../controllers/userDetails');
const {createJetForm,upload } = require("../controllers/jetController")
const authToken = require('../middleware/authToken');
const userLogout = require('../controllers/userLogout');
const allRegisterUser = require('../controllers/allRegisterUsers');
const mpcjGetData = require('../controllers/mpcjGetController');
const allPyPapers = require('../controllers/allPyPaper');
<<<<<<< HEAD
const saveMarquee = require('../controllers/saveMarque');
=======
const tpmGetData = require('../controllers/tpmGetController');
>>>>>>> ba95ab08130e9210c737d901227f3421e0feb1fd

// Define routes
router.post('/prepaper', createPyPapersDetail);
router.post('/tpmForm', saveTpmFormDetails);
router.post("/mpcjForm", saveMPCJFormDetails);

router.get('/tpmForm', findTpmFormDetails);
router.post('/jetform', upload.fields([{ name: 'photo' }, { name: 'aadhar' }]), createJetForm);

router.post('/signUp',  userSignUpController)
router.post('/signIn',  userSignInController)
router.get('/userDetails',authToken, userDetailsController)
router.get('/userLogout', userLogout)

router.get("/registerUser", allRegisterUser)
router.get("/all-papers", allPyPapers)
router.get("/mpcj-data", mpcjGetData)
<<<<<<< HEAD
router.post("/marquee",saveMarquee)
=======
router.get("/tmp-data", tpmGetData)
>>>>>>> ba95ab08130e9210c737d901227f3421e0feb1fd

module.exports = router;
