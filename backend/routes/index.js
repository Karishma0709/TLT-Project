const express = require('express');
const multer = require('multer');
const path = require('path');
const mongoose = require('mongoose');
const router = express.Router();

// Import controllers
const {
  createTpmFormDetails,
  getTpmFormDetails,
  updateTpmFormDetails,
  deleteTpmFormDetails,
  getTotalTpmCount,
} = require('../controllers/tpmController');

const {
  createMPCJFormDetails,
  getMPCJFormDetails,
  updateMPCJFormDetails,
  deleteMPCJFormDetails,
  getTotalMPCJform,
  mpcjpaymentStatus,
} = require('../controllers/mpcjOfflineController');

const userSignUpController = require('../controllers/userSingUp');
const userSignInController = require('../controllers/userSignIn');
const userDetailsController = require('../controllers/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controllers/userLogout');
const allRegisterUser = require('../controllers/allRegisterUsers');

const {
  createMarquee,
  getMarquees,
  getMarqueeById,
  updateMarquee,
  deleteMarquee,
} = require('../controllers/marqueeControllers');

const notifyController = require('../controllers/notifyController');
const empowermentController = require('../controllers/empowermentController');
const {
  createPyPaperPDFupload,
  getPyPaperPDFupload,
  updatePyPaperPDFupload,
  deletePyPaperPDFupload,
} = require('../controllers/PrevYearPaperPDFUploadController');
const {
  FastTrackFormDetails,
  FastTrackpayStatus,
  getFastTrackForm,
  deleteFastTrackForm,
  updateFastTrackForm,
  getTotalFastTrackForms,
} = require('../controllers/fastractFormController');
const {
  createJetForm,
  getJetForms,
  deleteJetForm,
  updateJetForm,
  getTotalJetForms,
} = require('../controllers/jetController');
const {
  createSyllabusUpload,
  getSyllabusFiles,
  updateSyllabusById,
  deleteSyllabusById,
} = require('../controllers/syllabusUploadController');
const {
  createPyPapersDetail,
  getAllPyPapers,
  updatePyPapersDetail,
  deletePyPapersDetail,
  getTotalPyPapersCount,
} = require('../controllers/pyPaperController');

const {
  uploadUnpaidFile,
  getUnpaidFiles,
  updateUnpaidFile,
  deleteUnpaidFile,
} = require('../controllers/unpaidProductController');

const {
  getQuiz,
  updateQuiz,
  createUser,
  fetchAllUser,
} = require('../controllers/quizController');
const {  createMpcjProduct, getAllMpcjProducts, editMpcjProduct, deleteMpcjProduct } = require('../controllers/addMpcjProductController');


// Static file setup
router.use('/files', express.static('files'));
router.use('/notifiesfiles', express.static('files'));
router.use('/empowermentForm', express.static('files'));
router.use('/fastTrackForm', express.static('files'));
router.use('/jetForm', express.static('files'));

// Multer storage configurations
const multerStorage = (directory) =>
  multer.diskStorage({
    destination: (req, file, cb) => cb(null, directory),
    filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
  });

//storage file name
const upload = multer({ storage: multerStorage('./files') });
const notifyUpload = multer({ storage: multerStorage('./notifiesfiles') });
const empowermentUpload = multer({ storage: multerStorage('./notifiesfiles') });
const fastTrackUpload = multer({ storage: multerStorage('./files') });
const jetFormUpload = multer({ storage: multerStorage('./jetFormfiles') });
const syllabusUpload = multer({
  storage: multerStorage('./SyllabusUploadFiles'),
});
const prevYearPDFuploadUpload = multer({
  storage: multerStorage('./prevYearPDFuploadUpload'),
});
const unpaidProductUpload = multer({
  storage: multerStorage('./unpaidProductUploadFiles'),
});

// Previous paper routes
router.post('/createPyPapersDetail', createPyPapersDetail);
router.get('/getAllPyPapers', getAllPyPapers);
router.put('/updatePyPapersDetail/:id', updatePyPapersDetail);
router.delete('/deletePyPapersDetail/:id', deletePyPapersDetail);
router.get('/getTotalPyPapersCount', getTotalPyPapersCount);

// TPM routes
router.post('/createTpmFormDetails', createTpmFormDetails);
router.get('/getTpmFormDetails', getTpmFormDetails);
router.put('/updateTpmFormDetails/:id', updateTpmFormDetails);
router.delete('/deleteTpmFormDetails/:id', deleteTpmFormDetails);
router.get('/getTotalTpmCount', getTotalTpmCount);

// JET form routes
router.post(
  '/createJetForm',
  jetFormUpload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'adhaarPhoto', maxCount: 1 },
  ]),
  createJetForm
);
router.get('/getJetForms', getJetForms);
router.put('/updateJetForm/:id', updateJetForm);
router.delete('/deleteJetForm/:id', deleteJetForm);
router.get('/getTotalJetForms', getTotalJetForms);

