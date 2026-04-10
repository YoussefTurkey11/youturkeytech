import RegisterForm from "./registerForm";
import FootAuth from "@/components/share/(auth)/Foot";

const Register = () => {
  return (
    <>
      <RegisterForm />
      <FootAuth type="Register" link="login" />
    </>
  );
};

export default Register;
