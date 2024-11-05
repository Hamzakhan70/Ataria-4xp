import React from "react";
import { Link } from "react-router-dom";
import {
  FaSearch,
  FaComments,
  FaVideo,
  FaChartLine,
  FaBullseye,
  FaBell,
  FaCog,
  FaSignInAlt,
  // CiLogout,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <div className="relative  top-0 flex flex-col items-center justify-between space-y-3 lg:flex-row lg:mt-1">
      <div className="flex items-center ">
        <Link to="/" className="w-18 h-12 bg-white">
          <img
            src="https://front.ataria.tech/assets/images/logo/logo.png"
            alt="4xPortal Logo"
            className="w-18 h-12"
          />
        </Link>
      </div>

      <div className="flex space-x-4">
        <button className="bg-red-500 text-white px-6 py-2 rounded hover:bg-blue-500">
          IB SECTION
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-red-500">
          Accounts
        </button>
      </div>

      <div className="flex items-center bg-white rounded  px-4 py-1 border-4 hover:border-blue-300 ">
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none ml-2 text-black"
        />
        <FaSearch className="text-gray-400" />
      </div>

      <div className="flex space-x-1 lg:space-x-4 lg:px-4">
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
        <div className="p-2 z-10 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer group ">
          <div className="relative inline-block">
            <div className="relative transition duration-500 cursor-pointer">
              <div className="absolute bottom-5 left-2 flex items-center justify-center h-6 w-6 bg-red-600 text-white rounded-full text-xs border-2 border-solid border-white">
                2
              </div>
              <FaBell className="text-white hover:text-red-600" />
              {/* Dropdown Box */}
              <div className="text-black absolute left-[-10rem] md:left-[-19rem] mt-1 w-40 md:w-96 h-0 overflow-y-scroll bg-red-200 rounded-lg shadow-lg transition-all duration-500 group-hover:h-[60vh]">
                <div className="relative">
                  {/* Empty State */}
                  <div className="flex flex-col items-center py-10 text-center">
                    <i className="fas fa-child text-8xl text-black"></i>
                    <div className="text-lg">
                      Looks Like you're all caught up!
                    </div>
                  </div>
                  {/* Notifications List */}
                  <div className="absolute top-0 w-full bg-gray-200">
                    {/* Individual Notification */}
                    {[...Array(5)].map((_, index) => (
                      <div
                        key={index}
                        className="flex items-start p-6 transition duration-500 bg-gray-200 hover:bg-gray-400 border-b border-red-600"
                      >
                        <div className="mr-4">
                          <img
                            className="w-16 h-16 rounded-full object-cover"
                            src="https://via.placeholder.com/75"
                            alt="Profile"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="text-lg">
                            User liked your post: "Pure CSS notification box"
                          </div>
                          <div className="text-gray-500 text-sm">
                            11/7 - 2:30 pm
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer">
          <FaCog />
        </div>
        <div className="p-3 z-10 bg-black text-white rounded-full hover:bg-blue-500 transition duration-300 cursor-pointer group relative">
          <FaSignInAlt />
          <div className="text-black absolute left-[-5rem] md:left-[-5rem] mt-1 w-10 md:w-66 hidden bg-gray-300 rounded-3xl shadow-lg transition-all duration-500 group-hover:block">
            {/* <div className="relative"> */}
            <div className="absolute top-0 w-[8rem] p-4 bg-gray-200 flex items-center rounded-xl">
              <button className="flex items-center  gap-1 hover:bg-blue-500 p-4">
                <IoMdLogOut className=" text-black " />
                Logout
              </button>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
