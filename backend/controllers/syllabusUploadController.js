const SyllabusUpload = require('../models/syllabus');

// Controller to handle file upload
const CreateSyllabusUpload = async (req, res) => {
  try {
    const { title } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ status: 'error', message: 'File is required' });
    }

    const fileName = req.file.filename;

    const newSyllabus = new SyllabusUpload({
      title: title,
      pdf: fileName,
    });

    await newSyllabus.save();

    res
      .status(200)
      .json({ status: 'ok', message: 'File uploaded successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
};

// Controller to fetch all uploaded syllabuses
const getSyllabusFiles = async (req, res) => {
  try {
    const syllabusList = await SyllabusUpload.find({}); // Ensure this line is correct
    res.status(200).json({ status: 'ok', data: syllabusList });
  } catch (error) {
    console.error(error);
    res.status(500).json({ status: 'error', message: error.message });
  }
};


// Delete Syllabus Controller
const deleteSyllabusById = async (req, res) => {
  try {
    const { id } = req.params; // Get syllabus ID from request parameters

    const deletedSyllabus = await SyllabusUpload.findByIdAndDelete(id);

    if (!deletedSyllabus) {
      return res.status(404).json({ error: 'Syllabus not found' });
    }

    res.status(200).json({ message: 'Syllabus deleted successfully' });
  } catch (error) {
    console.error('Error deleting syllabus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Update Syllabus by ID Controller
const updateSyllabusById = async (req, res) => {
  try {
    console.log('Update Request received:', req.body);
    const { id } = req.params;
    const { title } = req.body; // You can add more fields here if needed

    if (!title) {
      return res.status(400).json({ message: 'Title is required for update' });
    }

    const updatedSyllabus = await SyllabusUpload.findByIdAndUpdate(
      id,
      { title }, // You can add more fields for updating if required
      { new: true, runValidators: true }
    );

    if (!updatedSyllabus) {
      return res.status(404).json({ message: 'Syllabus not found' });
    }

    res
      .status(200)
      .json({
        message: 'Syllabus updated successfully',
        syllabus: updatedSyllabus,
      });
  } catch (error) {
    console.error('Error updating syllabus:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  CreateSyllabusUpload,
  getSyllabusFiles,
  deleteSyllabusById,
  updateSyllabusById,
};
