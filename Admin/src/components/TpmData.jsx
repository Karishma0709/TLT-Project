import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import SummaryApi from '../Common/SummaryApi';

const TpmData = () => {
  const [tpmData, setTpmData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which row is being edited

  useEffect(() => {
    fetchAllData();
  }, []);

  // Fetch all TPM data
  const fetchAllData = async () => {
    try {
      const result = await axios({
        url: SummaryApi.TpmData.url,
        method: SummaryApi.TpmData.method,
      });
      if (result.status === 200) {
        setTpmData(result.data);
      } else {
        toast.error(result.data.message || 'Failed to fetch data');
      }
    } catch (error) {
      toast.error('An error occurred while fetching the data.');
    }
  };

  // Handle input change
  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: { ...editData[id], [e.target.name]: e.target.value },
    });
  };

  // Update TPM data
  const updateTpmData = async (id) => {
    const apiurl = SummaryApi.TpmDataUpdate.url.replace(':id', id);
    try {
      const response = await axios({
        url: apiurl,
        method: SummaryApi.TpmDataUpdate.method,
        data: editData[id],
      });
      setEditMode(null); // Exit edit mode after updating
      fetchAllData(); // Fetch updated data
      toast.success('Data updated successfully!');
    } catch (error) {
      console.error('Error updating data:', error);
      toast.error('Error updating data.');
    }
  };

  // Delete TPM data
  const deleteTpmData = async (id) => {
    const apiurl = SummaryApi.TpmDataDelete.url.replace(':id', id);

    try {
      await axios({
        url: apiurl,
        method: SummaryApi.TpmDataDelete.method,
        data: editData[id],
      });
      fetchAllData(); // Fetch updated data
      toast.success('Data deleted successfully!');
    } catch (error) {
      console.error('Error deleting data:', error);
      toast.error('Error deleting data.');
    }
  };

  // Toggle edit mode
  const toggleEditMode = (id) => {
    setEditMode(id); // Enter edit mode for the specific row
    setEditData({ [id]: tpmData.find((data) => data._id === id) });
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">TPM Data</h2>
      <div>
        {tpmData.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-2 px-4 text-left">S.No.</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Contact No</th>
                <th className="py-2 px-4 text-left">Purchased Product</th>
                <th className="py-2 px-4 text-left">Created Date</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tpmData.map((data, index) => (
                <tr
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100`}
                  key={data._id}
                >
                  <td className="py-2 px-4">{index + 1}</td>
                  <td className="py-2 px-4">
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
                  <td className="py-2 px-4">
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
                  <td className="py-2 px-4">
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
                  <td className="py-2 px-4">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="purchasedProduct"
                        value={editData[data._id]?.purchasedProduct || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.purchasedProduct
                    )}
                  </td>
                  <td className="py-2 px-4">
                    {moment(data.createdAt).format('YYYY-MM-DD')}
                  </td>
                  <td className="py-2 px-4 flex gap-2">
                    {editMode === data._id ? (
                      <>
                        <button
                          onClick={() => updateTpmData(data._id)}
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
                          onClick={() => deleteTpmData(data._id)}
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
      <ToastContainer />
    </div>
  );
};

export default TpmData;
