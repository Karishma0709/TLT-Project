// import React, { useState, useEffect } from "react";
// // import SummaryApi from "../../Common/SummaryAPI";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";
// import {country} from "country-state-city"

// const RegistrationForm = () => {
//   const [selectedState, setSelectedState] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//  // Add state for cities

//   const [data, setData] = useState({
//       name:"",
//       placeOfBirth:"",
//       dateOfBirth:"",
//       fullAddress:"",
//       state:"",
//       pinCode:"",
//       qualification:"",
//       collegeUniversity:"",
//       pursuingLLB:"",
//       yearOfPassing:"",
//       email:"",
//       fatherName:"",
//       motherName:"",
//       permanentAddress:"",
//       permanentState:"",
//       permanentCity:"",
//       aadharCard:"",
//       feesPaid:"",
//       amountPaid,
//       prelims:"",
//       mains:"",
//       targetedstate:"",
//       score:"",
//       year:"",
//       oldStudentOfShubhamSir:"",
//       institution:"",
//   });

//   const [files, setFiles] = useState({
//     aadharCard: null,
//     picture: null,
//   });

  
//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const { name, files } = e.target;
//     setFiles((prev) => ({
//       ...prev,
//       [name]: files[0],
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     Object.keys(data).forEach((key) => {
//         formData.append(key, data[key]);
        
//     });
//     Object.keys(files).forEach((key) => {
//         if (files[key]) {
//             formData.append(key, files[key]);
//         }
//     });

//     try {
//         const result = await axios.post(
//             "http://localhost:8080/api/fastTrackForm",
//             formData,
//             {
//                 headers: { "Content-Type": "multipart/form-data" },
//             }
//         );
//         console.log(result);
//         if (result.data.status === "ok") {
//             alert("Uploaded Successfully !!!");
//         }
//     } catch (error) {
//         console.error("Error details:", error.response ? error.response.data : error.message);
//         alert("An error occurred: " + (error.response ? error.response.data : error.message));
//     }
// };



//   //   try {
//   //     const contactResponse = await fetch(SummaryApi.fastTrackForm.url, {
//   //       method: SummaryApi.fastTrackForm.method,
//   //       body: formData,
//   //     });

//   //     const dataApi = await contactResponse.json();

//   //     if (dataApi.success) {
//   //       toast.success("Data is successfully submitted!");
//   //     } else {
//   //       toast.error(dataApi.message);
//   //     }

//   //     console.log("data", dataApi);
//   //   } catch (error) {
//   //     toast.error("An error occurred while submitting the form.");
//   //     console.error("Error submitting form:", error);
//   //   }
//   // };

//   return (
//     <div className="text-justify mx-auto sm:px-10 px-5 md:px-10 lg:px-40 py-0 ">
//       <div className="mt-4">
//         <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
//           SUPER 30 FAST TRACK BATCH
//         </h2>
//       </div>

//       <form onSubmit={handleSubmit} className="mt-5 ">
//         <div className="space-y-6 sm:px-10 md:px-2 ">
//           <div className="sm:flex items-center">
//             <label
//               htmlFor="picture"
//               className="block text-left font-bold text-lg  sm:w-1/4 md:w-1/4">
//               Choose Picture:
//             </label>
//             <input
//               type="file"
//               name="picture"
//               id="picture"
//               autoComplete="off"
//               onChange={handleFileChange}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="name"
//               className="block text-left font-bold text-lg  sm:w-1/4">
//               Name:
//             </label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               autoComplete="off"
//               value={data.name}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="place-of-birth"
//               className="block text-left font-bold text-lg  sm:w-1/4">
//               Place Of Birth:
//             </label>
//             <input
//               type="text"
//               name="placeOfBirth"
//               id="place-of-birth"
//               autoComplete="off"
//               value={data.placeOfBirth}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="date-of-birth"
//               className="block text-left font-bold text-lg  sm:w-1/4 ">
//               Date Of Birth:
//             </label>
//             <input
//               type="date"
//               name="dateOfBirth"
//               id="date-of-birth"
//               autoComplete="off"
//               value={data.dateOfBirth}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="full-address"
//               className="block text-left font-bold text-lg  sm:w-1/4 ">
//               Full Address:
//             </label>
//             <textarea
//               name="fullAddress"
//               id="full-address"
//               autoComplete="off"
//               value={data.fullAddress}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="state"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               State:
//             </label>
//             <select
//               className="form-control border rounded w-full p-2"
//               name="state"
//               id="state"
//               onChange={(e) => {
//                 setSelectedState(e.target.value);
//                 setSelectedCity(""); // Reset city when state changes
//               }}>
//               <option value="" disabled selected>
//                 Select State
//               </option>
//               {states.map((state) => (
//                 <option key={state.id} value={state.id}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="pincode"
//               className="block text-left font-bold text-lg sm:w-1/4 ">
//               Pin Code:
//             </label>
//             <input
//               type="number"
//               name="pinCode"
//               id="pincode"
//               autoComplete="off"
//               value={data.pincode}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="qualification"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               Qualification:
//             </label>
//             <input
//               type="text"
//               name="qualification"
//               id="qualification"
//               autoComplete="off"
//               value={data.qualification}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="college-university"
//               className="block text-left font-bold text-lg  sm:w-1/4">
//               College/University:
//             </label>
//             <input
//               type="text"
//               name="collegeUniversity"
//               id="college-university"
//               autoComplete="off"
//               value={data.collegeUniversity}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label className="block text-left font-bold text-lg  sm:w-1/5">
//               Pursuing LL.B:
//             </label>
//             <div className="flex space-x-4">
//               <label>
//                 <input
//                   type="radio"
//                   name="pursuingLLB"
//                   value="yes"
//                   autoComplete="off"
//                   onChange={handleInput}
//                   className="mr-2"/>{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="pursuingLLB"
//                   value="no"
//                   autoComplete="off"
//                   onChange={handleInput}
//                   className="mr-2"/>{" "}
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="year-of-passing"
//               className="block text-left font-bold text-lg  sm:w-1/4">
//               Year Of Passing:
//             </label>
//             <input
//               type="number"
//               name="yearOfPassing"
//               id="year-of-passing"
//               autoComplete="off"
//               value={data.yearOfPassing}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="email"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               Email:
//             </label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               autoComplete="off"
//               value={data.email}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           {/* Personal details */}
//           <div>
//             <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">
//               Personal Information
//             </h2>
//           </div>
//           <div className="sm:flex items-center">
//             <label
//               htmlFor="father-name"
//               className="block text-left font-bold text-lg  sm:w-1/4 ">
//               Father's Name:
//             </label>
//             <input
//               type="text"
//               name="fatherName"
//               id="father-name"
//               autoComplete="off"
//               value={data.fatherName}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="mother-name"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               Mother's Name:
//             </label>
//             <input
//               type="text"
//               name="motherName"
//               id="mother-name"
//               autoComplete="off"
//               value={data.motherName}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="permanent-address"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               Permanent Address:
//             </label>
//             <textarea
//               name="permanentAddress"
//               id="permanent-address"
//               autoComplete="off"
//               value={data.permanentAddress}
//               onChange={handleInput}
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="permanent-state"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               Permanent State:
//             </label>
//             <select
//               className="form-control border rounded w-full p-2"
//               name="permanentState"
//               id="permanent-state"
//               onChange={(e) => {
//                 setData((prev) => ({
//                   ...prev,
//                   permanentState: e.target.value,
//                 }));
//                 setSelectedCity(""); // Reset city when state changes
//               }}>
//               <option value="" disabled selected>
//                 Select State
//               </option>
//               {states.map((state) => (
//                 <option key={state.id} value={state.id}>
//                   {state.name}
//                 </option>
//               ))}
//             </select>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="permanent-city"
//               className="block text-left font-bold text-lg sm:w-1/4 ">
//               Permanent City:
//             </label>
//             <select
//               className="form-control border rounded w-full p-2"
//               name="permanentCity"
//               id="permanent-city"
//               onChange={(e) => {
//                 setData((prev) => ({
//                   ...prev,
//                   permanentCity: e.target.value,
//                 }));
//               }}
//               disabled={!data.permanentState}>
//               <option value="" disabled selected>
//                 Select City
//               </option>
//               {data.permanentState &&
//                 cities[data.permanentState]?.map((city, index) => (
//                   <option key={index} value={city}>
//                     {city}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="aadhar-card"
//               className="block text-left font-bold text-lg  sm:w-1/4 ">
//               Upload Aadhar (Front and Back):
//             </label>
//             <input
//               type="file"
//               name="aadharCard"
//               id="aadhar-card"
//               autoComplete="off"
//               onChange={handleFileChange}
//               className="border rounded w-full p-2"/>
//           </div>

//           {/* Last Exam */}
//           <div>
//             <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
//               Details Of Last Qualified Exam
//             </h2>
//           </div>
//           <div className="flex justify-around items-center space-x-4">
//             <div className="flex justify-between items-center">
//               <label className="flex text-left font-bold text-lg px-5">
//                 Prelims:
//                 <input
//                   type="radio"
//                   name="prelims"
//                   value="yes"
//                   className="mx-2 mt-1"/>
//               </label>
//             </div>
//             <div className="flex justify-between items-center">
//               <label className="flex text-left font-bold text-lg ">
//                 Mains:
//                 <input
//                   type="radio"
//                   name="mains"
//                   value="yes"
//                   className="mx-2 mt-1"/>{" "}
//               </label>
//             </div>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="last-exam-state"
//               className="block text-left font-bold text-lg  sm:w-1/4 ">
//               State:
//             </label>
//             <input
//               type="text"
//               name="targetedstate"
//               id="last-exam-state"
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="score"
//               className="block text-left font-bold text-lg  sm:w-1/4 ">
//               Score:
//             </label>
//             <input
//               type="number"
//               name="score"
//               id="score"
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="year"
//               className="block text-left font-bold text-lg  sm:w-1/4">
//               Year:
//             </label>
//             <input
//               type="number"
//               name="year"
//               id="year"
//               className="border rounded w-full p-2"/>
//           </div>

//           {/* Fees Paid */}
//           <div>
//             <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
//               Fees Paid (First Installment)
//             </h2>
//           </div>
//           <div className="sm:flex justify-between items-center">
//             <label className="flex text-left font-bold text-lg sm:w-1/6">
//               Online / UPI:
//               <input
//                 type="radio"
//                 name="feesPaid"
//                 value="online"
//                 className="mx-2 mt-1"/>{" "}
//             </label>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="amount-paid"
//               className="block text-left font-bold text-lg  sm:w-1/4">
//               Amount Paid:
//             </label>
//             <input
//               type="number"
//               name="amountPaid"
//               id="amount-paid"
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="sm:flex items-center">
//             <label className="block text-left font-bold text-lg  sm:w-1/6">
//               Old Student of Shubham Sir:
//             </label>
//             <div className="flex space-x-4 sm:ml-8">
//               <label>
//                 <input
//                   type="radio"
//                   name="oldStudentOfShubhamSir"
//                   value="yes"
//                   className="mr-2"/>{" "}
//                 Yes
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="oldStudentOfShubhamSir"
//                   value="no"
//                   className="mr-2"/>{" "}
//                 No
//               </label>
//             </div>
//           </div>

//           <div className="sm:flex items-center">
//             <label
//               htmlFor="institution"
//               className="block text-left font-bold text-lg sm:w-1/4">
//               Institution:
//             </label>
//             <input
//               type="text"
//               name="institution"
//               id="institution"
//               className="border rounded w-full p-2"/>
//           </div>

//           <div className="flex justify-center mt-6">
//             <button
//               type="submit"
//               className="bg-red-500 border text-white font-bold py-2 px-4 rounded mb-10">
//               Submit
//             </button>
//           </div>
//         </div>
//       </form>

//       <ToastContainer />
//     </div>
//   );
// };

// export default RegistrationForm;


import React, { useState, useEffect } from "react";
import axios from "axios";
import { State, City } from "country-state-city";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  
  const [data, setData] = useState({
    name: "",
    placeOfBirth: "",
    dateOfBirth: "",
    fullAddress: "",
    state: "",
    pinCode: "",
    qualification: "",
    collegeUniversity: "",
    pursuingLLB: "",
    yearOfPassing: "",
    email: "",
    fatherName: "",
    motherName: "",
    permanentAddress: "",
    permanentState: "",
    permanentCity: "",
    aadharCard: "",
    feesPaid: "",
    amountPaid: "",
    prelims: "",
    mains: "",
    targetedstate: "",
    score: "",
    year: "",
    oldStudentOfShubhamSir: "",
    institution: "",
  });

  const [files, setFiles] = useState({
    picture: null,
    aadharCard: null,
  });
  
  useEffect(() => {
    // Fetch states when component mounts
    const fetchedStates = State.getStatesOfCountry('IN'); // 'IN' is for India, change if needed
    setStates(fetchedStates);
  }, []);

  useEffect(() => {
    if (selectedState) {
      // Fetch cities when a state is selected
      const fetchedCities = City.getCitiesOfState('IN', selectedState);
      setCities(fetchedCities);
    } else {
      setCities([]);
    }
  }, [selectedState]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFiles((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
    Object.keys(files).forEach((key) => {
      if (files[key]) {
        formData.append(key, files[key]);
      }
    });
    console.log(data,files)

  //   try {
  //     const result = await axios.post(
  //       "http://localhost:8080/api/fastTrackForm",
  //       formData,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" },
  //       }
  //     );
  //     console.log(result);
  //     if (result.data.status === "ok") {
  //       toast.success("Uploaded Successfully !!!");
  //     }
  //   } catch (error) {
  //     console.error("Error details:", error.response ? error.response.data : error.message);
  //     toast.error("An error occurred: " + (error.response ? error.response.data : error.message));
  //   }
   };

  return (
    <div className="text-justify mx-auto sm:px-10 px-5 md:px-10 lg:px-40 py-0 ">
      <div className="mt-4">
        <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
          SUPER 30 FAST TRACK BATCH
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 ">
        <div className="space-y-6 sm:px-10 md:px-2 ">
          {/* Other form fields */}
          <div className="sm:flex items-center">
           <label
              htmlFor="picture"
              className="block text-left font-bold text-lg  sm:w-1/4 md:w-1/4">
              Choose Picture:
            </label>
            <input
              type="file"
              name="picture"
              id="picture"
              autoComplete="off"
              onChange={handleFileChange}              
              className="border rounded w-full p-2"/>
          </div>
          
          <div className="sm:flex items-center">
             <label
               htmlFor="name"
               className="block text-left font-bold text-lg  sm:w-1/4">
               Name:
             </label>
             <input
               type="text"
               name="name"
               id="name"
               autoComplete="off"
               value={data.name}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="place-of-birth"
               className="block text-left font-bold text-lg  sm:w-1/4">
               Place Of Birth:
             </label>             
             <input
               type="text"
               name="placeOfBirth"
               id="place-of-birth"
              autoComplete="off"
               value={data.placeOfBirth}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="date-of-birth"
               className="block text-left font-bold text-lg  sm:w-1/4 ">
               Date Of Birth:
             </label>
             <input
               type="date"
               name="dateOfBirth"
               id="date-of-birth"
               autoComplete="off"
               value={data.dateOfBirth}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>
           <div className="sm:flex items-center">
             <label
               htmlFor="full-address"
               className="block text-left font-bold text-lg  sm:w-1/4 ">
               Full Address:
             </label>
             <textarea
               name="fullAddress"
               id="full-address"
               autoComplete="off"
               value={data.fullAddress}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

          <div className="sm:flex items-center">
            <label
              htmlFor="state"
              className="block text-left font-bold text-lg sm:w-1/4">
              State:
            </label>
            <select
              className="form-control border rounded w-full p-2"
              name="state"
              id="state"
              value={data.state}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setData(prev => ({
                  ...prev,
                  state: e.target.value,
                }));
                setSelectedCity(""); // Reset city when state changes
              }}>
              <option value="" disabled>
                Select State
              </option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          {/* <div className="sm:flex items-center">
            <label
              htmlFor="city"
              className="block text-left font-bold text-lg sm:w-1/4 ">
              City:
            </label>
            <select
              className="form-control border rounded w-full p-2"
              name="city"
              id="city"
              value={data.city}
              onChange={(e) => setData(prev => ({
                ...prev,
                city: e.target.value,
              }))}
              disabled={!selectedState}>
              <option value="" disabled>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div> */}
<div className="sm:flex items-center">
             <label
               htmlFor="pincode"
               className="block text-left font-bold text-lg sm:w-1/4 ">
               Pin Code:
             </label>
             <input
               type="number"
               name="pinCode"
               id="pinCode"
               autoComplete="off"
               value={data.pinCode}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="qualification"
               className="block text-left font-bold text-lg sm:w-1/4">
               Qualification:
             </label>
             <input
               type="text"
               name="qualification"
               id="qualification"
               autoComplete="off"
               value={data.qualification}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="college-university"
               className="block text-left font-bold text-lg  sm:w-1/4">
               College/University:
             </label>
             <input
               type="text"
               name="collegeUniversity"
               id="college-university"
               autoComplete="off"
               value={data.collegeUniversity}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label className="block text-left font-bold text-lg  sm:w-1/5">
               Pursuing LL.B:
             </label>
             <div className="flex space-x-4">
               <label>
                 <input
                   type="radio"
                   name="pursuingLLB"
                   value="yes"
                   autoComplete="off"
                   onChange={handleInput}
                   className="mr-2"/>{" "}
                 Yes
               </label>
               <label>
                 <input
                   type="radio"
                   name="pursuingLLB"
                   value="no"
                   autoComplete="off"
                   onChange={handleInput}
                   className="mr-2"/>{" "}
                 No
               </label>
             </div>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="year-of-passing"
               className="block text-left font-bold text-lg  sm:w-1/4">
               Year Of Passing:
             </label>
             <input
               type="number"
               name="yearOfPassing"
               id="year-of-passing"
               autoComplete="off"
               value={data.yearOfPassing}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>
           <div className="sm:flex items-center">
             <label
               htmlFor="email"
               className="block text-left font-bold text-lg sm:w-1/4">
               Email:
             </label>
             <input
               type="email"
               name="email"
               id="email"
               autoComplete="off"
               value={data.email}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

 {/* Personal details */}
            <div>
             <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4">
               Personal Information
             </h2>
           </div>
           <div className="sm:flex items-center">
             <label
               htmlFor="father-name"
               className="block text-left font-bold text-lg  sm:w-1/4 ">
               Father's Name:
             </label>
             <input
               type="text"
               name="fatherName"
               id="father-name"
               autoComplete="off"
               value={data.fatherName}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="mother-name"
               className="block text-left font-bold text-lg sm:w-1/4">
               Mother's Name:
             </label>
             <input
               type="text"
               name="motherName"
               id="mother-name"
               autoComplete="off"
               value={data.motherName}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="permanent-address"
               className="block text-left font-bold text-lg sm:w-1/4">
               Permanent Address:
             </label>
             <textarea
               name="permanentAddress"
               id="permanent-address"
               autoComplete="off"
               value={data.permanentAddress}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>
         
          <div className="sm:flex items-center">
            <label
              htmlFor="permanent-state"
              className="block text-left font-bold text-lg sm:w-1/4">
              Permanent State:
            </label>
            <select
              className="form-control border rounded w-full p-2"
              name="permanentState"
              id="permanent-state"
              value={data.permanentState}
              onChange={(e) => {
                setData(prev => ({
                  ...prev,
                  permanentState: e.target.value,
                }));
                setSelectedCity(""); // Reset city when state changes
              }}>
              <option value="" disabled>
                Select State
              </option>
              {states.map((state) => (
                <option key={state.isoCode} value={state.isoCode}>
                  {state.name}
                </option>
              ))}
            </select>
          </div>

          <div className="sm:flex items-center">
            <label
              htmlFor="permanent-city"
              className="block text-left font-bold text-lg sm:w-1/4 ">
              Permanent City:
            </label>
            <select
              className="form-control border rounded w-full p-2"
              name="permanentCity"
              id="permanent-city"
              value={data.permanentCity}
              onChange={(e) => setData(prev => ({
                ...prev,
                permanentCity: e.target.value,
              }))}
              disabled={!data.permanentState}>
              <option value="" disabled>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city.id} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
          </div>
          



          <div className="sm:flex items-center">
             <label
               htmlFor="aadhar-card"
               className="block text-left font-bold text-lg  sm:w-1/4 ">
               Upload Aadhar (Front and Back):
             </label>
             <input
               type="file"
               name="aadharCard"
               id="aadhar-card"
               autoComplete="off"
               onChange={handleFileChange}
               className="border rounded w-full p-2"/>
           </div>

           {/* Last Exam */}
           <div>
             <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
               Details Of Last Qualified Exam
             </h2>
           </div>
           <div className="flex justify-around items-center space-x-4">
             <div className="flex justify-between items-center">
               <label className="flex text-left font-bold text-lg px-5">
                 Prelims:
                 <input
                   type="radio"
                   name="prelims"
                   value="yes"
                   onChange={handleInput}
                   className="mx-2 mt-1"/>
                   
               </label>
             </div>
             <div className="flex justify-between items-center">
               <label className="flex text-left font-bold text-lg ">
                 Mains:
                 <input
                   type="radio"
                   name="mains"
                   value="yes"
                   onChange={handleInput}
                   className="mx-2 mt-1"/>{" "}
               </label>
             </div>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="last-exam-state"
               className="block text-left font-bold text-lg  sm:w-1/4 ">
               State:
             </label>
             <input
               type="text"
               name="targetedstate"
               id="last-exam-state"
               value={data.targetedstate}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="score"
               className="block text-left font-bold text-lg  sm:w-1/4 ">
               Score:
             </label>
             <input
               type="number"
               name="score"
               id="score"
               value={data.score}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="year"
               className="block text-left font-bold text-lg  sm:w-1/4">
               Year:
             </label>
             <input
               type="number"
               name="year"
               id="year"
               value={data.year}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           {/* Fees Paid */}
           <div>
             <h2 className="text-white bg-red-500 text-center text-3xl py-3 px-4 sm:px-10">
               Fees Paid (First Installment)
             </h2>
           </div>
           <div className="sm:flex justify-between items-center">
             <label className="flex text-left font-bold text-lg sm:w-1/6">
               Online / UPI:
               <input
                 type="radio"
                 name="feesPaid"
                 value="yes"
                 onChange={handleInput}
                 className="mx-2 mt-1"/>{" "}
             </label>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="amount-paid"
               className="block text-left font-bold text-lg  sm:w-1/4">
               Amount Paid:
             </label>
             <input
               type="number"
               name="amountPaid"
               id="amount-paid"
               value={data.amountPaid}
               onChange={handleInput}
               className="border rounded w-full p-2"/>
           </div>

           <div className="sm:flex items-center">
             <label className="block text-left font-bold text-lg  sm:w-1/6">
               Old Student of Shubham Sir:
             </label>
             <div className="flex space-x-4 sm:ml-8">
               <label>
                 <input
                   type="radio"
                   name="oldStudentOfShubhamSir"
                   value="yes"
                   autoComplete="off"
                   onChange={handleInput}
                   className="mr-2"/>{" "}
                 Yes
               </label>
               <label>
                 <input
                   type="radio"
                   name="oldStudentOfShubhamSir"
                   value="no"
                   autoComplete="off"
                   onChange={handleInput}
                   className="mr-2"/>{" "}
                 No
               </label>
             </div>
           </div>

           <div className="sm:flex items-center">
             <label
               htmlFor="institution"
               className="block text-left font-bold text-lg sm:w-1/4">
               Institution:
             </label>
             <input
               type="text"
               name="institution"
               id="institution"
               onChange={handleInput}
               value={data.institution}
               className="border rounded w-full p-2"/>
           </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-red-500 border text-white font-bold py-2 px-4 rounded mb-10">
              Submit
            </button>
          </div>
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default RegistrationForm;
