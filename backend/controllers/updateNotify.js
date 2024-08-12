const Notify = require("../models/notify");


async function notifyUpdate(req, res) {
    const { id } = req.params;
    console.log("Request Body:", req.body);
    console.log("ID:", id);

    try {
        const updatedNotification = await Notify.findByIdAndUpdate(
            id,  // Directly pass the ID
            req.body,
            { new: true, runValidators: true } // Ensure validation is run
        );
        console.log("Updated Notification:", updatedNotification);

        if (!updatedNotification) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        res.status(200).json(updatedNotification);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating Notification' });
    }
}

module.exports = notifyUpdate;
