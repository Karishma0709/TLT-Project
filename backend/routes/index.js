const express = require('express');
const router = express.Router();
const path = require('path');

const multer = require('multer');

router.use("/files",express.static("files"))

const { saveTpmFormDetails, findTpmFormDetails } = require('../controllers/tpmController');
const createPyPapersDetail = require('../controllers/pyPaperController');
const { saveMPCJFormDetails, findMPCJFormDetails } = require('../controllers/mpcjOfflineController');
const userSignUpController = require('../controllers/userSingUp');
const userSignInController = require('../controllers/userSignIn');
const {userDetailsController,getUserCount} = require('../controllers/userDetails');
const {createJetForm,upload } = require("../controllers/jetController")
const authToken = require('../middleware/authToken');
const userLogout = require('../controllers/userLogout');
const allRegisterUser = require('../controllers/allRegisterUsers');
const mpcjGetData = require('../controllers/mpcjGetController');
const allPyPapers = require('../controllers/allPyPaper');
const saveMarquee = require('../controllers/saveMarque');
const tpmGetData = require('../controllers/tpmGetController');
const marqueeGetData = require('../controllers/GetMarque');
const marqueeUpdate = require('../controllers/marqueUpdate');
const marqueeDelete = require('../controllers/marqueDelete');
const saveNotification = require('../controllers/saveNotification');
const notifyUpdate = require('../controllers/updateNotify');
const PyPaperPDF =require("../controllers/PyPaperPdf");


// Define routes


router.post('/prepaper', createPyPapersDetail);
router.post('/tpmForm', saveTpmFormDetails);
router.post("/mpcjForm", saveMPCJFormDetails);
router.get('/tpmForm', findTpmFormDetails);



router.post('/signUp',  userSignUpController)
router.post('/signIn',  userSignInController)
router.get('/userDetails',authToken, userDetailsController)
router.get('/userLogout', userLogout)

router.get("/registerUser", allRegisterUser)
router.get("/all-papers", allPyPapers)
router.get("/mpcj-data", mpcjGetData)
router.post("/marquee",saveMarquee)
router.get("/tmp-data", tpmGetData)
router.get("/marquee-data/:id", marqueeGetData)
router.put("/marquee-data/:id",marqueeUpdate)
// router.delete("/marquee-delete/:id", marqueeDelete)
router.post("/PyPaperPDF",PyPaperPDF)



//Noticiation
// router.post("/notifies", saveNotification)
// router.put("/notifies/:id", notifyUpdate)






  // Unpadie

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null, uniqueSuffix + file.originalname)
  }
})

require('../models/UnpaidProduct')
const unpdfSchema=mongoose.model("unpaidpdf")
const upload = multer({ storage: storage }) 


router.post("/upload-files",upload.single("file"),async(req,res)=>{
  console.log(req.file)
  const title=req.body.title;
  const fileName=req.file.filename
  try{
await unpdfSchema.create({title:title,pdf:fileName})
res.send({Status:"ok"})
  }catch(error){
res.json({status:error})
  }
})

router.get('/get-files',async(req,res)=>{
  try{unpdfSchema.find({}).then((data)=>{
res.send({status:"ok",data:data})
  })}catch(error){
  }
})



module.exports = router; 



