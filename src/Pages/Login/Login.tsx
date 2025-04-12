import { Button, Row } from "antd";
import { FieldValues } from "react-hook-form";
import { useLoginMutation } from "../../Redux/Features/Auth/authApi";
import { useAppDispatch } from "../../Redux/hook";
import { TUser, setUser } from "../../Redux/Features/Auth/authSlice";
import { verifyToken } from "../../Utils/verifyToken";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import UserInput from "../../components/form/UserInput";
import UserForm from "../../components/form/UserForm";
import Title from "antd/es/typography/Title";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Logging in");

    try {
      const userInfo = {
        email: data.email,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();

      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId });

      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/${user.role}/dashboard`);
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.message || "something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <UserForm onSubmit={onSubmit}>
        <Title style={{ marginBottom: "20px" }}>Login</Title>
        <UserInput type="text" name="email" label="Email" />
        <UserInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Login</Button>
        <Title level={5} style={{ marginBottom: "20px" }}>
          Don't have an account? <Link to="/register"> SignUp</Link>{" "}
        </Title>
      </UserForm>
    </Row>
  );
};

export default Login;
