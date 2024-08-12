const mongoose = require('mongoose');

const notifySchema = new mongoose.Schema({
 text:{
    type:String,
    required:[true,"please add notification"]
 }
});

const Notify = mongoose.model('Notify', notifySchema);

module.exports = Notify;