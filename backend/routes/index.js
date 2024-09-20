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
} = require('../controllers/tpmController');

const {
  createMPCJFormDetails,
  getMPCJFormDetails,
  updateMPCJFormDetails,
  deleteMPCJFormDetails,
} = require('../controllers/mpcjOfflineController');



const userSignUpController = require('../controllers/userSingUp');
const userSignInController = require('../controllers/userSignIn');
const userDetailsController = require('../controllers/userDetails');
const authToken = require('../middleware/authToken');
const userLogout = require('../controllers/userLogout');
const allRegisterUser = require('../controllers/allRegisterUsers');
const saveMarquee = require('../controllers/saveMarque');
const marqueeGetData = require('../controllers/GetMarque');
const marqueeUpdate = require('../controllers/marqueUpdate');
const marqueeDelete = require('../controllers/marqueDelete');
const notifyController = require('../controllers/notifyController');
const empowermentController = require('../controllers/empowermentController');
const PyPaperPDF = require('../controllers/PyPaperPdf');
const {
  FastTrackFormDetails,
  getFastTrackForm,
  deleteFastTrackForm,
  updateFastTrackForm,
} = require('../controllers/fastractFormController');
const {
  createJetForm,
  getJetForms,
  deleteJetForm,
  updateJetForm,
} = require('../controllers/jetController');
const {
  CreateSyllabusUpload,
  getSyllabusFiles,
} = require('../controllers/syllabusUploadController');
const {
  createPyPapersDetail,
  getAllPyPapers,
  updatePyPapersDetail,
  deletePyPapersDetail,
} = require('../controllers/pyPaperController');

// Static file setup
router.use('/files', express.static('files'));
router.use('/notifiesfiles', express.static('files'));
router.use('/empowermentForm', express.static('files'));
router.use('/fastTrackForm', express.static('files'));
router.use('/jetForm', express.static('files'));
router.use('/syllabusUpload', express.static('files'));

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
const fastTrackUpload = multer({ storage: multerStorage('./fastTrackfiles') });
const jetFormUpload = multer({ storage: multerStorage('./jetFormfiles') });
const syllabusUpload = multer({
  storage: multerStorage('./SyllabusUploadFiles'),
});

// Previous paper routes
router.post('/createPyPapersDetail', createPyPapersDetail);
router.get('/getAllPyPapers', getAllPyPapers);
router.put('/updatePyPapersDetail/:id', updatePyPapersDetail);
router.delete('/deletePyPapersDetail/:id', deletePyPapersDetail);

// TPM routes
router.post('/createTpmFormDetails', createTpmFormDetails);
router.get('/getTpmFormDetails', getTpmFormDetails);
router.put('/updateTpmFormDetails/:id', updateTpmFormDetails);
router.delete('/deleteTpmFormDetails/:id', deleteTpmFormDetails);

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

// MPCJ Routes
router.post('/createMPCJFormDetails', createMPCJFormDetails);
router.get('/getMPCJFormDetails', getMPCJFormDetails);
router.put('/updateMPCJFormDetails/:id', updateMPCJFormDetails);
router.delete('/deleteMPCJFormDetails/:id', deleteMPCJFormDetails);















router.post('/signUp', userSignUpController);
router.post('/signIn', userSignInController);
router.get('/userDetails', authToken, userDetailsController);
router.get('/userLogout', userLogout);

router.get('/registerUser', allRegisterUser);

router.post('/marquee', saveMarquee);

router.get('/marquee-data/:id', marqueeGetData);
router.put('/marquee-data/:id', marqueeUpdate);
router.delete('/marquee-delete/:id', marqueeDelete);

// PY paper

const PYmainStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './notifiesfiles'); // Directory to store the files
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + file.originalname;
    cb(null, uniqueSuffix);
  },
});

// const PYmainStorage = multer({ dest: 'notifiesfiles/' });

// Initialize Multer with the storage configuration
const PYmainuploads = multer({ storage: PYmainStorage });

router.post(
  '/PyPaperPDF',
  PYmainuploads.single('paperimage'),
  PyPaperPDF.PyPaperPDF
);

router.get('/getpydata', PyPaperPDF.getPydata);
router.put('/pypaperdataupdate/:id', PyPaperPDF.Pypaperdataupdate);
router.delete('/pypaperdataDelete/:id', PyPaperPDF.PypaperdataDelete);

// router.post("/PyPaperPDF", PyPaperPDF);

// Notification routes
router.post(
  '/notifies',
  notifyUpload.single('url'),
  notifyController.createNotification
);
router.get('/getnotifies', notifyController.getNotifications);
router.delete('/Notificationdelete/:id', notifyController.Notificationdelete);
router.put('/Notificationupdate/:id', notifyController.NotificationUpdate);

////////empowermentForm

// router.use("/empowermentForm", express.static("notifiesfiles"));

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
router.get('/getempowermentForm', empowermentController.getempowerment);

router.put('/Eupdate/:id', empowermentController.Update);
router.delete('/Edelete/:id', empowermentController.Edelete);

// Unpaid product file upload routes
require('../models/UnpaidProduct');

const unpdfSchema = mongoose.model('unpaidpdf');
router.post('/upload-files', upload.single('file'), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await unpdfSchema.create({ title: title, pdf: fileName });
    res.send({ Status: 'ok' });
  } catch (error) {
    res.json({ status: error });
  }
});

router.get('/get-files', async (req, res) => {
  try {
    unpdfSchema.find({}).then((data) => {
      res.send({ status: 'ok', data: data });
    });
  } catch (error) {
    res.json({ status: 'error', error: error.message });
  }
});

router.put('/unpaidUpdate/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await unpdfSchema.findOne({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: 'User not found' });
    }
    const updateUser = await unpdfSchema.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(201).json(updateUser);
  } catch (error) {
    console.error(error);
    res.json({ status: error.message });
  }
});

router.delete('/unpaidDelete/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await unpdfSchema.findById({ _id: id });
    if (!userExist) {
      return res.status(404).json({ message: 'User Not Found.' });
    }
    await unpdfSchema.findByIdAndDelete(id);
    res.status(201).json({ message: 'user Deletes Successfully' });
  } catch (error) {
    console.error(error);
    res.json({ status: error.message });
  }
});

// Fast Track Routes
router.post(
  '/fastTrackForm',
  fastTrackUpload.fields([
    { name: 'picture', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
  ]),
  FastTrackFormDetails
);

router.get('/getfastTrackForm', getFastTrackForm);
router.put('/updateFastTrackForm/:id', updateFastTrackForm);
router.delete('/deleteFastTrackForm/:id', deleteFastTrackForm);

//SyllabusUpload Routes
router.post(
  '/SyllabusUpload',
  syllabusUpload.single('file'),
  CreateSyllabusUpload
);
router.get('/getSyllabusUpload', getSyllabusFiles);

module.exports = router;
