import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prevyearpaperpdf = () => {
  const [uploadedPdfs, setUploadedPdfs] = useState([]);

  useEffect(() => {
    fetchUploadedPdfs();
  }, []);

  const fetchUploadedPdfs = async () => {
    try {
      const response = await axios.get('/api/get-uploaded-pdfs'); // Update with your actual endpoint
      setUploadedPdfs(response.data);
    } catch (error) {
      console.error('Error fetching uploaded PDFs:', error);
    }
  };

  return (
    <div className="mx-auto p-6 bg-white rounded shadow-lg">
      <form
        className="flex flex-col items-center gap-6 border p-6 rounded"
        action="/upload"
        method="post"
        encType="multipart/form-data"
      >
        <h4 className="text-xl font-bold mb-2 text-gray-700">Upload PDF</h4>

        <div className="flex items-start">
          <div className="flex flex-col">
            <label>Paper Image</label>
            <input
              type="file"
              className="border rounded p-2 mb-4"
              name="paperimage"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Paper Title</label>

            <input
              type="text"
              className="border rounded p-2 mb-4"
              name="Papertitle"
              required
            />
          </div>
          <div className="flex flex-col">
            <label>Paper Pdf</label>
            <input
              type="file"
              className="border rounded p-2 mb-4"
              name="paperpdf"
              accept="application/pdf"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
          >
            Upload
          </button>
        </div>
      </form>
    </div>
  );
};

export default Prevyearpaperpdf;
