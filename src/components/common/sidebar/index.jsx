import React, { useEffect, useState } from "react";
import "./sidebarStyle.css";

import { useNavigate } from "react-router-dom";
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
  { name: "Dashboard", icon: <FaUserShield /> },
  { name: "Trade-Portal", icon: <FaUserTie /> },
  { name: "IB-Portal", icon: <FaUsers /> },
  { name: "Market-Analysis", icon: <FaBalanceScale /> },
  { name: "PAMM-Portal", icon: <FaBook /> },
  { name: "Downloads-Links", icon: <FaBuilding /> },
];

const SideBar = ({ role: active, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    navigate(`/${active}`);
  }, [active]);

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
        className={`fixed top-0 left-0 h-full z-10  transform transition-transform duration-300 ease-in-out text-2xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          w-[30%] bg-white shadow-lg overflow-visible custom-scrollbar sm:translate-x-0 sm:w-[10%]  lg:w-[7%] lg:text-2xl md:w-[10%] md:text-2xl md:p-2 md:m-1`}
      >
        {roleData.map(({ name, icon }) => (
          <div
            key={name}
            className={`relative group px-3 py-3 cursor-pointer flex justify-center items-center lg:mt-4 
                      ${
                        name === active
                          ? "bg-gray-200 text-red-600 m-2 rounded-3xl"
                          : " text-black"
                      } 
                      hover:bg-blue-500 rounded-3xl m-2 transition-colors duration-300 ease-in-out`}
            onClick={() => setRole(name)}
          >
            {icon}
            <span
              className=" absolute left-[135px] lg:left-[72px] top-1 sm:left-[59px] md:left-[59px] transform -translate-y-1/2 bg-blue-500 text-white text-sm font-bold px-3 py-2 rounded-md
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <div className="text-white sm:font-bold font-extralight">
                {" "}
                {name}
              </div>
              {/* Tooltip arrow */}
              <span
                className="absolute left-[-12px] top-1/2 transform -translate-y-1/2 border-[6px] border-transparent border-r-red-500"
                style={{ borderRightColor: "#3b82f6" }}
              ></span>
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
