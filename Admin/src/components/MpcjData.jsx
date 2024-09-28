import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import moment from 'moment';
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons for edit and delete
import SummaryApi from '../Common/SummaryApi';

const MpcjData = () => {
  const [mpcjData, setMpcjData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which row is being edited
  const [currentPage, setCurrentPage] = useState(1); // Pagination state
  const itemsPerPage = 10; // Number of items per page

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const result = await axios({
        url:SummaryApi.GetMPCJFormDetails.url,
        method:SummaryApi.GetMPCJFormDetails.method
      });
      console.log('API Response:', result.data);

      if (Array.isArray(result.data)) {
        setMpcjData(result.data); // Set the fetched array directly
      } else {
        console.error('Unexpected data format:', result.data);
        setMpcjData([]); // Handle unexpected data format
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMpcjData([]); // Set an empty array in case of error
    }
  };

  // Delete data with confirmation
  const deleteData = async (id) => {
    if (window.confirm('Are you sure you want to delete this entry?')) {
      try {
        await axios.delete(`http://localhost:8080/api/deleteMPCJFormDetails/${id}`);
        toast.success('Data deleted successfully!');
        fetchAllData(); // Refresh data after deletion
      } catch (error) {
        console.error('Error deleting data:', error);
        toast.error('Error deleting data.');
      }
    }
  };

  // Handle input change for editing
  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: { ...editData[id], [e.target.name]: e.target.value },
    });
  };

  // Update data with confirmation
  const updateData = async (id) => {
    if (window.confirm('Are you sure you want to update this entry?')) {
      try {
        await axios.put(`http://localhost:8080/api/updateMPCJFormDetails/${id}`, editData[id]);
        setEditMode(null); // Exit edit mode after updating
        fetchAllData(); // Fetch updated data
        toast.success('Data updated successfully!');
      } catch (error) {
        console.error('Error updating data:', error);
        toast.error('Error updating data.');
      }
    }
  };

  // Toggle edit mode
  const toggleEditMode = (id) => {
    setEditMode(id); // Enter edit mode for the specific row
    setEditData({ [id]: mpcjData.find((data) => data._id === id) });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = mpcjData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(mpcjData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">MPCJ Data</h2>
      <div>
        {mpcjData.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <>
            <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
              <thead className="shadow-md rounded-lg border-b border-gray-200">
                <tr className="bg-gray-800 text-white">
                  <th className="py-2 px-4 text-left">S.No</th>
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Contact No</th>
                  <th className="py-2 px-4 text-left">Created Date</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((data, index) => (
                  <tr
                    className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                    key={data._id}
                  >
                    <td className="py-2 px-4 text-gray-600">{indexOfFirstItem + index + 1}</td>
                    <td className="py-2 px-4 text-gray-600">
                      {editMode === data._id ? (
                        <input
                          type="text"
                          name="name"
                          value={editData[data._id]?.name || ''}
                          onChange={(e) => handleChange(e, data._id)}
                          className="w-full p-2 border rounded"
                        />
                      ) : (
                        data.name
                      )}
                    </td>
                    <td className="py-2 px-4 text-gray-600">
                      {editMode === data._id ? (
                        <input
                          type="email"
                          name="email"
                          value={editData[data._id]?.email || ''}
                          onChange={(e) => handleChange(e, data._id)}
                          className="w-full p-2 border rounded"
                        />
                      ) : (
                        data.email
                      )}
                    </td>
                    <td className="py-2 px-4 text-gray-600">
                      {editMode === data._id ? (
                        <input
                          type="tel"
                          name="contact"
                          value={editData[data._id]?.contact || ''}
                          onChange={(e) => handleChange(e, data._id)}
                          className="w-full p-2 border rounded"
                        />
                      ) : (
                        data.contact
                      )}
                    </td>
                    <td className="py-2 px-4 text-gray-600">
                      {moment(data.createdAt).format('LL')}
                    </td>
                    <td className="py-2 px-4 flex gap-2">
                      {editMode === data._id ? (
                        <>
                          <button
                            onClick={() => updateData(data._id)}
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
                            onClick={() => toggleEditMode(data._id)}
                            className="text-blue-500 px-3 py-1 rounded hover:text-blue-700"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteData(data._id)}
                            className="text-red-500 px-3 py-1 rounded hover:text-red-700"
                          >
                            <FaTrashAlt />
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination controls */}
            <div className="mt-4 flex justify-center">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  className={`px-4 py-2 mx-1 rounded-lg ${currentPage === i + 1 ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MpcjData;
