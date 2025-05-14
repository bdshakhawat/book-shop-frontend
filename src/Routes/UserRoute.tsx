import UserDashboard from "../Pages/dashboard/User/UserDashboard";
import UserDashboardOverview from "../Pages/dashboard/User/UserDashboardOverview";

const UserRoutes = [
  {
    path: "dashboard",
    name: "Dashboard",
    element: <UserDashboardOverview />,
  },
  {
    path: "user-management",
    name: "User Management",
    element: <UserDashboard />,
  },
];
export default UserRoutes;
