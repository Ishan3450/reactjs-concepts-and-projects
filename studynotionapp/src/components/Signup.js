import React, { useState } from "react";
import "./Forms.css";
import Template from "./Template";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import signupImg from "../assets/signup.jpg";

function Signup() {
  const [passwordVisibility, setVisibility] = useState(false);
  const [cPasswordVisibility, setCVisibility] = useState(false);

  function handlePasswordVisibility() {
    setVisibility(!passwordVisibility);
  }

  function handleCPasswordVisibility() {
    setCVisibility(!cPasswordVisibility); 
  }

  return (
    <div className="signup-container">
    {/* heading, descr1, descr2, formName, image */}
      <Template
        heading="Join the millions learning to code with StudyNotion for free"
        formName="Sign in"
        image={signupImg}
      >
        <form>
          <div className="role">
            <button>Instructor</button>
            <button>Student</button>
          </div>

          <div className="full-name-fields-block">
            <div>
              <label className="label-block">
                <p>First name <sup>*</sup></p>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Enter first name"
                  required
                />
              </label>
            </div>

            <div>
              <label className="label-block">
                <p>Last Name <sup>*</sup></p>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Enter last name"
                  required
                />
              </label>
            </div>
          </div>

          <label className="label-block">
            <p>Email <sup>*</sup></p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              required
            />
          </label>

          <div className="password-fields-block">
            <div className="password-field-block">
              <label className="label-block">
                <p>Password <sup>*</sup></p>
                <input
                  type={passwordVisibility ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter Password"
                  required
                />
              </label>
              {passwordVisibility ? (
                <AiOutlineEyeInvisible
                  size="1.5rem" className="eye-icon"
                  onClick={handlePasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  size="1.5rem" className="eye-icon"
                  onClick={handlePasswordVisibility}
                />
              )}
            </div>

            <div className="password-field-block">
              <label className="label-block">
                <p>Confirm Password <sup>*</sup></p>
                <input
                  type={cPasswordVisibility ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                />
              </label>
              {cPasswordVisibility ? (
                <AiOutlineEyeInvisible
                  size="1.5rem" className="eye-icon"
                  onClick={handleCPasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  size="1.5rem" className="eye-icon"
                  onClick={handleCPasswordVisibility}
                />
              )}
            </div>
          </div>
          <button className="action-btn">Create Account</button>
        </form>
      </Template>
    </div>
  );
}

export default Signup;
