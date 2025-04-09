// import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar.tsx/Navbar";
// import Footer from "../Footer/Footer";

import Home from "../Home/Home";

const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Home></Home>
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default MainLayout;
