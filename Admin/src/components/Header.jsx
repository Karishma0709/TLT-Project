import React from "react";
import { FaAlignJustify } from "react-icons/fa";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <FaAlignJustify className="text-2xl cursor-pointer hover:text-gray-400" />
      </div>

      <div className="flex items-center space-x-4">
        <MdLogout className="text-2xl cursor-pointer hover:text-gray-400" />
      </div>
    </header>
  );
};

export default Header;
