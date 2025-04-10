import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import NotFoundPage from "../components/404/NotFound";
import Home from "../components/Home/Home";
import { BookDetailsSkeleton } from "../components/BookDetailsSkeleton/BookDetailsSkeleton";
import Success from "../Pages/Payment/Success";
import Failure from "../Pages/Payment/Failure";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products/:productId",
        element: <BookDetailsSkeleton />,
      },
      {
        path: "/success",
        element: <Success />,
      },
      {
        path: "/failed",
        element: <Failure />,
      },
    ],
  },
]);

export default router;
