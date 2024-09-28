// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import SummaryApi from '../Common/SummaryApi';

// const EmpowermentAdmin = () => {
//   const [edata, setEdata] = useState(null);
//   const [editData, setEditData] = useState({});
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 10; // Change this number for more or fewer items per page

//   useEffect(() => {
//     getdata();
//   }, []);

//   const getdata = async () => {
//     const result = await axios({
//       url: SummaryApi.EmpowermentAdmin.url,
//       method: SummaryApi.EmpowermentAdmin.method,
//     });
//     setEdata(result.data.data);
//   };

//   const handleChange = (e, id) => {
//     setEditData({
//       ...editData,
//       [id]: { ...editData[id], [e.target.name]: e.target.value },
//     });
//   };

//   const UpdateEdata = async (id) => {
//     try {
//       const apiUrl = SummaryApi.EmpowermentAdminUpdate.url.replace(':id', id);
//       await axios({
//         url: apiUrl,
//         method: SummaryApi.EmpowermentAdminUpdate.method,
//         data: editData[id],
//       });
//     } catch (error) {
//       console.error('Error updating user:', error);
//     }
//   };

//   const deleteEdata = async (id) => {
//     const apiUrl = SummaryApi.EmpowermentAdminDelete.url.replace(':id', id);
//     try {
//       await axios({
//         url: apiUrl,
//         method: SummaryApi.EmpowermentAdminDelete.method,
//       });
//       getdata(); // Refresh the data after delete
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   // Pagination Logic
//   const indexOfLastData = currentPage * itemsPerPage;
//   const indexOfFirstData = indexOfLastData - itemsPerPage;
//   const currentData = edata
//     ? edata.slice(indexOfFirstData, indexOfLastData)
//     : [];

//   const totalPages = edata ? Math.ceil(edata.length / itemsPerPage) : 0;

//   const handlePageChange = (pageNum) => {
//     if (pageNum > 0 && pageNum <= totalPages) {
//       setCurrentPage(pageNum);
//     }
//   };

//   return (
//     <div>
//       <h1>Empowerment Data</h1>
//       <div>
//         <table className="border">
//           <thead>
//             <tr>
//               <th>s.no</th>
//               <th>Choose picture:</th>
//               <th>Name:</th>
//               <th>Place Of Birth:</th>
//               <th>Date Of Birth:</th>
//               <th>Full Address:</th>
//               <th>State:</th>
//               <th>Pin Code:</th>
//               <th>Qualification</th>
//               <th>collegeUniversity</th>
//               <th>Pursuing LL.B</th>
//               <th>Year Of Passing</th>
//               <th>Batch</th>
//               <th>Email</th>
//               <th>Father's Name</th>
//               <th>Mother's Name</th>
//               <th>Permanent Address</th>
//               <th>State</th>
//               <th>City</th>
//               <th>Upload Aadhar (Front and Back)</th>
//               <th>Online / UPI</th>
//               <th>Amount Paid</th>
//               <th>Old Student of Shubham Sir</th>
//               <th>Institution</th>
//               <th>timestamps</th>
//               <th>Operations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentData.length === 0 ? (
//               <tr>
//                 <td colSpan="24">No data available</td>
//               </tr>
//             ) : (
//               currentData.map((data, index) => (
//                 <tr className="border" key={data._id}>
//                   <td>{indexOfFirstData + index + 1}</td>
//                   <td>
//                     <img
//                       src={`http://localhost:8080/notifiesfiles/${data.photo}`}
//                       alt="User's Photo"
//                       onError={(e) => console.log('Image failed to load:', e)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="name"
//                       value={editData[data._id]?.name || data.name || ''}
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="text"
//                       name="placeOfBirth"
//                       value={
//                         editData[data._id]?.placeOfBirth ||
//                         data.placeOfBirth ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="dateOfBirth"
//                       value={
//                         editData[data._id]?.dataOfBirth ||
//                         data.dataOfBirth ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="fullAddress"
//                       value={
//                         editData[data._id]?.fullAddress ||
//                         data.fullAddress ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="state"
//                       value={editData[data._id]?.state || data.state || ' '}
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="Number"
//                       name="pinCode"
//                       value={editData[data._id]?.pinCode || data.pinCode || ''}
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="qualification"
//                       value={
//                         editData[data._id]?.qualification ||
//                         data.qualification ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="collegeUniversity"
//                       value={
//                         editData[data._id]?.collegeUniversity ||
//                         data.collegeUniversity ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="pursuingLLB"
//                       value={
//                         editData[data._id]?.pursuingLLB ||
//                         data.pursuingLLB ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="text"
//                       name="Batch"
//                       value={editData[data._id]?.Batch || data.Batch || ''}
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>

