import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";
import { useNavigate } from "react-router-dom";

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
        <>
            <h2>Login Form</h2>

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    {...register("email", { required: "Email is mandatory" })}
                    placeholder="Email"
                />
                {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}

                <input
                    type="password"
                    {...register("password", { required: "Password is mandatory" })}
                    placeholder="Password"
                />
                {errors.password && <span style={{ color: "red" }}>{errors.password.message}</span>}

                <input type="submit" style={{ backgroundColor: "#a1eafb" }} />
            </form>
        </>
    );
}

export default Login;
