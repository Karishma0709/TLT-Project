import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';

const SyllabusUpload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [syllabusList, setSyllabusList] = useState([]);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');

  // Function to upload syllabus
  const uploadSyllabus = async (formData) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/api/SyllabusUpload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      fetchSyllabus(); // Fetch the updated list after uploading
    } catch (error) {
      console.error(
        'Error uploading syllabus:',
        error.response?.data?.message || error.message
      );
      setError(error.response?.data?.message || 'Error uploading syllabus');
    }
  };

  // Function to fetch syllabuses
  const fetchSyllabus = async () => {
    try {
      const response = await axios({
        url: SummaryApi.Syllabus.url,
        method: SummaryApi.Syllabus.method,
      });
      console.log(response.data);
      setSyllabusList(response.data.data); // Update state with fetched data
    } catch (error) {
      console.error(
        'Error fetching syllabuses:',
        error.response?.data?.message || error.message
      );
      setError(error.response?.data?.message || 'Error fetching syllabuses');
    }
  };

  // Handle form submit
  const SubmitPDF = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    // Upload the syllabus
    await uploadSyllabus(formData);

    // Reset form fields after submission
    setTitle('');
    setFile(null);
  };

  // Handle update of syllabus
  const updateSyllabus = async (id) => {
    const apiUrl = SummaryApi.SyllabusUpdate.url.replace(':id', id);

    try {
      // const response = await axios.put(
      //   `http://localhost:8080/api/updateSyllabus/${id}`,
      //   {
      //     title: updatedTitle,
      //   }
      // );

      const response = await axios({
        url: apiUrl,
        method: SummaryApi.SyllabusUpdate.method,
        data: editId[id],
        title: updatedTitle,
      });
      console.log(response.data);
      fetchSyllabus(); // Fetch the updated list after updating
      setEditId(null);
      setUpdatedTitle('');
    } catch (error) {
      console.error(
        'Error updating syllabus:',
        error.response?.data?.message || error.message
      );
      setError(error.response?.data?.message || 'Error updating syllabus');
    }
  };

  // Handle delete of syllabus
  const deleteSyllabus = async (id) => {
    const apiUrl = SummaryApi.SyllabusDelete.url.replace(':id', id);

    try {
      // const response = await axios.delete(
      //   `http://localhost:8080/api/deleteSyllabus/${id}`
      // );

      const response = await axios({
        url: apiUrl,
        method: SummaryApi.SyllabusDelete.method,
        data: editId[id],
      });
      console.log(response.data);
      fetchSyllabus(); // Fetch the updated list after deleting
    } catch (error) {
      console.error(
        'Error deleting syllabus:',
        error.response?.data?.message || error.message
      );
      setError(error.response?.data?.message || 'Error deleting syllabus');
    }
  };

  // Fetch syllabus list on component mount
  useEffect(() => {
    fetchSyllabus();
  }, []);

  return (
    <div className="mx-auto p-5">
      <form
        onSubmit={SubmitPDF}
        className="bg-white p-8 rounded shadow-md max-w-md mx-auto"
      >
        <h1 className="text-2xl font-bold mb-4 text-[#1F2937] text-center">
          Upload PDF
        </h1>
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
        <h2 className="text-xl font-bold mb-4 text-[#1F2937]">
          Uploaded Syllabus List
        </h2>
        <table className="w-full table-auto border-collapse border border-[#1F2937]">
          <thead>
            <tr className="bg-[#1F2937] text-white">
              <th className="border border-[#1F2937] p-2">S.No</th>
              <th className="border border-[#1F2937] p-2">Title</th>
              <th className="border border-[#1F2937] p-2">File Name</th>
              <th className="border border-[#1F2937] p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {syllabusList.map((syllabus, index) => (
              <tr key={syllabus._id} className="text-center">
                <td className="border border-[#1F2937] p-2">{index + 1}</td>
                <td className="border border-[#1F2937] p-2">
                  {editId === syllabus._id ? (
                    <input
                      type="text"
                      className="form-control border border-gray-300 rounded p-2 w-full"
                      value={updatedTitle}
                      onChange={(e) => setUpdatedTitle(e.target.value)}
                    />
                  ) : (
                    syllabus.title
                  )}
                </td>
                <td className="border border-[#1F2937] p-2">{syllabus.pdf}</td>
                <td className="border border-[#1F2937] p-2">
                  {editId === syllabus._id ? (
                    <>
                      <button
                        className="bg-green-500 text-white p-1 rounded mr-2"
                        onClick={() => updateSyllabus(syllabus._id)}
                      >
                        Save
                      </button>
                      <button
                        className="bg-gray-500 text-white p-1 rounded"
                        onClick={() => {
                          setEditId(null);
                          setUpdatedTitle('');
                        }}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="bg-blue-500 text-white p-1 rounded mr-2"
                        onClick={() => {
                          setEditId(syllabus._id);
                          setUpdatedTitle(syllabus.title);
                        }}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-500 text-white p-1 rounded"
                        onClick={() => deleteSyllabus(syllabus._id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SyllabusUpload;
