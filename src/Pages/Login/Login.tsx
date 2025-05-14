/* eslint-disable @typescript-eslint/no-unused-vars */

import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {  SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { verifyToken } from "../../Utils/verifyToken";
import { setUser, TUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch } from "../../Redux/hook";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const [loginUser] = useLoginMutation();
  type LoginFormInputs = { email: string; password: string };
  
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  
  const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
    const toastId = toast.loading("Login in progress...");
    try {
      const res = await loginUser(data);
      const responseData = "data" in res ? res.data : null;

      if (responseData?.success && responseData?.data?.accessToken) {
        const user = verifyToken(responseData.data.accessToken) as TUser;
        dispatch(setUser({ user, token: responseData.data.accessToken }));
        toast.success("Login successful", { id: toastId });
        navigate(state || "/");
      } else {
        throw new Error("Invalid login response");
      }
    } catch (err) {
      toast.error("Invalid credentials or server error", { id: toastId });
    }
  };

  const demoLogin = async (role: "user" | "admin") => {
    const credentials = {
      user: { email: "saiful@gmail.com", password: "123456" },
      admin: { email: "admin@gmail.com", password: "123456" },
    };

    const userInfo = credentials[role];

    const toastId = toast.loading("Demo login in progress...");
    try {
      const res = await loginUser(userInfo);
      const responseData = "data" in res ? res.data : null;

      if (responseData?.success && responseData?.data?.accessToken) {
        const user = verifyToken(responseData.data.accessToken) as TUser;
        dispatch(setUser({ user, token: responseData.data.accessToken }));
        toast.success("Demo login successful", { id: toastId });
        navigate(state || "/");
      } else {
        throw new Error("Invalid demo login response");
      }
    } catch (err) {
      toast.error("Demo login failed", { id: toastId });
    }
  };

  return (
    <div className="login">
      <div className="border w-[400px] p-8 rounded-lg backdrop-blur-md bg-brandPrimary/40">
        <h1 className="text-3xl text-center font-bold text-brandTextSecondary">
          LOGIN NOW
        </h1>

        {/* Demo login buttons */}
        <div className="mt-4 flex gap-4 justify-center items-center">
          <button
            className="btn bg-orange-500 border-none hover:bg-orange-600 text-white p-2"
            onClick={() => demoLogin("user")}
          >
            User's Demo Login
          </button>
          <button
            className="btn bg-orange-500 border-none hover:bg-orange-600 text-white p-2"
            onClick={() => demoLogin("admin")}
          >
            Admin's Demo Login
          </button>
        </div>

        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="mt-8">
            <label
              htmlFor="email"
              className="font-semibold tracking-[4px] text-brandTextTertiary"
            >
              EMAIL
            </label>
            <input
              {...register("email")}
              placeholder="Ex: saiful@example.com"
              type="email"
              id="email"
              className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-500"
            />
          </div>

          <div className="mt-4">
            <label
              htmlFor="password"
              className="font-semibold tracking-[4px] text-brandTextTertiary"
            >
              PASSWORD
            </label>
            <input
              {...register("password")}
              placeholder="Ex: ********"
              type="password"
              id="password"
              className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-500"
            />
          </div>

          <Button
            htmlType="submit"
            className="w-full mt-8 hover:text-orange-500 text-orange-400"
          >
            Login
          </Button>

          <div className="mt-4 text-center text-brandTextTertiary">
            Don't have an account?{" "}
            <Link to="/register" className="text-[#510039] font-semibold">
              Please Register
            </Link>
          </div>
        </form>

        <div className="mt-4 text-center">
          <Link
            to="/"
            className="hover:text-orange-500 text-orange-400 btn border-none"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
