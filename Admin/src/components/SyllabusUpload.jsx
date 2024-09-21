import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SyllabusUpload = () => {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [syllabusList, setSyllabusList] = useState([]);
  const [error, setError] = useState('');
  const [editId, setEditId] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState('');

  const fetchSyllabus = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/getSyllabusUpload');
      setSyllabusList(response.data.data);
    } catch (error) {
      console.error('Error fetching syllabuses:', error);
      setError('Error fetching syllabuses');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('file', file);

    try {
      await axios.post('http://localhost:8080/api/SyllabusUpload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchSyllabus();
      setTitle('');
      setFile(null);
    } catch (error) {
      console.error('Error uploading syllabus:', error);
      setError('Error uploading syllabus');
    }
  };

  const updateSyllabus = async (id) => {
    if (!updatedTitle) {
      setError('Title is required for update');
      return;
    }

    const apiUrl = `http://localhost:8080/api/updateSyllabusById/${id}`;
    const formData = new FormData();
    formData.append('title', updatedTitle);
    if (file) {
      formData.append('file', file);
    }

    try {
      await axios.put(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      fetchSyllabus();
      resetEdit();
    } catch (error) {
      console.error('Error updating syllabus:', error);
      setError('Error updating syllabus');
    }
  };

  const deleteSyllabus = async (id) => {
    const apiUrl = `http://localhost:8080/api/deleteSyllabusById/${id}`;
    try {
      await axios.delete(apiUrl);
      fetchSyllabus();
    } catch (error) {
      console.error('Error deleting syllabus:', error);
      setError('Error deleting syllabus');
    }
  };

  const resetEdit = () => {
    setEditId(null);
    setUpdatedTitle('');
    setFile(null);
  };

  useEffect(() => {
    fetchSyllabus();
  }, []);

  return (
    <div className="mx-auto p-5">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-[#1F2937] text-center">Upload PDF</h1>
        <input
          type="text"
          className="form-control border border-gray-300 rounded p-2 mb-3 w-full"
          placeholder="Title"
          value={editId ? updatedTitle : title}
          required
          onChange={(e) => (editId ? setUpdatedTitle(e.target.value) : setTitle(e.target.value))}
        />
        <input
          type="file"
          className="form-control border border-gray-300 rounded p-2 mb-3 w-full"
          accept="application/pdf"
          onChange={(e) => setFile(e.target.files[0])}
        />
        <div className="flex justify-center">
          <button className="bg-[#1F2937] text-white p-2 rounded hover:bg-gray-800 w-full" type="submit">
            {editId ? 'Update' : 'Submit'}
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
                      <button className="bg-green-500 text-white p-1 rounded mr-2" onClick={() => updateSyllabus(syllabus._id)}>
                        Save
                      </button>
                      <button className="bg-gray-500 text-white p-1 rounded" onClick={resetEdit}>
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
                      <button className="bg-red-500 text-white p-1 rounded" onClick={() => deleteSyllabus(syllabus._id)}>
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
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default SyllabusUpload;
