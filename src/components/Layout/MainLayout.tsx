import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.tsx/Navbar";
import Footer from "../Footer/Footer";

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
