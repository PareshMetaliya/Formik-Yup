import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, " Invalid Password")
    .required("Password is required"),
  
});

export default loginSchema;
