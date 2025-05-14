/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useMemo } from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import {
  Bar,
  BarChart as RBarChart,
  XAxis,
  YAxis,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { useGetAllbooksQuery } from "../../../Redux/Features/Books/bookManagement.api";
import { useGetAllUsersQuery } from "../../../Redux/Features/Users/userManagement.api";
import { useGetAllOrdersQuery } from "../../../Redux/Features/Orders/Order.api";
import { IOrder } from "../../../Types/global";

export default function AdminDashboardOverview() {
  const bookData = useGetAllbooksQuery(undefined);
  const userData = useGetAllUsersQuery(undefined);
  const orderData = useGetAllOrdersQuery(undefined);
  const totalRevenue = orderData?.data?.data?.reduce(
    (acc: number, item: IOrder) => acc + item.totalPrice,
    0
  );

  const stats = [
    {
      label: "Total Books",
      value: `${bookData?.data?.data?.length}`,
      tooltip: "Number of books in the store",
    },
    {
      label: "Total Users",
      value: `${userData?.data?.data?.length}`,
      tooltip: "Registered customers and admins",
    },
    {
      label: "Total Orders",
      value: `${orderData?.data?.data?.length}`,
      tooltip: "All placed orders",
    },
    {
      label: "Total Revenue",
      value: `$${totalRevenue}`,
      tooltip: "Total earnings ",
    },
  ];

  
const topBooksDatas = [
  { name: "Atomic Habits", sold: 120 },
  { name: "Rich Dad Poor Dad", sold: 95 },
  { name: "The Alchemist", sold: 75 },
  { name: "Think & Grow Rich", sold: 60 },
];

// const topBooksData = useMemo(() => {
//   if (!bookData?.data?.data) return [];

//   return [...bookData.data.data]
//     .filter((book: any) => typeof book.sold === "number")
//     .sort((a: any, b: any) => b.sold - a.sold)
//     .slice(0, 3)
//     .map((book: any) => ({
//       name: book.title,
//       sold: book.sold,
//     }));
// }, [bookData?.data?.data]);


  const userRoleData = useMemo(() => {
    const users = userData?.data?.data || [];
    const rolesCount = users.reduce(
      (acc: Record<string, number>, user: any) => {
        acc[user.role] = (acc[user.role] || 0) + 1;
        return acc;
      },
      {}
    );

    return Object.entries(rolesCount).map(([name, value]) => ({ name, value }));
  }, [userData?.data?.data]);

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <Tooltip.Provider>
      <div className=" space-y-6">
        <h1 className="text-2xl font-bold">Dashboard Overview</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <Tooltip.Root key={stat.label}>
              <Tooltip.Trigger asChild>
                <div className="bg-white shadow rounded-lg p-4 cursor-help hover:shadow-md transition">
                  <p className="text-sm text-gray-500">{stat.label}</p>
                  <p className="text-xl font-semibold">{stat.value}</p>
                </div>
              </Tooltip.Trigger>
              <Tooltip.Portal>
                <Tooltip.Content
                  className="bg-gray-800 text-white text-xs rounded px-2 py-1"
                  side="top"
                  sideOffset={5}
                >
                  {stat.tooltip}
                  <Tooltip.Arrow className="fill-gray-800" />
                </Tooltip.Content>
              </Tooltip.Portal>
            </Tooltip.Root>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Top Selling Books</h2>
            <ResponsiveContainer width="100%" height={250}>
              <RBarChart data={topBooksDatas}>
                <XAxis dataKey="name" />
                <YAxis />
                <RechartsTooltip />
                <Bar dataKey="sold" fill="#8884d8" />
              </RBarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white shadow rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">User Role Distribution</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={userRoleData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {userRoleData.map((_entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg p-4 overflow-x-auto">
          <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-b text-sm text-gray-600">
                <th className="py-2">Order ID</th>
                <th className="py-2">Customer</th>
                <th className="py-2">Total Price</th>
                <th className="py-2">Status</th>
                <th className="py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.data?.data?.map((order: IOrder) => (
                <tr key={order._id} className="border-b text-sm">
                  <td className="py-2">{order._id}</td>
                  <td className="py-2">{order?.user?.name}</td>
                  <td className="py-2">{order.totalPrice}</td>
                  <td className="py-2">{order.status}</td>
                  <td className="py-2">{order.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Tooltip.Provider>
  );
}
