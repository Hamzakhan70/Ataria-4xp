import React, { useState, useEffect } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import "./roleStyle.css";
import "./roles";
import ScrollBar from "./scrollBar";
import { Link } from "react-router-dom";
const userRoles = [
  "dashboard",
  "trade-portal",
  "ib-portal",
  "market-analysis",
  "pamm-portal",
  "download-links",
  "todo",
];
const Roles = ({ role: active, setRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const toggleScrollbar = () => {
    setIsScroll(!isScroll);
  };
  useEffect(() => {
    console.log(isOpen);
  }, [isOpen]);
  return (
    <div className="px-[2%]">
      <div className="flex items-center justify-center ">
        {isOpen ? (
          <FaMinus
            className="text-2xl cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaPlus
            className="text-2xl cursor-pointer "
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>
      <div
        className={`
        ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-[278px] absolute scale-90 pointer-events-none"
          // isOpen ? "animate-slide-in" : "animate-slide-out"
        } flex flex-wrap justify-center items-center transform transition-all duration-[1000ms] ease-in-out
       `}
      >
        {userRoles.map((role) => (
          <div
            key={role}
            className={`my-2 mx-2 px-4 py-2 cursor-pointer rounded-3xl border-2 hover:bg-blue-500 hover:text-white ${
              active === role ? "bg-blue-500 text-white " : ""
            } xl:mx-3  2xl:mx-5 2xl:px-5`}
            onClick={() => setRole(role)}
          >
            {/* <Link to={role}>{role}</Link> */}
            {role}
          </div>
        ))}
      </div>
      {/* <div
        className={`w-[full] text-center pt-12 text-black flex flex-col z-10 justify-center py-3 transform transition-transform duration-300 ease-in-out
       ${
         isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
       } lg:flex-row flex-wrap lg:pt-4 lg:mt-16 xl:mt-15 lg:top-[4rem] relative lg:opacity-100 `}
      >
        {userRoles.map((role) => (
          <div
            key={role}
            className={`my-2 mx-2 px-4 py-2 cursor-pointer rounded-3xl border-2 hover:bg-blue-500 hover:text-white ${
              active === role ? "bg-blue-500 text-white " : ""
            } xl:mx-3  2xl:mx-5 2xl:px-5`}
            onClick={() => setRole(role)}
          >
            {role}
          </div>
        ))}
      </div> */}

      {/* <div
        className={`relative flex flex-col justify-center right-[-80%] mt-[36%] bg-slate-300  transform transition-transform duration-300 ease-in-out
       ${
         isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
       } `}
      >
        {userRoles.map((role) => (
          <div
            key={role}
            className={`my-2 mx-2 px-4 py-2 cursor-pointer rounded-3xl border-2 hover:bg-blue-500 hover:text-white ${
              active === role ? "bg-blue-500 text-white " : ""
            } xl:mx-3  2xl:mx-5 2xl:px-5`}
            onClick={() => setRole(role)}
          >
            {role}
          </div>
        ))}
      </div> */}

      {/* scrollbar trying */}

      <div
        className="sm:block fixed top-[-50px] flex z-30 md:block lg:hidden xl:hidden transition-all duration-300"
        id="hero"
      >
        {isScroll ? (
          <FaMinus
            className="text-2xl cursor-pointer"
            onClick={toggleScrollbar}
          />
        ) : (
          <FaPlus
            className="text-2xl cursor-pointer"
            onClick={toggleScrollbar}
          />
        )}
      </div>
      <div
        className={`bg-slate-400 w-full h-screen fixed top-0 left-0 sm:block md:block lg:hidden xl:hidden transform transition-transform duration-300 ease-in-out
    ${isScroll ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"}
  `}
      >
        {userRoles.map((role) => (
          <div
            key={role}
            className={`${active === role ? "bg-blue-500 text-white " : ""}`}
            onClick={() => setRole(role)}
          >
            {role}
          </div>
        ))}
      </div>

      {/* <ScrollBar isScroll={isScroll} userRoles={userRoles} active={active} /> */}

      {/* this div is working for scroll  */}

      {/* <div
        className="sm:block fixed top-[-50px] flex md:hidden lg:hidden xl:hidden transition-all duration-300"
        id="hero"
      >
        {userRoles.map((role) => (
          <div
            key={role}
            className={`mx-1 px-1 py-1 cursor-pointer rounded-3xl border-2 hover:bg-blue-500 hover:text-white ${
              active === role ? "bg-blue-500 text-white " : ""
            }`}
            onClick={() => setRole(role)}
          >
            {role}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Roles;
