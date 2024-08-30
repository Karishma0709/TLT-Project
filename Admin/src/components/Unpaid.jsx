import React, { useState } from "react";
import axios from "axios";
const Unpaid = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");

  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    const result = await axios.post(
      "http://localhost:5054/api/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("uploaded Successfully !!!");
      getPdf();
    }
  };

  return (
    <>
      <form
        onSubmit={SubmitImage}
        className="formstyle flex flex-col border p-10"
      >
        <h1>Upload Pdf</h1>
        <input
          type="text"
          className="form-control border my-3"
          placeholder="Title"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className="form-control"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button className="p-5" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Unpaid;
