import React from "react";

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
  return (
    <div className=" w-full text-center text-black flex justify-center py-3  ">
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
  );
};

export default Roles;
