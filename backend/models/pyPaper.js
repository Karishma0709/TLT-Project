const mongoose = require("mongoose");
const pyPapersDetailsSchema = new mongoose.Schema({
  number: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  // Other fields...
});

const PyPapersDetails = mongoose.model("PyPapersDetails", pyPapersDetailsSchema);
module.exports = PyPapersDetails;