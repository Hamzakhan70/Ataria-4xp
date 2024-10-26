import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Roles from "../../roles";

const Hero = ({ role, setRole }) => {
  const navigate = useNavigate();
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    //   navigate(`/${newRole}`);  //it was used before now i change
  };
  return (
    <div className=" bg-white-500 lg:ml-[7%] text-center">
      <Roles setRole={handleRoleChange} role={role} />
    </div>
  );
};

export default Hero;
