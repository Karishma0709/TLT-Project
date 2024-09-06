import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Notification = () => {
  const [notificationText, setNotificationText] = useState('');
  const [url, setUrl] = useState('');
  const [notifications, setNotifications] = useState([]);

  // Load notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Fetch all notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/getnotifies');
      setNotifications(response.data.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Handle delete notification
  const deleteNotifydata = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/Notificationdelete/${id}`);
      fetchNotifications(); // Refresh the data after delete
    } catch (error) {
      console.error('Error deleting notification:', error);
    }
  };

  // Handle new notification submission
  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('notificationText', notificationText);
    formData.append('url', url);

    try {
      const result = await axios.post(
        'http://localhost:8080/api/notifies',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );
      if (result.data.status === 'ok') {
        alert('Uploaded Successfully !!!');
        fetchNotifications(); // Refresh list after upload
      }
    } catch (error) {
      console.error('Error uploading notification:', error);
    }
  };

  // Handle change in input fields for each notification
  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification._id === id
          ? { ...notification, [name]: value }
          : notification
      )
    );
  };

  // Handle update notification
  const UpdateNotifydata = async (id) => {
    const updatedNotification = notifications.find(
      (notification) => notification._id === id
    );

    try {
      await axios.put(
        `http://localhost:8080/api/Notificationupdate/${id}`,
        updatedNotification
      );
      alert('Updated Successfully !!!');
      fetchNotifications(); // Refresh list after update
    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

  return (
    <>
      <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Add Notification
        </h2>
        <form onSubmit={SubmitImage}>
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">
              Notification Title:
            </label>
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
              name="url"
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
        <h2 className="text-xl font-bold mb-4 text-gray-700">
          Notifications List
        </h2>
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
                <tr
                  key={notification._id}
                  className="text-center hover:bg-gray-100"
                >
                  <td className="border border-gray-800 p-2">{index + 1}</td>
                  <td className="border border-gray-800 p-2">
                    <input
                      type="text"
                      name="notificationText"
                      value={notification.notificationText || ''}
                      onChange={(e) => handleChange(e, notification._id)}
                    />
                  </td>
                  <td className="border border-gray-800 p-2">
                    <input
                      type="text"
                      name="url"
                      value={notification.url || ''}
                      onChange={(e) => handleChange(e, notification._id)}
                    />
                  </td>
                  <td className="border border-gray-800 p-2">
                    <button
                      onClick={() => UpdateNotifydata(notification._id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700"
                    >
                      Update
                    </button>
                    <button
                      onClick={() => deleteNotifydata(notification._id)}
                      className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="border border-gray-800 p-2 text-center"
                >
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
