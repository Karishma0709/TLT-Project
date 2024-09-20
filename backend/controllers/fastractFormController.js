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

// get the data from backend to admin portal
const getFastTrackForm=async(req,res)=>{
  try{
const fastTrackFormData=await FastTrackForm.find()
res.status(200).json({ fastTrackFormData });
  }
  catch(error){
res.status(500).json({error:"Internal server error."})
  }
}


// Delete FastTrackForm Controller
const deleteFastTrackForm = async (req, res) => {
  try {
    const formId = req.params.id; // Get form ID from request parameters

    const deletedForm = await FastTrackForm.findByIdAndDelete(formId);

    if (!deletedForm) {
      return res.status(404).json({ error: "Form not found" });
    } 

    res.status(200).json({ message: "Form deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

// Update FastTrackForm by ID
const updateFastTrackForm = async (req, res) => {
  try {
    console.log("Update Request received:", req.body);
    const { id } = req.params;
    const updatedData = req.body;

    if (!updatedData || Object.keys(updatedData).length === 0) {
      return res.status(400).json({ message: "No data provided for update" });
    }

    const updatedForm = await FastTrackForm.findByIdAndUpdate(
      id,
      updatedData,
      { new: true, runValidators: true }
    );

    if (!updatedForm) {
      return res.status(404).json({ message: "Form not found" });
    }

    res.status(200).json(updatedForm);
  } catch (error) {
    console.error("Error updating form:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


module.exports = { FastTrackFormDetails, getFastTrackForm, deleteFastTrackForm, updateFastTrackForm};
