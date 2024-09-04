import React, { useState, useEffect } from "react";
import axios from "axios";

const SyllabusUpload = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [syllabusList, setSyllabusList] = useState([]);

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    const result = await axios.get("http://localhost:8080/api/get-uploaded-files");
    setSyllabusList(result.data);
  };

  const SubmitPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);

    const result = await axios.post(
      "http://localhost:8080/api/upload-files",
      formData,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    console.log(result);
    if (result.data.status === "ok") {
      alert("Uploaded Successfully !!!");
      setTitle("");
      setFile(null);
      getPdf();
    }
  };

  return (
    <div className="mx-auto p-5">
      <form
        onSubmit={SubmitPDF}
        className="bg-white p-8 rounded shadow-md max-w-md mx-auto"
      >
        <h1 className="text-2xl font-bold mb-4 text-[#1F2937] text-center">Upload PDF</h1>
        <input
          type="text"
          className="form-control border border-gray-300 rounded p-2 mb-3 w-full"
          placeholder="Title"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="file"
          className="form-control border border-gray-300 rounded p-2 mb-3 w-full"
          accept="application/pdf"
          required
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="flex justify-center">
          <button
            className="bg-[#1F2937] text-white p-2 rounded hover:bg-gray-800 w-full"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>

      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4 text-[#1F2937]">Uploaded Syllabus List</h2>
        <table className="w-full table-auto border-collapse border border-[#1F2937]">
          <thead>
            <tr className="bg-[#1F2937] text-white">
              <th className="border border-[#1F2937] p-2">S.No</th>
              <th className="border border-[#1F2937] p-2">Title</th>
              <th className="border border-[#1F2937] p-2">File Name</th>
            </tr>
          </thead>
          <tbody>
            {syllabusList.map((syllabus, index) => (
              <tr key={syllabus._id} className="text-center">
                <td className="border border-[#1F2937] p-2">{index + 1}</td>
                <td className="border border-[#1F2937] p-2">{syllabus.title}</td>
                <td className="border border-[#1F2937] p-2">{syllabus.fileName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SyllabusUpload;
