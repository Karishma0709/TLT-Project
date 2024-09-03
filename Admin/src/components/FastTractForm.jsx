import React, { useState } from 'react'

// const [formdata,setFormdat]=useState("")


const FastTractForm = () => {
  return (
    <div>

        asdfghjk
      {/* <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Place of Birth</th>
            <th>Date of Birth</th>
            <th>Full Address</th>
            <th>State</th>
            <th>Pin Code</th>
            <th>Qualification</th>
            <th>College/University</th>
            <th>Pursuing LLB</th>
            <th>Year of Passing</th>
            <th>Email</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Permanent Address</th>
            <th>Permanent State</th>
            <th>Permanent City</th>
            <th>Aadhar Card</th>
            <th>Fees Paid</th>
            <th>Amount Paid</th>
            <th>Prelims</th>
            <th>Mains</th>
            <th>Targeted State</th>
            <th>Score</th>
            <th>Year</th>
            <th>Old Student of Shubham Sir</th>
            <th>Institution</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {forms.map((form) => (
            <tr key={form._id}>
              <td><img src={`http://localhost:8080/${form.picture}`} alt="Picture" width="100" /></td>
              <td>{form.name}</td>
              <td>{form.placeOfBirth}</td>
              <td>{new Date(form.dateOfBirth).toLocaleDateString()}</td>
              <td>{form.fullAddress}</td>
              <td>{form.state}</td>
              <td>{form.pinCode}</td>
              <td>{form.qualification}</td>
              <td>{form.collegeUniversity}</td>
              <td>{form.pursuingLLB}</td>
              <td>{form.yearOfPassing}</td>
              <td>{form.email}</td>
              <td>{form.fatherName}</td>
              <td>{form.motherName}</td>
              <td>{form.permanentAddress}</td>
              <td>{form.permanentState}</td>
              <td>{form.permanentCity}</td>
              <td><img src={`http://localhost:8080/${form.aadharCard}`} alt="Aadhar Card" width="100" /></td>
              <td>{form.feesPaid}</td>
              <td>{form.amountPaid}</td>
              <td>{form.prelims}</td>
              <td>{form.mains}</td>
              <td>{form.targetedstate}</td>
              <td>{form.score}</td>
              <td>{form.year}</td>
              <td>{form.oldStudentOfShubhamSir}</td>
              <td>{form.institution}</td>
              <td><button onClick={() => handleDelete(form._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
  )
}

export default FastTractForm
