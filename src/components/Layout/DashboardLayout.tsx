import { NavLink, Outlet } from "react-router-dom";
import { sidebarItemsGenerator } from "../../Utils/sideBarGenerator";
import AdminRoutes from "../../Routes/AdminRoutes";
import UserRoutes from "../../Routes/UserRoute";
import { IoHomeOutline } from "react-icons/io5";
import { useAppSelector } from "../../Redux/hook";

const userRole = {
  ADMIN: "admin",
  USER: "user",
};

const DashboardLayout = () => {
  const currentUserRole = useAppSelector((state) => state.auth.user?.role);
  let sidebarItem;

  switch (currentUserRole) {
    case userRole.ADMIN:
      sidebarItem = sidebarItemsGenerator(AdminRoutes, userRole.ADMIN);
      break;
    case userRole.USER:
      sidebarItem = sidebarItemsGenerator(UserRoutes, userRole.USER);
      break;

    default:
      break;
  }
  return (
    <div className="max-w-[2520px]  mx-auto ">
      <div className="md:flex lg:flex ">
        <div className=" lg:w-60  lg:min-h-screen  text-black shadow-xl border-2 ">
          <div className="flex justify-center items-center mt-2  ">
            <img
              className="w-[50%]"
              src="https://i.ibb.co.com/gbXj6cx9/360-F-211078110-mttx-Edu3gs-Sb-MKajsy98-E4-M4-E5-RUCiuo-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-between h-[calc(100vh-96px)]">
            <ul className=" text-lg space-y-3 pt-8 px-2 text-center">
              {sidebarItem?.map((item, index) => {
                if (!item) return null; // skip undefined
                return (
                  <div key={index}>
                    <li className=" bg-orange-50 hover:bg-gray-100 text-orange-500 hover:text-orange-600 font-semibold px-4 py-2 rounded-md ">
                      <NavLink to={`${item.label}`}>{item.key}</NavLink>
                    </li>
                  </div>
                );
              })}
            </ul>

            <div className=" ">
              <ul className="list-none text-lg space-y-3 pt-8 px-2 text-center">
                <li className=" bg-orange-50 hover:bg-gray-100 text-orange-500 hover:text-orange-600 font-semibold px-4 py-2 rounded-md ">
                  <NavLink
                    className={"flex items-center justify-center"}
                    to={`/`}
                  >
                    <IoHomeOutline size={20}></IoHomeOutline> &nbsp; Home
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
       

        <div className="flex-1 py-8 px-14 bg-base-200">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
