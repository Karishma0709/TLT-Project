const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactDocumentsSchema = new Schema({
  photo: {
    type: String,
    required: true,
  },
  adhaarPhoto: {
    type: String,
    required: true,
  },
});

const constactDocumentDetails = mongoose.model(
  "constactDocumentDetails",
  contactDocumentsSchema
);

module.exports = constactDocumentDetails;
