import React, { useState } from 'react';
import {
  FaUserCircle,
  FaFileAlt,
  FaFileUpload,
  FaRegFilePdf,
  FaList,
  FaCog,
  FaBell,
  FaExclamationTriangle,
  FaTachometerAlt,
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header';

const Sidebar = () => {
  // State for managing dropdowns
  const [isFormsDropdownOpen, setIsFormsDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);

  return (
    <div className="min-h-screen md:flex hidden bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-red-600 w-64 customShadow text-white">
        {' '}
        {/* Fixed width */}
        {/* Profile Section */}
        <div className="h-40 flex flex-col items-center justify-center bg-red-700 border-b border-red-500">
          <div className="text-6xl cursor-pointer relative flex justify-center mb-2">
            <FaUserCircle className="rounded-full bg-white p-1 text-red-700" />
          </div>
          <p className="capitalize text-lg font-semibold">Admin</p>
          <p className="text-xs text-gray-200">Administrator</p>
        </div>
        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Link
            to="dashboardcards"
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-all hover:shadow-md"
          >
            <FaTachometerAlt />
            <span>Dashboard</span>
          </Link>
          {/* Forms Dropdown */}
          <div>
            <div
              onClick={() => setIsFormsDropdownOpen(!isFormsDropdownOpen)}
              className="flex justify-between items-center px-4 py-2 bg-red-500 rounded-lg cursor-pointer hover:bg-red-400 transition-all hover:shadow-md"
            >
              <span className="flex items-center space-x-2">
                <FaFileAlt />
                <span>Forms</span>
              </span>
              {isFormsDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {isFormsDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="py-paper"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileAlt />
                  <span>Previous Year Paper</span>
                </Link>
                <Link
                  to="mpcj-form"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileAlt />
                  <span>MPCJ Form</span>
                </Link>
                <Link
                  to="FastTrackForm"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileAlt />
                  <span>FastTrack Form Data</span>
                </Link>
                <Link
                  to="EmpowermentAdmin"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileAlt />
                  <span>Empowerment Admin</span>
                </Link>
                <Link
                  to="tpm-form"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileAlt />
                  <span>TPM Form</span>
                </Link>
                <Link
                  to="jetformdetail"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileAlt />
                  <span>Jet Form Details</span>
                </Link>
               
              </div>
            )}
          </div>

          {/* Product Upload Dropdown */}
          <div>
            <div
              onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
              className="flex justify-between items-center px-4 py-2 bg-red-500 rounded-lg cursor-pointer hover:bg-red-400 transition-all hover:shadow-md"
            >
              <span className="flex items-center space-x-2">
                <FaFileUpload />
                <span>Product Upload</span>
              </span>
              {isProductDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {isProductDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="SyllabusUpload"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaFileUpload />
                  <span>Upload Syllabus</span>
                </Link>
                <Link
                  to="Unpaid"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaList />
                  <span>Unpaid Products</span>
                </Link>
                <Link
                  to="Prevyearpaperpdf"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaRegFilePdf />
                  <span>Previous Year Paper Pdf</span>
                </Link>
                {/* <Link
                  to="quiz-questions"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaRegFilePdf />
                  <span>Update Quiz Questions</span>
                </Link> */}
                <Link
                  to="addMpcjProduct"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md text-white"
                >
                  <FaRegFilePdf />
                  <span>Add Mpcj Product</span>
                </Link>
              </div>
            )}
          </div>

          {/* Other links */}
          <Link
                  to="quiz-questions"
                             className="flex items-center space-x-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-all hover:shadow-md"
                >
                  <FaRegFilePdf />
                  <span>Update Quiz Questions</span>
                </Link>
          <Link
            to="update-headline"
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-all hover:shadow-md"
          >
            <FaExclamationTriangle />
            <span>Alerts</span>
          </Link>
          <Link
            to="notification"
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-all hover:shadow-md"
          >
            <FaBell />
            <span>Notification</span>
          </Link>
          <Link
            to="asminRegi"
            className="flex items-center space-x-2 px-4 py-2 bg-red-500 rounded-lg hover:bg-red-400 transition-all hover:shadow-md"
          >
            <FaCog />
            <span>AsminRegi</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6 bg-gray-50">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
