import AdminDashboard from "../Pages/Admin/AdminDashboard";
import AddBookToStore from "../Pages/Admin/AddBookToStore";

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
  // {
  //   element: <UpdateBook />,
  //   path: "update-book/:id",
  // },
];

export default AdminRoutes;
