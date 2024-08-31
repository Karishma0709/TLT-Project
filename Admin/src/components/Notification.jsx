import React, { useState } from "react";
import axios from "axios";
import SummaryApi from "../Common/SummaryApi";

const Notification = () => {
  const [notificationText, setNotificationText] = useState("");
  const [url, setUrl] = useState("");

  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("notificationText", notificationText);
    formData.append("url", url);
    console.log(notificationText, url);
    const result = await axios.post(
      "http://localhost:8080/api/notifies",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("uploaded Successfully !!!");
    }
  };
  return (
    <div>
      <form onSubmit={SubmitImage}>
        <label className="font-semibold pb-2">Notification Title:</label>
        <input
          name="notificationText"
          placeholder="Write your notification"
          className="w-full p-3 max-h-svh border border-black"
          onChange={(e) => setNotificationText(e.target.value)}
          required
        ></input>

        <label className="font-semibold pb-2 mt-4">URL:</label>
        <input
          type="text"
          name="file"
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
