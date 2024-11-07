// Layout.js
import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../common/sidebar";
import NavBar from "../common/navbar";
import Footer from "../common/footer";
import Breadcrumbs from "../common/breadcrumbs";
import Hero from "../common/hero";
import "./style.css";
const Layout = ({ role, handleRoleChange, activeTab, setActiveTab }) => {
  // return (
  //   <div className="app-container">
  //     <SideBar role={role} setRole={handleRoleChange} />
  //     <div className="absolute top-0 ml-[7%] p-3 w-[-webkit-fill-available] h-auto overflow-auto">
  //       <NavBar />
  //       <Hero role={role} setRole={handleRoleChange} />
  //       <Breadcrumbs role={role} activeTab={activeTab} />
  //       <div className="content">
  //         <Outlet />
  //       </div>
  //       <Footer />
  //     </div>
  //   </div>
  // );
  // return (
  //   <div className="app-container min-h-screen flex flex-col">
  //     <SideBar role={role} setRole={handleRoleChange} />
  //     <div className="flex flex-col flex-grow ml-[7%] p-3 w-[-webkit-fill-available]">
  //       <NavBar />
  //       <Hero role={role} setRole={handleRoleChange} />
  //       <Breadcrumbs role={role} activeTab={activeTab} />
  //       <div className="content flex-grow">
  //         <Outlet />
  //       </div>
  //       <Footer className="mt-auto" />
  //     </div>
  //   </div>
  // );
  return (
    <>
      <div className="flex w-full h-auto">
        <div className="h-full w-[7%]">
          <SideBar role={role} setRole={handleRoleChange} />
        </div>
        <div className="h-full w-full overflow-hidden">
          <NavBar />
          <Hero role={role} setRole={handleRoleChange} />
          <Breadcrumbs
            role={role}
            activeTab={activeTab}
            setRole={handleRoleChange}
          />
          <Outlet />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
