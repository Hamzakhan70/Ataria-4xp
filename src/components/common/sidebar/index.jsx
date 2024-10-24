import React, { useState } from "react";

import {
  FaUserShield,
  FaUserTie,
  FaUsers,
  FaBalanceScale,
  FaBook,
  FaBuilding,
  FaChartLine,
  FaEnvelope,
  FaLifeRing,
  FaBars,
  FaTimes, // Cross icon for closing the menu
} from "react-icons/fa";
import { ImCross } from "react-icons/im";
const roleData = [
  { name: "admin", icon: <FaUserShield /> },
  { name: "employees", icon: <FaUserTie /> },
  { name: "clientArea", icon: <FaUsers /> },
  { name: "compliance", icon: <FaBalanceScale /> },
  { name: "accounts", icon: <FaBook /> },
  { name: "IBsection", icon: <FaBuilding /> },
  { name: "Crm", icon: <FaChartLine /> },
  { name: "fundmanagement", icon: <FaChartLine /> },
  { name: "emails", icon: <FaEnvelope /> },
  { name: "support", icon: <FaLifeRing /> },
];

const SideBar = ({ role: active, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="sm:hidden absolute left-4 top-4 z-20">
        {isOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>
      <div
        className={`fixed top-0 left-0 h-full z-10 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          sm:translate-x-0 sm:w-[5%] w-[70%] bg-white shadow-lg border-r-2 border-black text-2xl `}
      >
        {roleData.map(({ name, icon }) => (
          <div
            key={name}
            className={`px-3 py-5 cursor-pointer flex justify-center items-center mt-12
                      ${
                        name === active
                          ? "bg-gray-200 text-red-600 m-2 rounded-3xl"
                          : " text-black"
                      } 
                      hover:bg-blue-500 rounded-3xl m-2 transition-colors duration-300 ease-in-out `}
            onClick={() => setRole(name)}
          >
            {icon}
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
