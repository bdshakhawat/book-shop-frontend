import { Button, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import UserInput from "../../components/form/UserInput";
import UserForm from "../../components/form/UserForm";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useCreateUserMutation } from "../../Redux/Features/Admin/UserManagementApi/userManagement.api";
import Title from "antd/es/typography/Title";

const Register = () => {
  const navigate = useNavigate();
  const [createUser] = useCreateUserMutation();
  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("User is being registered");

    try {
      const userInfo = {
        name: data.name,
        email: data.email,
        password: data.password,
      };
      await createUser(userInfo);
      toast.success("User is created", { id: toastId });
      navigate(`/login`);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err?.message || "something went wrong", {
        id: toastId,
      });
    }
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <UserForm
        onSubmit={onSubmit}
        // defaultValues={defaultValues}
      >
        <Title style={{ marginBottom: "20px" }}>Register</Title>
        <UserInput type="text" name="name" label="Name" />
        <UserInput type="text" name="email" label="Email:" />
        <UserInput type="text" name="password" label="Password" />
        <Button htmlType="submit">Register</Button>
        <Title level={5} style={{ marginBottom: "20px" }}>
          Already have an account? <Link to="/login"> Login</Link>
        </Title>
      </UserForm>
    </Row>
  );
};

export default Register;
