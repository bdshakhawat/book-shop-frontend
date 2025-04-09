// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar.tsx/Navbar";
// import Footer from "../Footer/Footer";

import { Outlet } from "react-router-dom";
import Home from "../Home/Home";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar.tsx/Navbar";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* <Home></Home> */}
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
