import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../components/common/sidebar";
import NavBar from "../components/common/navbar";
import Hero from "../components/common/hero";
import Footer from "../components/common/footer";
const Root = () => {
  const [role, setRole] = useState("admin");

  return (
    <div>
      <SideBar role={role} setRole={setRole} />
      <NavBar />
      <Hero role={role} setRole={setRole} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
