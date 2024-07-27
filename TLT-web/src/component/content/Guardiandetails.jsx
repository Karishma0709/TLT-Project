// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Guardiandetails = () => {
//   const navigate = useNavigate();

//   const [guardianname, setGuardianname] = useState("");
//   const [guardianpro, setGuardianpro] = useState("");

//   const [guardiannameAlert, setguardiannameAlert] = useState(false);
//   const [guardianproAlert, setguardianproAlert] = useState(false);

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     if (guardianname === "") {
//       setguardiannameAlert(true);
//     } else {
//       setguardiannameAlert(false);
//     }
//     if (guardianpro === "") {
//       setguardianproAlert(true);
//     } else {
//       setguardianproAlert(false);
//     }
//     if (guardianname !== "" && guardianpro !== "") {
//       navigate("/jet/documents");
//     }
//   };

//   return (
//     <div className="flex row w-full h-full sm:pl-[120px]">
//       <div className="w-full sm:w-[60%] p-4 mb-10">
//         <h1 className="mt-10 text-3xl font-bold mb-5 text-primary-marineBlue">
//           Guardian Details
//         </h1>

//         <form onSubmit={handleSubmit} className="flex flex-col">
//           <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
//             {/* Guardian Name */}
//             <div className="flex flex-col w-full sm:w-[50%]">
//               <label className="text-primary-marineBlue font-medium mb-2">
//                 Guardian Name
//               </label>
//               <input
//                 onChange={(e) => setGuardianname(e.target.value)}
//                 className={` jinput ${
//                   guardiannameAlert
//                     ? "focus:outline-primary-strawberryRed"
//                     : "focus:outline-primary-marineBlue"
//                 } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
//                 type="text"
//                 placeholder="Guardian Name"
//               />
//               {guardiannameAlert && (
//                 <span className="text-primary-strawberryRed font-medium">
//                   This field is required
//                 </span>
//               )}
//             </div>
//             {/* Guardian Profession */}
//             <div className="flex flex-col w-full sm:w-[50%]">
//               <label className="text-primary-marineBlue font-medium mb-2">
//                 Guardian Profession
//               </label>
//               <input
//                 onChange={(e) => setGuardianpro(e.target.value)}
//                 className={` jinput ${
//                   guardianproAlert
//                     ? "focus:outline-primary-strawberryRed"
//                     : "focus:outline-primary-marineBlue"
//                 } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
//                 type="text"
//                 placeholder="Guardian Profession"
//               />
//               {guardianproAlert && (
//                 <span className="text-primary-strawberryRed font-medium">
//                   This field is required
//                 </span>
//               )}
//             </div>
//           </div>

//           <div className="flex justify-between items-center">
//             <button
//               onClick={() => navigate("/jet/personalInfo")}
//               className="text-neutral-coolGray font-medium capitalize transition-all duration-300 hover:text-primary-marineBlue"
//             >
//               Go back
//             </button>

//             <button
//               className="bg-primary text-white  lg:mr-8 border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
//               type="submit"
//             >
//               Next Step
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Guardiandetails;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../Common/SummaryAPI";

const Guardiandetails = () => {
  const navigate = useNavigate();

  const [guardianname, setGuardianname] = useState("");
  const [guardianpro, setGuardianpro] = useState("");

  const [guardiannameAlert, setGuardiannameAlert] = useState(false);
  const [guardianproAlert, setGuardianproAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    let valid = true;
    if (guardianname === "") {
      setGuardiannameAlert(true);
      valid = false;
    } else {
      setGuardiannameAlert(false);
    }
    if (guardianpro === "") {
      setGuardianproAlert(true);
      valid = false;
    } else {
      setGuardianproAlert(false);
    }

    if (valid) {
      // Make API call to save guardian details
      fetch(SummaryApi["saveGuardianDetails"].url, {
        method: SummaryApi["saveGuardianDetails"].method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ guardianname, guardianpro }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        navigate("/jet/documents");
      })
      .catch((error) => {
        console.error('Error:', error);
        alert("There was a problem saving the guardian details.");
      });
    }
  };

  return (
    <div className="flex row w-full h-full sm:pl-[120px]">
      <div className="w-full sm:w-[60%] p-4 mb-10">
        <h1 className="mt-10 text-3xl font-bold mb-5 text-primary-marineBlue">
          Guardian Details
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="flex flex-wrap sm:flex-nowrap gap-4 mb-6">
            {/* Guardian Name */}
            <div className="flex flex-col w-full sm:w-[50%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                Guardian Name
              </label>
              <input
                onChange={(e) => setGuardianname(e.target.value)}
                className={`jinput ${
                  guardiannameAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Guardian Name"
              />
              {guardiannameAlert && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
            {/* Guardian Profession */}
            <div className="flex flex-col w-full sm:w-[50%]">
              <label className="text-primary-marineBlue font-medium mb-2">
                Guardian Profession
              </label>
              <input
                onChange={(e) => setGuardianpro(e.target.value)}
                className={`jinput ${
                  guardianproAlert
                    ? "focus:outline-primary-strawberryRed"
                    : "focus:outline-primary-marineBlue"
                } outline outline-1 outline-neutral-lightGray rounded-md p-3 mb-1`}
                type="text"
                placeholder="Guardian Profession"
              />
              {guardianproAlert && (
                <span className="text-primary-strawberryRed font-medium">
                  This field is required
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={() => navigate("/jet/personalInfo")}
              className="text-neutral-coolGray font-medium capitalize transition-all duration-300 hover:text-primary-marineBlue"
            >
              Go back
            </button>

            <button
              className="bg-primary text-white  lg:mr-8 border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
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

export default Guardiandetails;
