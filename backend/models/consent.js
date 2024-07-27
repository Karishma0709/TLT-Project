const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const consentSchema = new Schema({
  annualIncome: { type: String, required: true },
  accomodationAssistance:{ type: String, required: true }
});

const consentDetails=mongoose.model("consentDetails",consentSchema)
module.exports=consentDetails