import React, { useState } from "react";
import axios from "axios";
import SummaryApi from "../Common/SummaryApi";

const Notification = () => {
  // const [notificationText, setNotificationText] = useState("");
  // const [url, setUrl] = useState("");

  // const handleNotificationChange = (e) => {
  //   setNotificationText(e.target.value);
  // };

  // const handleUrlChange = (e) => {
  //   setUrl(e.target.value);
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.put(`${SummaryApi.updateNotification.url}`, {
  //       notification: notificationText,
  //       url: url,
  //     });
  //     console.log("Notification updated successfully:", response.data);
  //     alert("Notification updated successfully:", response.data);
  //     // Optionally, clear the input or display a success message
  //   } catch (error) {

  //     console.error("Error updating notification:", error);
  //     alert("Error updating notification:", error);
  //   }
  // };
  const [notificationText, setNotificationText] = useState("");
  const [url, setUrl] = useState("");

  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("notificationText", notificationText);
    formData.append("url", url);
    console.log(notificationText, url);
    const result = await axios.post(
      "http://localhost:5054/api/notifies",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
  };
  return (
    <div>
      <form onSubmit={SubmitImage}>
        <label className="font-semibold pb-2" htmlFor="notification">
          Notification Title:
        </label>
        <textarea
          name="notification"
          placeholder="Write your notification"
          className="w-full p-3 max-h-svh border border-black"
          onChange={(e) => setNotificationText(e.target.value)}
          required
        ></textarea>

        <label className="font-semibold pb-2 mt-4" htmlFor="url">
          URL:
        </label>
        <input
          type="text"
          name="url"
          placeholder="Enter the URL"
          className="w-full p-3 max-h-svh border border-black"
          onChange={(e) => setUrl(e.target.value)}
          required
        ></input>

        <div className="text-center">
          <button
            type="submit"
            className="p-2 rounded-md my-4 font-semibold shadow-red-300 shadow"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Notification;