//                   <td>
//                     <input
//                       type="Number"
//                       name="yearOfPassing"
//                       value={
//                         editData[data._id]?.yearOfPassing ||
//                         data.yearOfPassing ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="email"
//                       name="email"
//                       value={editData[data._id]?.email || data.email || ''}
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="fatherName"
//                       value={
//                         editData[data._id]?.fatherName || data.fatherName || ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="motherName"
//                       value={
//                         editData[data._id]?.motherName || data.motherName || ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="permanentAddress"
//                       value={
//                         editData[data._id]?.permanentAddress ||
//                         data.permanentAddress ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="permanentState"
//                       value={
//                         editData[data._id]?.permanentState ||
//                         data.permanentState ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="permanentCity"
//                       value={
//                         editData[data._id]?.permanentCity ||
//                         data.permanentCity ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <img
//                       src={`http://localhost:8080/notifiesfiles/${data.aadharCard}`}
//                       alt="User's Photo"
//                       onError={(e) => console.log('Image failed to load:', e)}
//                     />
//                   </td>
//                   <td>
//                     {typeof data.onlineUPI === 'object'
//                       ? JSON.stringify(data.onlineUPI)
//                       : data.onlineUPI}
//                   </td>
//                   <td>
//                     {typeof data.feesPaid === 'object'
//                       ? JSON.stringify(data.feesPaid)
//                       : data.feesPaid}
//                   </td>

//                   <td>{data.amountPaid}</td>
//                   <td>
//                     <input
//                       type="text"
//                       name="oldStudentOfShubhamSir"
//                       value={
//                         editData[data._id]?.oldStudentOfShubhamSir ||
//                         data.oldStudentOfShubhamSir ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>
//                     <input
//                       type="text"
//                       name="institution"
//                       value={
//                         editData[data._id]?.institution ||
//                         data.institution ||
//                         ''
//                       }
//                       onChange={(e) => handleChange(e, data._id)}
//                     />
//                   </td>
//                   <td>{data.timestamps}</td>

//                   <td>
//                     <button
//                       className="bg-slate-600 text-white p-2 rounded-2xl"
//                       onClick={() => UpdateEdata(data._id)}
//                     >
//                       Update
//                     </button>
//                     <button
//                       className="bg-purple-500 text-white p-2 rounded-2xl"
//                       onClick={() => deleteEdata(data._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>

