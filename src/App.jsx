import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Admin from "./components/admin";
import Client from "./components/client";
import Complience from "./components/complience";
import Employee from "./components/employee";
import SideBar from "./components/common/sidebar";
import NavBar from "./components/common/navbar";
import Hero from "./components/common/hero";

const App = () => {
  const [role, setRole] = useState("admin");

  return (
    <Router>
      <div>
        <SideBar role={role} setRole={setRole} />
        {/* /  <NavBar /> */}
        {/* <Hero role={role} setRole={setRole} /> */}

        <div className="main-content ml-[7%]">
          {" "}
          <Routes>
            <Route path="/" element={<Navigate to="/admin" />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/client" element={<Client />} />
            <Route path="/employee" element={<Employee />} />
            <Route path="/complience" element={<Complience />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
