const mongoose = require('mongoose');
require("../models/pypaperpdf")

const Pypschema = mongoose.model("pyPaperModule");
 
async function PyPaperPDF(req,res){
  console.log(req.file,req.body)

const Papertitle=req.body.Papertitle;
const paperimage = req.file.filename;  // For single file
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

const Pypaperdataupdate = async(req,res)=>{
  try{
    const id=req.params.id;
    const userExist=await Pypschema.findOne({_id:id})
  if(!userExist){
  return res.status(404).json({message:"User not found"})
  }
  const updateUser=await Pypschema.findByIdAndUpdate(id,req.body,{new:true})
  res.status(201).json(updateUser)
  }catch(error){
    console.error(error);
    res.json({ status: error.message });
  }}


  const PypaperdataDelete= async(req,res)=>{
    try{
    const id=req.params.id;
    const userExist=await Pypschema.findById({_id:id})
    if(!userExist){
    return res.status(404).json({message:"User Not Found."})
    }
    await  Pypschema.findByIdAndDelete(id)
    res.status(201).json({message:"user Deletes Successfully"})
    }catch(error){
      console.error(error);
      res.json({ status: error.message });
    }
    }


module.exports = {PyPaperPDF,getPydata,Pypaperdataupdate,PypaperdataDelete};