import React from "react";
import { useFormik } from "formik";
import axios from "axios";

export default function Login() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: LoginUser,

    validate: (values) => {
      let errors = {};

      if (values.email.length <= 10) {
        errors.email = "Email is required .. !!!";
      }

      if (values.password.length <= 6) {
        errors.password = "Password is required .. !!!";
      }

      return errors;
    },
  });

  async function LoginUser() {
    const { data } = await axios.post(
      "https://ecommerce-node4.onrender.com/auth/signin",
      formik.values
    );
    console.log(data);
  }

  return (
    <div>
      <h1>login</h1>
      <form onSubmit={formik.handleSubmit}>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="User Email"
            name="email"
            onChange={formik.handleChange}
            value={formik.email}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="email">User Email</label>
          {formik.touched.email && formik.errors.email ? (
            <div className="alert alert-danger">{formik.errors.email}</div>
          ) : null}
        </div>

        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="pass"
            placeholder="User Password"
            name="password"
            onChange={formik.handleChange}
            value={formik.password}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="pass">User Password</label>

          {formik.touched.password && formik.errors.password ? (
            <div className="alert alert-danger">{formik.errors.password}</div>
          ) : null}
        </div>

        <button type="submit" className="btn btn-outline-info">
          login
        </button>
      </form>
    </div>
  );
}
