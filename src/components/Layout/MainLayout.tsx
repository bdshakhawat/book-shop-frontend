import { Outlet } from "react-router-dom";
import Navbar from "../Navbar.tsx/Navbar";
import Footer from "../Footer/Footer";



const MainLayout = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-160px)]">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
