const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guardianShema = new Schema({
  guardianName: {
    type: String,
    require: true,
  },
  guardianProffession: {
    type: String,
    require: true,
  },
}, { timestamps: true });

const guardianDetails = mongoose.model("guardianDetails", guardianShema);
module.exports = guardianDetails;
