// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";

// const Documents = () => {
//   const navigate = useNavigate();

//   const [photo, setPhoto] = useState("");
//   const [addhar, setAddhar] = useState("");

//   const [photoAlert, setphotoAlert] = useState(false);
//   const [addharAlert, setaddharAlert] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (photo === "") {
//       setphotoAlert(true);
//     } else {
//       setphotoAlert(false);
//     }
//     if (addhar === "") {
//       setaddharAlert(true);
//     } else {
//       setaddharAlert(false);
//     }

//     if (photo !== "" && addhar !== "") {
//       navigate("/jet/educational");
//     } else {
//       alert("Please upload documents");
//     }
//   };

//   return (
//     <div className="flex w-full h-full sm:pl-[120px]">
//       <div className="w-full sm:w-[60%] p-4  pl-[0px]">
//         <h1 className="mt-16 text-3xl font-[800] mb-5 text-primary-marineBlue">
//           Document Upload
//         </h1>

//         <form
//           onSubmit={handleSubmit}
//           className="flex flex-col relative space-y-4"
//         >
//           {/*-------------- Photo-------------- */}
//           <div className="flex flex-wrap  pt-4">
//             <div className="flex flex-col w-[100%] mb-5">
//               <label className="text-primary-marineBlue font-[500] mb-2">
//                 Upload Photo
//               </label>
//               <input
//                 onChange={(e) => setPhoto(e.target.value)}
//                 className={` jinput ${
//                   photoAlert
//                     ? "focus:outline-primary-strawberryRed"
//                     : "focus:outline-primary-marineBlue"
//                 } outline outline-1 outline-neutral-lightGray h-7`}
//                 type="file"
//                 placeholder="State"
//               />
//               <span
//                 className={`${
//                   photoAlert ? "inline" : "hidden"
//                 } text-primary-strawberryRed font-[500] absolute top-[112px] right-[30px]`}
//               >
//                 This field is required
//               </span>
//             </div>
//             {/*-------------- Adharcard -------------- */}
//             <div className="flex flex-col w-[100%] pt-5 sm:pt-0">
//               <label className="text-primary-marineBlue font-[500] mb-2">
//                 Upload Aadhar
//               </label>
//               <input
//                 onChange={(e) => setAddhar(e.target.value)}
//                 className={` jinput ${
//                   addharAlert
//                     ? "focus:outline-primary-strawberryRed"
//                     : "focus:outline-primary-marineBlue"
//                 } mb-6 outline outline-1 outline-neutral-lightGray h-7 `}
//                 type="file"
//                 placeholder="city"
//               />
//               <span
//                 className={` jinput ${
//                   addharAlert ? "inline" : "hidden"
//                 } text-primary-strawberryRed font-[500] absolute top-[112px] right-[360px]`}
//               >
//                 This field is required
//               </span>
//             </div>
//           </div>

//           <div className="flex justify-between items-center pt-[20px] sm:pt-[35px]">
//             <button
//               onClick={() => navigate("/jet/guardiandetails")}
//               className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
//             >
//               Go back
//             </button>

//             <button
//               className="bg-primary lg:mr-16 text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
//               type="sumbit"
//             >
//               Next Step
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Documents;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [aadhar, setAadhar] = useState(null);

  const [photoAlert, setPhotoAlert] = useState(false);
  const [aadharAlert, setAadharAlert] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!photo) {
      setPhotoAlert(true);
    } else {
      setPhotoAlert(false);
    }
    if (!aadhar) {
      setAadharAlert(true);
    } else {
      setAadharAlert(false);
    }

    if (photo && aadhar) {
      const formData = new FormData();
      formData.append("photo", photo);
      formData.append("aadhar", aadhar);

      fetch("YOUR_BACKEND_URL/uploadDocuments", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Success:", data);
          navigate("/jet/educational");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was a problem uploading the documents.");
        });
    } else {
      alert("Please upload documents");
    }
  };

  return (
    <div className="flex w-full h-full sm:pl-[120px]">
      <div className="w-full sm:w-[60%] p-4  pl-[0px]">
        <h1 className="mt-16 text-3xl font-[800] mb-5 text-primary-marineBlue">
          Document Upload
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col relative space-y-4"
        >
          {/*-------------- Photo-------------- */}
          <div className="flex flex-wrap pt-4">
            <div className="flex flex-col w-[100%] mb-5">
              <label className="text-primary-marineBlue font-[500] mb-2">
                Upload Photo
              </label>
              <input
                onChange={(e) => setPhoto(e.target.files[0])}
                className={` jinput ${
                  photoAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray h-7`}
                type="file"
                accept="image/*"
              />
              <span
                className={`${
                  photoAlert ? "inline" : "hidden"
                } text-primary-strawberryRed font-[500] absolute top-[112px] right-[30px]`}
              >
                This field is required
              </span>
            </div>
            {/*-------------- Aadhar -------------- */}
            <div className="flex flex-col w-[100%] pt-5 sm:pt-0">
              <label className="text-primary-marineBlue font-[500] mb-2">
                Upload Aadhar
              </label>
              <input
                onChange={(e) => setAadhar(e.target.files[0])}
                className={` jinput ${
                  aadharAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } mb-6 outline outline-1 outline-neutral-lightGray h-7 `}
                type="file"
                accept="application/pdf,image/*"
              />
              <span
                className={`${
                  aadharAlert ? "inline" : "hidden"
                } text-primary-strawberryRed font-[500] absolute top-[112px] right-[360px]`}
              >
                This field is required
              </span>
            </div>
          </div>

          <div className="flex justify-between items-center pt-[20px] sm:pt-[35px]">
            <button
              onClick={() => navigate("/jet/guardiandetails")}
              className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
            >
              Go back
            </button>

            <button
              className="bg-primary lg:mr-16 text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
              type="submit"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Documents;

