const marqueeModel = require("../models/marquee");

async function marqueeGetData(req, res) {
   const {id}=req.params
  try {
    const marqueeData = await marqueeModel.findById(id);
    res.status(200).json({
      message: "Marquee data",
      data: marqueeData,
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
}


module.exports = marqueeGetData;