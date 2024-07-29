// // controllers/pyPaperController.js
const pyPapersDetails = require("../models/pyPaper");

// const createPyPapersDetails = async (req, res) => {
//   console.log("createPyPapersDetails called");
//   console.log("Request body:", req.body);
//   try {
//     const newPyPapersDetails = new pyPapersDetails(req.body);
//     await newPyPapersDetails.save();
//     res.status(201).json(newPyPapersDetails);
//   } catch (error) {
//     console.error("Error saving pyPaper details:", error);
//     res.status(400).json({ error: error.message });
//   }
// };

// const getAllPyPapersDetails = async (req, res) => {
//   console.log("getAllPyPapersDetails called");
//   try {
//     const details = await pyPapersDetails.find();
//     res.status(200).json(details);
//   } catch (error) {
//     console.error("Error fetching pyPaper details:", error);
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = {
//   createPyPapersDetails,
//   getAllPyPapersDetails,
// };

const createPyPapersDetail = async (req, res) => {
  const { number, email, name } = req.body;

  console.log(req.body);

  if (!number || !email || !name) {
    return res
      .status(400)
      .json({ error: "number, email, and name are required fields." });
  }

  // Proceed with saving details if validation passes
  try {
    const pyPapersDetails2 = new pyPapersDetails({
      contact: number,
      email,
      name,
    });
    await pyPapersDetails2.save();
    res.status(201).json(pyPapersDetails2);
  } catch (error) {
    console.error("Error saving pyPaper details:", error);
    res.status(500).json({ error: "Error saving pyPaper details" });
  }
};
module.exports = createPyPapersDetail;
