import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import moment from 'moment';

const MpcjData = () => {
  const [mpcjData, setMpcjData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which row is being edited

  useEffect(() => {
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/getMPCJFormDetails");
      console.log("API Response:", result);
      console.log("Full API Response:", result.data);
      
      // Check if result.data is an array
      if (Array.isArray(result.data)) {
        setMpcjData(result.data); // Set the fetched array directly
      } else {
        console.error("Unexpected data format:", result.data);
        setMpcjData([]); // Handle unexpected data format
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setMpcjData([]); // Set an empty array in case of error
    }
  };
  
  // Delete data
  const deleteData = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/deleteMPCJFormDetails/${id}`);
      toast.success("Data deleted successfully!");
      fetchAllData(); // Refresh data after deletion
    } catch (error) {
      console.error("Error deleting data:", error);
      toast.error("Error deleting data.");
    }
  };

  // Handle input change for editing
  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: { ...editData[id], [e.target.name]: e.target.value },
    });
  };

  // Update data
  const updateData = async (id) => {
    try {
      await axios.put(`http://localhost:8080/api/updateMPCJFormDetails/${id}`, editData[id]);
      setEditMode(null); // Exit edit mode after updating
      fetchAllData(); // Fetch updated data
      toast.success("Data updated successfully!");
    } catch (error) {
      console.error("Error updating data:", error);
      toast.error("Error updating data.");
    }
  };

  // Toggle edit mode
  const toggleEditMode = (id) => {
    setEditMode(id); // Enter edit mode for the specific row
    setEditData({ [id]: mpcjData.find((data) => data._id === id) });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">MPCJ Data</h2>
      <div>
        {mpcjData.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
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
              {mpcjData.map((data, index) => (
                <tr
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                  key={data._id}
                >
                  <td className="py-2 px-4 text-gray-600">{index + 1}</td>
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
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => deleteData(data._id)}
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

export default MpcjData;
