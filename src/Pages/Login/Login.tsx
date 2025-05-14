/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaLongArrowAltRight } from "react-icons/fa";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { verifyToken } from "../../Utils/verifyToken";
import { setUser, TUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch } from "../../Redux/hook";
import { Button } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const [loginUser] = useLoginMutation();
  const { register, handleSubmit } = useForm();

  const handelLogin: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Login in progress ........!!");
    const payload = {
      email: data.email,
      password: data.password,
    };
    const res = (await loginUser(payload)) as any;
    if (res.data?.success) {
      console.log(res);
      toast.success("Login successfully", { id: toastId });

      const user = verifyToken(res.data.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.data.accessToken }));
      navigate(state || `/`);
    } else {
      toast.error("Something went wrong!! Please provide valid information", {
        id: toastId,
      });
    }
  };

  const demoLogin = async (role: "user" | "admin") => {
    const demoCredentials = {
      user: { email: "sourav@gmail.com", password: "123456" },
      admin: { email: "admin@gmail.com", password: "123456" },
    };
    const data = demoCredentials[role];
    try {
      const res = await loginUser(data);
      if (res?.data?.success) {
        const user = verifyToken(res.data.data.accessToken) as TUser;
        dispatch(setUser({ user: user, token: res.data.data.accessToken }));
        navigate(state || `/`);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="login py-4">
        <div className="border w-[400px] p-8 rounded-lg  backdrop-blur-2xl bg-brandPrimary/40">
          <div className="flex justify-center items-center mb-8"></div>
          <h1 className="text-3xl text-center font-bold text-gray-900">
            LOGIN NOW{" "}
          </h1>
          <form onSubmit={handleSubmit(handelLogin)}>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="font-semibold tracking-[4px] text-black"
              >
                EMAIL
              </label>
              <input
                {...register("email")}
                placeholder="Enter your email "
                type="email"
                id="email"
                className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-900 text-black"
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="password"
                className="font-semibold tracking-[4px] text-black"
              >
                PASSWORD
              </label>
              <input
                {...register("password")}
                placeholder="Ex: ********"
                type="password"
                id="current-password"
                className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-900 text-black"
              />
            </div>
            <Button
              htmlType="submit"
              className="w-full mt-8 bg-gray-800 text-white"
            >
              Login
            </Button>

            <div className="mt-4">
              <p className="text-center text-black">
                Don't have an account?{" "}
                <Link to="/register" className="text-[#510039] font-semibold">
                  Please Register
                </Link>
              </p>
            </div>
          </form>
          <div className="text-center mt-6 space-y-4">
            <div className="flex items-center justify-center my-4">
              <div className="flex-grow h-px bg-gray-400"></div>
              <span className="px-4 text-black dark:text-gray-300 text-sm font-medium tracking-wide">
                QUICK DEMO ACCESS
              </span>
              <div className="flex-grow h-px bg-gray-400"></div>
            </div>

            <div className="mt-4  flex flex-col gap-4 ">
              <Button
                className="w-full  bg-gray-800 text-white"
                onClick={() => demoLogin("user")}
              >
                {" "}
                Demo Login as User
              </Button>
              <Button
                className="w-full  bg-gray-800 text-white"
                onClick={() => demoLogin("admin")}
              >
                Demo Login as Admin
              </Button>
            </div>

            <p className=" flex items-center justify-center mt-6">
              <Link
                to="/"
                className="flex gap-1 items-center text-base font-semibold text-gray-900 hover:text-white "
              >
                <FaLongArrowAltRight size={20}></FaLongArrowAltRight> Back to
                Home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
