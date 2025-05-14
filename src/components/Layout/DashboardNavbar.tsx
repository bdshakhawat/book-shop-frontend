import { useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hook";
import { FaUserCircle } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { logout } from "../../Redux/Features/Auth/authSlice";
import { persistor } from "../../Redux/store";
import { toast } from "sonner";

const DashboardNavbar = () => {
  const dispatch =useAppDispatch()
  const user = useAppSelector((state) => state.auth.user);
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    toast.success("Logged out successfully");
  };

  // Close dropdown on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      <h1 className="text-xl font-bold text-orange-500">
        Hello {user?.name}, Welcome to Dashboard
      </h1>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpen(!open)}
          className="focus:outline-none ring-2 ring-transparent hover:ring-orange-200 transition rounded-full"
        >
          {user?.photo ? (
            <img
              src={user.photo}
              alt="user"
              className="w-10 h-10 rounded-full object-cover"
            />
          ) : (
            <FaUserCircle size={34} className="text-gray-500" />
          )}
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-32 bg-white rounded-md shadow-lg border z-20  ">
            <div className="px-4 py-2 text-sm text-gray-700 border-b font-medium ">
              {user?.name || "User"}
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-red-500 hover:bg-red-50 transition"
            >
              <IoMdLogOut className="mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardNavbar;
