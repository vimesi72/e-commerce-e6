import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";

const Register = () => {
  const createUser = useAuth();

  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
    createUser(url, data);
    reset({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="firstName">firstName:</label>
          <input {...register("firstName")} id="firstName" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">lastName:</label>
          <input {...register("lastName")} id="lastName" type="text" />
        </div>
        <div>
          <label htmlFor="email">email:</label>
          <input {...register("email")} id="email" type="email" />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input {...register("password")} id="password" type="password" />
        </div>
        <div>
          <label htmlFor="phone">phone:</label>
          <input {...register("phone")} id="phone" type="text" />
        </div>
        <button>Register</button>
      </form>
    </div>
  );
};

export default Register;
