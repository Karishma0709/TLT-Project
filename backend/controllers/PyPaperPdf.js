const mongoose = require('mongoose');
require("../models/pypaperpdf")

const Pypschema = mongoose.model("pyPaperModule");
 
async function PyPaperPDF(req,res){
  console.log(req.file,req.body)

const Papertitle=req.body.Papertitle;
const paperimage = req.file;  // Access the uploaded files array
console.log(paperimage); // const paperimage = req.file;  // Corrected to access the file's filename
try{
  await Pypschema.create({
    Papertitle: Papertitle,
    paperimage: paperimage  })
}catch (error) {
  console.error("Error during paper creation:", error);
  res.status(500).json({ status: error.message });
}
}

const getPydata = async (req, res) => {
  try {
      const data = await Pypschema.find({});
      res.send({ status: "ok", data: data });
  } catch (error) {
      console.error(error);
      res.json({ status: error.message });
  }
};


module.exports = {PyPaperPDF,getPydata};