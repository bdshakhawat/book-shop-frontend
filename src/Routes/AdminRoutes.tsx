import AdminDashboard from "../Pages/dashboard/Admin/AdminDashboard";
import CreateBook from "../Pages/dashboard/Admin/CreateBook";
import UpdateBook from "../Pages/dashboard/Admin/UpdateBook";
import AdminDashboardOverview from './../Pages/dashboard/Admin/AdminDashboardOverview';


const AdminRoutes = [
  {
    path: 'dashboard',
    name: "Dashboard",
    element: <AdminDashboardOverview></AdminDashboardOverview>,
  },
  {
    path: "admin-management",
    name: "Admin-Management",
    element: <AdminDashboard />,
  },

  {
    element: <CreateBook />,
    path: "/admin/admin-management/create-book",
  },
  {
    element: <UpdateBook />,
    path: "update-book/:id",
  },
];

export default AdminRoutes;
