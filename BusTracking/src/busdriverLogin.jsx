import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: white;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.input`
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));

    if (userData) {
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
        navigate("/dashboard");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };

  return (
    <FormContainer>
      <h2>Bus Driver Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="email"
          {...register("email", { required: "Email is mandatory" })}
          placeholder="Email"
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

        <Input
          type="password"
          {...register("password", { required: "Password is mandatory" })}
          placeholder="Password"
        />
        {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

        <SubmitButton type="Login" value="Login" />
      </form>
    </FormContainer>
  );
}

export default Login;
