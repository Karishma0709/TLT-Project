const marqueeModel = require("../models/marquee")

async function marqueeDelete(req, res) {
    const { _id } = req.params
    console.log(_id)
    try {
        const deleteMarquee = await marqueeModel.findByIdAndDelete(_id)

        console.log("deleteMarquee", deleteMarquee)

        res.status(200).json({
            message: "deleted",
            success: true,
            error: false
        })

    } catch (error) {
        res.status(500).json({
            message: error,
            success: false,
            error: true
        })
    }
}
module.exports = marqueeDelete