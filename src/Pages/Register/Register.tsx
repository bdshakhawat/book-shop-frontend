/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../Redux/Features/Auth/authApi";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "../../Utils/verifyToken";
import { setUser, TUser } from "../../Redux/Features/Auth/authSlice";
import { useAppDispatch } from "../../Redux/hook";


const Register = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { state } = useLocation();
  const [createUser] = useRegisterMutation();
  const [loginUser] = useLoginMutation();
  const { register, handleSubmit } = useForm();
  const handleRegister: SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading("Creating your account...!");
    const payload = {
      name: data.name,
      email: data.email,
      password: data.password,
      role: "user",
    };
    const res = (await createUser(payload)) as any;
 

    if (res.data?.success) {
      toast.success("Successfully created your account", { id: toastId });
      const loginRes = (await loginUser(payload)) as any;
      if (loginRes.data?.success) {
        toast.success("Login successfully", { id: toastId });

        const user = verifyToken(loginRes.data.data.accessToken) as TUser;
        dispatch(
          setUser({ user: user, token: loginRes.data.data.accessToken })
        );
        navigate(state || "/");
      }
    } 
    else {
      toast.error("Something went wrong!! Please provide valid information", {
        id: toastId,
      });
    }
  };
  return (
    <div className="register">
      <div className="border w-[400px] p-8 rounded-lg  backdrop-blur-2xl bg-brandPrimary/40">
        <div className="flex justify-center items-center mb-4"></div>
        <h1 className="text-3xl text-center font-bold text-gray-900">
          REGISTER NOW{" "}
        </h1>
        <form onSubmit={handleSubmit(handleRegister)}>
          <div className="mt-8">
            <label
              htmlFor="name"
              className="font-semibold tracking-[4px] text-black"
            >
              NAME
            </label>
            <input
              {...register("name")}
              placeholder="Enter your name "
              type="text"
              id="name"
              className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-900 text-black"
            />
          </div>
          <div className="mt-4">
            <label
              htmlFor="email"
              className="font-semibold tracking-[4px] text-black"
            >
              EMAIL
            </label>
            <input
              {...register("email")}
              placeholder="Enter your email"
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
              placeholder="Ex: ******"
              type="password"
              id="password"
              className="w-full border border-brandTextSecondary p-2 rounded-lg bg-transparent outline-none mt-2 placeholder:text-gray-900 text-black"
            />
          </div>

          <Button
            htmlType="submit"
            className="w-full mt-8 bg-gray-800 text-white"
          >
            Register
          </Button>

          <div className="mt-4">
            <p className="text-center text-black">
              Have an account?{" "}
              <Link to="/login" className="text-[#510039] font-semibold">
                Please Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
