import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const Notification = () => {
  const [notificationText, setNotificationText] = useState('');
  const [url, setUrl] = useState('');
  const [notifications, setNotifications] = useState([]);
  const [editId, setEditId] = useState(null);
  const [updatedText, setUpdatedText] = useState('');
  const [updatedUrl, setUpdatedUrl] = useState('');

  // Load notifications on component mount
  useEffect(() => {
    fetchNotifications();
  }, []);

  // Fetch all notifications
  const fetchNotifications = async () => {
    try {
      const response = await axios({
        url: SummaryApi.Getnotifiess.url,
        method: SummaryApi.Getnotifiess.method,
      });
      setNotifications(response.data.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  // Handle new notification submission
  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('notificationText', notificationText);
    formData.append('url', url);

    try {
      const result = await axios({
        url: SummaryApi.notifies.url,
        method: SummaryApi.notifies.method,
        data: formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      if (result.data.status === 'ok') {
        alert('Uploaded Successfully !!!');
        fetchNotifications(); // Refresh list after upload
      }
    } catch (error) {
      console.error('Error uploading notification:', error);
    }
  };

  // Handle edit notification
  const handleEdit = (notification) => {
    setEditId(notification._id);
    setUpdatedText(notification.notificationText);
    setUpdatedUrl(notification.url);
  };

  // Handle update notification
  const updateNotification = async (id) => {
    const updatedNotification = {
      notificationText: updatedText,
      url: updatedUrl,
    };

    try {
      await axios.put(
        `http://localhost:8080/api/Notificationupdate/${id}`,
        updatedNotification
      );
      alert('Updated Successfully !!!');
      fetchNotifications(); // Refresh list after update
      resetEdit();
    } catch (error) {
      console.error('Error updating notification:', error);
    }
  };

  // Delete notification
  const deleteNotifydata = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this notification?'
    );
    if (confirmDelete) {
      try {
        await axios.delete(
          `http://localhost:8080/api/Notificationdelete/${id}`
        );
        alert('Notification deleted successfully!');
        fetchNotifications(); // Refresh list after deletion
      } catch (error) {
        console.error('Error deleting notification:', error);
      }
    }
  };

  // Reset edit state
  const resetEdit = () => {
    setEditId(null);
    setUpdatedText('');
    setUpdatedUrl('');
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
                    {editId === notification._id ? (
                      <input
                        type="text"
                        value={updatedText}
                        onChange={(e) => setUpdatedText(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                      />
                    ) : (
                      notification.notificationText
                    )}
                  </td>
                  <td className="border border-gray-800 p-2">
                    {editId === notification._id ? (
                      <input
                        type="text"
                        value={updatedUrl}
                        onChange={(e) => setUpdatedUrl(e.target.value)}
                        className="border border-gray-300 rounded-md p-2 w-full"
                      />
                    ) : (
                      notification.url
                    )}
                  </td>
                  <td className="border border-gray-800 p-2">
                    {editId === notification._id ? (
                      <button
                        onClick={() => updateNotification(notification._id)}
                        className="bg-green-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-green-700"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(notification)}
                        className="bg-blue-500 text-white px-3 py-1 rounded-lg mr-2 hover:bg-blue-700"
                      >
                        Update
                      </button>
                    )}
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
