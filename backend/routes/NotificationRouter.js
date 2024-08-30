const express = require('express');
const router = express.Router();
// const path = require('path');
const multer = require('multer');
router.use("/files",express.static("files"))


// router.post("/notifies", saveNotification)
// router.put("/notifies/:id", notifyUpdate)



const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './notifiesfiles')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() 
    cb(null, uniqueSuffix + file.originalname)
  }
})

require('../models/notify')
const notifySchema=mongoose.model("Notify")
const upload = multer({ storage: storage }) 


router.post("/notifies",upload.single("file"),async(req,res)=>{
  console.log(req.file)
  const notification=req.body.notification;
  const fileName=req.file.filename
  try{
await notifySchema.create({notification:notification,url
  :fileName})
res.send({Status:"ok"})
  }catch(error){
res.json({status:error})
  }
})

router.get('/notifies',async(req,res)=>{
  try{notifySchema.find({}).then((data)=>{
res.send({status:"ok",data:data})
  })}catch(error){
  }
})
 


module.exports = router; 
