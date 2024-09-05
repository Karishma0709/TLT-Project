import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // For navigation to update page

const FastTrackForm = () => {
  const [fastTrackdata, setFastTrackData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/getfastTrackForm");
      console.log("API Response:", result);
      console.log("Full API Response:", result.data);
      console.log("Data Property:", result.data.fastTrackFormData);
      if (Array.isArray(result.data.fastTrackFormData)) {
        setFastTrackData(result.data.fastTrackFormData);
      } else {
        console.error("Unexpected data format:", result.data.fastTrackFormData);
        setFastTrackData([]); // Set to empty array if data format is unexpected
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFastTrackData([]); // Set to empty array on error
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/deleteFastTrackForm/${id}`);
      setFastTrackData(fastTrackdata.filter(item => item._id !== id));
      alert('Record deleted successfully');
    } catch (error) {
      console.error("Error deleting data:", error);
      alert('Failed to delete record');
    }
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
              <tr className='bg-gray-800 text-white'>
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
                <th className="py-2 px-4 text-left">Old Student of Shubham Sir</th>
                <th className="py-2 px-4 text-left">Institution</th>
                <th className="py-2 px-4 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fastTrackdata.map((data, index) => (
                <tr
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                  key={data._id}
                >
                  <td className="py-2 px-4 text-gray-600">{index + 1}</td>
                  <td className="py-2 px-4">
                    <img
                      src={data.picture}
                      alt="User's Picture"
                      onError={(e) => console.log('Image failed to load:', e)}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="py-2 px-4 text-gray-600">{data.name}</td>
                  <td className="py-2 px-4 text-gray-600">{data.placeOfBirth}</td>
                  <td className="py-2 px-4 text-gray-600">{new Date(data.dateOfBirth).toLocaleDateString()}</td>
                  <td className="py-2 px-4 text-gray-600">{data.fullAddress}</td>
                  <td className="py-2 px-4 text-gray-600">{data.state}</td>
                  <td className="py-2 px-4 text-gray-600">{data.pinCode}</td>
                  <td className="py-2 px-4 text-gray-600">{data.qualification}</td>
                  <td className="py-2 px-4 text-gray-600">{data.collegeUniversity}</td>
                  <td className="py-2 px-4 text-gray-600">{data.pursuingLLB}</td>
                  <td className="py-2 px-4 text-gray-600">{data.yearOfPassing}</td>
                  <td className="py-2 px-4 text-gray-600">{data.email}</td>
                  <td className="py-2 px-4 text-gray-600">{data.fatherName}</td>
                  <td className="py-2 px-4 text-gray-600">{data.motherName}</td>
                  <td className="py-2 px-4 text-gray-600">{data.permanentAddress}</td>
                  <td className="py-2 px-4 text-gray-600">{data.permanentState}</td>
                  <td className="py-2 px-4 text-gray-600">{data.permanentCity}</td>
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
                  <td className="py-2 px-4 text-gray-600">{data.amountPaid}</td>
                  <td className="py-2 px-4 text-gray-600">{data.prelims}</td>
                  <td className="py-2 px-4 text-gray-600">{data.mains}</td>
                  <td className="py-2 px-4 text-gray-600">{data.targetedstate}</td>
                  <td className="py-2 px-4 text-gray-600">{data.score}</td>
                  <td className="py-2 px-4 text-gray-600">{data.year}</td>
                  <td className="py-2 px-4 text-gray-600">{data.oldStudentOfShubhamSir}</td>
                  <td className="py-2 px-4 text-gray-600">{data.institution}</td>
                  <td className="py-2 px-4 text-center flex justify-center space-x-2">
                    <Link
                      to={`/update-fasttrack/${data._id}`}
                      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                      Update
                    </Link>
                    <button
                      onClick={() => handleDelete(data._id)}
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
