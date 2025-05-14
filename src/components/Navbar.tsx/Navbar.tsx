import { Link, NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { toast } from "sonner";
import { LogOut } from "lucide-react";
import { logout } from "../../Redux/Features/Auth/authSlice";
import { Avatar, Space } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { persistor } from "../../Redux/store";

const Navbar = () => {
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();

  const navLinks = (
    <>
      {["/", "/allbooks", "/about", "/contact"].map((path, i) => {
        const labels = ["Home", "All Books", "About", "Contact"];
        return (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                isActive
                  ? "bg-orange-100 text-orange-600 font-semibold"
                  : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
              }`
            }
          >
            {labels[i]}
          </NavLink>
        );
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src="https://i.ibb.co.com/q3t1CR0Z/360-F-211078110-mttx-Edu3gs-Sb-MKajsy98-E4-M4-E5-RUCiuo-removebg-preview.png"
              alt="Logo"
              className="h-12 w-auto"
            />
          
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">{navLinks}</div>

          {/* User Section */}
          <div className="flex items-center gap-4">
            {user?.email ? (
              <div className="relative dropdown dropdown-end">
                <div tabIndex={0} role="button">
                  <Space>
                    <Avatar className="bg-orange-600" icon={<UserOutlined />} />
                  </Space>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white text-gray-800 shadow-md rounded-md mt-3 w-44 z-50 p-2"
                >
                  <li>
                    <Link
                      to={`/${user?.role}/dashboard`}
                      className="hover:bg-orange-100 rounded-md px-3 py-2"
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        dispatch(logout());
                        persistor.purge();
                        toast.success("Logout Successful...");
                      }}
                      className="flex items-center gap-2 text-left w-full hover:bg-orange-100 rounded-md px-3 py-2"
                    >
                      <LogOut size={16} /> Log out
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-outline border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition">
                  Login
                </button>
              </Link>
            )}

            {/* Mobile Menu Button */}
            <div className="lg:hidden dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-50 p-4 shadow-md bg-white rounded-md w-52"
              >
                {navLinks}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
