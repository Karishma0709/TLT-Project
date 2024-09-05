import React, { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../Common/SummaryApi";

const Notification = () => {
  const [notificationText, setNotificationText] = useState("");
  const [url, setUrl] = useState("");
  const [notifications, setNotifications] = useState([]);

  // Fetch all notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get(SummaryApi.getAllNotifications.url);
      if (response.data.success) {
        setNotifications(response.data.data);
      }
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };

  // Handle new notification submission
  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("notificationText", notificationText);
    formData.append("url", url);

    try {
      const result = await axios.post(SummaryApi.createNotification.url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (result.data.status === "ok") {
        alert("Uploaded Successfully !!!");
        fetchNotifications(); // Refresh list after upload
      }
    } catch (error) {
      console.error("Error uploading notification:", error);
    }
  };

  // Handle delete notification
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${SummaryApi.deleteNotification.url}/${id}`);
      if (response.data.success) {
        alert("Deleted Successfully");
        fetchNotifications(); // Refresh list after deletion
      }
    } catch (error) {
      console.error("Error deleting notification:", error);
    }
  };

  // Handle update notification
  const handleUpdate = async (id) => {
    setNotificationText(""); // Clear input fields before updating
    setUrl("");
    // Update functionality can be handled here with a modal or redirect
    alert(`Update functionality for notification ID: ${id} will be implemented.`);
  };

  // Load notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <>
    <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Add Notification</h2>
      <form onSubmit={SubmitImage}>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Notification Title:</label>
          <input
            name="notificationText"
            placeholder="Write your notification"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setNotificationText(e.target.value)}
            value={notificationText}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">URL:</label>
          <input
            type="text"
            name="file"
            placeholder="Enter the URL"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition duration-300 ease-in-out"
          >
            Add Notification
          </button>
        </div>
      </form>
    </div>

<div className="mt-8">
<h2 className="text-xl font-bold mb-4 text-gray-700">Notifications List</h2>
<table className="w-full table-auto border-collapse border border-gray-800 shadow-md rounded-lg">
  <thead>
    <tr className="bg-gray-800 text-white">
      <th className="border border-gray-800 p-2">S.No</th>
      <th className="border border-gray-800 p-2">Notification Title</th>
      <th className="border border-gray-800 p-2">URL</th>
      <th className="border border-gray-800 p-2">Actions</th>
    </tr>
  </thead>
  <tbody>
    {notifications.length > 0 ? (
      notifications.map((notification, index) => (
        <tr key={notification._id} className="text-center hover:bg-gray-100">
          <td className="border border-gray-800 p-2">{index + 1}</td>
          <td className="border border-gray-800 p-2">{notification.notificationText}</td>
          <td className="border border-gray-800 p-2">{notification.url}</td>
          <td className="border border-gray-800 p-2">
            <button
              onClick={() => handleUpdate(notification._id)}
              className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700"
            >
              Update
            </button>
            <button
              onClick={() => handleDelete(notification._id)}
              className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
            >
              Delete
            </button>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4" className="border border-gray-800 p-2 text-center">
          No notifications available.
        </td>
      </tr>
    )}
  </tbody>
</table>
</div>
</>
  );
};

export default Notification;
