import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from 'react-icons/fi';  // Importing the logout icon
import Logo from "../assets/TLTlogo.png"

const Header = () => {
  const navigate = useNavigate();

  // Logout logic
  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('authToken');  // or sessionStorage.removeItem('authToken');
    
    // Redirect to the login page after logout
    navigate('/Login');
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center shadow-md">
      {/* Left Side: Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="h-10 w-10" />
        
      </div>

      {/* Right Side: Logout Icon */}
      <div className="cursor-pointer" onClick={handleLogout}>
        <FiLogOut className="text-white text-3xl hover:text-red-500 transition-all" />
      </div>
    </header>
  );
};

export default Header;
