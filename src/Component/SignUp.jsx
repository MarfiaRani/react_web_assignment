import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import signupp from "../assets/images/signUp.png";
import { Link } from "react-router-dom";

export const SignUp = () => {
    const [formData, setFormData] = useState({ name: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container d-flex align-items-center vh-100">
            <div className="row w-100">
                <div className="col-md-6 text-center">
                <img src={signupp} alt="Shopping Cart" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h2>Create an account</h2>
                    <p>Enter your details below</p>
                    <form>
                        <input type="text" name="name" placeholder="Name" className="form-control mb-2" onChange={handleChange} />
                        <input type="email" name="email" placeholder="Email or Phone Number" className="form-control mb-2" onChange={handleChange} />
                        <input type="password" name="password" placeholder="Password" className="form-control mb-2" onChange={handleChange} />
                        <button className="btn btn-danger w-100">Create Account</button>
                    </form>
                    <Link to="/login">Already have an account? Log in</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;