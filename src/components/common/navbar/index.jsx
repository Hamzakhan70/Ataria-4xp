import React from "react";
import {
  FaSearch,
  FaComments,
  FaVideo,
  FaChartLine,
  FaBullseye,
  FaBell,
  FaCog,
  FaSignInAlt,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="relative top-0 ml-[7%] flex items-center justify-between px-4 py-1  ">
      <div className="flex items-center ">
        <img
          src="https://front.ataria.tech/assets/images/logo/logo.png"
          alt="4xPortal Logo"
          className="w-18 h-12 bg-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-blue-500">
          IB SECTION
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-red-500">
          Accounts
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-white rounded  px-4 py-1 border-2 ">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 text-black"
        />
        <FaSearch className="text-gray-400" />
      </div>

      {/* Icons Section */}
      <div className="flex space-x-4">
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaComments />
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaVideo />
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaChartLine />
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaBullseye />
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaBell />
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaCog />
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaSignInAlt />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
