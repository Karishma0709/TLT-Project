import React, { useState } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const Notification = ({ notificationId }) => {
  const [notificationText, setNotificationText] = useState('');
  const [url, setUrl] = useState('');

  const handleNotificationChange = (e) => {
    setNotificationText(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`${SummaryApi.updateNotification.url}`, {
        notification: notificationText,
        url: url,
      });
      console.log('Notification updated successfully:', response.data);
      alert('Notification updated successfully:', response.data);
      // Optionally, clear the input or display a success message
    } catch (error) {
      console.error('Error updating notification:', error);
      alert('Error updating notification:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className='font-semibold pb-2' htmlFor="notification">Notification Title:</label>
        <textarea
          name="notification"
          placeholder='Write your notification'
          className='w-full p-3 max-h-svh border border-black'
          value={notificationText}
          onChange={handleNotificationChange}
        ></textarea>

        <label className='font-semibold pb-2 mt-4' htmlFor="url">URL:</label>
        <input
          type="text"
          name="url"
          placeholder='Enter the URL'
          className='w-full p-3 max-h-svh border border-black'
          value={url}
          onChange={handleUrlChange}
        ></input>

        <div className='text-center'>
          <button type="submit" className='p-2 rounded-md my-4 font-semibold shadow-red-300 shadow'>
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Notification;
