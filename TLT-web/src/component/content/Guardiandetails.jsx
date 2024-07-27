// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import PlansContext from "../context/PlansContext";

// const SelectPlan = () => {
//   const navigate = useNavigate();

//   const [guardianname, setGuardianname] = useState("");
//   const [guardianpro, setGuardianpro] = useState("");

//   const [guardiannameAlert, setguardiannameAlert] = useState(false);
//   const [guardianproAlert, setguardianproAlert] = useState(false);
//   const handleToggleYearly = () => {
//     setToggleYearly((prev) => !prev);
//   };

//   const handleSumbit = (event) => {
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
//       navigate("/addons");
//     } else {
//       alert("Please choose a plan");
//     }
//   };

//   return (
//     <div className=" flex justify-center sm:basis-[60%] w-[250px] sm:w-[100%] pr-[80px] h-[100%] sm:pr-[80px]">
//       <h1 className="mt-10 text-3xl font-[800] mb-2 text-primary-marineBlue">
//         Guardian Details
//       </h1>

//       <form onSubmit={handleSumbit} className="flex flex-col relative">
//         {/*-------------- State-------------- */}
//         <div className="flex sm:flex-nowrap  flex-wrap pr-20">
//           <div className="flex flex-col justify-center sm:w-[100%]  ">
//             <label className="text-primary-marineBlue font-[500] mb-2">
//               Guardian Name
//             </label>
//             <input
//               onChange={(e) => setGuardianname(e.target.value)}
//               className={`${
//                 guardiannameAlert
//                   ? "focus:outline-primary-strawberryRed"
//                   : "focus:outline-primary-marineBlue"
//               } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
//               type="text"
//               placeholder="State"
//             />
//             <span
//               className={`${
//                 guardiannameAlert ? "inline" : "hidden"
//               } text-primary-strawberryRed font-[500] absolute top-[72px] right-[30px]`}
//             >
//               This field is required
//             </span>
//           </div>
//           {/*--------------City-------------- */}
//           <div className="flex flex-col w-[100%]">
//             <label className="text-primary-marineBlue font-[500] mb-2">
//               Guardians Profession:
//             </label>
//             <input
//               onChange={(e) => setGuardianpro(e.target.value)}
//               className={`${
//                 guardianproAlert
//                   ? "focus:outline-primary-strawberryRed"
//                   : "focus:outline-primary-marineBlue"
//               } mb-6 outline outline-1 outline-neutral-lightGray rounded-[4px] p-3 `}
//               type="text"
//               placeholder="city"
//             />
//             <span
//               className={`${
//                 guardianproAlert ? "inline" : "hidden"
//               } text-primary-strawberryRed font-[500] absolute top-[72px] right-[360px]`}
//             >
//               This field is required
//             </span>
//           </div>
//         </div>

//         <div className="flex justify-between items-center">
//           <button
//             onClick={() => navigate("/")}
//             className="text-neutral-coolGray font-[500] capitalize transition-all duration-300 hover:text-primary-marineBlue cursor-pointer"
//           >
//             Go back
//           </button>

//           <button
//             className="bg-primary-marineBlue text-white border-0 rounded-md px-6 py-3 transition-all duration-300 hover:opacity-75"
//             type="sumbit"
//           >
//             Next Step
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SelectPlan;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Guardiandetails = () => {
  const navigate = useNavigate();

  const [guardianname, setGuardianname] = useState("");
  const [guardianpro, setGuardianpro] = useState("");

  const [guardiannameAlert, setguardiannameAlert] = useState(false);
  const [guardianproAlert, setguardianproAlert] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (guardianname === "") {
      setguardiannameAlert(true);
    } else {
      setguardiannameAlert(false);
    }
    if (guardianpro === "") {
      setguardianproAlert(true);
    } else {
      setguardianproAlert(false);
    }
    if (guardianname !== "" && guardianpro !== "") {
      navigate("/jet/documents");
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
                className={` jinput ${
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
                className={` jinput ${
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
