// import React, { useState, Suspense, lazy } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   RouterProvider,
// } from "react-router-dom";
// const Admin = lazy(() => import("./components/admin"));
// const Client = lazy(() => import("./components/client"));
// const Complience = lazy(() => import("./components/complience"));
// const Employee = lazy(() => import("./components/employee/index"));
// const TodoforRedux = lazy(() => import("./components/todo-for-Redux"));
// // import Admin from "./components/admin";
// // import Client from "./components/client";
// // import Complience from "./components/complience";
// // import Employee from "./components/employee/index";
// // import TodoforRedux from "./components/todo-for-Redux";
// import SideBar from "./components/common/sidebar";
// import NavBar from "./components/common/navbar";
// import Hero from "./components/common/hero";
// import "./App.css";
// import { Provider } from "react-redux";
// import { store } from "./store";
// import router from "./routes/Router";
// import Breadcrumbs from "./components/common/breadcrumbs";
// const LoadingSpinner = () => (
//   <div className="loading-spinner">
//     <span className="dot"></span>
//     <span className="dot"></span>
//     <span className="dot"></span>
//   </div>
// );
// const handleRoleChange = (newRole) => {
//   setLoading(true);
//   setRole(newRole);
// };
// useEffect(() => {
//   setLoading(false);
// }, [role]);
// const App = () => {
//   const [role, setRole] = useState("admin");
//   return (
//     <Provider store={store}>
//       <Router>
//         <div>
//           <SideBar role={role} setRole={handleRoleChange} />
//           <NavBar />
//           <Hero role={role} setRole={handleRoleChange} />
//           <div className="main-content ml-[7%]">
//             {" "}
//             <Breadcrumbs /> {/* Add Breadcrumbs here */}
//             <Suspense fallback={<LoadingSpinner />}>
//               <Routes>
//                 <Route path="/" element={<Navigate to="/admin" />} />
//                 <Route path="/admin" element={<Admin />} />
//                 <Route path="/client" element={<Client />} />
//                 <Route path="/employee" element={<Employee />} />
//                 <Route path="/compliance" element={<Complience />} />
//                 <Route path="/todo" element={<TodoforRedux />} />
//               </Routes>
//             </Suspense>
//           </div>
//         </div>
//       </Router>
//       {/* <RouterProvider router={router} /> */}
//     </Provider>
//   );
// };

// export default App;

import "./App.css";
import React, { useState, Suspense, lazy, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
const TradePortal = lazy(() => import("./components/tradeportal/index"));
const Admin = lazy(() => import("./components/admin"));
const TodoforRedux = lazy(() => import("./components/todo-for-Redux"));
import SideBar from "./components/common/sidebar";
import NavBar from "./components/common/navbar";
import Hero from "./components/common/hero";
import Breadcrumbs from "./components/common/breadcrumbs";
import IBPortal from "./components/ib-portal";
import { Provider } from "react-redux";
import { store } from "./store";
import PAMMPORTAL from "./components/pamm-portal";
import DownloadLinks from "./components/download-links";
import MarketAnalysis from "./components/market-analysis";

const LoadingSpinner = () => (
  <div className="loading-overlay">
    <div className="loading-spinner">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
  </div>
);

const App = () => {
  const [role, setRole] = useState("dashboard");
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (newRole) => {
    setLoading(true);
    setRole(newRole);
  };

  useEffect(() => {
    setLoading(false);
  }, [role]);

  return (
    <Provider store={store}>
      <Router>
        <div>
          <SideBar role={role} setRole={handleRoleChange} />
          <div className="absolute top-0 ml-[7%] p-3 w-[-webkit-fill-available]">
            <NavBar />
            <Hero role={role} setRole={handleRoleChange} />
            <Breadcrumbs />
            <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />

            {/* {loading ? (
              <LoadingSpinner />
            ) : (
              <Suspense fallback={<LoadingSpinner />}> */}
               
                  <Route path="/dashboard" element={<Admin />} />
                  <Route path="/trade-portal" element={<TradePortal />} />
                  <Route path="/ib-portal" element={<IBPortal />} />
                  <Route path="/market-analysis" element={<MarketAnalysis />} />
                  <Route path="/pamm-portal" element={<PAMMPORTAL />} />
                  <Route path="/download-links" element={<DownloadLinks />} />
                  <Route path="/todo" element={<TodoforRedux />} />
              {/* </Suspense>
            )} */}
                </Routes>

          </div>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