// MPCJ Routes
router.post('/createMPCJFormDetails', createMPCJFormDetails);
router.get('/getMPCJFormDetails', getMPCJFormDetails);
router.put('/updateMPCJFormDetails/:id', updateMPCJFormDetails);
router.delete('/deleteMPCJFormDetails/:id', deleteMPCJFormDetails);
router.get('/getTotalMPCJform', getTotalMPCJform);
// router.post('/MpcjPhonepay', MpcjPhonepay);
router.post('/mpcjpaymentStatus', mpcjpaymentStatus);

// Route to create a new product
router.post('/createMpcjProduct', createMpcjProduct);
router.get('/getAllMpcjProducts', getAllMpcjProducts);
router.delete('/deleteMpcjProduct/:id', deleteMpcjProduct); // Corrected path
router.put('/editMpcjProduct/:id', editMpcjProduct); // Corrected path

// router.delete('/deleteMpcjProduct/:id', deleteMpcjProduct);
// router.put('/updateMpcjProduct/:id', updateMpcjProduct);

// PY paper PDF upload routers
// router.post(
//   '/createPyPaperPDFupload',
//   prevYearPDFuploadUpload.single(['paperimage', 'pdf']),
//   createPyPaperPDFupload
// );

router.post(
  '/createPyPaperPDFupload',
  prevYearPDFuploadUpload.fields([
    { name: 'paperimage', maxCount: 1 },
    { name: 'pdf', maxCount: 1 },
  ]),
  createPyPaperPDFupload
);

router.get('/getPyPaperPDFupload', getPyPaperPDFupload);
router.put('/updatePyPaperPDFupload/:id', updatePyPaperPDFupload);
router.delete('/deletePyPaperPDFupload/:id', deletePyPaperPDFupload);

////////empowermentForm
const empowermentStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './notifiesfiles'); // Directory to store the files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + file.originalname;
    cb(null, uniqueSuffix);
  },
});

// Initialize Multer with the storage configuration
const Euploads = multer({ storage: empowermentStorage });

router.post(
  '/empowermentForm',
  Euploads.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
  ]),
  empowermentController.createEmpowerment
);

router.post('/paymentstatus', empowermentController.paymentStatus);
router.get('/getempowermentForm', empowermentController.getempowerment);
router.put('/Eupdate/:id', empowermentController.Update);
router.delete('/Edelete/:id', empowermentController.Edelete);
router.get(
  '/getTotalEmpowermentForms',
  empowermentController.getTotalEmpowermentForms
);

// Fast Track Routes
router.post(
  '/fastTrackForm',
  fastTrackUpload.fields([
    { name: 'picture', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
  ]),
  FastTrackFormDetails
);
router.post('/FastTrackpaystatus', FastTrackpayStatus);
router.get('/getfastTrackForm', getFastTrackForm);
router.put('/updateFastTrackForm/:id', updateFastTrackForm);
router.delete('/deleteFastTrackForm/:id', deleteFastTrackForm);
router.get('/getTotalFastTrackForms', getTotalFastTrackForms);

/// SyllabusUpload Routes
router.post(
  '/SyllabusUpload',
  syllabusUpload.single('file'),
  createSyllabusUpload
);
router.get('/getSyllabusUpload', getSyllabusFiles);
router.put(
  '/updateSyllabusById/:id',
  syllabusUpload.single('file'),
  updateSyllabusById
);
router.delete('/deleteSyllabusById/:id', deleteSyllabusById);

//unpaid product upload Routes
router.post(
  '/UnpaidUpload',
  unpaidProductUpload.single('file'),
  uploadUnpaidFile
);
router.get('/getUnpaidUpload', getUnpaidFiles);
router.put('/updateUnpaidById/:id', upload.single('file'), updateUnpaidFile);
router.delete('/deleteUnpaidById/:id', deleteUnpaidFile);

router.post('/signUp', userSignUpController);
router.post('/signIn', userSignInController);
router.get('/userDetails', authToken, userDetailsController);
router.get('/userLogout', userLogout);
router.get('/registerUser', allRegisterUser);

//Maquee Routes
router.post('/marquee', createMarquee);
router.get('/marquee', getMarquees);
// router.get('/marquee/:id', getMarqueeById);
router.put('/marquee/:id', updateMarquee);
router.delete('/marquee/:id', deleteMarquee);

// router.post('/marquee', saveMarquee);
// router.get('/marquee-data/:id', marqueeGetData);
// router.put('/marquee-data/:id', marqueeUpdate);
// router.delete('/marquee-delete/:id', marqueeDelete);

// Notification routes
router.post(
  '/notifies',
  notifyUpload.single('url'),
  notifyController.createNotification
);
router.get('/getnotifies', notifyController.getNotifications);
router.delete('/Notificationdelete/:id', notifyController.Notificationdelete);
router.put('/Notificationupdate/:id', notifyController.NotificationUpdate);

// Quiz routes
router.get('/quiz', getQuiz);
router.put('/quiz', updateQuiz);

router.post('/quizUser', createUser);
router.get('/quizUser', fetchAllUser);

module.exports = router;
