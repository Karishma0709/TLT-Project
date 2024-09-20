import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';
import { Link } from 'react-router-dom'; // For navigation to update page


const FastTrackForm = () => {
  const [fastTrackdata, setFastTrackData] = useState([]); // Initialize with an empty array
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null); // Track which row is being edited

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios({
        url: SummaryApi.FastTractFormAdmin.url,
        method: SummaryApi.FastTractFormAdmin.method,
      });
      console.log('API Response:', result);
      console.log('Full API Response:', result.data);
      console.log('Data Property:', result.data.fastTrackFormData);
      if (Array.isArray(result.data.fastTrackFormData)) {
        setFastTrackData(result.data.fastTrackFormData);
      } else {
        console.error('Unexpected data format:', result.data.fastTrackFormData);
        setFastTrackData([]); // Set to empty array if data format is unexpected
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setFastTrackData([]); // Set to empty array on error
    }
  };

  // Delete form data
  const deleteEdata = async (id) => {
    const apiUrl = SummaryApi.FastTractFormAdminDelete.url.replace(':id', id);
    try {
      await axios({
        url: apiUrl,
        method: SummaryApi.FastTractFormAdminDelete.method,
        data: editData[id],
      });
      getData();
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  // Update form data
  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: { ...editData[id], [e.target.name]: e.target.value },
    });
  };

  const UpdateEdata = async (id) => {
    const apiUrl = SummaryApi.FastTractFormAdminUpdate.url.replace(':id', id);

    try {
      const updateuser = await axios({
        url: apiUrl,
        method: SummaryApi.FastTractFormAdminUpdate.method,
        data: editData[id],
      });
      setEditMode(null); // Exit edit mode after updating
      getData(); // Fetch updated data
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const toggleEditMode = (id) => {
    setEditMode(id); // Enter edit mode for the specific row
    setEditData({ [id]: fastTrackdata.find((data) => data._id === id) });
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Fast-Track Form Data</h1>
      <div>
        {fastTrackdata.length === 0 ? (
          <p className="text-gray-500">No data available</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
            <thead className="shadow-md rounded-lg border-b border-gray-200">
              <tr className="bg-gray-800 text-white">
                <th className="py-2 px-4 text-left">S.no</th>
                <th className="py-2 px-4 text-left">Picture</th>
                <th className="py-2 px-4 text-left">Name</th>
                <th className="py-2 px-4 text-left">Place of Birth</th>
                <th className="py-2 px-4 text-left">Date of Birth</th>
                <th className="py-2 px-4 text-left">Full Address</th>
                <th className="py-2 px-4 text-left">State</th>
                <th className="py-2 px-4 text-left">Pin Code</th>
                <th className="py-2 px-4 text-left">Qualification</th>
                <th className="py-2 px-4 text-left">College/University</th>
                <th className="py-2 px-4 text-left">Pursuing LL.B</th>
                <th className="py-2 px-4 text-left">Year of Passing</th>
                <th className="py-2 px-4 text-left">Email</th>
                <th className="py-2 px-4 text-left">Father's Name</th>
                <th className="py-2 px-4 text-left">Mother's Name</th>
                <th className="py-2 px-4 text-left">Permanent Address</th>
                <th className="py-2 px-4 text-left">Permanent State</th>
                <th className="py-2 px-4 text-left">Permanent City</th>
                <th className="py-2 px-4 text-left">Aadhar Card</th>
                <th className="py-2 px-4 text-left">Fees Paid</th>
                <th className="py-2 px-4 text-left">Amount Paid</th>
                <th className="py-2 px-4 text-left">Prelims</th>
                <th className="py-2 px-4 text-left">Mains</th>
                <th className="py-2 px-4 text-left">Targeted State</th>
                <th className="py-2 px-4 text-left">Score</th>
                <th className="py-2 px-4 text-left">Year</th>
                <th className="py-2 px-4 text-left">
                  Old Student of Shubham Sir
                </th>
                <th className="py-2 px-4 text-left">Institution</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fastTrackdata.map((data, index) => (
                <tr
                  className={`border-b border-gray-200 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  } hover:bg-gray-100`}
                  key={data._id}
                >
                  <td className="py-2 px-4 text-gray-600">{index + 1}</td>
                  <td className="py-2 px-4">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="picture"
                        value={editData[data._id]?.picture || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      <img
                        src={data.picture}
                        alt="User's Picture"
                        onError={(e) => console.log('Image failed to load:', e)}
                        className="w-24 h-24 object-cover"
                      />
                    )}
                  </td>
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
                        type="text"
                        name="placeOfBirth"
                        value={editData[data._id]?.placeOfBirth || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.placeOfBirth
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="date"
                        name="dateOfBirth"
                        value={editData[data._id]?.dateOfBirth || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      new Date(data.dateOfBirth).toLocaleDateString()
                    )}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="fullAddress"
                        value={editData[data._id]?.fullAddress || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.fullAddress
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="state"
                        value={editData[data._id]?.state || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.state
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="pinCode"
                        value={editData[data._id]?.pinCode || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.pinCode
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="qualification"
                        value={editData[data._id]?.qualification || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.qualification
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="collegeUniversity"
                        value={editData[data._id]?.collegeUniversity || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.collegeUniversity
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="pursuingLLB"
                        value={editData[data._id]?.pursuingLLB || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.pursuingLLB
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="yearOfPassing"
                        value={editData[data._id]?.yearOfPassing || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.yearOfPassing
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
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
                        type="text"
                        name="fatherName"
                        value={editData[data._id]?.fatherName || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.fatherName
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="motherName"
                        value={editData[data._id]?.motherName || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.motherName
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="permanentAddress"
                        value={editData[data._id]?.permanentAddress || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.permanentAddress
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="permanentState"
                        value={editData[data._id]?.permanentState || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.permanentState
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="permanentCity"
                        value={editData[data._id]?.permanentCity || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.permanentCity
                    )}
                  </td>

                  <td className="py-2 px-4">
                    <img
                      src={data.aadharCard}
                      alt="Aadhar Card"
                      onError={(e) => console.log('Image failed to load:', e)}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {typeof data.feesPaid === 'object'
                      ? JSON.stringify(data.feesPaid)
                      : data.feesPaid}
                  </td>
                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="amountPaid"
                        value={editData[data._id]?.amountPaid || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.amountPaid
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="prelims"
                        value={editData[data._id]?.prelims || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.prelims
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="mains"
                        value={editData[data._id]?.mains || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.mains
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="targetedstate"
                        value={editData[data._id]?.targetedstate || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.targetedstate
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="score"
                        value={editData[data._id]?.score || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.score
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="year"
                        value={editData[data._id]?.year || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.year
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="oldStudentOfShubhamSir"
                        value={editData[data._id]?.oldStudentOfShubhamSir || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.oldStudentOfShubhamSir
                    )}
                  </td>

                  <td className="py-2 px-4 text-gray-600">
                    {editMode === data._id ? (
                      <input
                        type="text"
                        name="institution"
                        value={editData[data._id]?.institution || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : (
                      data.institution
                    )}
                  </td>
                  <td className="py-2 px-4 text-center flex justify-center space-x-2">
                    {editMode === data._id ? (
                      <button
                        onClick={() => UpdateEdata(data._id)}
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => toggleEditMode(data._id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                      >
                        Update
                      </button>
                    )}
                    <button
                      onClick={() => deleteEdata(data._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                    >
                      Delete
                    </button>
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

export default FastTrackForm;
