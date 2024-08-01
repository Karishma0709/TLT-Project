const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactDocumentsSchema = new Schema({
  photo: {
    data:Buffer,
    contentType:String    
  },
  adhaarPhoto: {
    data:Buffer,
    contentType:String
  },
}, { timestamps: true });

const constactDocumentDetails = mongoose.model(
  "constactDocumentDetails",
  contactDocumentsSchema
);

module.exports = constactDocumentDetails;
