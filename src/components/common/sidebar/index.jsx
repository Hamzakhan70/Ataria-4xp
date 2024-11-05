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
  { name: "dashboard", icon: <FaUserShield /> },
  { name: "trade-portal", icon: <FaUserTie /> },
  { name: "ib-portal", icon: <FaUsers /> },
  { name: "market-analysis", icon: <FaBalanceScale /> },
  { name: "pamm-portal", icon: <FaBook /> },
  { name: "download-links", icon: <FaBuilding /> },
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
        className={`bg-white md: bg-none relative top-0 left-0 z-10 h-auto transform transition-transform duration-300 ease-in-out text-2xl
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    w-[30%] shadow-lg overflow-visible custom-scrollbar sm:translate-x-0 sm:w-[10%] lg:w-[7%] lg:text-2xl md:w-[10%] md:text-2xl md:p-2 md:m-1`}
      >
        {roleData.map(({ name, icon }) => (
          <div
            key={name}
            className={`relative px-3 py-3 cursor-pointer flex justify-center items-center lg:mt-4 group
        ${
          name === active
            ? "bg-gray-200 text-red-600 m-2 rounded-3xl"
            : "text-black"
        } 
        hover:bg-blue-500 rounded-3xl m-2 transition-colors duration-300 ease-in-out`}
            onClick={() => setRole(name)}
          >
            {icon}
            <div
              className="absolute hidden group-hover:block bg-blue-500 text-white font-semibold px-3 py-[6px] text-[13px]
          rounded shadow-lg left-full ml-2"
              style={{ whiteSpace: "nowrap" }}
            >
              {name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SideBar;
