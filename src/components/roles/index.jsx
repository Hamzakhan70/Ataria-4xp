import React, { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
const userRoles = [
  "admin",
  "employees",
  "clientArea",
  "compliance",
  "accounts",
  "IBsection",
  "Crm",
  "fundmanagement",
  "emails",
  "support",
];

const Roles = ({ role: active, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="lg:hidden absolute left-[50%] top-1 z-20">
        {isOpen ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <FaBars className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        )}
      </div>
      {/* <div className=" w-full text-center text-black flex justify-center py-3  "> */}
      <div
        className={`w-full text-center pt-12 text-black flex flex-col z-0 justify-center py-3 transform transition-transform duration-300 ease-in-out
       ${isOpen ? "translate-y-0" : "-translate-y-full"} lg:flex-row lg:pt-4`}
      >
        {userRoles.map((role) => (
          <div
            key={role}
            className={`mx-2 px-4 py-2 cursor-pointer rounded-3xl border-2 hover:bg-blue-500 hover:text-white ${
              active === role ? "bg-blue-500 text-white " : ""
            }`}
            onClick={() => setRole(role)}
          >
            {role}
          </div>
        ))}
      </div>
    </>
  );
};

export default Roles;
