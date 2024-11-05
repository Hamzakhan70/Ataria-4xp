// import { FaHome } from "react-icons/fa";
// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// import "./style.css";
// const Breadcrumbs = () => {
//   const location = useLocation();
//   // Get path segments, splitting the path by "/"
//   const pathSegments = location.pathname.split("/").filter((path) => path);
//   // Map paths to labels
//   const breadcrumbNames = {
//     admin: "Admin",
//     client: "Client",
//     employee: "Employee",
//     compliance: "Compliance",
//     todo: "Todo List",
//   };

//   return (
//     <nav
//       aria-label="breadcrumb"
//       className="m-0 breadcrumb-container md:px-4 lg:px2"
//     >
//       <div>
//         <span className="text-black font-bold text-lg sm:font-bold md:text-2xl p-2">
//           {/* {pathSegments[0].charAt(0).toUpperCase() + pathSegments[0].slice(1)}{" "} */}
//           {pathSegments}
//         </span>
//       </div>
//       <div>
//         <ol className="breadcrumb">
//           <li>
//             <Link to="/admin">{<FaHome className="inline" />}</Link>
//           </li>
//           {pathSegments.map((segment, index) => {
//             const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
//             return (
//               <li key={index}>
//                 <Link to={path}>{`/${
//                   breadcrumbNames[segment] || segment
//                 }`}</Link>
//               </li>
//             );
//           })}
//         </ol>
//       </div>
//     </nav>
//   );
// };

// export default Breadcrumbs;
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
const Breadcrumbs = ({ role, activeTab }) => {
  return (
    <div className="flex flex-wrap justify-between items-center m-3">
      <header>
        <h1 className="text-2xl uppercase font-bold">
          {" "}
          {role.replace("-", " ")}
        </h1>
      </header>
      <nav className="flex space-x-2 text-gray-700 text-sm">
        <Link to="/" className="hover:underline ">
          {<FaHome className="inline mx-1 mb-1 text-blue-500" />}
          Home
        </Link>
        <span>/</span>
        <Link to={`/${role}`} className="hover:underline capitalize">
          {role.replace("-", " ")}
        </Link>
        {activeTab && (
          <>
            <span>/</span>
            <span className="capitalize">{activeTab}</span>
          </>
        )}
      </nav>
    </div>
  );
};

export default Breadcrumbs;
