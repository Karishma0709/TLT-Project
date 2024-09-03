const FastTrackForm = require("../models/FastTrackForm");

const FastTrackFormDetails = async (req, res) => {
  try {
    console.log("Request received:", req.body,req.files);


    if (!req.files || !req.files["picture"] || !req.files["aadharCard"]) {
      return res.status(400).json({ error: 'Both picture and aadharCard fields are required.' });
    }


    const {
      name,
      placeOfBirth,
      dateOfBirth,
      fullAddress,
      state,
      pinCode,
      qualification,
      collegeUniversity,
      pursuingLLB,
      yearOfPassing,
      email,
      fatherName,
      motherName,
      permanentAddress,
      permanentState,
      permanentCity,
      prelims,
      mains,
      targetedstate,
      score,
      year,
      feesPaid,
      amountPaid,
      oldStudentOfShubhamSir,
      institution,
    } = req.body;

    const picture = req.files["picture"][0].path;
    const aadharCard = req.files["aadharCard"][0].path;

    const newFastTrackForm = new FastTrackForm({
      picture,
      name,
      placeOfBirth,
      dateOfBirth,
      fullAddress,
      state,
      pinCode,
      qualification,
      collegeUniversity,
      pursuingLLB,
      yearOfPassing,
      email,
      fatherName,
      motherName,
      permanentAddress,
      permanentState,
      permanentCity,
      aadharCard,
      feesPaid,
      amountPaid,
      prelims,
      mains,
      targetedstate,
      score,
      year,
      oldStudentOfShubhamSir,
      institution,
    });

    await newFastTrackForm.save();
    res.status(201).json({ message: "Form created successfully!", form: newFastTrackForm });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};


const getFastTrackForm=async(req,res)=>{
  try{
const fastTrackFormData=await FastTrackForm.find()
res.status(200).json({ fastTrackFormData });
  }
  catch(error){
res.status(500).json({error:"Internal server error."})
  }
}

module.exports = FastTrackFormDetails;
