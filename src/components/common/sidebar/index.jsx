import React, { useState } from "react";
import "./sidebarStyle.css";
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
  FaTimes,
} from "react-icons/fa";
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
            className="text-2xl cursor-pointer mt-[2%]"
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>
      <div
        className={`fixed top-0 left-0 h-full z-10 transform transition-transform duration-300 ease-in-out text-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-[30%] bg-white shadow-lg border-r-2 border-black  overflow-y-auto custom-scrollbar sm:translate-x-0 sm:w-[5%]  lg:w-[7%] lg:text-2xl md:w-[10%] md:text-2xl md:p-2 md:m-1`}
      >
        {roleData.map(({ name, icon }) => (
          <div
            key={name}
            className={`px-3 py-3 cursor-pointer flex justify-center items-center lg:mt-12 
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
