import React from "react";

const ScrollBar = ({ isScroll, userRoles, active }) => {
  return (
    <div>
      <div
        className={`bg-slate-400 w-100% sm:block md:hidden lg:hidden xl:hidden transform transition-transform duration-300 ease-in-out
       ${
         isScroll ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
       }`}
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
    </div>
  );
};

export default ScrollBar;
