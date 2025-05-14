import { DollarSign, Heart, ShoppingBag, User } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetOrdersByEmailQuery } from "../../../Redux/Features/Orders/Order.api";
import { IBook, IOrder } from "../../../Types/global";
import { useGetAllbooksQuery } from "../../../Redux/Features/Books/bookManagement.api";

const UserDashboardOverview = () => {
  const { data } = useGetOrdersByEmailQuery(undefined);
  const {data:books} =useGetAllbooksQuery(undefined)
  console.log(books?.data)
  const totalCast = data?.data?.reduce((acc:number, item:IOrder) => {
    return acc + item.totalPrice;
  }, 0);
  return (
    <div className=" ">
      {/* Summary Cards */}
      <div className=" space-y-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-800">User Dashboard</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* My Orders */}
          <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
            <ShoppingBag className="w-10 h-10 text-indigo-600" />
            <div>
              <p className="text-sm text-gray-500">My Orders</p>
              <p className="text-2xl font-semibold text-gray-800">
                {data?.data?.length}
              </p>
            </div>
          </div>

          {/* Total Cost */}
          <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
            <DollarSign className="w-10 h-10 text-green-600" />
            <div>
              <p className="text-sm text-gray-500">Total Cost</p>
              <p className="text-2xl font-semibold text-gray-800">${totalCast}</p>
            </div>
          </div>

          {/* Wishlist */}
          <div className="bg-white shadow-md rounded-xl p-6 flex items-center gap-4">
            <Heart className="w-10 h-10 text-pink-500" />
            <div>
              <p className="text-sm text-gray-500">Wishlist Items</p>
              <p className="text-2xl font-semibold text-gray-800">0</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recently Viewed */}
      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Top selling books
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Dummy book cards */}
          {books?.data?.slice(0, 4).map((item:IBook) => (
            <Link to={`/allbooks/${item._id}`}><div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={`https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg`}
                alt="Book"
                className="w-full h-48 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-700 truncate">
                  {item.title}
                </p>
                <p className="text-xs text-gray-500"> {item.author}</p>
              </div>
            </div></Link>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="flex flex-col md:flex-row gap-4 mt-6">
        <Link
          to="/allbooks"
          className="w-full md:w-auto px-6 py-3 text-center bg-orange-500 text-white rounded-lg hover:bg-orange-600"
        >
          Go to Shop
        </Link>
        <Link
          to="/user/user-management"
          className="w-full md:w-auto px-6 py-3 text-center bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-500 hover:text-white flex items-center justify-center gap-2"
        >
          <User className="w-4 h-4" />
          Manage Account
        </Link>
      </div>
    </div>
  );
};

export default UserDashboardOverview;
