import React, { useState } from "react";
import loginIcon from "../assets/signup-icon.webp"; // Ensure this path and file name are correct
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import the eye icons
import { Link } from "react-router-dom"; // Import Link from React Router

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    profilePic: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.password === data.confirmPassword) {
      // Handle form submission logic here
      console.log(data);
      alert("You have successfully registered!");
    } else {
      alert("Passwords do not match. Please try again.");
    }
  };

  return (
    <section id="signup" className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container max-w-md mx-auto p-4">
        <div className="bg-white p-5 rounded-lg shadow-lg mx-auto flex flex-col items-center">
          <div className="w-24 h-24 relative overflow-hidden rounded-full mb-4">
            <img src={loginIcon} className="h-full w-full object-cover" alt="Sign Up Icon" />
            <label className="flex flex-col items-center bg-opacity-80 bg-slate-200 py-2 cursor-pointer text-center rounded-md">
            <span className="text-xs">Upload photo</span>
            <input type="file" className="hidden" />
          </label>
          </div>
          <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div className="w-full">
              <label className="block text-gray-700">Name :</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={data.name}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-gray-700">Email :</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={data.email}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
              />
            </div>

            <div className="relative w-full">
              <label className="block text-gray-700">Password :</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={data.password}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute inset-y-0 right-0 flex items-center px-3 mt-6 text-gray-500"
              >
                {showPassword ? (
                  <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <FaEye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>

            <div className="relative w-full">
              <label className="block text-gray-700">Confirm Password :</label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your password"
                value={data.confirmPassword}
                onChange={handleOnChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
              <button
                type="button"
                onClick={handleConfirmPasswordToggle}
                className="absolute inset-y-0 right-0 flex items-center px-3 mt-6 text-gray-500"
              >
                {showConfirmPassword ? (
                  <FaEyeSlash className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <FaEye className="h-5 w-5" aria-hidden="true" />
                )}
              </button>
            </div>

          

            <button
              type="submit"
              className="w-full py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-4 text-center">
            <p className="text-sm">
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline"> Login</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
