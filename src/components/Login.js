import React from "react";
import "../style/Login.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import toast from 'react-hot-toast';

import loginSchema from "../schema/loginSchema";
function Login() {
  const initialValues = {
    email: "",
    password: "",
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
        toast.success('Successfully Login!')
      },
    });

  return (
    <div className="Container_login">
      <div className="loginsection">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              id="email"
              
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className="error">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.password && touched.password ? (
              <p className="error">{errors.password}</p>
            ) : null}
          </div>

          <button type="submit">Login</button>
          <h5>
            Don't have an account ? <Link to="/">Sign Up</Link>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Login;
