const mongoose = require("mongoose");
// const Schema=mongoose.Schema

// const pyFormSchema =new Schema({
//     name: {
//         type: String,
//         required: true,
//       },
//       email: {
//         type: String,
//         required: true,
//       },
//       contact: {
//         type: String,
//         required: true,
//       },
// })

// const pyPapersDetails=mongoose.model("pyPapersDetails",pyFormSchema)
// module.exports=pyPapersDetails

const pyPapersDetailsSchema = new mongoose.Schema({
  contact: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  // Other fields...
});

const PyPapersDetails = mongoose.model("PyPapersDetails", pyPapersDetailsSchema);
module.exports = PyPapersDetails;