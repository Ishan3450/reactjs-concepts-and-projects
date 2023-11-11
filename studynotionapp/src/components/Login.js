import React, { useState } from "react";
import Template from "./Template";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import loginImg from "../assets/login.jpg";
import "./Forms.css"

function Login() {
  const [passwordVisibility, setVisibility] = useState(false);

  function handlePasswordVisibility() {
    setVisibility(!passwordVisibility);
  }

  return (
    <div className="login-container">
      <Template
        heading="Welcome Back"
        formName="Sign in"
        image={loginImg}
      >
        <form>
          <label className="label-block">
            <p>Email <sup>*</sup></p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </label>

          <div className="password-field-block">
            <label className="label-block">
              <p>Password <sup>*</sup></p>
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
              />
            </label>
            {passwordVisibility ? (
              <AiOutlineEyeInvisible
                size="1.5rem" className="eye-icon"
                onClick={handlePasswordVisibility}
              />
            ) : (
              <AiOutlineEye size="1.5rem" className="eye-icon" onClick={handlePasswordVisibility} />
            )}
          </div>
          <div className="forgot-pwd">Forgot Password</div>

          <button className="action-btn">Sign in</button>
        </form>
      </Template>
    </div>
  );
}

export default Login;
