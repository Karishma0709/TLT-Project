// import React from "react";
// import { NavLink } from "react-router-dom";
// import { FaRegUser } from "react-icons/fa6";

// const Navbar = () => {
//   return (
//     <div className="bg-gray-100 bg-opacity-50 mx-14 my-3 hidden md:block rounded-md">
//       <nav className="container mx-auto flex justify-between items-center">
//         <div className="flex space-x-4 ps-5 gap-4">
//           <NavLink
//             className="text-red-500 font-semibold hover:text-red-500"
//             to="/"
//           >
//             Home
//           </NavLink>
//           <NavLink className="textWhite hover:text-red-500" to="/about">
//             About
//           </NavLink>
//           <NavLink
//             className="textWhite hover:text-red-500"
//             to="/study-Essentials"
//           >
//             Study Essentials
//           </NavLink>
//           <NavLink className="textWhite hover:text-red-500" to="/gallery">
//             Gallery
//           </NavLink>
//           <NavLink className="textWhite hover:text-red-500" to="/previous-year">
//             Previous Year Paper
//           </NavLink>
//           <div className="group relative z-10">
//             <button className="textWhite hover:text-red-500 w-32 text-left">
//               Mock Test
//             </button>
//             <div className="absolute top-full mt-2  bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
//               <NavLink
//                 className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
//                 to="/mockTest/subjectTest"
//               >
//                 Subject Test
//               </NavLink>
//               <NavLink
//                 className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
//                 to="/"
//               >
//                 Mini Mock
//               </NavLink>


           
//               </div>
//           </div>
//         </div>

//       <div className="text-3xl cursor-pointer">
//        <span><FaRegUser /></span>
//       </div>   

//       <div className="bg-red-500 text-white w-5 h-5 rounded-full p-1 items-center justify-center">
//         <button className="text-sm">Login</button>
//       </div>

//         <div className="relative flex space-x-4 items-center p-0 m-0 z-10">
//           <div className="group relative">
//             <button className="bg-primary text-white uppercase font-bold text-sm py-7 px-4 inline-block transition duration-300 ease-in-out hover:bg-red-600 m-0 rounded-e-md">
//               Registeration In
//             </button>
//             <div className="absolute top-full mt-2  bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
//               <NavLink
//                 className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
//                 to="/empowerment"
//               >
//                 Empowerment Batch
//               </NavLink>
//               <NavLink
//                 className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
//                 to="/fastTrack"
//               >
//                 Fast Track Batch
//               </NavLink>
//               <NavLink
//                 className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
//                 to="/jet/personalInfo"
//               >
//                 JET
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="bg-gray-100 bg-opacity-50 mx-14 my-3 hidden md:block rounded-md">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 ps-5 gap-4">
          <NavLink className="text-red-500 font-semibold hover:text-red-500" to="/">
            Home
          </NavLink>
          <NavLink className="textWhite hover:text-red-500" to="/about">
            About
          </NavLink>
          <NavLink className="textWhite hover:text-red-500" to="/study-essentials">
            Study Essentials
          </NavLink>
          <NavLink className="textWhite hover:text-red-500" to="/gallery">
            Gallery
          </NavLink>
          <NavLink className="textWhite hover:text-red-500" to="/previous-year">
            Previous Year Paper
          </NavLink>
          <div className="group relative z-10">
            <button className="textWhite hover:text-red-500 w-32 text-left">
              Mock Test
            </button>
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
                to="/mockTest/subjectTest"
              >
                Subject Test
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
                to="/"
              >
                Mini Mock
              </NavLink>
            </div>
          </div>
        </div>

    
     <div className="flex items-center space-x-4">
        <div className="text-2xl cursor-pointer">
        <NavLink>
          <FaRegUser />
        </NavLink>
        </div>
        <div className="bg-red-500 text-white w-20 h-8 rounded-full flex items-center justify-center hover:bg-red-800">

         <NavLink to="/login"><button className="text-lg">Login</button></NavLink>
        </div>
     </div>

        <div className="relative flex space-x-4 items-center p-0 m-0 z-10">
          <div className="group relative">
            <button className="bg-primary text-white uppercase font-bold text-sm py-7 px-4 inline-block transition duration-300 ease-in-out hover:bg-red-600 m-0 rounded-e-md">
              Registration In
            </button>
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
                to="/empowerment"
              >
                Empowerment Batch
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
                to="/fastTrack"
              >
                Fast Track Batch
              </NavLink>
              <NavLink
                className="block px-4 py-2 text-gray-800 hover:bg-red-500 hover:text-white transition-colors duration-300 ease-in-out font-semibold rounded-md"
                to="/jet/personalInfo"
              >
                JET
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

