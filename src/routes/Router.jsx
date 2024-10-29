import { createBrowserRouter } from "react-router-dom";
import Admin from "../components/admin/index.jsx";
import Client from "../components/client/index.jsx";
import Employee from "../components/employee/index.jsx";
import Complience from "../components/complience/index.jsx";
import TodoforRedux from "../components/todo-for-Redux/index.jsx";
import Root from "./Root.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/admin",
        element: <Admin />,
        index: true,
      },
      {
        path: "/client",
        element: <Client />,
      },
      {
        path: "/employee",
        element: <Employee />,
      },
      {
        path: "/complience",
        element: <Complience />,
      },
      {
        path: "/todo",
        element: <TodoforRedux />,
      },
    ],
  },
]);

export default router;
