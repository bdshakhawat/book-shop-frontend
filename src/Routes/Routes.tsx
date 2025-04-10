import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import NotFoundPage from "../components/404/NotFound";
import Home from "../components/Home/Home";
import AllBooks from "../Pages/Books/All Books/AllBooks";
import Reviews from "../components/Reviews/Reviews";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import About from "../Pages/About/About";
import Success from "../Pages/Payment/Success";
import Failure from "../Pages/Payment/Failure";
import { BookDetailsSkeleton } from "../components/BookDetailsSkeleton/BookDetailsSkeleton";

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
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/products/:productId",
        element: <BookDetailsSkeleton></BookDetailsSkeleton>,
      },
      {
        path: "/sucess",
        element: <Success />,
      },
      {
        path: "/fail",
        element: <Failure />,
      },
    ],
  },
]);

export default router;
