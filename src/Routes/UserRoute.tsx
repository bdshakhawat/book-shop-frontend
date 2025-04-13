import UserManagement from "../Pages/User/UserManagement";
import UserDashboard from "./../Pages/User/UserDashboard";

const UserRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    element: <UserDashboard />,
  },
  {
    path: "userManagement",
    name: "User Management",
    element: <UserManagement />,
  },
  
];
export default UserRoutes;
