import AdminDashboard from "../Pages/Admin/AdminDashboard";
import UpdateBook from "../Pages/Admin/UpdateBook";
import CreateBook from "../Pages/Admin/CreateBook";

const AdminRoutes = [
  {
    index: true,
    name: "Dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "dashboard",
    name: "Dashboard",
    element: <AdminDashboard />,
  },

  {
    element: <CreateBook />,
    path: "/admin/dashboard/create-book",
  },
  {
    element: <UpdateBook />,
    path: "update-book/:id",
  },
];

export default AdminRoutes;
