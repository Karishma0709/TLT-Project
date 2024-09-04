import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FastTrackForm = () => {
  const [fastTrackdata, setFastTrackData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/getfastTrackForm");
      console.log("API Response:", result); 
      console.log("Full API Response:", result.data); // Log the entire response
      console.log("Data Property:", result.data.fastTrackFormData ); 
      // Ensure the fetched data is an array
      if (Array.isArray(result.data.fastTrackFormData )) {
        setFastTrackData(result.data.fastTrackFormData );
      } else {
        console.error("Unexpected data format:", result.data.fastTrackFormData );
        setFastTrackData([]); // Set to empty array if data format is unexpected
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setFastTrackData([]); // Set to empty array on error
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
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr className='bg-red-500'>
                <th className="py2 px-5 text-left text-white">S.no</th>
                <th className="py2 px-5 text-left text-white">Picture</th>
                <th className="py2 px-5 text-left text-white">Name</th>
                <th className="py2 px-5 text-left text-white">Place of Birth</th>
                <th className="py2 px-5 text-left text-white">Date of Birth</th>
                <th className="py2 px-5 text-left text-white">Full Address</th>
                <th className="py2 px-5 text-left text-white">State</th>
                <th className="py2 px-5 text-left text-white">Pin Code</th>
                <th className="py2 px-5 text-left text-white">Qualification</th>
                <th className="py2 px-5 text-left text-white">College/University</th>
                <th className="py2 px-5 text-left text-white">Pursuing LL.B</th>
                <th className="py2 px-5 text-left text-white">Year of Passing</th>
                <th className="py2 px-5 text-left text-white">Email</th>
                <th className="py2 px-5 text-left text-white">Father's Name</th>
                <th className="py2 px-5 text-left text-white">Mother's Name</th>
                <th className="py2 px-5 text-left text-white">Permanent Address</th>
                <th className="py2 px-5 text-left text-white">Permanent State</th>
                <th className="py2 px-5 text-left text-white">Permanent City</th>
                <th className="py2 px-5 text-left text-white">Aadhar Card</th>
                <th className="py2 px-5 text-left text-white">Fees Paid</th>
                <th className="py2 px-5 text-left text-white">Amount Paid</th>
                <th className="py2 px-5 text-left text-white">Prelims</th>
                <th className="py2 px-5 text-left text-white">Mains</th>
                <th className="py2 px-5 text-left text-white">Targeted State</th>
                <th className="py2 px-5 text-left text-white">Score</th>
                <th className="py2 px-5 text-left text-white">Year</th>
                <th className="py2 px-5 text-left text-white">Old Student of Shubham Sir</th>
                <th className="py2 px-5 text-left text-white">Institution</th>
                <th className="py2 px-5 text-left text-white">Actions</th>
              </tr>
            </thead>
            <tbody>
              {fastTrackdata.map((data, index) => (
                <tr
                  className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                  key={data._id}
                >
                  <td className="py-2 px-5  text-gray-600">{index + 1}</td>
                  <td className="py-2 px-5">
                    <img
                      src={data.picture}
                      alt="User's Picture"
                      onError={(e) => console.log('Image failed to load:', e)}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="py-2 px-5 text-gray-600">{data.name}</td>
                  <td className="py-2 px-5 text-gray-600">{data.placeOfBirth}</td>
                  <td className="py-2 px-5 text-gray-600">{new Date(data.dateOfBirth).toLocaleDateString()}</td>
                  <td className="py-2 px-5 text-gray-600">{data.fullAddress}</td>
                  <td className="py-2 px-5 text-gray-600">{data.state}</td>
                  <td className="py-2 px-5 text-gray-600">{data.pinCode}</td>
                  <td className="py-2 px-5 text-gray-600">{data.qualification}</td>
                  <td className="py-2 px-5 text-gray-600">{data.collegeUniversity}</td>
                  <td className="py-2 px-5 text-gray-600">{data.pursuingLLB}</td>
                  <td className="py-2 px-5 text-gray-600">{data.yearOfPassing}</td>
                  <td className="py-2 px-5 text-gray-600">{data.email}</td>
                  <td className="py-2 px-5 text-gray-600">{data.fatherName}</td>
                  <td className="py-2 px-5 text-gray-600">{data.motherName}</td>
                  <td className="py-2 px-5 text-gray-600">{data.permanentAddress}</td>
                  <td className="py-2 px-5 text-gray-600">{data.permanentState}</td>
                  <td className="py-2 px-5 text-gray-600">{data.permanentCity}</td>
                  <td className="py-2 px-5">
                    <img
                      src={data.aadharCard}
                      alt="Aadhar Card"
                      onError={(e) => console.log('Image failed to load:', e)}
                      className="w-24 h-24 object-cover"
                    />
                  </td>
                  <td className="py-2 px-5 text-gray-600">
                    {typeof data.feesPaid === 'object'
                      ? JSON.stringify(data.feesPaid)
                      : data.feesPaid}
                  </td>
                  <td className="py-2 px-5 text-gray-600">{data.amountPaid}</td>
                  <td className="py-2 px-5 text-gray-600">{data.prelims}</td>
                  <td className="py-2 px-5 text-gray-600">{data.mains}</td>
                  <td className="py-2 px-5 text-gray-600">{data.targetedstate}</td>
                  <td className="py-2 px-5 text-gray-600">{data.score}</td>
                  <td className="py-2 px-5 text-gray-600">{data.year}</td>
                  <td className="py-2 px-10 text-gray-600">{data.oldStudentOfShubhamSir}</td>
                  <td className="py-2 px-5 text-gray-600">{data.institution}</td>
                  <td className="py-2 px-5 text-center">
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="bg-red-500 text-white px-5 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
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
