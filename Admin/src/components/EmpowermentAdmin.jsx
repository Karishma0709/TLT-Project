import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';

const EmpowermentAdmin = () => {
  const [edata, setEdata] = useState(null);
  const [editData, setEditData] = useState({});

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const result = await axios.get(
      'http://localhost:8080/api/getempowermentForm'
    );
    console.log(result.data.data);
    setEdata(result.data.data);
  };

  const handleChange = (e, id) => {
    setEditData({
      ...editData,
      [id]: { ...editData[id], [e.target.name]: e.target.value },
    });
  };

  const UpdateEdata = async (id) => {
    try {
      const updateuser = await axios.put(
        `http://localhost:8080/api/Eupdate/${id}`,
        editData[id]
      );
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const deleteEdata = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/Edelete/${id}`);
      getdata(); // Refresh the data after delete
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  return (
    <div>
      <h1>Empowerment Data</h1>
      <div>
        <div>
          <table className="border">
            <th>s.no</th>
            <th>Choose picture:</th>
            <th>Name:</th>
            <th>Place Of Birth:</th>
            <th>Date Of Birth:</th>
            <th>Full Address:</th>
            <th>State:</th>
            <th>Pin Code:</th>
            <th>Qualification</th>
            <th>collegeUniversity</th>
            <th>Pursuing LL.B</th>
            <th>Year Of Passing</th>
            <th>Batch</th>
            <th>Email</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Permanent Address</th>
            <th>State</th>
            <th>City</th>
            <th>Upload Aadhar (Front and Back)</th>
            <th>Online / UPI</th>
            <th>Amount Paid</th>
            <th>Old Student of Shubham Sir</th>
            <th>Institution</th>
            <th>timestamps</th>
            <th>Oprations</th>
            {edata === null
              ? ''
              : edata.map((data, index) => (
                  <tr className="border" key={index}>
                    <td>{data._id}</td>
                    <td>
                      <img
                        src={`http://localhost:8080/notifiesfiles/${data.photo}`}
                        alt="User's Photo"
                        onError={(e) => console.log('Image failed to load:', e)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="name"
                        value={editData[data._id]?.name || data.name || ''}
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="placeOfBirth"
                        value={
                          editData[data._id]?.placeOfBirth ||
                          data.placeOfBirth ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="dateOfBirth"
                        value={
                          editData[data._id]?.dataOfBirth ||
                          data.dataOfBirth ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="fullAddress"
                        value={
                          editData[data._id]?.fullAddress ||
                          data.fullAddress ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="state"
                        value={editData[data._id]?.state || data.state || ' '}
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="Number"
                        name="pinCode"
                        value={
                          editData[data._id]?.pinCode || data.pinCode || ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="qualification"
                        value={
                          editData[data._id]?.qualification ||
                          data.qualification ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="collegeUniversity"
                        value={
                          editData[data._id]?.collegeUniversity ||
                          data.collegeUniversity ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="pursuingLLB"
                        value={
                          editData[data._id]?.pursuingLLB ||
                          data.pursuingLLB ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        name="Batch"
                        value={editData[data._id]?.Batch || data.Batch || ''}
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>

                    <td>
                      <input
                        type="Number"
                        name="yearOfPassing"
                        value={
                          editData[data._id]?.yearOfPassing ||
                          data.yearOfPassing ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="email"
                        name="email"
                        value={editData[data._id]?.email || data.email || ''}
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="fatherName"
                        value={
                          editData[data._id]?.fatherName ||
                          data.fatherName ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="motherName"
                        value={
                          editData[data._id]?.motherName ||
                          data.motherName ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="permanentAddress"
                        value={
                          editData[data._id]?.permanentAddress ||
                          data.permanentAddress ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="permanentState"
                        value={
                          editData[data._id]?.permanentState ||
                          data.permanentState ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="permanentCity"
                        value={
                          editData[data._id]?.permanentCity ||
                          data.permanentCity ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <img
                        src={`http://localhost:8080/notifiesfiles/${data.aadharCard}`}
                        alt="User's Photo"
                        onError={(e) => console.log('Image failed to load:', e)}
                      />
                    </td>
                    <td>
                      {typeof data.onlineUPI === 'object'
                        ? JSON.stringify(data.onlineUPI)
                        : data.onlineUPI}
                    </td>
                    <td>
                      {typeof data.feesPaid === 'object'
                        ? JSON.stringify(data.feesPaid)
                        : data.feesPaid}
                    </td>

                    <td>{data.amountPaid}</td>
                    <td>
                      <input
                        type="text"
                        name="oldStudentOfShubhamSir"
                        value={
                          editData[data._id]?.oldStudentOfShubhamSir ||
                          data.oldStudentOfShubhamSir ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="institution"
                        value={
                          editData[data._id]?.institution ||
                          data.institution ||
                          ''
                        }
                        onChange={(e) => handleChange(e, data._id)}
                      />
                    </td>
                    <td>{data.timestamps}</td>
                    <td>
                      <button
                        className="bg-slate-600 text-white p-2 rounded-2xl"
                        onClick={() => UpdateEdata(data._id)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-purple-500 text-white p-2 rounded-2xl"
                        onClick={() => deleteEdata(data._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmpowermentAdmin;
