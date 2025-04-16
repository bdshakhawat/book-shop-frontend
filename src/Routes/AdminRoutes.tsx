import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AddBookToStore from "../Pages/Admin/AddBookToStore";
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
    path: "add-book",
    name: "Add New Book",
    element: <AddBookToStore />,
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
