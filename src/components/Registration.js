import React from "react";
import "../style/Registration.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validationSchema from "../schema/schema";
import toast from "react-hot-toast";

function Registration() {
  //initialvalues for value, must have same name as mentioned in Form name section and also use same name in Yup schema
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  // Use useFormik hook and destructure "values, errors..." properities of formik hook which one I needed
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,

      //   As in ES6 key and value have same name than write by only one name

      //   validationSchema: validationSchema,
      validationSchema,

      onSubmit: (values, action) => {
        console.log(values);

        //For clear form value after submit
        action.resetForm();
        toast.success("Successfully Sign Up!");
      },
    });

  return (
    <div className="Container_Registration">
      <div className="formsection">
        <h2>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <br />
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

            {/* When just touched the field and error for that input is available then and then only error message will be displayed */}
            {errors.name && touched.name ? (
              <p className="error">{errors.name}</p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="text"
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <br />
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.confirmPassword && touched.confirmPassword ? (
              <p className="error">{errors.confirmPassword}</p>
            ) : null}
          </div>
          <button type="submit">Submit</button>
          <h5>
            Already have an account ? <Link to="/login">Login</Link>
          </h5>
        </form>
      </div>
    </div>
  );
}

export default Registration;
