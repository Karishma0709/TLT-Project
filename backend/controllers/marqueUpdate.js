const marqueeModel = require("../models/marquee");
const mongoose = require('mongoose');

async function marqueeUpdate(req, res) {
    const { _id } = req.params;
    const { marquee } = req.body;

    try {
        const updatedMarquee = await marqueeModel.findByIdAndUpdate(
            _id,
            { marquee: marquee },
            { new: true }
        );

        res.status(200).json({
            message: "Marquee updated successfully",
            success: true,
            error: false,
            data: updatedMarquee,
        });
    } catch (error) {
        res.status(500).json({
            message: error.message,
            success: false,
            error: true,
        });
    }
}

module.exports = marqueeUpdate;
