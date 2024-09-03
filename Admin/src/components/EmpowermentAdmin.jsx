import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const EmpowermentAdmin = () => {
  const [edata, setEdata] = useState(null);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    const result = await axios.get(
      "http://localhost:8080/api/getempowermentForm"
    );
    console.log(result.data.data);
    setEdata(result.data.data);
  };

  return (
    <div>
      <h1>Empowerment Data</h1>
      <div>
        {edata === null
          ? ""
          : edata.map((data, index) => (
              <div key={index}>
                <table className="border gap-9">
                  <th>s.no</th>
                  <th>Choose picture:</th>
                  <th>Name:</th>
                  <th>Place Of Birth:</th>
                  <th>Date Of Birth:</th>
                  <th>Full Address:</th>
                  <th>State:</th>
                  <th>Pin Code:</th>
                  <th>Qualification</th>
                  <th>Pursuing LL.B</th>
                  <th>Year Of Passing</th>
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
                  <tr className="border">
                    <td>{data._id}</td>
                    <td>
                      <img
                        src={data.photo}
                        alt="User's Photo"
                        onError={(e) => console.log("Image failed to load:", e)}
                      />
                    </td>
                    <td>{data.name}</td>
                    <td>{data.placeOfBirth}</td>
                    <td>{data.dateOfBirth}</td>
                    <td>{data.fullAddress}</td>
                    <td>{data.state}</td>
                    <td>{data.pinCode}</td>
                    <td>{data.qualification}</td>
                    <td>{data.collegeUniversity}</td>
                    <td>{data.pursuingLLB}</td>
                    <td>{data.yearOfPassing}</td>
                    <td>{data.email}</td>
                    <td>{data.fatherName}</td>
                    <td>{data.motherName}</td>
                    <td>{data.permanentAddress}</td>
                    <td>{data.permanentState}</td>
                    <td>{data.permanentCity}</td>
                    <td>{data.oldStudentOfShubhamSir}</td>
                    <td>
                      {typeof data.feesPaid === "object"
                        ? JSON.stringify(data.feesPaid)
                        : data.feesPaid}
                    </td>
                    <td>
                      {typeof data.onlineUPI === "object"
                        ? JSON.stringify(data.onlineUPI)
                        : data.onlineUPI}
                    </td>
                    <td>{data.amountPaid}</td>
                    <td>{data.institution}</td>
                    <td>{data.timestamps}</td>
                  </tr>
                </table>
              </div>
            ))}
      </div>
    </div>
  );
};

export default EmpowermentAdmin;
