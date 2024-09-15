import React from "react";
import { useFormik } from "formik";
import axios from 'axios';


export default function Register() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: RegisterUser
  });

  async function RegisterUser() {
    const { data } = await axios.post('https://ecommerce-node4.onrender.com/auth/signup', formik.values);
    console.log(data);
  }
  
  return (
    <div>
      <h1>Register</h1>
    <form onSubmit={formik.handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="User Name"
          name="userName"
          onChange={formik.handleChange}
          value={formik.userName}
        />
        <label htmlFor="name">User Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="User Email"
          name="email"
          onChange={formik.handleChange}
          value={formik.email}
        />
        <label htmlFor="email">User Email</label>
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
        />
        <label htmlFor="pass">User Password</label>
      </div>

      <button type="submit" className="btn btn-outline-info">
        Register
      </button>
    </form>
        </div>

  );
}
