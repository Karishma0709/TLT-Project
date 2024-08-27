const mongoose=require("mongoose")

const UproductSchema=new mongoose.Schema({
  pdf: String,
  title:String
},{collection:"unpaidpdf"})

mongoose.model("unpaidpdf",UproductSchema)