// controllers/notifyController.js
const mongoose = require('mongoose');
require('../models/notify');
const notifySchema = mongoose.model("Notify");

const createNotification = async (req, res) => {
    console.log(req.file); // File information
    const notificationText = req.body.notificationText; // Text data
    const fileName = req.file ? req.file.filename : null; // Get the file name from multer

    try {
        await notifySchema.create({
            notificationText: notificationText,
            url: fileName // Store the file name
        });
        res.send({ Status: "ok" });
    } catch (error) {
        console.error("Error during Notify creation:", error);
        res.json({ status: error.message });
    }
};

const getNotifications = async (req, res) => {
    try {
        const data = await notifySchema.find({});
        res.send({ status: "ok", data: data });
    } catch (error) {
        console.error(error);
        res.json({ status: error.message });
    }
};

module.exports = {
    createNotification,
    getNotifications
};
