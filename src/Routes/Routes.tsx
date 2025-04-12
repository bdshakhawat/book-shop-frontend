import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import NotFoundPage from "../components/404/NotFound";
import Home from "../components/Home/Home";
import AllBooks from "../Pages/Books/All Books/AllBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import DashboardLayout from "../components/Layout/DashboardLayout";
import { routeGenerator } from "../Utils/routesGenerator";
import AdminRoutes from "./AdminRoutes";
import UserRoutes from "./UserRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
     
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout></DashboardLayout>,
    children: routeGenerator(AdminRoutes)
  },
  {
    path: "/user",
    element: <DashboardLayout></DashboardLayout>,
    children: routeGenerator(UserRoutes)
  },
]);

export default router
// <<<<<<< HEAD
//     }
// ])

// export default router
// =======
// export default router;
// >>>>>>> 1050542ee0075b91f986e4c57eb93781bcdc3075
