const PdfModule =require("../models/pypaperpdf")
const multer=require("multer")

const upload= multer({dest:"uploads/"})
 
async  function PyPaperPDF(req,res){
upload.single("paperpdf")

console.log(req.body)
console.log(req.file)
return res.redirect('/PyPaperPDF')
}


module.exports = PyPaperPDF;
