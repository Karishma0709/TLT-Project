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
});

const constactDocumentDetails = mongoose.model(
  "constactDocumentDetails",
  contactDocumentsSchema
);

module.exports = constactDocumentDetails;
