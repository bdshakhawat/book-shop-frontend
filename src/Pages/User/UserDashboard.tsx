import { NavLink } from "react-router-dom";
import { useGetOrdersByEmailQuery } from "../../Redux/Features/Orders/Order.api";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { selectCurrentUser } from "../../Redux/Features/Auth/authSlice";
import { useAppSelector } from "../../Redux/hook";

const UserDashboard = () => {
  const user = useAppSelector((state) => state.auth.user);
  console.log(user);
  const { data, isLoading } = useGetOrdersByEmailQuery(undefined);
  const { register, handleSubmit } = useForm();
  const handelUpdatePassword: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  return (
    <div className="">
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="My Orders"
        />
        <div className="tab-content  bg-base-600 p-10">
          <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>Order Id </th>
                  <th>Customer Email</th>
                  <th>Order Status</th>
                  <th>Total Price</th>
                  <th>Ordered At</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
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

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Profile Setting"
          defaultChecked
        />
        <div className="tab-content  bg-base-100 p-20 flex ">
          <div className="card bg-base-100  w-[50%] mx-auto shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="fieldset-label">Email</label>
                <input type="email" className="input" placeholder="Email" />
                <label className="fieldset-label">Password</label>
                <input
                  type="password"
                  className="input"
                  placeholder="Password"
                />
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
