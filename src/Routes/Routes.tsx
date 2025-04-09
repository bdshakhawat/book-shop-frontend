import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import NotFoundPage from "../components/404/NotFound";
import Home from "../components/Home/Home";

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

            }
        ]

    }
])

export default router