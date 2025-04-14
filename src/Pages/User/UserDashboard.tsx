import { useGetOrdersByEmailQuery } from "../../Redux/Features/Orders/Order.api";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector } from "../../Redux/hook";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiUser } from "react-icons/fi";
import { toast } from "sonner";
import { useUpdatePasswordMutation } from "../../Redux/Features/Auth/authApi";

type TUpdatePasswordData = {
  email: string;
  currentPassword: string;
  newPassword: string;
};

const UserDashboard = () => {
  const [updatePassword] = useUpdatePasswordMutation();
  const userEmail = useAppSelector((state) => state.auth.user?.email);

  // const { data, isLoading } = useGetOrdersByEmailQuery(undefined);
  // console.log(data)
  const { register, handleSubmit ,reset} = useForm();
  const handleUpdatePassword: SubmitHandler<FieldValues> = async (data) => {
    console.log(data)
    try {
      const res = await updatePassword({
        email: data.email,
        oldPassword: data.password,
        newPassword: data.newPassword,
      }).unwrap();
      console.log(res)
      toast.success("Password updated successfully!");
      reset()
    } catch (err) {
      console.error(err);
      toast.error("Failed to update password");
    }
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center mb-16">
        <div className="">
          {" "}
          <input
            className="w-[400px] px-4 py-3 rounded-lg shadow-md"
            placeholder="Search users..."
            type="text"
          />
        </div>
        <div className="flex items-center gap-10">
          {" "}
          <IoMdNotificationsOutline
            size={25}
            className="cursor-pointer text-gray-500 hover:text-black"
          ></IoMdNotificationsOutline>
          <FiUser
            size={30}
            className="cursor-pointer text-orange-500 bg-orange-100 rounded"
          ></FiUser>
        </div>
      </div>

      {/* The Tap  */}
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border bg-base-300 rounded-lg">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab "
          aria-label="My Orders "
          defaultChecked
        />
        <div className="tab-content  bg-base-100 p-10 rounded-lg">
          <div>
            <h1 className="py-4 text-lg">Manage Order : (2) </h1>
            <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="bg-base-200">
                    <th>Order Id </th>
                    <th>Customer Email</th>
                    <th>Order Status</th>
                    <th>Total Price</th>
                    <th>Ordered At</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="border border-gray-300">
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>Blue</td>
                    <td>Blue</td>
                  </tr>
                  {/* row 2 */}
                  <tr>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                    <td>Purple</td>
                  </tr>
                  {/* row 3 */}
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                    <td>Red</td>
                  </tr>
                  <tr>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
                    <td>Red</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Profile  */}

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Profile Setting"
        />
        <div className="tab-content  bg-base-100 rounded-lg p-10">
          <div>
            <div className="card bg-base-100  w-[40%] mx-auto shrink-0 shadow-2xl">
              <div className="card-body">
                <h1 className="text-center font-bold text-2xl text-[#1f1f1f]">
                  Update Password
                </h1>
                <form
                  onSubmit={handleSubmit(handleUpdatePassword)}
                  className="fieldset"
                >
                  <label className="fieldset-label">Email</label>
                  <input
                    {...register("email")}
                    type="email"
                    className=" px-4 py-2 border rounded-sm"
                    placeholder="Email"
                    defaultValue={userEmail}
                  />
                  <label className="fieldset-label">Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    className="px-4 py-2 border rounded-sm"
                    placeholder="Password"
                  />
                  <label className="fieldset-label">New Password</label>
                  <input
                    {...register("newPassword")}
                    type="password"
                    className="px-4 py-2 border rounded-sm"
                    placeholder="New Password"
                  />

                  <button type="submit" className="bg-orange-500 text-white hover:bg-orange-600 w-full text-center font-semibold py-2 rounded-lg mt-3">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
