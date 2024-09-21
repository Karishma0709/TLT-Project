import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PreviousYearForm = () => {
  const [allPapers, setAllPapers] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which row is being edited

  useEffect(() => {
    fetchAllPapers();
  }, []);

  const fetchAllPapers = async () => {
    try {
      const result = await axios.get(
        'http://localhost:8080/api/getAllPyPapers'
      );
      if (Array.isArray(result.data.data)) {
        setAllPapers(result.data.data);
      } else {
        console.error('Unexpected data format:', result.data.data);
        setAllPapers([]); // Set to empty array if data format is unexpected
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAllPapers([]); // Set to empty array on error
    }
  };

  // Delete paper data
  const deletePaper = async (id) => {
    try {
      await axios.delete(
        `http://localhost:8080/api/deletePyPapersDetail/${id}`
      );
      fetchAllPapers();
    } catch (error) {
      console.error('Error deleting paper:', error);
    }
  };

  // Update paper data
  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: { ...editData[id], [e.target.name]: e.target.value },
    });
  };

  const updatePaper = async (id) => {
    try {
      await axios.put(
        `http://localhost:8080/api/updatePyPapersDetail/${id}`,
        editData[id]
      );
      setEditMode(null); // Exit edit mode after updating
      fetchAllPapers(); // Fetch updated data
    } catch (error) {
      console.error('Error updating paper:', error);
    }
  };

  const toggleEditMode = (id) => {
    setEditMode(id); // Enter edit mode for the specific row
    setEditData({ [id]: allPapers.find((paper) => paper._id === id) });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">
        Previous Year Paper Details
      </h1>
      <div>
        {allPapers.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="shadow-md rounded-lg border-b border-gray-200">
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 text-left">S.no</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Number</th>
                <th className="py-2 px-4 text-left">Created Date</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allPapers.map((paper, index) => (
                <tr
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100`}
                  key={paper._id}
                >
                  <td className="py-2 px-4 text-gray-600">{index + 1}</td>
                  <td className="py-2 px-4 text-gray-600">
                    {editMode === paper._id ? (
                      <input
                        type="text"
                        name="name"
                        value={editData[paper._id]?.name || ''}
                        onChange={(e) => handleChange(e, paper._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      paper.name
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editMode === paper._id ? (
                      <input
                        type="email"
                        name="email"
                        value={editData[paper._id]?.email || ''}
                        onChange={(e) => handleChange(e, paper._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      paper.email
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editMode === paper._id ? (
                      <input
                        type="tel"
                        name="number"
                        value={editData[paper._id]?.number || ''}
                        onChange={(e) => handleChange(e, paper._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      paper.number
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {new Date(paper.createdAt).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 flex gap-2">
                    {editMode === paper._id ? (
                      <>
                        <button
                          onClick={() => updatePaper(paper._id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditMode(null)}
                          className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700"
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => toggleEditMode(paper._id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => deletePaper(paper._id)}
                          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
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
        )}
      </div>
    </div>
  );
};

export default PreviousYearForm;
