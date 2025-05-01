import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import loginImage from "../assets/images/signUp.png"; 

 export const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container d-flex align-items-center vh-100">
      <div className="row w-100">
      
        <div className="col-md-6 text-center">
          <img src={loginImage} alt="Shopping Cart" className="img-fluid" />
        </div>

        
        <div className="col-md-6">
          <h2>Log in to Exclusive</h2>
          <p>Enter your details below</p>

          <form>
            <input type="email" name="email" placeholder="Email or Phone Number" className="form-control mb-2" onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" className="form-control mb-2" onChange={handleChange} />

            <button className="btn btn-danger w-100">Log In</button>
          </form>
          
          <p className="mt-2"><a href="/forgot-password">Forget Password?</a></p>
        </div>
      </div>
    </div>
  );
};

export default Login;