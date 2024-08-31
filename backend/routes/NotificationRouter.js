



const express = require('express');
const router = express.Router();
const multer = require('multer');
const mongoose = require('mongoose');
const path = require('path');

router.use("/notifiesfiles",express.static("files"))


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './notifiesfiles');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

require('../models/notify');
const notifySchema = mongoose.model("Notify");

router.post("/notifies", upload.single("url"), async (req, res) => {
  console.log(req.file); // File information
  const notificationText = req.body.notificationText; // Text data
  const fileName = req.body.filename; // File name

  try {

    // const fileUrl = fileName ? `http://localhost:8080/notifiesfiles/${fileName}` : null;
    await notifySchema.create({
      notificationText: notificationText,
      url: fileName // Store the file name
    });
    res.send({ Status: "ok" });
  } catch (error) {
    console.error("Error during Notify creation:", error);
    res.json({ status: error.message });
  }
});

router.get('/getnotifies', async (req, res) => {
  try {
    const data = await notifySchema.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    console.error(error);
    res.json({ status: error.message });
  }
});

module.exports = router;
