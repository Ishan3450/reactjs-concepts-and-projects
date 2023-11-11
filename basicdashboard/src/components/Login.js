import React, { useState } from "react";
import Template from "./Template";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import loginImg from "../assets/login.jpg";
import "./Forms.css";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const [passwordVisibility, setVisibility] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });

  function handlePasswordVisibility() {
    setVisibility(!passwordVisibility);
  }

  function handleFormData(event) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      };
    });
  }

  function signIn(event) {
    event.preventDefault();

    if (formData.email in props.userData) {
      toast.success("Logged in");
      props.setLoginStatus(true);
      props.setActiveUser(props.userData[formData.email]);
      navigate("/dashboard");
    } else {
      toast.error("Invalid email or password");
    }
  }

  return (
    <div className="login-container">
      <Template heading="Welcome Back" formName="Sign in" image={loginImg}>
        <form onSubmit={signIn}>
          <label className="label-block">
            <p>
              Email <sup>*</sup>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              onChange={handleFormData}
            />
          </label>

          <div className="password-field-block">
            <label className="label-block">
              <p>
                Password <sup>*</sup>
              </p>
              <input
                type={passwordVisibility ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter Password"
                onChange={handleFormData}
              />
            </label>
            {passwordVisibility ? (
              <AiOutlineEyeInvisible
                size="1.5rem"
                className="eye-icon"
                onClick={handlePasswordVisibility}
              />
            ) : (
              <AiOutlineEye
                size="1.5rem"
                className="eye-icon"
                onClick={handlePasswordVisibility}
              />
            )}
          </div>
          <div className="forgot-pwd">Forgot Password</div>

          <button className="action-btn" type="submit">
            Sign in
          </button>
        </form>
      </Template>
    </div>
  );
}

export default Login;