//         {/* Pagination Controls */}
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={() => handlePageChange(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="bg-gray-300 p-2 rounded"
//           >
//             Previous
//           </button>
//           <div>
//             Page {currentPage} of {totalPages}
//           </div>
//           <button
//             onClick={() => handlePageChange(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="bg-gray-300 p-2 rounded"
//           >
//             Next
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmpowermentAdmin;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SummaryApi from '../Common/SummaryApi';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const EmpowermentForm = () => {
  const [empowermentData, setEmpowermentData] = useState([]);
  const [editData, setEditData] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await axios.get('http://localhost:8080/api/getempowermentForm');
        console.log(result);
        setEmpowermentData(result.data.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
        setEmpowermentData([]);
      }
    };
    getData();
  }, []);

  const deleteData = async (id) => {
    try {
      await axios({
        ...SummaryApi.EmpowermentAdminDelete,
        url: SummaryApi.EmpowermentAdminDelete.url.replace(':id', id),
      });
      setEmpowermentData(empowermentData.filter((data) => data._id !== id));
    } catch (error) {
      console.error('Error deleting form:', error);
    }
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    setEditData((prev) => ({
      ...prev,
      [id]: { ...prev[id], [name]: value },
    }));
  };

  const updateData = async (id) => {
    try {
      await axios({
        ...SummaryApi.EmpowermentAdminUpdate,
        url: SummaryApi.EmpowermentAdminUpdate.url.replace(':id', id),
        data: editData[id],
      });
      setEditMode(null);
      setEmpowermentData((prevData) =>
        prevData.map((item) => (item._id === id ? editData[id] : item))
      );
      setEditData({}); // Reset editData
    } catch (error) {
      console.error('Error updating form:', error);
    }
  };

  const toggleEditMode = (id) => {
    setEditMode(id);
    const selectedData = empowermentData.find((data) => data._id === id);
    setEditData({ [id]: selectedData });
  };

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentForms = empowermentData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(empowermentData.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Empowerment Form Data</h1>
      {empowermentData.length === 0 ? (
        <p className="text-gray-500">No data available</p>
      ) : (
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead className="bg-gray-800 text-white">
            <tr>
              {[
                'S.No',
                'Choose Picture',
                'Name',
                'Place of Birth',
                'Date of Birth',
                'Full Address',
                'State',
                'Pin Code',
                'Qualification',
                'College/University',
                'Pursuing LL.B',
                'Year of Passing',
                'Batch',
                'Email',
                "Father's Name",
                "Mother's Name",
                'Permanent Address',
                'State',
                'City',
                'Upload Aadhar (Front and Back)',
                'Fees Paid',
                'Amount Paid',
                'Old Student of Shubham Sir',
                'Institution',
                'Actions' // To include Edit and Delete actions
              ].map((heading, i) => (
                <th key={i} className="py-2 px-4 text-left">
                  {heading}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentForms.map((data, index) => (
              <tr
                key={data._id}
                className={`border-b border-gray-200 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
              >
                <td className="py-2 px-4">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
                {[
                  'photo',
                  'name',
                  'placeOfBirth',
                  'dateOfBirth',
                  'fullAddress',
                  'state',
                  'pinCode',
                  'qualification',
                  'collegeUniversity',
                  'pursuingLLB', 
                  'yearOfPassing', 
                  'batch', 
                  'email',
                  'fatherName',
                  'motherName',
                  'permanentAddress',
                  'permanentState',
                  'permanentCity',
                  'aadharCard', // Ensure this key matches the data structure
                  'feesPaid',
                  'amountPaid', 
                  'oldStudentOfShubhamSir', 
                  'institution',
                ].map((field, i) => (
                  <td key={i} className="py-2 px-4">
                    {editMode === data._id ? (
                      // Show input for editing
                      <input
                        type="text"
                        name={field}
                        value={editData[data._id]?.[field] || ''}
                        onChange={(e) => handleChange(e, data._id)}
                        className="w-full p-2 border rounded"
                      />
                    ) : field === 'photo' ? (
                      // Display the image for the 'Choose Picture' field
                      <img src={data[field]} alt="Empowerment" className="w-16 h-16 object-cover" />
                    ) : (
                      // Display the field value normally
                      data[field]
                    )}
                  </td>
                ))}
                <td className="py-2 px-4">
                  {editMode === data._id ? (
                    <>
                      <button
                        onClick={() => updateData(data._id)}
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditMode(null);
                          setEditData({});
                        }}
                        className="bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleEditMode(data._id)}
                        className="px-3 py-1 rounded flex items-center"
                      >
                        <FaEdit className="text-blue-500 hover:text-blue-800" />
                      </button>
                      <button
                        onClick={() => deleteData(data._id)}
                        className="px-3 py-1 rounded flex items-center"
                      >
                        <FaTrashAlt className="text-red-500 hover:text-red-700" />
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Pagination */}
      <div className="flex justify-center space-x-2 mt-4">
        {[...Array(totalPages)].map((_, pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber + 1)}
            className={`px-3 py-1 rounded ${currentPage === pageNumber + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {pageNumber + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default EmpowermentForm;
