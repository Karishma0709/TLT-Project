const mongoose = require('mongoose');

const notifySchema = new mongoose.Schema({
   notification:String,
   
});

const Notify = mongoose.model('Notify', notifySchema);

module.exports = Notify;