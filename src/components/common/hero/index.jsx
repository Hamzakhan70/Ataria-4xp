import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Roles from "../../roles";

const Hero = ({ role, setRole }) => {
  const navigate = useNavigate();
  const handleRoleChange = (newRole) => {
    setRole(newRole);
    navigate(`/${newRole}`);
  };

  return (
    <div className="bg-white-500 relative top-0 ml-[7%] text-center">
      <Roles setRole={handleRoleChange} role={role} />
    </div>
  );
};

export default Hero;
