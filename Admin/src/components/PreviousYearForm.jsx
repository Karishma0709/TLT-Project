import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons for edit and delete

const PreviousYearForm = () => {
  const [allPapers, setAllPapers] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPage = 10; // Number of papers per page

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
        setAllPapers([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setAllPapers([]);
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
      setEditMode(null);
      fetchAllPapers();
    } catch (error) {
      console.error('Error updating paper:', error);
    }
  };

  const toggleEditMode = (id) => {
    setEditMode(id);
    setEditData({ [id]: allPapers.find((paper) => paper._id === id) });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPapers = allPapers.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allPapers.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Previous Year Paper Details</h1>
      <div>
        {allPapers.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <>
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
                {currentPapers.map((paper, index) => (
                  <tr
                    className={`border-b border-gray-200 ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-gray-100`}
                    key={paper._id}
                  >
                    <td className="py-2 px-4 text-gray-600">
                      {indexOfFirstItem + index + 1}
                    </td>
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
                            className=" px-3 py-1 rounded hover:bg-blue-700 flex items-center"
                          >
                            <FaEdit className="text-blue-500" /> 
                          </button>
                          <button
                            onClick={() => deletePaper(paper._id)}
                            className=" text-white px-3 py-1 rounded hover:bg-red-700 flex items-center"
                          >
                            <FaTrashAlt className="text-red-500" /> 
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4">
              <button
                onClick={goToPrevPage}
                disabled={currentPage === 1}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 mr-2"
              >
                Prev
              </button>
              <span className="px-3 py-1">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages}
                className="bg-gray-200 text-gray-700 px-3 py-1 rounded hover:bg-gray-300 ml-2"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PreviousYearForm;
