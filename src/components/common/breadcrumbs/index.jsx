import { FaHome } from "react-icons/fa";
import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.css";
const Breadcrumbs = () => {
  const location = useLocation();
  // Get path segments, splitting the path by "/"
  const pathSegments = location.pathname.split("/").filter((path) => path);
  // Map paths to labels
  const breadcrumbNames = {
    admin: "Admin",
    client: "Client",
    employee: "Employee",
    compliance: "Compliance",
    todo: "Todo List",
  };

  return (
    <nav aria-label="breadcrumb" className="breadcrumb-container">
      <div>
        <span className="text-black font-bold text-2xl p-2">
          {/* {pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1)}{" "}
          Portal */}
          {pathSegments}
        </span>
      </div>
      <div>
        <ol className="breadcrumb">
          <li>
            <Link to="/admin">{<FaHome className="inline" />}</Link>
          </li>
          {pathSegments.map((segment, index) => {
            const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
            return (
              <li key={index}>
                <Link to={path}>{`/${
                  breadcrumbNames[segment] || segment
                }`}</Link>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
