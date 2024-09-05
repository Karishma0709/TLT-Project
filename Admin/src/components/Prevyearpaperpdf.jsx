import React, { useState, useEffect } from "react";
import axios from "axios";

const Prevyearpaperpdf = () => {
  const [uploadedPdfs, setUploadedPdfs] = useState([]);

  useEffect(() => {
    fetchUploadedPdfs();
  }, []);

  const fetchUploadedPdfs = async () => {
    try {
      const response = await axios.get("/api/get-uploaded-pdfs"); // Update with your actual endpoint
      setUploadedPdfs(response.data);
    } catch (error) {
      console.error("Error fetching uploaded PDFs:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white rounded shadow-lg">
      <form
        className="flex flex-col items-center gap-6 border p-6 rounded"
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        <div className="flex flex-col items-center">
          <h4 className="text-xl font-bold mb-2 text-gray-700">Upload PDF</h4>
          <input
            type="file"
            className="border rounded p-2 mb-4"
            name="paperpdf"
            accept="application/pdf"
            required
          />
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
          >
            Upload
          </button>
        </div>
      </form>
{/* 
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Uploaded PDFs</h2>
        <table className="w-full table-auto border-collapse border border-gray-800">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="border border-gray-800 p-2">S.No</th>
              <th className="border border-gray-800 p-2">File Name</th>
              <th className="border border-gray-800 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {uploadedPdfs.map((pdf, index) => (
              <tr key={pdf._id} className="text-center hover:bg-gray-100">
                <td className="border border-gray-800 p-2">{index + 1}</td>
                <td className="border border-gray-800 p-2">{pdf.fileName}</td>
                <td className="border border-gray-800 p-2">
                  <a
                    href={`/uploads/${pdf.fileName}`} // Update with actual file path
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div> */}
    </div>
  );
};

export default Prevyearpaperpdf;
