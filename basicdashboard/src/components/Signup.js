import React, { useState } from "react";
import "./Forms.css";
import Template from "./Template";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import signupImg from "../assets/signup.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Signup(props) {
  //* props.setUserData

  const [passwordVisibility, setVisibility] = useState(false);
  const [cPasswordVisibility, setCVisibility] = useState(false);
  const [cPassword, setCPassword] = useState("");
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    role: "",
  });

  function handlePasswordVisibility() {
    setVisibility(!passwordVisibility);
  }

  function handleCPasswordVisibility() {
    setCVisibility(!cPasswordVisibility);
  }

  function handleFormData(event) {
    setFormData((prevState) => {
      return {...prevState, [event.target.name]: event.target.value}
    })
  }

  function createUser(event) {
    event.preventDefault();
    if(formData.password !== cPassword){
      toast.error("Confirm Password Mismatch")
    } else {
      props.setUserData((prevState) => {
        return {...prevState, [formData.email]:formData}
      })
      toast.success("Account Created")
      navigate("/login")
    }
  }

  return (
    <div className="signup-container">
      {/* heading, descr1, descr2, formName, image */}
      <Template
        heading="Join the millions learning to code with StudyNotion for free"
        formName="Sign in"
        image={signupImg}
      >
        <form onSubmit={createUser}>
          <div className="role-block">
            <label className="label-block">
              <p>
                Select role <sup>*</sup>
              </p>
              <select className="role" name="role" onChange={handleFormData} required>
                <option selected disabled>Select your role</option>
                <option value="instructor" >Instructor</option>
                <option value="student">Student</option>
              </select>
            </label>
          </div>

          <div className="full-name-fields-block">
            <div>
              <label className="label-block">
                <p>
                  First name <sup>*</sup>
                </p>
                <input
                  type="text"
                  name="fname"
                  id="fname"
                  placeholder="Enter first name"
                  required
                  onChange={handleFormData}
                />
              </label>
            </div>

            <div>
              <label className="label-block">
                <p>
                  Last Name <sup>*</sup>
                </p>
                <input
                  type="text"
                  name="lname"
                  id="lname"
                  placeholder="Enter last name"
                  required
                  onChange={handleFormData}
                />
              </label>
            </div>
          </div>

          <label className="label-block">
            <p>
              Email <sup>*</sup>
            </p>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
              required
              onChange={handleFormData}
            />
          </label>

          <div className="password-fields-block">
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
                  required
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

            <div className="password-field-block">
              <label className="label-block">
                <p>
                  Confirm Password <sup>*</sup>
                </p>
                <input
                  type={cPasswordVisibility ? "text" : "password"}
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  required
                  onChange={(event) => setCPassword(event.target.value)}
                />
              </label>
              {cPasswordVisibility ? (
                <AiOutlineEyeInvisible
                  size="1.5rem"
                  className="eye-icon"
                  onClick={handleCPasswordVisibility}
                />
              ) : (
                <AiOutlineEye
                  size="1.5rem"
                  className="eye-icon"
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
