import React, { useState, useEffect } from "react";
import axios from "axios";

const Unpaid = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const SubmitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:8080/api/upload-files", //backend port
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!");
        getUploadedFiles();
        setTitle("");
        setFile("");
      }
    } catch (error) {
      console.error("There was an error uploading the file!", error);
    }
  };

  // Fetch uploaded files from backend
  const getUploadedFiles = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/uploaded-files");
      setUploadedFiles(result.data);
    } catch (error) {
      console.error("Error fetching the uploaded files!", error);
    }
  };

  useEffect(() => {
    getUploadedFiles();
  }, []);

  return (
    <div className="mx-auto p-6 bg-white rounded shadow-lg">
      {/* Upload PDF Form */}
      <form
        onSubmit={SubmitImage}
        className="max-w-xl mx-auto  flex flex-col items-center justify-center gap-6 border p-3 rounded"
      >
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-bold mb-2 text-gray-700">Upload PDF</h4>
          <input
            type="text"
            className="border rounded p-2 mb-4 w-full"
            placeholder="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="file"
            className="border rounded p-2 mb-4 w-full"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
          >
            Upload
          </button>
        </div>
      </form>

      {/* Table to display uploaded files */}
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Uploaded PDFs</h2>
        <table className="w-full table-auto border-collapse border border-gray-800 hadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-800 p-2">S.No</th>
              <th className="border border-gray-800 p-2">Title</th>
              <th className="border border-gray-800 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {uploadedFiles.length > 0 ? (
              uploadedFiles.map((file, index) => (
                <tr key={file._id} className="text-center hover:bg-gray-100">
                  <td className="border border-gray-800 p-2">{index + 1}</td>
                  <td className="border border-gray-800 p-2">{file.title}</td>
                  <td className="border border-gray-800 p-2">
                    <a
                      href={`/uploads/${file.filename}`} // Update with actual file path
                      className="text-blue-500 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-800 p-2 text-center">
                  No files uploaded yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Unpaid;
