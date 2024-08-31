const FastTrackForm = require("../models/FastTrackForm");

const FastTrackFormDetails = async (req, res) => {
    try {
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
            feesPaid,
            oldStudentOfShubhamSir,
            institution 
        } = req.body;

        const picture = req.files['picture'][0].path;
        const aadharCard = req.files['aadharCard'][0].path;

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
            oldStudentOfShubhamSir,
            institution
        });

        await newFastTrackForm.save(); 
        res.status(201).json({ message: 'Form created successfully!', form: newFastTrackForm });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = FastTrackFormDetails; 
