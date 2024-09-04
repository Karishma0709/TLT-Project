const mongoose=require("mongoose")

const SyllabusUpLoadSchema=new mongoose.Schema({
  pdf: String,
  title:String
},{timestamps:true})

mongoose.model("SyllabusUpload",SyllabusUpLoadSchema)