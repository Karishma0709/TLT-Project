import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Prevyearpaperpdf = () => {
  const [uploadedPdfs, setUploadedPdfs] = useState([]);
  const [Papertitle, setTitle] = useState('');
  const [paperimage, setStateimg] = useState('');

  const Submitpydata = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('Papertitle', Papertitle);
    formData.append('paperimage', paperimage);
    try {
      const result = await axios.post(
        'http://localhost:8080/api/PyPaperPDF', //backend port
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      );

      if (result.data.status === 'ok') {
        alert('Uploaded Successfully!');
        getUploadedFiles();
        setTitle('');
        setStateimg('');
      }
    } catch (error) {
      console.error('There was an error uploading the file!', error);
    }
  };

  useEffect(() => {
    fetchUploadedPdfs();
  }, []);

  const fetchUploadedPdfs = async () => {
    try {
      const response = await axios.get(
        'http://localhost:8080/api/get-uploaded-pdfs'
      ); // Update with your actual endpoint
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
        enctype="multipart/form-data"
        onSubmit={Submitpydata}
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
              onChange={(e) => setStateimg(e.target.files[0])}
            />
          </div>

          <div className="flex flex-col">
            <label>Paper Title</label>

            <input
              type="text"
              className="border rounded p-2 mb-4"
              name="Papertitle"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col">
            <label>Paper Pdf</label>
            <input
              type="file"
              className="border rounded p-2 mb-4"
              name="paperpdf"
              accept="application/pdf"
              required
            />
          </div> */}
          <button
            type="submit"
            className="bg-gray-800 text-white p-2 rounded hover:bg-gray-900"
          >
            Upload
          </button>
        </div>
      </form>

      <div>{uploadedPdfs}</div>
    </div>
  );
};

export default Prevyearpaperpdf;
