import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import NotFoundPage from "../components/404/NotFound";
import Home from "../components/Home/Home";
import AllBooks from "../Pages/Books/All Books/AllBooks";
import Reviews from "../components/Reviews/Reviews";

const router= createBrowserRouter([
    {
        path : '/',
        Component:MainLayout,
        errorElement:<NotFoundPage></NotFoundPage>,
        children:[
            {
                index: true,
                Component: Home
            },
            {
                path : "/allbooks",
                Component: AllBooks
            },
            {
                path : "/reviews",
                Component : Reviews
            }
        ]

    }
])

export default router